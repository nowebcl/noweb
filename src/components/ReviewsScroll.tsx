"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const reviews = [
    { name: "Fous Valer", time: "hace 1 mes", stars: 5, text: "Todo bien: responsable y a punto. Buen servicio y confiable." },
    { name: "Nicolás García", time: "hace 1 mes", stars: 5, text: "Totalmente recomendado. Contraté mi web en Puerto Montt y la experiencia fue excelente. Rápidos y muy claros." },
    { name: "Mediaciones Familiares", time: "hace 1 mes", stars: 5, text: "Recomendado para pymes y negocios que recién comienzan. Muy buena comunicación y apoyo en todo el proceso." },
    { name: "Camila Ríos", time: "hace 2 meses", stars: 5, text: "Me entregaron una landing que realmente convierte. Quedó hermosa y rápida. Me guiaron con el contenido." },
    { name: "Ferretería Los Lagos", time: "hace 2 meses", stars: 5, text: "Excelente atención y cumplimiento. Integraron WhatsApp y redes y ahora llegan más consultas." },
    { name: "Patricia Soto", time: "hace 3 meses", stars: 5, text: "Muy profesionales. Explican todo y responden rápido. La web quedó tal como la pedí." },
    { name: "Centro Kinésico Sur", time: "hace 3 meses", stars: 5, text: "Trabajó impecable, buen diseño y velocidad. Además dejaron todo editable con Elementor." },
    { name: "Gonzalo M.", time: "hace 4 meses", stars: 5, text: "Buenísima experiencia. Me ayudaron con el dominio, correos y el SEO base. Recomendados." },
    { name: "Panadería La Estación", time: "hace 4 meses", stars: 5, text: "Muy buena relación precio/calidad. Cumplieron plazos y quedó todo funcionando perfecto." },
    { name: "Valentina P.", time: "hace 5 meses", stars: 5, text: "Servicio rápido y ordenado. Se nota la experiencia. El soporte posterior también fue excelente." }
];

const gsvg = (
    <svg className="w-[18px] h-[18px] shrink-0 opacity-[0.95]" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.1-.1-2.2-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.4 35.1 26.8 36 24 36c-5.3 0-9.8-3.4-11.4-8.1l-6.5 5C9.4 39.6 16.2 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.4 4.3-4.6 5.6l.1.1 6.3 5.2C36.7 39.1 44 34 44 24c0-1.1-.1-2.2-.4-3.5z" />
    </svg>
);

const Star = () => (
    <svg className="w-4 h-4 text-[#f5c542]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.3l-6.18 3.7L7.5 14.3 2 9.8l7.2-.6L12 2.5l2.8 6.7 7.2.6-5.5 4.5 1.68 6.7z" />
    </svg>
);

const ReviewsScroll = () => {
    const [isPaused, setIsPaused] = useState(false);
    const controls = useAnimation();
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <section id="opiniones" className="py-12 bg-background overflow-hidden relative isolate">
            <div className="max-w-[1200px] mx-auto px-4 text-center mb-6">
                <div className="text-[22px] font-[1000] tracking-wider text-white">EXCELENTE</div>
                <div className="flex justify-center gap-1.5 mt-2.5">
                    <Star /><Star /><Star /><Star /><Star />
                </div>
                <div className="mt-2.5 text-sm font-[700] text-white/72">A base de 99 reseñas</div>
                <div className="mt-2.5 text-[34px] font-[900] tracking-tighter leading-none inline-flex gap-px">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#DB4437]">o</span>
                    <span className="text-[#F4B400]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#0F9D58]">l</span>
                    <span className="text-[#DB4437]">e</span>
                </div>
            </div>

            <div
                className="relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    ref={trackRef}
                    animate={isPaused ? {} : { x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex gap-[18px] w-max"
                >
                    {[...reviews, ...reviews].map((review, idx) => (
                        <article
                            key={idx}
                            className="w-[340px] shrink-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] p-4.5 md:p-5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] relative overflow-hidden min-h-[150px] isolate"
                        >
                            <div className="absolute inset-x-[-120px] -top-[120px] h-[240px] bg-[radial-gradient(circle_at_30%_30%,rgba(123,44,255,0.16),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,212,255,0.1),transparent_60%)] blur-[10px] opacity-[0.9] -z-[1]"></div>

                            <div className="flex items-center justify-between gap-2.5 mb-2.5">
                                <div className="flex items-center gap-2.5 min-w-0">
                                    <div className="w-[34px] h-[34px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-[1000] text-white/85 shrink-0 select-none">
                                        {review.name[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-[950] text-sm text-white truncate max-w-[190px]">{review.name}</div>
                                        <div className="mt-0.5 text-[12px] font-[700] text-white/55">{review.time}</div>
                                    </div>
                                </div>
                                {gsvg}
                            </div>

                            <div className="flex gap-1 mb-2.5">
                                <Star /><Star /><Star /><Star /><Star />
                            </div>

                            <p className="m-0 text-[13px] leading-relaxed text-white/86 font-[550]">{review.text}</p>
                            {review.text.length > 120 && <div className="mt-2 text-[12px] font-[800] text-white/50">Leer más</div>}
                        </article>
                    ))}
                </motion.div>
            </div>


        </section>
    );
};

export default ReviewsScroll;
