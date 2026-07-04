import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="noweb-footer" className="pt-16 pb-8 bg-background border-t border-white/5 relative isolate overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col gap-3.5 items-center text-center max-w-[320px] w-full">
                    <h4 className="m-0 font-[1000] text-sm text-white/95 tracking-widest uppercase flex items-center justify-center gap-2">
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
