"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[620px] flex items-center justify-center text-center px-4 pt-32 pb-20 overflow-hidden rounded-[18px] mx-4 my-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] isolate bg-[#05050b]">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.02] -z-[3] saturate-[1.05] contrast-[1.05]"
                poster="/hero-bg.webm"
            >
                <source src="/hero-bg.webm" type="video/webm" />
            </video>

            {/* Overlays */}
            <div className="absolute inset-0 -z-[2] bg-[radial-gradient(900px_520px_at_50%_10%,rgba(123,44,255,0.35),transparent_55%),radial-gradient(900px_520px_at_70%_20%,rgba(255,61,154,0.22),transparent_60%),linear-gradient(180deg,rgba(5,5,11,0.78),rgba(5,5,11,0.92))]"></div>
            <div className="absolute inset-0 -z-[1] opacity-[0.22] nw-grid-pattern [mask-image:radial-gradient(circle_at_50%_20%,rgba(0,0,0,1),rgba(0,0,0,0.25)_55%,rgba(0,0,0,0)_80%)]"></div>

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
                    Tu página web profesional<br />
                    en <span className="nw-grad drop-shadow-[0_10px_30px_rgba(255,61,154,0.10)]">Puerto Montt</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="m-0 max-w-[70ch] text-muted text-base leading-[1.6] md:text-lg"
                >
                    Diseñamos sitios web que convierten visitantes en clientes.<br />
                    Autoadministrables, sin mensualidad y con entrega en tiempo récord.
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
                    className="mt-[22px] flex flex-col items-center gap-[14px]"
                >
                    <p className="m-0 text-[13px] font-[700] text-white/60">Confían en nosotros empresas de la Región de Los Lagos</p>
                    <div className="flex flex-wrap items-center justify-center gap-[26px]">
                        <div className="flex items-baseline gap-3">
                            <span className="text-[28px] font-[1000] text-white/70 tracking-[-0.4px]">+200</span>
                            <span className="text-sm font-[700] text-white/40 uppercase">proyectos entregados</span>
                        </div>
                        <div className="hidden md:block w-px h-[26px] bg-white/15"></div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-[28px] font-[1000] text-white/70 tracking-[-0.4px]">100%</span>
                            <span className="text-sm font-[700] text-white/40 uppercase">clientes satisfechos</span>
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
