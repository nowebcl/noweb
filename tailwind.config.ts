import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                foreground: "#ffffff",
                accent: {
                    DEFAULT: "#00d1ff",
                    muted: "#0088aa",
                },
                card: {
                    bg: "#141414",
                },
                borderBase: "#262626",
            },
            fontFamily: {
                montserrat: ["var(--font-montserrat)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;
