"use client";

import React from 'react';
import { motion } from 'framer-motion';

const items = [
    { src: "/portfolio/Recurso-12.webp", alt: "Trabajo Noweb 1" },
    { src: "/portfolio/Recurso-13.webp", alt: "Trabajo Noweb 2" },
    { src: "/portfolio/Recurso-14.webp", alt: "Trabajo Noweb 3" },
    { src: "/portfolio/Recurso-15.webp", alt: "Trabajo Noweb 4" },
    { src: "/portfolio/Recurso-16.webp", alt: "Trabajo Noweb 5" },
    { src: "/portfolio/Recurso-17.webp", alt: "Trabajo Noweb 6" },
    { src: "/portfolio/Recurso-5.webp", alt: "Trabajo Noweb 7" },
    { src: "/portfolio/Recurso-6.webp", alt: "Trabajo Noweb 8" },
    { src: "/portfolio/Recurso-7.webp", alt: "Trabajo Noweb 9" },
    { src: "/portfolio/Recurso-8.webp", alt: "Trabajo Noweb 10" },
    { src: "/portfolio/Recurso-9.webp", alt: "Trabajo Noweb 11" },
    { src: "/portfolio/Recurso-10.webp", alt: "Trabajo Noweb 12" },
    { src: "/portfolio/Recurso-11.webp", alt: "Trabajo Noweb 13" },
    { src: "/portfolio/WEB-PAGINAS.webp", alt: "Trabajo Noweb 14" },
    { src: "/portfolio/WEB-PAG.webp", alt: "Trabajo Noweb 15" }
];

const splitAt = Math.ceil(items.length / 2);
const row1 = [...items.slice(0, splitAt), ...items.slice(0, splitAt)];
const row2 = [...items.slice(splitAt), ...items.slice(splitAt), ...items.slice(splitAt)];

const PortfolioGallery = () => {
    return (
        <section id="portafolio" className="py-20 overflow-hidden bg-background">
            <div className="max-w-[1200px] mx-auto px-4 mb-[18px] text-center">
                <h2 className="m-0 text-4xl font-[1000] tracking-[-1px]">Algunos de nuestros trabajos</h2>
                <p className="mt-2.5 text-muted font-[650] text-sm md:text-base">Diseños reales, optimizados para conversión y velocidad.</p>
            </div>

            <div className="flex flex-col gap-[18px] mt-[22px]">
                {/* Row 1 */}
                <div className="relative overflow-hidden py-2.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
                    <motion.div
                        animate={{ x: [0, -1500] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-[18px] w-max"
                    >
                        {row1.map((item, idx) => (
                            <div key={idx} className="w-[280px] h-[180px] md:w-[280px] md:h-[180px] sm:w-[180px] sm:h-[118px] rounded-[18px] border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)] relative group">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-x-[-120px] -top-[120px] h-[240px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.14),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,212,255,0.09),transparent_60%)] blur-[10px] opacity-[0.95] pointer-events-none"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 */}
                <div className="relative overflow-hidden py-2.5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
                    <motion.div
                        animate={{ x: [-1500, 0] }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="flex gap-[18px] w-max"
                    >
                        {row2.map((item, idx) => (
                            <div key={idx} className="w-[280px] h-[180px] md:w-[280px] md:h-[180px] sm:w-[180px] sm:h-[118px] rounded-[18px] border border-white/10 bg-white/5 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.45)] relative group">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-x-[-120px] -top-[120px] h-[240px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.14),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(0,212,255,0.09),transparent_60%)] blur-[10px] opacity-[0.95] pointer-events-none"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
