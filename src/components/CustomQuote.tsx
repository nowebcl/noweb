"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CustomQuote = () => {
    return (
        <section className="py-16 bg-background relative isolate overflow-hidden">
            <div className="max-w-[920px] mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-7 md:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.40)] isolate"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-x-[-140px] -top-[140px] h-[260px] bg-[radial-gradient(circle_at_30%_30%,rgba(123,44,255,0.18),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,212,255,0.1),transparent_60%)] blur-[12px] opacity-[0.95] -z-[1]"></div>

                    <h3 className="m-0 text-2xl md:text-3xl font-[1000] tracking-tight relative text-white">
                        ¿Quieres cotizar un proyecto a medida?
                    </h3>
                    <p className="mt-2.5 mb-0 mx-auto max-w-[640px] text-white/60 text-sm md:text-base font-[650] leading-relaxed relative">
                        Completa el formulario y recibe una estimación inicial según tus requerimientos específicos.
                    </p>

                    <motion.a
                        whileHover={{ y: -2, scale: 1.02 }}
                        whileTap={{ y: 1, scale: 0.98 }}
                        href="https://cotizador.noweb.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-[14px] font-[950] text-sm text-white border-0 bg-gradient-to-r from-[#b53cff] via-[#ff3d9a] to-[#00d4ff] shadow-[0_18px_55px_rgba(181,60,255,0.22),0_18px_55px_rgba(0,212,255,0.16)] transition-all cursor-pointer relative z-10 select-none group"
                    >
                        <svg className="w-[18px] h-[18px] group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 7h10M7 11h7" />
                            <path d="M20 12a7 7 0 0 1-7 7H8l-4 3V7a3 3 0 0 1 3-3h6a7 7 0 0 1 7 8Z" />
                        </svg>
                        <span>Ir al cotizador</span>
                        <span className="font-black">→</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default CustomQuote;
