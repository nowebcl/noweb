import React from 'react';

const Footer = () => {
    return (
        <footer id="noweb-footer" className="pt-16 pb-8 bg-background border-t border-white/5 relative isolate overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute inset-x-[-200px] bottom-[-200px] h-[400px] bg-[radial-gradient(circle_at_50%_100%,rgba(123,44,255,0.1),transparent_60%)] -z-[1]"></div>

            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1.1fr] gap-12 md:gap-20">
                    {/* Brand */}
                    <div className="flex flex-col gap-5">
                        <a href="/" className="inline-block transition-transform hover:scale-105">
                            <img
                                src="/logo.png"
                                alt="Noweb Labs"
                                className="w-[140px] h-auto drop-shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
                            />
                        </a>
                        <p className="m-0 text-white/70 text-[13px] leading-[1.65] font-[650] max-w-[420px]">
                            Líderes en diseño web en Puerto Montt y Puerto Varas. Apoyando a emprendedores y Pymes de todo el sur de Chile con tecnología de alto rendimiento y SEO Local.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="m-0 font-[1000] text-sm text-white/95 tracking-widest uppercase">Links Rápidos</h4>
                        <ul className="m-0 p-0 list-none grid gap-3">
                            <li><a href="#portafolio" className="text-white/72 text-[13px] font-[650] hover:text-white transition-colors">Nuestros Trabajos</a></li>
                            <li><a href="#planes" className="text-white/72 text-[13px] font-[650] hover:text-white transition-colors">Planes y Precios</a></li>
                            <li><a href="#opiniones" className="text-white/72 text-[13px] font-[650] hover:text-white transition-colors">Opiniones Google</a></li>
                            <li><a href="#nosotros" className="text-white/72 text-[13px] font-[650] hover:text-white transition-colors">Cómo Trabajamos</a></li>
                            <li><a href="https://cotizador.noweb.cl/" className="text-white/72 text-[13px] font-[650] hover:text-white transition-colors">Cotizador Automático</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="m-0 font-[1000] text-sm text-white/95 tracking-widest uppercase">Contacto</h4>
                        <div className="grid gap-4">
                            <div className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650]">
                                <div className="w-5 h-5 text-primary shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s7-4.4 7-12a7 7 0 1 0-14 0c0 7.6 7 12 7 12z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                Puerto Montt, Región de Los Lagos
                            </div>

                            <a href="tel:+56987843957" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8 9.3a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z" />
                                    </svg>
                                </div>
                                +56 9 8784 3957
                            </a>

                            <a href="mailto:hola@noweb.cl" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                                        <path d="m22 7-10 7L2 7" />
                                    </svg>
                                </div>
                                hola@noweb.cl
                            </a>

                            <a href="https://www.instagram.com/noweb.labs/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                Instagram: @noweb.labs
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] font-[700] text-white/50">
                    <p className="m-0">© 2025 Noweb Labs. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-6">
                        <a href="https://noweb.cl/" className="hover:text-white transition-colors">Diseño web en Puerto Montt</a>
                        <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
