"use client";

import React from 'react';
import { motion } from 'framer-motion';

const designPlans = [
    {
        title: "Fastpage (1 solo pago)",
        subtitle: "Presencia profesional en tiempo récord.",
        price: "149.890",
        features: [
            "Dominio + hosting incluidos",
            "Información de tu empresa + botones",
            "Conexión directa a WhatsApp y redes sociales",
            "Contenido con IA + rapidez",
            "Correos corporativos personalizados",
            "Entrega: 2 días hábiles + editor Elementor Pro"
        ]
    },
    {
        title: "Landing focus +",
        subtitle: "Enfocada en conversión + 1 anuncio conectado.",
        price: "199.980",
        featured: true,
        features: [
            "Todo lo de Fastpage + foco total en conversión (copy + estructura)",
            "CTA estratégicos + WhatsApp + redes sociales",
            "Configuración de 1 anuncio conectado a la landing",
            "Contenido con IA optimizado para captar leads",
            "Correos corporativos personalizados",
            "Entrega rápida + editor Elementor Pro"
        ]
    },
    {
        title: "Sitio web para inmobiliarias.",
        subtitle: "Sitio orientado a captación de leads y contacto rápido.",
        price: "249.980",
        features: [
            "Diseño profesional + responsive",
            "Secciones clave para propiedades + contacto",
            "Plugin desarrollado por noweb",
            "Subir propiedades ilimitadas",
            "Conexión WhatsApp + formularios",
            "Correos corporativos personalizados"
        ]
    },
    {
        title: "Sitio web para automotoras.",
        subtitle: "Catálogo digital de vehículos con filtros y contacto directo.",
        price: "249.980",
        features: [
            "Diseño profesional + responsive",
            "Gestión de stock de vehículos + fichas técnicas",
            "Plugin desarrollado por noweb",
            "Subir vehículos ilimitados",
            "Conexión WhatsApp + formularios",
            "Correos corporativos personalizados"
        ]
    }
];

const ecommercePlans = [
    {
        title: "Mini ecommerce",
        subtitle: "Tienda tipo Shopify para emprendedores que recién comienzan.",
        price: "199.980",
        features: [
            "Tienda tipo Shopify (1 pago, sin comisiones mensuales)",
            "Webpay / MercadoPago / PayPal",
            "Catálogo de hasta 30 productos",
            "Correos corporativos personalizados"
        ]
    },
    {
        title: "E-commerce FULL.",
        subtitle: "Todas las características de Shopify, pero con un solo pago.",
        price: "349.980",
        featured: true,
        features: [
            "Sitio premium con carga de +1000 productos",
            "Webpay / MercadoPago / PayPal",
            "Panel admin + gestión de inventario/catálogo",
            "Correos corporativos personalizados"
        ]
    }
];

const aiPlans = [
    {
        title: "Automatización IA Básica",
        subtitle: "Atiende, responde y capta leads automáticamente.",
        price: "399.990",
        features: [
            "Chatbots para WhatsApp + FAQ",
            "Captura de leads + derivación",
            "Entrenamiento con tu información"
        ]
    },
    {
        title: "Automatización IA intermedia",
        subtitle: "Flujos de trabajo con agentes autónomos conectados con APIs.",
        price: "779.980",
        featured: true,
        features: [
            "Agentes autónomos para flujos de trabajo",
            "Integración con APIs (según tus herramientas)",
            "Diseño, pruebas y puesta en marcha"
        ]
    },
    {
        title: "Automatización IA avanzada",
        subtitle: "Funnel con varios agentes o agente tipo community manager.",
        price: "1.590.000",
        features: [
            "Funnel de ventas completo con agentes",
            "Agente tipo community manager (respuestas + agenda)",
            "Medición, optimización y escalamiento"
        ]
    }
];

const checkSvg = (
    <svg className="w-[18px] h-[18px] text-accent shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const PricingCard = ({ plan }: { plan: any }) => (
    <motion.article
        whileHover={{ y: -5 }}
        className={`relative flex flex-col p-6 md:p-8 rounded-[18px] border overflow-hidden min-h-[520px] isolate transition-all duration-300 ${plan.featured
            ? "border-primary/55 bg-gradient-to-b from-white/5 to-white/[0.015] shadow-[0_22px_80px_rgba(123,44,255,0.16),0_18px_60px_rgba(0,0,0,0.45)]"
            : "border-white/12 bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            }`}
    >
        {/* Glow */}
        <div className="absolute inset-x-[-140px] -top-[140px] h-[320px] bg-[radial-gradient(circle_at_35%_25%,rgba(123,44,255,0.22),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(255,61,154,0.16),transparent_60%),radial-gradient(circle_at_55%_55%,rgba(0,212,255,0.1),transparent_70%)] blur-[10px] opacity-[0.9] -z-[1]"></div>

        {plan.featured && (
            <div className="absolute -top-1 px-4 py-1.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-b-lg self-center z-20">
                Popular
            </div>
        )}

        <h3 className="text-center text-xl font-[950] tracking-tight pt-2 m-0">{plan.title}</h3>
        <p className="text-center text-muted text-[13px] leading-[1.45] min-h-[38px] mt-2 m-0">{plan.subtitle}</p>

        <div className="mt-4 flex items-baseline justify-center gap-2 leading-none">
            <span className="text-sm font-[900] text-white/50 -translate-y-[2px]">$</span>
            <span className="text-[44px] font-[1000] tracking-[-1px] text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent drop-shadow-[0_14px_28px_rgba(0,0,0,0.25)]">{plan.price}</span>
            <span className="text-[12px] font-[900] text-white/50 tracking-widest -translate-y-[2px]">CLP</span>
        </div>
        <div className="mt-2 text-center text-[12px] font-[800] text-white/60 uppercase tracking-wider">Pago único</div>

        <ul className="flex-grow mt-[18px] flex flex-col gap-[11px] list-none p-0">
            {plan.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex gap-2.5 items-start text-[13px] font-[650] text-white/75 leading-[1.45]">
                    {checkSvg}
                    {feature}
                </li>
            ))}
        </ul>

        <a
            href={`https://wa.me/56987843957?text=${encodeURIComponent(`Hola! Quiero contratar el plan: ${plan.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-[14px] font-[950] text-sm transition-all ${plan.featured
                ? "bg-gradient-to-r from-[#b53cff] via-[#ff3d9a] to-[#00d4ff] text-white shadow-[0_18px_55px_rgba(181,60,255,0.22),0_18px_55px_rgba(0,212,255,0.16)] hover:brightness-105"
                : "bg-white/[0.045] border border-white/15 text-white/92 hover:border-white/25 hover:bg-white/10"
                }`}
        >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
            <span>Contratar ahora</span>
            <span className="font-black">→</span>
        </a>
    </motion.article>
);

const PricingTable = () => {
    return (
        <section id="planes" className="py-12 bg-background">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Diseño Web */}
                <div className="flex justify-center mb-4 mt-6">
                    <span className="px-3.5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-black text-[11px] uppercase tracking-widest">
                        Diseño Web
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[18px] mb-12 max-w-[900px] mx-auto">
                    {designPlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                </div>

                {/* Ecommerce */}
                <div className="flex justify-center mb-4">
                    <span className="px-3.5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-black text-[11px] uppercase tracking-widest">
                        Ecommerce
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-12 max-w-[800px] mx-auto">
                    {ecommercePlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                </div>

                {/* Automatizaciones */}
                <div className="flex justify-center mb-4">
                    <span className="px-3.5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-black text-[11px] uppercase tracking-widest">
                        Automatizaciones
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
                    {aiPlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
