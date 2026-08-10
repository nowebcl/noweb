"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Category 1: Pymes
const pymesPlans = [
    {
        title: "Página One Shot",
        subtitle: "Presencia web ágil, profesional y lista en tiempo récord.",
        price: "89.990",
        showFrom: false,
        features: [
            "Dominio .cl incluido",
            "Hosting básico incluido",
            "Botón directo de WhatsApp",
            "Botones de redes sociales",
            "Despliegue ultra rápido",
            "1 correo corporativo",
            "Capacidad de escala",
            "Entrega en 1 día hábil"
        ]
    },
    {
        title: "Catálogo en Línea Administrable",
        subtitle: "Muestra tus servicios o productos con control total de inventario.",
        price: "149.980",
        featured: true,
        badge: "Más Popular",
        showFrom: false,
        features: [
            "Dominio y hosting por 1 año",
            "3 correos corporativos",
            "WhatsApp y redes sociales con conexión directa",
            "Panel de administración ultra sencillo y rápido (creado por nosotros)",
            "Manejo de inventario de servicios o productos",
            "Asesoría para pymes que quieran vender en línea",
            "Entrega en 4 días hábiles",
            "Reunión vía Meet (opcional)"
        ]
    }
];

// Category 2: Diseño Web para Empresas
const empresasPlans = [
    {
        title: "Landing Page Profesional Administrable",
        subtitle: "Desarrollo de alto nivel a medida para marcas exigentes.",
        price: "210.980",
        showFrom: false,
        features: [
            "Dominio .cl o .com incluido",
            "Hosting por 1 año incluido",
            "Panel de administración para cambiar imágenes y textos",
            "Página ultra rápida desarrollada con Next.js / React",
            "Hasta 10 correos corporativos",
            "Despliegue en 5 días hábiles",
            "Diseño totalmente a medida"
        ]
    },
    {
        title: "Página para Agencias Inmobiliarias",
        subtitle: "Plataforma propia especializada en gestión y publicación de propiedades.",
        price: "310.980",
        featured: true,
        badge: "Especializado",
        showFrom: false,
        features: [
            "Diseño a medida de alto impacto",
            "Gestión de propiedades rápida y sencilla (plataforma propia)",
            "Hasta 5 correos corporativos",
            "Asesoría especializada incluida",
            "Páginas: Contacto interactiva, Nosotros, Servicios y Blog",
            "Reunión vía Meet o presencial"
        ]
    },
    {
        title: "Plataforma Web para Automotoras",
        subtitle: "Catálogo ilimitado de vehículos con gestión ultrarrápida.",
        price: "350.000",
        showFrom: false,
        features: [
            "Dominio .com o .cl incluido",
            "Hosting por 1 año incluido",
            "Plataforma administrable creada por nosotros (ultrarrápida y sencilla)",
            "Conexión a WhatsApp y redes sociales",
            "Asesoría y mantenimiento incluido",
            "Subida de vehículos sin límite",
            "Diseño totalmente a medida"
        ]
    }
];

// Category 3: Tiendas en Línea
const ecommercePlans = [
    {
        title: "Fast Shop",
        subtitle: "Tu tienda online ultrarrápida tipo Shopify pero con un solo pago.",
        price: "249.980",
        showFrom: false,
        features: [
            "Dominio .cl o .com incluido",
            "Hosting por 1 año incluido",
            "Plataforma de e-commerce tipo Shopify desarrollada por nosotros",
            "Página de inicio + página para cada producto",
            "Plataforma ultrarrápida y fácil de usar con panel de control",
            "Subida inicial de 5 productos (hasta 3 imágenes por producto)",
            "Gestión de inventario",
            "Conexión a Webpay Plus, Mercado Pago o PayPal"
        ]
    },
    {
        title: "Tienda Online Full Profesional",
        subtitle: "Solución de e-commerce completa y escalable sin restricciones.",
        price: "460.000",
        featured: true,
        badge: "Recomendado",
        showFrom: false,
        features: [
            "Dominio y hosting completo por 1 año",
            "Correos corporativos incluidos",
            "Gestión de inventario completa",
            "Productos ilimitados",
            "Categorías e imágenes ilimitadas",
            "Acompañamiento hasta tu primera venta",
            "Reuniones vía Meet o presencial",
            "Despliegue ultrarrápido en 7 a 15 días hábiles"
        ]
    }
];

// Category 4: Software Web a Medida
const softwarePlans = [
    {
        title: "Desarrollo de Alto Nivel",
        subtitle: "Sistemas web escalables diseñados para tus necesidades específicas.",
        price: "1.176.980",
        showFrom: true,
        featured: true,
        features: [
            "Desarrollo full-stack personalizado",
            "Panel de administración a medida",
            "Arquitectura escalable y segura",
            "Integración de APIs y bases de datos",
            "Reuniones necesarias"
        ]
    },
    {
        title: "Desarrollo de Apps Móviles",
        subtitle: "Aplicaciones móviles nativas o híbridas para tu empresa.",
        price: "2.268.980",
        showFrom: true,
        features: [
            "Desarrollo para iOS y Android",
            "UX/UI premium de alto impacto",
            "Funciones nativas y notificaciones push",
            "Soporte y mantenimiento post-lanzamiento",
            "Reuniones necesarias"
        ]
    }
];

