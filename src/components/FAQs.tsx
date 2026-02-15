"use client";

import React from 'react';

const faqs = [
    {
        q: "¿Cuánto tiempo demora crear mi página web?",
        a: "El tiempo mínimo de entrega es de <b>2 días hábiles</b> en los planes <b>Fastpage</b> y <b>Landing Focus</b>. En proyectos más grandes o a medida, los tiempos pueden variar según alcance y contenido."
    },
    {
        q: "¿Tengo que pagar mensualidad?",
        a: "No. Nuestros planes son de <b>pago único</b>. Lo único que se renueva es <b>dominio y hosting</b> a partir del segundo año, porque el <b>primer año está cubierto</b> en los planes."
    },
    {
        q: "¿Incluyen hosting y dominio?",
        a: "Sí. <b>Incluimos dominio y hosting el primer año</b>.<div class='mt-2.5 p-3 rounded-xl border border-white/10 bg-white/5 text-white/70 text-[13px] font-[650]'><b>Valores referenciales desde el segundo año:</b><br/>• Dominio .cl: <b>$9.990 CLP / año</b><br/>• Dominio .com: <b>US$11 / año</b><br/>• Hosting: <b>$19.990 CLP / año</b><br/><span style='opacity:.9'>*(El primer año está cubierto en el servicio.)*</span></div>"
    },
    {
        q: "¿Puedo actualizar el contenido yo mismo?",
        a: "Sí. Entregamos tu web <b>autoadministrable</b> y te capacitamos para que puedas actualizar textos, imágenes y secciones sin depender de terceros."
    },
    {
        q: "¿Mi página se verá bien en celulares?",
        a: "Sí. Todos los sitios se desarrollan <b>100% responsive</b> para que se vean perfectos en celular, tablet y computador."
    },
    {
        q: "¿Qué pasa si necesito cambios después de la entrega?",
        a: "Incluimos <b>3 meses de garantía</b> para ajustes y correcciones relacionadas al servicio entregado. Si necesitas mejoras nuevas o cambios mayores, los cotizamos según alcance."
    },
    {
        q: "¿Trabajan con clientes fuera de Puerto Montt?",
        a: "Sí. Podemos trabajar con clientes en todo Chile (y fuera) de forma remota. Coordinamos reuniones por <b>Google Meet</b> y mantenemos comunicación constante por WhatsApp."
    }
];

const FAQs = () => {
    return (
        <section id="faq" className="py-16 bg-background">
            <div className="max-w-[920px] mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="m-0 text-4xl font-[1000] tracking-[-1px]">Preguntas Frecuentes</h2>
                    <p className="mt-2.5 text-muted font-[650] text-sm md:text-base">Resolvemos tus dudas sobre nuestros servicios de diseño web</p>
                </div>

                <div className="grid gap-4 mt-8">
                    {faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.02] shadow-[0_18px_60px_rgba(0,0,0,0.40)] isolate"
                        >
                            <div className="absolute inset-x-[-140px] -top-[140px] h-[260px] bg-[radial-gradient(circle_at_25%_30%,rgba(123,44,255,0.14),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,212,255,0.08),transparent_60%)] blur-[10px] opacity-[0.95] -z-[1]"></div>

                            <summary className="list-none cursor-pointer p-5 flex items-center justify-between gap-3.5 relative z-10 select-none group-open:border-b group-open:border-white/10">
                                <span className="font-[900] text-sm text-white/92 leading-[1.35]">{faq.q}</span>
                                <span className="w-[22px] h-[22px] text-[#b53cff] transition-transform duration-200 group-open:rotate-180 drop-shadow-[0_12px_22px_rgba(181,60,255,0.18)]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </span>
                            </summary>

                            <div
                                className="p-5 pt-0 text-white/72 font-[650] text-sm leading-[1.65] relative z-10"
                                dangerouslySetInnerHTML={{ __html: faq.a }}
                            />
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
