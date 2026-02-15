"use client";

import React from 'react';
import { motion } from 'framer-motion';

const items = [
    { src: "/portfolio/Recurso-12.webp", title: "Sitio Web Constructora", location: "Puerto Montt", alt: "Diseño de página web para constructora en Puerto Montt" },
    { src: "/portfolio/Recurso-13.webp", title: "E-commerce Boutique", location: "Región de Los Lagos", alt: "E-commerce para tienda de ropa en Región de Los Lagos" },
    { src: "/portfolio/Recurso-14.webp", title: "Web Servicios Profesionales", location: "Puerto Varas", alt: "Página web para servicios profesionales en Puerto Varas" },
    { src: "/portfolio/Recurso-15.webp", title: "Catálogo Digital Pyme", location: "Puerto Montt", alt: "Desarrollo web para pyme en Puerto Montt" },
    { src: "/portfolio/Recurso-16.webp", title: "Landing Page Emprendedores", location: "Puerto Montt", alt: "Diseño web moderno para emprendedores del sur de Chile" },
    { src: "/portfolio/Recurso-17.webp", title: "Tienda Online de Calzado", location: "Puerto Montt", alt: "Tienda online optimizada para ventas en Puerto Montt" },
    { src: "/portfolio/Recurso-5.webp", title: "Portal Corporativo", location: "Región de Los Lagos", alt: "Sitio web corporativo en la Región de Los Lagos" },
    { src: "/portfolio/Recurso-6.webp", title: "Web Inmobiliaria", location: "Puerto Montt", alt: "Landing page de alta conversión en Puerto Montt" },
    { src: "/portfolio/Recurso-7.webp", title: "Servicios Médicos Web", location: "Puerto Varas", alt: "Portal web de servicios en Puerto Varas" },
    { src: "/portfolio/Recurso-8.webp", title: "Web Industrial", location: "Puerto Montt", alt: "Diseño industrial y web en Puerto Montt" },
    { src: "/portfolio/Recurso-9.webp", title: "Diseño Web Responsivo", location: "Puerto Montt", alt: "Página web responsiva para negocios locales" },
    { src: "/portfolio/Recurso-10.webp", title: "Plataforma E-learning", location: "Chile", alt: "E-commerce con integración de pagos en Chile" },
    { src: "/portfolio/Recurso-11.webp", title: "Consultoría Digital SEO", location: "Puerto Montt", alt: "SEO y diseño web en Puerto Montt" },
    { src: "/portfolio/WEB-PAGINAS.webp", title: "Agencia Noweb Labs", location: "Puerto Montt", alt: "Agencia de diseño web Noweb Labs Puerto Montt" },
    { src: "/portfolio/WEB-PAG.webp", title: "Desarrollo Web Especializado", location: "Región de Los Lagos", alt: "Expertos en páginas web en la Región de Los Lagos" }
];

const splitAt = Math.ceil(items.length / 2);
const row1 = [...items.slice(0, splitAt), ...items.slice(0, splitAt)];
const row2 = [...items.slice(splitAt), ...items.slice(splitAt), ...items.slice(splitAt)];

const PortfolioGallery = () => {
    return (
        <section id="portafolio" className="py-20 overflow-hidden bg-background">
            <div className="max-w-[1200px] mx-auto px-4 mb-[18px] text-center">
                <h2 className="m-0 text-4xl font-[1000] tracking-[-1px]">E-commerce y Tiendas Online que Venden Más</h2>
                <p className="mt-2.5 text-muted font-[650] text-sm md:text-base">Proyectos reales de diseño web en Puerto Montt y Puerto Varas.</p>
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
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                                    <h3 className="text-white text-sm font-bold m-0">{item.title} en {item.location}</h3>
                                </div>
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
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4 text-center">
                                    <h3 className="text-white text-sm font-bold m-0">{item.title} en {item.location}</h3>
                                </div>
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
