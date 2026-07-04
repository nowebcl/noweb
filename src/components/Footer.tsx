import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="noweb-footer" className="pt-16 pb-8 bg-background border-t border-white/5 relative isolate overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[780px] mx-auto">
                    {/* Instagram al costado */}
                    <div className="flex flex-col gap-3">
                        <h4 className="m-0 font-[1000] text-sm text-white/95 tracking-widest uppercase flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white/80">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span>Sígueme en instagram</span>
                        </h4>
                        <a 
                            href="https://www.instagram.com/noweb.dev/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:scale-[1.02] w-full"
                        >
                            <Image
                                src="/ig2.png"
                                alt="Instagram @noweb.dev"
                                width={320}
                                height={200}
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                loading="lazy"
                            />
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-5 md:pl-10">
                        <h4 className="m-0 font-[1000] text-sm text-white/95 tracking-widest uppercase">Contacto</h4>
                        <div className="grid gap-4">
                            <div className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650]">
                                <div className="w-5 h-5 text-white/50 shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s7-4.4 7-12a7 7 0 1 0-14 0c0 7.6 7 12 7 12z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                Puerto Montt, Región de Los Lagos
                            </div>

                            <a href="tel:+56987843957" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-white/50 shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L8 9.3a16 16 0 0 0 6.7 6.7l1.2-1.2a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z" />
                                    </svg>
                                </div>
                                +56 9 8784 3957
                            </a>

                            <a href="mailto:hola@noweb.cl" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-white/50 shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                                        <path d="m22 7-10 7L2 7" />
                                    </svg>
                                </div>
                                hola@noweb.cl
                            </a>

                            <a href="https://www.instagram.com/noweb.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 text-white/72 text-[13px] font-[650] hover:text-white transition-colors group">
                                <div className="w-5 h-5 text-white/50 shrink-0 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </div>
                                Instagram: @noweb.dev
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
