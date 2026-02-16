"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
            {/* Animated Blobs for Aurora effect */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -80, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[#bf9b30]/20 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 1.1, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#bf9b30]/15 rounded-full blur-[100px]"
            />

            <motion.div
                animate={{
                    x: [0, 50, -100, 0],
                    y: [0, 120, -50, 0],
                    rotate: [0, 90, 180, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[20%] right-[10%] w-[50vw] h-[50vw] bg-[#bf9b30]/10 rounded-full blur-[150px]"
            />

            {/* Mesh Surface Overlay */}
            <div className="absolute inset-0 bg-[#05050b]/20 backdrop-blur-[20px]"></div>

            {/* Dark vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050b]/40 to-[#05050b]"></div>
        </div>
    );
};

export default AuroraBackground;
