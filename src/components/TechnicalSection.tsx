"use client";

import React from 'react';
import { motion } from 'framer-motion';

const technicalServices = [
    {
        title: 'Mantenimiento WordPress',
        description: 'Mantenemos tu sitio seguro, actualizado y funcionando sin errores. Monitoreo 24/7 y respaldos periódicos.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-5.11l2.454-2.454a2.652 2.652 0 1 0-3.75-3.75l-2.454 2.454m-3.13 3.13L6.347 11.3M6.347 11.3l-2.454 2.454a2.652 2.652 0 1 0 3.75 3.75l2.454-2.454m-3.13-3.13 4.305-4.306" />
            </svg>
        )
    },
    {
        title: 'Optimización de Plugins',
        description: 'Configuración y limpieza de plugins para mejorar la velocidad de carga y evitar conflictos técnicos.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
    },
    {
        title: 'SEO & Posicionamiento',
        description: 'Estrategias de SEO local en Puerto Montt para que tus clientes te encuentren primero en las búsquedas de Google.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.25 18L9 11.25l4.306 4.307a.5.5 0 00.71 0L21.75 8.25" />
            </svg>
        )
    }
];

const TechnicalSection = () => {
    return (
        <section id="servicios" className="py-24 bg-background relative overflow-hidden isolate">
            {/* Design Elements constant with Noweb style */}
            <div className="absolute inset-x-[-140px] top-[10%] h-[400px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.12),transparent_55%)] blur-[40px] opacity-[0.9] -z-[1]"></div>
            <div className="absolute inset-0 -z-[1] opacity-[0.1] nw-grid-pattern [mask-image:radial-gradient(circle_at_50%_50%,rgba(0,0,0,1),transparent_80%)]"></div>

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="m-0 text-4xl md:text-5xl font-[1000] tracking-tight leading-[1.05] mb-8">
                                SEO Local para tu Pyme en la <br />
                                <span className="nw-grad decoration-accent/30 underline-offset-8">Región de Los Lagos</span>
                            </h2>
                            <p className="m-0 text-white/70 text-lg mb-10 leading-[1.6] font-[650]">
                                En Noweb Labs no solo diseñamos tu web, nos aseguramos de que sea una herramienta potente y segura.
                                Optimizamos para **Puerto Montt** y **Puerto Varas** eliminando el peso innecesario.
                            </p>

                            <div className="grid gap-6">
                                {[
                                    { num: '1', text: 'Velocidad de carga ultra rápida con arquitecturas modernas.' },
                                    { num: '2', text: 'Seguridad avanzada y certificados SSL siempre incluidos.' },
                                    { num: '3', text: 'Integración con APIs y soluciones de Automatización IA.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 group">
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#b53cff] to-[#00d4ff] flex items-center justify-center text-white font-black text-sm shadow-[0_10px_30px_rgba(181,60,255,0.2)] group-hover:scale-110 transition-transform">
                                            {item.num}
                                        </div>
                                        <p className="m-0 font-[700] text-white/90 text-[15px]">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-5 w-full">
                        {technicalServices.map((service, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-7 rounded-[22px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] shadow-[0_18px_60px_rgba(0,0,0,0.40)] relative overflow-hidden group isolate"
                            >
                                <div className="absolute inset-x-[-120px] -top-[120px] h-[240px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.12),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,212,255,0.08),transparent_60%)] blur-[10px] opacity-[0.95] -z-[1]"></div>

                                <div className="flex gap-6 items-start relative z-10">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#b53cff] group-hover:scale-110 group-hover:text-[#00d4ff] transition-all duration-300">
                                        <div className="w-7 h-7">{service.icon}</div>
                                    </div>
                                    <div>
                                        <h3 className="m-0 text-xl font-[1000] tracking-tight mb-2 text-white/95">{service.title}</h3>
                                        <p className="m-0 text-sm text-white/60 leading-[1.55] font-[650]">{service.description}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSection;