const checkSvg = (
    <svg className="w-[18px] h-[18px] text-[#ec5b99] shrink-0 mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const PricingCard = ({ plan }: { plan: any }) => (
    <motion.article
        whileHover={{ y: -5 }}
        className={`relative flex flex-col p-6 md:p-8 rounded-[20px] border overflow-hidden min-h-[540px] isolate transition-all duration-300 ${plan.featured
            ? "border-[#ec5b99]/60 bg-gradient-to-b from-[#ec5b99]/10 via-white/[0.03] to-transparent shadow-[0_22px_80px_rgba(236,91,153,0.18)]"
            : "border-white/12 bg-gradient-to-b from-white/[0.04] to-white/[0.015] shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
            }`}
    >
        {/* Ambient Glow */}
        <div className="absolute inset-x-[-140px] -top-[140px] h-[320px] bg-[radial-gradient(circle_at_50%_20%,rgba(236,91,153,0.1),transparent_60%)] blur-[12px] opacity-80 -z-[1]"></div>

        {plan.badge ? (
            <div className="absolute -top-1 px-4 py-1.5 bg-[#ec5b99] text-white text-[10px] font-black uppercase tracking-widest rounded-b-lg self-center z-20 shadow-[0_4px_16px_rgba(236,91,153,0.4)]">
                {plan.badge}
            </div>
        ) : null}

        <h3 className="text-center text-xl font-[950] tracking-tight pt-2 m-0 text-white">{plan.title}</h3>
        <p className="text-center text-white/60 text-[13px] leading-[1.45] min-h-[38px] mt-2 m-0">{plan.subtitle}</p>

        <div className="mt-4 flex items-baseline justify-center gap-1 leading-none">
            {plan.showFrom && <span className="text-[13px] font-[900] text-white/40 uppercase tracking-tighter mr-1">Desde</span>}
            <span className="text-sm font-[900] text-[#ec5b99] -translate-y-[2px]">$</span>
            <span className="text-[42px] font-[1000] tracking-[-1px] text-white drop-shadow-[0_10px_20px_rgba(255,255,255,0.05)]">{plan.price}</span>
            <span className="text-[12px] font-[900] text-white/50 tracking-widest -translate-y-[2px]">CLP</span>
        </div>
        <div className="mt-2 text-center text-[11px] font-[800] text-white/50 uppercase tracking-wider">
            + IVA
        </div>

        <ul className="flex-grow mt-5 flex flex-col gap-3 list-none p-0">
            {plan.features.map((feat: string, idx: number) => (
                <li key={idx} className="flex gap-2.5 items-start text-[13px] font-[600] leading-[1.45] text-white/80">
                    {checkSvg}
                    <span>{feat}</span>
                </li>
            ))}
        </ul>

        <a
            href={`https://wa.me/56987843957?text=${encodeURIComponent(`¡Hola! Quiero cotizar y contratar el plan: ${plan.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 w-full flex items-center justify-center gap-2.5 py-3.5 rounded-[14px] font-[950] text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-px ${plan.featured
                ? "bg-[#ec5b99] text-white hover:bg-[#d84b88] shadow-[0_12px_35px_rgba(236,91,153,0.35)]"
                : "bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                }`}
        >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
            </svg>
            <span>Contratar ahora</span>
            <span className="font-black">→</span>
        </a>
    </motion.article>
);

const PricingTable = () => {
    return (
        <section id="planes" className="py-16 md:py-24 bg-black text-white relative z-10">
            <div className="max-w-[1240px] mx-auto px-4">
                
                {/* Header Title */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d0d12] border border-white/20 text-white/90 font-medium text-xs mb-4"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ec5b99] shadow-[0_0_8px_#ec5b99]"></span>
                        <span>Planes Transparentes y a Medida</span>
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-5xl font-[1000] tracking-tight text-white m-0">
                        Elige el plan perfecto para <span className="text-[#ec5b99]">hacer crecer tu negocio</span>
                    </h2>
                </div>

                {/* Categoría 1: Pymes */}
                <div className="mb-20">
                    <div className="flex justify-center mb-8">
                        <span className="px-4 py-2 rounded-full border border-[#ec5b99]/40 bg-[#ec5b99]/10 text-[#ec5b99] font-black text-xs uppercase tracking-widest">
                            Pymes
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
                        {pymesPlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                    </div>
                </div>

                {/* Categoría 2: Diseño Web para Empresas */}
                <div className="mb-20">
                    <div className="flex justify-center mb-8">
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white font-black text-xs uppercase tracking-widest">
                            Diseño Web para Empresas
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1240px] mx-auto">
                        {empresasPlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                    </div>
                </div>

                {/* Categoría 3: Tiendas en Línea */}
                <div className="mb-20">
                    <div className="flex justify-center mb-8">
                        <span className="px-4 py-2 rounded-full border border-[#ec5b99]/40 bg-[#ec5b99]/10 text-[#ec5b99] font-black text-xs uppercase tracking-widest">
                            Tiendas en Línea
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
                        {ecommercePlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                    </div>
                </div>

                {/* Categoría 4: Software Web a Medida */}
                <div>
                    <div className="flex justify-center mb-8">
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white font-black text-xs uppercase tracking-widest">
                            Software Web a Medida
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto">
                        {softwarePlans.map((plan, idx) => <PricingCard key={idx} plan={plan} />)}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingTable;
