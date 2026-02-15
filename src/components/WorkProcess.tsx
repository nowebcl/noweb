"use client";

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        num: "01",
        title: "Asesoría gratis por WhatsApp",
        desc: "Al momento de comunicarte por WhatsApp, te asesoramos <b>GRATIS</b> para darte la mejor opción según tu negocio.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
                <path d="M8 8h8M8 12h6" />
            </svg>
        )
    },
    {
        num: "02",
        title: "Documento + formalización",
        desc: "Te entregamos un <b>documento detallado</b> con lo que incluye el servicio seleccionado. Luego de leerlo y aceptarlo, coordinamos reunión por <b>Meet</b> o presencial en <b>Kingdom Coffee</b> (Av. Austral 1795) — <a href='#' class='underline'>ver ubicación</a>.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H8a4 4 0 0 0-4 4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8M8 17h6" />
            </svg>
        )
    },
    {
        num: "03",
        title: "Materiales + pago inicial",
        desc: "Te enviamos un formulario para recopilar tu información y una carpeta de Drive para que subas tu material gráfico. Se solicita <b>50%</b> o <b>30%</b> (según el plan) y comenzamos.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s7-4.4 7-12a7 7 0 1 0-14 0c0 7.6 7 12 7 12z" />
                <path d="M12 11.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" />
            </svg>
        )
    },
    {
        num: "04",
        title: "Entrega, capacitación y garantía",
        desc: "Dependiendo del plan, nos demoramos entre <b>2 días hábiles</b> y <b>15 días</b> (automatizaciones/desarrollo a medida). Para la entrega, te capacitamos y te damos la garantía correspondiente.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c2.8-1.6 4.9-3.7 6.3-6.5 1.4-2.8 1.8-6 1.7-9.5-3.5-.1-6.7.3-9.5 1.7C7.7 9.1 5.6 11.2 4 14l4 6 4-2z" />
                <path d="M14.5 9.5a2 2 0 1 0 0 .01" />
                <path d="M7.5 16.5 6 18" />
            </svg>
        )
    }
];

const WorkProcess = () => {
    return (
        <section id="nosotros" className="py-16 bg-background">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="m-0 text-4xl font-[1000] tracking-[-1px]">Cómo trabajamos</h2>
                    <p className="mt-2.5 text-muted font-[700] text-sm md:text-base">Un proceso simple y transparente para comenzar tu servicio</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-x-12 mt-12 overflow-visible">
                    {/* Vertical Timeline Desktop */}
                    <div className="hidden lg:flex flex-col items-center gap-[38px] pt-3 relative">
                        <div className="absolute top-[56px] bottom-5 w-[2px] bg-gradient-to-b from-primary/0 via-primary/65 via-accent/65 to-accent/0 opacity-[0.95] rounded-full"></div>
                        {steps.map((step, idx) => (
                            <div key={idx} className="w-[58px] h-[58px] rounded-2xl bg-gradient-to-br from-[#b53cff]/95 to-[#00d4ff]/75 border border-white/15 flex items-center justify-center relative z-10 shadow-[0_18px_60px_rgba(181,60,255,0.16)] text-white">
                                <div className="w-[26px] h-[26px]">{step.icon}</div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Icons Row */}
                    <div className="lg:hidden flex justify-center gap-3.5 mb-8">
                        {steps.map((step, idx) => (
                            <div key={idx} className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-br from-[#b53cff]/95 to-[#00d4ff]/75 border border-white/15 flex items-center justify-center text-white">
                                <div className="w-5 h-5">{step.icon}</div>
                            </div>
                        ))}
                    </div>

                    {/* Cards Grid */}
                    <div className="grid gap-[18px]">
                        {steps.map((step, idx) => (
                            <motion.article
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-[22px] md:p-[26px] shadow-[0_18px_60px_rgba(0,0,0,0.40)] isolate"
                            >
                                <div className="absolute inset-x-[-140px] -top-[140px] h-[260px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.16),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,212,255,0.1),transparent_60%)] blur-[10px] opacity-[0.95] -z-[1]"></div>

                                <div className="flex items-baseline gap-3 mb-2 relative z-10">
                                    <span className="font-[1000] text-[#b53cff] text-xs tracking-widest uppercase">{step.num}</span>
                                    <h3 className="font-[1000] text-lg md:text-xl tracking-tight m-0">{step.title}</h3>
                                </div>

                                <p
                                    className="m-0 text-white/70 font-[650] text-sm leading-[1.55] relative z-10"
                                    dangerouslySetInnerHTML={{ __html: step.desc }}
                                />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
