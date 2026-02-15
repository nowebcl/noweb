import React from 'react';

const technicalServices = [
    {
        title: 'Mantenimiento WordPress',
        description: 'Mantenemos tu sitio seguro, actualizado y funcionando sin errores. Monitoreo 24/7 y respaldos periódicos.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-5.11l2.454-2.454a2.652 2.652 0 1 0-3.75-3.75l-2.454 2.454m-3.13 3.13L6.347 11.3M6.347 11.3l-2.454 2.454a2.652 2.652 0 1 0 3.75 3.75l2.454-2.454m-3.13-3.13 4.305-4.306" />
            </svg>
        )
    },
    {
        title: 'Optimización de Plugins',
        description: 'Configuración y limpieza de plugins para mejorar la velocidad de carga y evitar conflictos técnicos.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        )
    },
    {
        title: 'SEO & Posicionamiento',
        description: 'Estrategias de SEO local en Puerto Montt para que tus clientes te encuentren primero en las búsquedas de Google.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-accent">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a.5.5 0 00.71 0L21.75 8.25" />
            </svg>
        )
    }
];

const TechnicalSection = () => {
    return (
        <section id="servicios" className="py-24 bg-card-bg/30">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Especialistas en <br />
                            <span className="text-accent underline decoration-accent/30 underline-offset-8">Soporte Técnico</span> <br />
                            y Optimización
                        </h2>
                        <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
                            En Noweb Labs no solo diseñamos tu web, nos aseguramos de que sea una herramienta potente y segura.
                            Sustituimos el peso de Elementor por arquitecturas modernas y optimizadas.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">1</div>
                                <p className="font-medium text-foreground/90">Velocidad de carga ultra rápida con Server Components.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">2</div>
                                <p className="font-medium text-foreground/90">Seguridad avanzada y certificados SSL incluidos.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">3</div>
                                <p className="font-medium text-foreground/90">Integración con APIs y Automatización IA.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 gap-6">
                        {technicalServices.map((service, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-3xl border border-white/5 bg-background hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSection;
