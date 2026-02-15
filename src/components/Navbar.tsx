"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/' },
        { name: 'Portafolio', href: '#portafolio' },
        { name: 'Planes', href: '#planes' },
        { name: 'Opiniones', href: '#opiniones' },
        { name: 'Nosotros', href: '#nosotros' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled
                ? 'py-3 bg-[#05050b]/80 backdrop-blur-xl border-b border-white/10'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="relative z-10 flex items-center gap-3 block group">
                    <img
                        src="/logo.png"
                        alt="Noweb Labs"
                        className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                    <span className="text-white font-[1000] text-xl tracking-tight">noweb.cl</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-5 py-2 rounded-xl text-sm font-[900] text-white/70 hover:text-white hover:bg-white/10 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/56987843957"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#b53cff] to-[#ff3d9a] text-white text-sm font-black shadow-[0_12px_40px_rgba(181,60,255,0.32)] hover:scale-105 transition-transform active:scale-95"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
                        </svg>
                        Contacto
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#05050b]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-black text-white/90"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/56987843957"
                            className="mt-4 flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#b53cff] to-[#ff3d9a] text-white font-black text-lg"
                        >
                            Contactar por WhatsApp
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
