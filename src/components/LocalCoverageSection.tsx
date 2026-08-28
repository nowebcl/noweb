"use client";

import React from 'react';
import { motion } from 'framer-motion';

const locations = [
    {
        city: "Puerto Montt",
        badge: "Sede Principal",
        sectors: "Valle Volcanes, Centro, Pelluco, Alerce, Mirasol, Cardonal, Pichi Pelluco, Chinquihue",
        icon: (
            <svg className="w-5 h-5 text-[#ec5b99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        )
    },
    {
        city: "Puerto Varas & Llanquihue",
        badge: "Zona Lacustre",
        sectors: "Puerto Varas centro, Costanera, Ensenada, Nueva Braunau, Llanquihue, Frutillar",
        icon: (
            <svg className="w-5 h-5 text-[#ec5b99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        )
    },
    {
        city: "Osorno y Alrededores",
        badge: "Provincia de Osorno",
        sectors: "Osorno Centro, Rahue, Francke, Purranque, Río Negro, Puyehue",
        icon: (
            <svg className="w-5 h-5 text-[#ec5b99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        )
    },
    {
        city: "Chiloé y Carretera Austral",
        badge: "Archipiélago y Sur",
        sectors: "Castro, Ancud, Quellón, Chonchi, Dalcahue, Calbuco, Chamiza, Carretera Austral",
        icon: (
            <svg className="w-5 h-5 text-[#ec5b99]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    }
];

const comparisonData = [
    {
        feature: "Velocidad de carga en celulares",
        noweb: "Ultra rápida (0.3 a 0.7 segundos)",
        wordpress: "Lenta (3.0 a 6.5 segundos con plugins pesados)",
        winner: "noweb"
    },
    {
        feature: "Puntuación Google Core Web Vitals (SEO)",
        noweb: "95 - 100 / 100 garantizado",
        wordpress: "40 - 65 / 100 habitual",
        winner: "noweb"
    },
    {
        feature: "Seguridad y Vulnerabilidades",
        noweb: "Arquitectura moderna blindada sin bases de datos expuestas",
        wordpress: "Ataques constantes a plugins desactualizados y spam",
        winner: "noweb"
    },
    {
        feature: "Conversión de Clientes (CRO)",
        noweb: "Flujo optimizado para WhatsApp y llamada directa",
        wordpress: "Formularios genéricos con alta tasa de abandono",
        winner: "noweb"
    },
    {
        feature: "Atención y Asesoría Personalizada",
        noweb: "Atención directa por WhatsApp y reuniones vía Google Meet",
        wordpress: "Soporte impersonal mediante tickets o agencias lejanas",
        winner: "noweb"
    }
];

const LocalCoverageSection = () => {
    return (
        <section id="cobertura-local" className="py-20 md:py-28 bg-black text-white relative overflow-hidden isolate border-t border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute inset-x-[-160px] top-[15%] h-[420px] bg-[radial-gradient(circle_at_20%_40%,rgba(236,91,153,0.08),transparent_60%)] blur-[50px] pointer-events-none -z-[1]"></div>
            <div className="absolute inset-x-[-160px] bottom-[10%] h-[380px] bg-[radial-gradient(circle_at_80%_60%,rgba(181,60,255,0.07),transparent_60%)] blur-[50px] pointer-events-none -z-[1]"></div>

            <div className="max-w-[1240px] mx-auto px-4 md:px-6">
                
                {/* Header */}
                <div className="text-center max-w-[860px] mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0d12] border border-white/20 text-white/90 font-medium text-xs mb-4"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ec5b99] shadow-[0_0_8px_#ec5b99]"></span>
                        <span>Cobertura Regional en Los Lagos</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-[1000] tracking-tight leading-[1.1] m-0 text-white">
                        Desarrollo y Diseño Web en <br />
                        <span className="text-[#ec5b99]">Puerto Montt y Toda la Región de Los Lagos</span>
                    </h2>

                    <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed font-[550]">
                        Ayudamos a pymes, empresas y profesionales de Puerto Montt, Puerto Varas y el sur de Chile a dominar las búsquedas en Google y multiplicar sus ventas digitales con tecnología de última generación.
                    </p>
                </div>

                {/* Regional Coverage Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                    {locations.map((loc, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[0_16px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between group transition-all"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        {loc.icon}
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-wider text-[#ec5b99] bg-[#ec5b99]/10 px-2.5 py-1 rounded-full border border-[#ec5b99]/30">
                                        {loc.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-[950] tracking-tight text-white mb-2">{loc.city}</h3>
                                <p className="text-xs text-white/65 leading-relaxed font-[550] m-0">
                                    <strong className="text-white/90">Sectores:</strong> {loc.sectors}
                                </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-white/50 group-hover:text-white transition-colors">
                                <span>Páginas web y SEO local</span>
                                <span>→</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Tech Comparison: Next.js vs WordPress */}
                <div className="mb-20 rounded-[28px] border border-white/12 bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-6 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                    <div className="text-center max-w-[720px] mx-auto mb-10">
                        <span className="text-xs font-black uppercase tracking-widest text-[#ec5b99] mb-2 block">
                            Diferencia Tecnológica Real
                        </span>
                        <h3 className="text-2xl md:text-4xl font-[1000] tracking-tight text-white m-0">
                            ¿Por qué las páginas de <span className="text-[#ec5b99]">Noweb Labs</span> superan a las webs tradicionales?
                        </h3>
                        <p className="mt-3 text-xs md:text-sm text-white/60 font-[550]">
                            La mayoría de agencias locales siguen creando sitios en WordPress con plantillas pesadas y decenas de plugins que ralentizan la carga y perjudican tu posicionamiento en Google. En Noweb Labs desarrollamos con código limpio en <strong>Next.js y React</strong>.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[620px]">
                            <thead>
                                <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-white/50">
                                    <th className="py-4 px-4 font-black">Característica / Factor</th>
                                    <th className="py-4 px-4 font-black text-[#ec5b99] bg-[#ec5b99]/5 rounded-t-xl">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                            </svg>
                                            <span>Noweb Labs (Next.js / React)</span>
                                        </div>
                                    </th>
                                    <th className="py-4 px-4 font-black text-white/60">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-4 h-4 text-white/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                                            </svg>
                                            <span>Agencias con WordPress Tradicional</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-xs sm:text-sm font-[600]">
                                {comparisonData.map((row, index) => (
                                    <tr key={index} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="py-4 px-4 text-white/90 font-bold">{row.feature}</td>
                                        <td className="py-4 px-4 text-white font-bold bg-[#ec5b99]/5">
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 6L9 17l-5-5" />
                                                </svg>
                                                <span>{row.noweb}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 text-white/50 font-normal">
                                            {row.wordpress}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Local Physical Location & E-E-A-T Card */}
                <div className="rounded-[24px] border border-white/12 bg-gradient-to-r from-white/[0.04] to-white/[0.015] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                    <div className="flex items-start gap-4 max-w-[680px]">
                        <div className="w-12 h-12 rounded-2xl bg-[#ec5b99]/10 border border-[#ec5b99]/30 flex items-center justify-center shrink-0 text-[#ec5b99] mt-1">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="text-lg md:text-xl font-[1000] text-white m-0">
                                Asesoría Digital y Atención Personalizada
                            </h4>
                            <p className="mt-1.5 text-xs md:text-sm text-white/70 font-[550] leading-relaxed m-0">
                                Te atendemos de forma directa y ágil por <strong>WhatsApp</strong> o videollamada por <strong>Google Meet</strong> para revisar los requerimientos de tu proyecto en Puerto Montt, Puerto Varas y todo Chile. Garantía de 30 días y soporte continuo.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3 w-full md:w-auto shrink-0">
                        <a
                            href="https://wa.me/56987843957?text=%C2%A1Hola!%20Quiero%20asesor%C3%ADa%20para%20dise%C3%B1ar%20mi%20p%C3%A1gina%20web%20en%20Puerto%20Montt."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#ec5b99] hover:bg-[#d84b88] shadow-md transition-all flex items-center justify-center gap-2 flex-1 md:flex-initial"
                        >
                            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
                            </svg>
                            <span>Solicitar Asesoría</span>
                        </a>

                        <a
                            href="#planes"
                            className="px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white/80 bg-white/5 border border-white/15 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 flex-1 md:flex-initial"
                        >
                            <span>Ver Planes</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LocalCoverageSection;
