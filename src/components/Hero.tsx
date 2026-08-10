"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const titles = [
    { pink: "Diseño Web", white: "Profesional" },
    { pink: "Desarrollo Web", white: "a Medida" },
    { pink: "Páginas Web", white: "en Puerto Montt" }
];

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedPink, setDisplayedPink] = useState("");
    const [displayedWhite, setDisplayedWhite] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const fullPink = currentTitle.pink;
        const fullWhite = currentTitle.white;

        let timer: NodeJS.Timeout;

        if (!isDeleting) {
            // Typing forward
            if (displayedPink.length < fullPink.length) {
                timer = setTimeout(() => {
                    setDisplayedPink(fullPink.slice(0, displayedPink.length + 1));
                }, 55);
            } else if (displayedWhite.length < fullWhite.length) {
                timer = setTimeout(() => {
                    setDisplayedWhite(fullWhite.slice(0, displayedWhite.length + 1));
                }, 55);
            } else {
                // Pause at complete phrase before deleting
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, 2400);
            }
        } else {
            // Deleting backward
            if (displayedWhite.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedWhite(fullWhite.slice(0, displayedWhite.length - 1));
                }, 30);
            } else if (displayedPink.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedPink(fullPink.slice(0, displayedPink.length - 1));
                }, 30);
            } else {
                // Move to next title
                setIsDeleting(false);
                setTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }

        return () => clearTimeout(timer);
    }, [displayedPink, displayedWhite, isDeleting, titleIndex]);

    return (
        <section className="relative min-h-screen w-full bg-black text-white overflow-hidden isolate flex flex-col justify-between">
            
            {/* ========================================== */}
            {/* DESKTOP VIEW (hidden lg:flex) - UNCHANGED  */}
            {/* ========================================== */}
            <div className="hidden lg:flex flex-col justify-between min-h-screen w-full px-6 lg:px-12 pt-10 sm:pt-16 pb-12 sm:pb-20">
                {/* Top Logo Header - PC */}
                <div className="w-full max-w-[1280px] mx-auto flex items-center justify-center relative z-20 pt-4 sm:pt-8 mb-2 sm:mb-4">
                    <a href="/" className="inline-block group">
                        <Image
                            src="/logo.png"
                            alt="Noweb Logo"
                            width={220}
                            height={70}
                            className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform group-hover:scale-105"
                            priority
                        />
                    </a>
                </div>

                {/* Hero Main Area - PC */}
                <div className="relative max-w-[1280px] w-full mx-auto my-auto z-10">
                    <div className="flex flex-row items-center justify-center relative">
                        
                        {/* Left Column: Text Content & CTAs - PC */}
                        <div className="flex flex-col items-start text-left gap-4 sm:gap-5 relative z-20 w-[48%] xl:w-[46%] -mr-12 xl:-mr-16">
                            {/* Pill Badge - Higher Up */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0d12] border border-white/20 text-white/90 font-medium text-xs sm:text-sm -mt-6 sm:-mt-10 mb-1"
                            >
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ec5b99] shadow-[0_0_8px_#ec5b99]"></span>
                                <span>Páginas web en Puerto Montt</span>
                            </motion.div>

                            {/* Animated Typewriter Headline - PC */}
                            <div className="min-h-[130px] lg:min-h-[150px] flex items-center">
                                <h1 className="text-4xl lg:text-6xl font-[1000] leading-[1.05] tracking-tight m-0 text-left">
                                    <span className="block text-[#ec5b99] min-h-[1.1em]">
                                        {displayedPink}
                                        {displayedPink.length < titles[titleIndex].pink.length && (
                                            <span className="inline-block w-[3px] h-[0.85em] bg-[#ec5b99] ml-1 align-middle animate-pulse" />
                                        )}
                                    </span>
                                    <span className="block text-white min-h-[1.1em]">
                                        {displayedWhite}
                                        {displayedPink.length >= titles[titleIndex].pink.length && (
                                            <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
                                        )}
                                    </span>
                                </h1>
                            </div>

                            {/* Description Paragraph - PC */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="m-0 ml-12 lg:ml-24 max-w-[340px] text-white/60 text-xs sm:text-sm leading-relaxed text-left font-normal italic"
                            >
                                &ldquo;Creamos páginas web en Puerto Montt de alto impacto para impulsar tu negocio.&rdquo;
                            </motion.p>

                            {/* CTA Buttons - PC */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="pt-2 flex flex-nowrap items-center gap-3 w-auto"
                            >
                                <a
                                    href="https://wa.me/56987843957?text=%C2%A1Hola!%20Quiero%20cotizar%20una%20p%C3%A1gina%20web%20en%20Puerto%20Montt."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#ec5b99] hover:bg-[#d84b88] shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
                                    </svg>
                                    <span>Cotizar por WhatsApp</span>
                                </a>

                                <a
                                    href="#planes"
                                    className="px-5 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0d0d12] border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-1.5"
                                >
                                    <span>Ver planes y precios</span>
                                    <span>→</span>
                                </a>
                            </motion.div>
                        </div>

                        {/* Right Column: Laptop Image - PC */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="w-[62%] xl:w-[66%] relative flex items-center justify-end z-10"
                        >
                            <Image
                                src="/lap.png"
                                alt="Diseño Web Laptop Preview"
                                width={820}
                                height={600}
                                unoptimized
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
                                priority
                            />
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ========================================== */}
            {/* MOBILE VIEW (flex lg:hidden) using movil.png */}
            {/* ========================================== */}
            <div className="flex lg:hidden flex-col justify-start min-h-screen w-full relative bg-black px-4 pt-4 pb-6 overflow-hidden">
                {/* Top Logo Header - Mobile (Slightly smaller & tighter padding) */}
                <div className="w-full flex items-center justify-center relative z-20 pt-4 sm:pt-6 mb-1">
                    <a href="/" className="inline-block">
                        <Image
                            src="/logo.png"
                            alt="Noweb Logo"
                            width={200}
                            height={65}
                            unoptimized
                            className="h-16 sm:h-18 w-auto object-contain"
                            priority
                        />
                    </a>
                </div>

                {/* Mobile Canvas Container shifted UP */}
                <div className="relative w-full max-w-[380px] h-[560px] sm:h-[600px] mx-auto my-0 -mt-2">
                    {/* Background Image: movil.png */}
                    <Image
                        src="/movil.png"
                        alt="Mobile Background"
                        fill
                        unoptimized
                        className="object-contain object-center z-0 pointer-events-none"
                        priority
                    />

                    {/* 1. Badge: Top left above laptop screen */}
                    <div className="absolute top-[14%] left-[3%] z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d0d12]/90 border border-white/20 text-white/90 font-medium text-[10px] sm:text-[11px] backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-[#ec5b99] shadow-[0_0_6px_#ec5b99]"></span>
                            <span>Páginas web en Puerto Montt</span>
                        </div>
                    </div>

                    {/* 2. Typewriter Headline: Upper left of laptop screen */}
                    <div className="absolute top-[22%] left-[3%] max-w-[280px] z-10">
                        <h1 className="text-2xl sm:text-3xl font-[1000] leading-[1.08] tracking-tight m-0 text-left">
                            <span className="block text-[#ec5b99] min-h-[1.1em]">
                                {displayedPink}
                                {displayedPink.length < titles[titleIndex].pink.length && (
                                    <span className="inline-block w-[2.5px] h-[0.85em] bg-[#ec5b99] ml-1 align-middle animate-pulse" />
                                )}
                            </span>
                            <span className="block text-white min-h-[1.1em]">
                                {displayedWhite}
                                {displayedPink.length >= titles[titleIndex].pink.length && (
                                    <span className="inline-block w-[2.5px] h-[0.85em] bg-white ml-1 align-middle animate-pulse" />
                                )}
                            </span>
                        </h1>
                    </div>

                    {/* 3. Description Paragraph: Lower right of laptop screen */}
                    <div className="absolute top-[51%] right-[3%] max-w-[210px] z-10 text-right">
                        <p className="m-0 text-white/70 text-[10px] sm:text-[11px] leading-relaxed font-normal italic drop-shadow-md">
                            &ldquo;Creamos páginas web en Puerto Montt de alto impacto para impulsar tu negocio.&rdquo;
                        </p>
                    </div>

                    {/* 4. CTA Buttons: Over dark stone pedestal (Positioned lower down) */}
                    <div className="absolute bottom-[14%] left-[3%] right-[3%] z-10 flex items-center justify-center gap-2">
                        <a
                            href="https://wa.me/56987843957?text=%C2%A1Hola!%20Quiero%20cotizar%20una%20p%C3%A1gina%20web%20en%20Puerto%20Montt."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2.5 rounded-xl font-bold text-[10px] sm:text-xs text-white bg-[#ec5b99] hover:bg-[#d84b88] shadow-lg flex items-center justify-center gap-1.5 flex-1 max-w-[160px]"
                        >
                            <svg className="w-3.5 h-3.5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.6 0-3.1-.35-4.45-.98L3 20l.98-4.05A8.5 8.5 0 1 1 21 11.5z"></path>
                            </svg>
                            <span>Cotizar por WhatsApp</span>
                        </a>

                        <a
                            href="#planes"
                            className="px-3 py-2.5 rounded-xl font-bold text-[10px] sm:text-xs text-white bg-[#0d0d12]/90 border border-white/20 hover:border-white/40 flex items-center justify-center gap-1 flex-1 max-w-[140px]"
                        >
                            <span>Ver planes y precios</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
