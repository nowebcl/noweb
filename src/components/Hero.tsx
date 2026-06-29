"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const sectionRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        if (!canvas || !section) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: any[] = [];
        let animationFrameId: number;
        let time = 0;

        const mouse = {
            x: null as number | null,
            y: null as number | null,
            active: false,
            radius: 220 // Gravity well warp radius
        };

        // Resize canvas and update centers
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;

        const resizeCanvas = () => {
            canvas.width = section.offsetWidth;
            canvas.height = section.offsetHeight;
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            initParticles();
        };

        // Particle class for 3D concentric orbits
        class Particle {
            angle: number;
            ringIndex: number;
            baseRadius: number;
            speed: number;
            radius: number;
            baseAlpha: number;
            color: string;
            wavePhase: number;

            constructor(angle: number, ringIndex: number, totalRings: number) {
                this.angle = angle;
                this.ringIndex = ringIndex;

                // Concentric base radii: inner (120px), middle (210px), outer (310px)
                const baseRadii = [120, 210, 310];
                this.baseRadius = baseRadii[ringIndex] || (100 + ringIndex * 90);

                // Angular velocity (Kepler's Law simulation: inner rings rotate faster!)
                this.speed = (0.003 + (totalRings - ringIndex) * 0.002) * (Math.random() * 0.3 + 0.85);

                // Base properties
                this.radius = Math.random() * 1.2 + 0.8; // 0.8px to 2px particles
                this.baseAlpha = Math.random() * 0.4 + 0.35; // 0.35 to 0.75 base opacity

                // Define colors based on the ring index matching Noweb brand colors
                const colors = [
                    'rgba(0, 212, 255, alpha)',      // Inner Ring: Cyan (accent)
                    'rgba(123, 44, 255, alpha)',      // Middle Ring: Purple (primary)
                    'rgba(255, 61, 154, alpha)'       // Outer Ring: Fuchsia (secondary)
                ];
                this.color = colors[ringIndex % colors.length];

                // Random offset for organic 3D wave morphing
                this.wavePhase = Math.random() * Math.PI * 2;
            }

            draw() {
                if (!ctx) return;
                // 1. Organic ripple morphing: Sine wave distortion of base radius over time
                const wave = Math.sin(this.angle * 3 + time * 1.2 + this.wavePhase) * (this.baseRadius * 0.06);
                const r = this.baseRadius + wave;

                // 2. Base 3D coordinates in orbital plane (X, Y in orbit, Z as slight waving)
                const x = r * Math.cos(this.angle);
                const y = r * Math.sin(this.angle);
                const z = Math.sin(this.angle * 2.5 + time * 0.8) * (this.baseRadius * 0.08);

                // 3. 3D Rotations (Tilt the orbits in space for 3D depth)
                // Tilt around X-axis (Pitch = 60 degrees) and Y-axis (Yaw = 18 degrees)
                const cosPitch = Math.cos(1.05); // 60 degrees
                const sinPitch = Math.sin(1.05);
                const cosYaw = Math.cos(0.31);   // 18 degrees
                const sinYaw = Math.sin(0.31);

                // Apply pitch (rotation around X)
                let x1 = x;
                let y1 = y * cosPitch - z * sinPitch;
                let z1 = y * sinPitch + z * cosPitch;

                // Apply yaw (rotation around Y)
                let x2 = x1 * cosYaw - z1 * sinYaw;
                let y2 = y1;
                let z2 = x1 * sinYaw + z1 * cosYaw;

                // 4. Perspective Projection
                const focalLength = 550;
                const scale = focalLength / (focalLength + z2);

                let screenX = centerX + x2 * scale;
                let screenY = centerY + y2 * scale;

                // 5. Gravitational Warp Interaction (Lens distortion around cursor)
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    const dx = screenX - mouse.x;
                    const dy = screenY - mouse.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < mouse.radius) {
                        // Gravitational distortion force: stronger when closer
                        const force = (mouse.radius - distance) / mouse.radius;
                        const pushAngle = Math.atan2(dy, dx);

                        // Push particles outward slightly to warp the rings around the cursor,
                        // simulating a gravitational lens distortion
                        const warpDist = force * 40 * scale;
                        screenX += Math.cos(pushAngle) * warpDist;
                        screenY += Math.sin(pushAngle) * warpDist;
                    }
                }

                // 6. Draw projected particle with depth shading
                // Deeper particles (positive z2) are fainter, closer particles (negative z2) are brighter
                const depthAlpha = (1.1 - (z2 / this.baseRadius)) * 0.5 * this.baseAlpha;
                const alpha = Math.max(0.1, Math.min(0.9, depthAlpha));

                ctx.beginPath();
                // Particle size scales with perspective depth
                ctx.arc(screenX, screenY, this.radius * scale, 0, Math.PI * 2);
                ctx.fillStyle = this.color.replace('alpha', alpha.toFixed(2));
                ctx.fill();
            }

            update() {
                // Rotate along the orbit
                this.angle += this.speed;
                if (this.angle > Math.PI * 2) this.angle -= Math.PI * 2;
            }
        }

        // Initialize concentric orbits
        const initParticles = () => {
            particles = [];
            const totalRings = 3;

            // Particle densities per ring (fewer particles on mobile to improve PageSpeed score)
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            const ringDensities = isMobile ? [50, 95, 135] : [150, 250, 350];

            for (let ringIndex = 0; ringIndex < totalRings; ringIndex++) {
                const count = ringDensities[ringIndex];
                for (let i = 0; i < count; i++) {
                    // Distribute angles evenly with a small random jitter for natural organic dispersion
                    const baseAngle = (i / count) * Math.PI * 2;
                    const jitter = (Math.random() - 0.5) * (Math.PI * 2 / count) * 0.4;
                    particles.push(new Particle(baseAngle + jitter, ringIndex, totalRings));
                }
            }
        };

        // Main animation loop
        const animate = () => {
            if (!ctx) return;
            // Clean clear for crisp particles
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            time += 0.015; // Increment time for orbit animations

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Track mouse coordinates on hero section
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        };

        const handleMouseEnter = () => {
            mouse.active = true;
        };

        const handleMouseLeave = () => {
            mouse.active = false;
            mouse.x = null;
            mouse.y = null;
        };

        section.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseenter', handleMouseEnter);
        section.addEventListener('mouseleave', handleMouseLeave);

        // Handle window resizing with debounce
        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                resizeCanvas();
            }, 150);
        };
        window.addEventListener('resize', handleResize);

        // Start
        resizeCanvas();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            section.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseenter', handleMouseEnter);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-[620px] flex items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden rounded-[18px] mx-4 my-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] isolate bg-black">
            {/* 3D Concentric Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none -z-[3]" />

            {/* Overlays */}
            <div className="absolute inset-0 -z-[2] bg-[radial-gradient(circle_at_center,rgba(113,137,255,0.15)_0%,transparent_60%),radial-gradient(900px_520px_at_50%_10%,rgba(123,44,255,0.25),transparent_55%),radial-gradient(900px_520px_at_70%_20%,rgba(255,61,154,0.15),transparent_60%),linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.85))]"></div>
            <div className="absolute inset-0 -z-[1] opacity-[0.15] nw-grid-pattern [mask-image:radial-gradient(circle_at_50%_20%,rgba(0,0,0,1),rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_80%)]"></div>

            <div className="max-w-[980px] flex flex-col items-center gap-[14px] relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/80 font-bold text-[13px]"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-accent to-secondary shadow-[0_0_0_4px_rgba(123,44,255,0.18)]"></span>
                    Diseño web profesional en Puerto Montt
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-[clamp(34px,4.8vw,64px)] font-[1000] leading-[1.02] tracking-[-1px] m-0"
                >
                    Ahora en Puerto Montt: <br />
                    <span className="nw-grad drop-shadow-[0_10px_30px_rgba(255,61,154,0.10)]">Diseño Web y Páginas</span><br />
                    de Alto Rendimiento
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="m-0 max-w-[70ch] text-muted text-base leading-[1.6] md:text-lg"
                >
                    Como agencia digital líder en Puerto Montt, creamos sitios web y e-commerce que convierten.<br />
                    Optimización SEO local, autoadministrables y diseñados para Pymes de la Región de Los Lagos.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-3 flex flex-wrap justify-center gap-3 w-full sm:w-auto"
                >
                    <a
                        href="https://wa.me/56987843957?text=%C2%A1Hola!%20Quiero%20cotizar%20una%20p%C3%A1gina%20web%20en%20Puerto%20Montt."
                        className="nw-btn-primary min-w-[240px] px-[18px] py-[14px] rounded-[14px] font-[900] text-sm text-white/95 flex items-center justify-center gap-3 relative overflow-hidden transition-all hover:-translate-y-px hover:saturate-[1.05] active:translate-y-px group w-full sm:w-auto"
                    >
                        <span className="absolute inset-[-2px] bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.40),transparent_44%)] opacity-[0.35] pointer-events-none"></span>
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
                        </svg>
                        <span>Cotizar por WhatsApp</span>
                        <span className="font-black">→</span>
                    </a>

                    <a
                        href="#planes"
                        className="min-w-[240px] px-[18px] py-[14px] rounded-[14px] font-[900] text-sm text-white/92 bg-white/5 border border-white/15 backdrop-blur-md shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_18px_60px_rgba(0,0,0,0.26)] active:translate-y-px w-full sm:w-auto flex items-center justify-center"
                    >
                        Ver planes y precios
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 md:mt-[22px] flex flex-col items-center gap-3.5"
                >
                    <p className="m-0 text-[11px] md:text-[13px] font-[800] text-white/40 uppercase tracking-widest text-center px-4">Confían en nosotros empresas de la Región de Los Lagos</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-[26px]">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl md:text-[28px] font-[1000] text-white/80 tracking-[-0.5px]">+1200</span>
                            <span className="text-[11px] md:text-sm font-[800] text-white/45 uppercase tracking-wider">proyectos entregados</span>
                        </div>
                        <div className="hidden md:block w-px h-5 bg-white/15"></div>
                        <div className="flex items-center">
                            <span className="text-[11px] md:text-sm font-[800] text-white/45 uppercase tracking-wider text-center">Clientes en todo Chile</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute left-1/2 bottom-[14px] -translate-x-1/2 flex items-center gap-2.5 text-white/55 font-[800] text-[12px] z-[3]">
                <div className="w-[30px] h-[30px] rounded-[10px] border border-white/10 bg-white/5 flex items-center justify-center animate-bounce">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
