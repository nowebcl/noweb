import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="noweb-footer" className="pt-16 pb-10 bg-background border-t border-white/5 relative isolate overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6">
                
                {/* Top Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-12 border-b border-white/10">
                    
                    {/* Col 1: Brand & NAP info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Noweb Labs - Diseño de Páginas Web Puerto Montt"
                                width={160}
                                height={50}
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed font-[550] m-0">
                            Agencia líder en diseño y desarrollo de páginas web, tiendas online e-commerce y posicionamiento SEO local en <strong>Puerto Montt</strong>, <strong>Puerto Varas</strong> y toda la <strong>Región de Los Lagos</strong>.
                        </p>
                        
                        <div className="flex flex-col gap-2.5 text-xs text-white/75 font-[600] mt-2">
                            <div className="flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                <span>Puerto Montt, Región de Los Lagos, Chile</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a href="tel:+56987843957" className="hover:text-white transition-colors">+56 9 8784 3957</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-3.5 h-3.5 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Lun a Vie: 09:00 - 19:00 | Sáb: 10:00 - 14:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 2: Local SEO Links */}
                    <div className="flex flex-col gap-3">
                        <h4 className="m-0 font-[1000] text-sm text-white tracking-wider uppercase">
                            Servicios en Los Lagos
                        </h4>
                        <ul className="flex flex-col gap-2.5 p-0 m-0 list-none text-xs text-white/70 font-[600]">
                            <li>
                                <a href="#planes" className="hover:text-[#ec5b99] transition-colors flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                    <span>Diseño de Páginas Web en Puerto Montt</span>
                                </a>
                            </li>
                            <li>
                                <a href="#planes" className="hover:text-[#ec5b99] transition-colors flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                    <span>Tiendas Online E-commerce con Webpay</span>
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="hover:text-[#ec5b99] transition-colors flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                    <span>Posicionamiento SEO en Google Maps y Búsqueda</span>
                                </a>
                            </li>
                            <li>
                                <a href="#cobertura-local" className="hover:text-[#ec5b99] transition-colors flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                    <span>Desarrollo Web en Puerto Varas y Frutillar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#servicios" className="hover:text-[#ec5b99] transition-colors flex items-center gap-1.5">
                                    <svg className="w-3 h-3 text-[#ec5b99] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                    <span>Mantenimiento y Certificados de Seguridad SSL</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 3: Instagram & Social proof */}
                    <div className="flex flex-col gap-3.5 items-start md:items-end">
                        <h4 className="m-0 font-[1000] text-sm text-white tracking-widest uppercase flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ec5b99]">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <span>Síguenos en Instagram</span>
                        </h4>
                        <a 
                            href="https://www.instagram.com/noweb.dev/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block overflow-hidden rounded-xl transition-all duration-300 shadow-[0_12px_35px_rgba(0,0,0,0.4)] hover:scale-[1.03] hover:border-white/25 max-w-[330px] w-full border border-white/10 group"
                        >
                            <Image
                                src="/ig2.png"
                                alt="Instagram @noweb.dev - Noweb Labs Puerto Montt"
                                width={660}
                                height={270}
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                            />
                        </a>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] font-[700] text-white/50">
                    <p className="m-0">© 2026 Noweb Labs. Todos los derechos reservados. Puerto Montt, Chile.</p>
                    <div className="flex items-center gap-6">
                        <a href="https://www.noweb.cl/" className="hover:text-white transition-colors">Diseño web en Puerto Montt</a>
                        <a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

