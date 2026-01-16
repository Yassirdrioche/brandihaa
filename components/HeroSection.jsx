"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-transparent  font-display text-white selection:bg-white selection:text-black">

            {/* Background */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {[
                    "top-[15%] left-[10%] w-64 h-64 shape-chrome blur-[2px]",
                    "-bottom-20  w-96 h-96 torus-shape z-50 border-matte-white opacity-40",
                    "top-[10%] right-[15%] w-48 h-48 shape-obsidian",
                    "top-[40%] right-[25%] w-12 h-12 shape-chrome",
                    "bottom-[30%] left-[30%] w-8 h-8 shape-chrome blur-[1px]",
                    "top-1/2 left-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]",
                    "bottom-[20%] right-[10%] w-80 h-80 shape-matte"
                ].map((cls, i) => (
                    <motion.div
                        key={i}
                        className={`absolute rounded-full ${cls}`}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0]
                        }}
                        transition={{
                            duration: 12 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                >
                    <span className="size-1.5 bg-white rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                        The Super App Agency
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.12 }
                        }
                    }}
            className="text-6xl font-bruno-ace-sc md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] mb-12"
                >
                    {["CRAFTING", "DIGITAL", "EXCELLENCE"].map((text, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={
                                text === "DIGITAL"
                                    ? "block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                                    : "block"
                            }
                        >
                            {text}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16"
                >
                    <a href="#services">
                        <motion.button
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-obsidian rounded-full font-bold text-sm uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                        >
                            Start Your Project
                        </motion.button>
                    </a>

                    <a href="#showcase">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            className="px-10 py-5 bg-transparent border border-white/10 text-white rounded-full font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
                        >
                            View Showcase
                        </motion.button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.4em]">
                    Scroll to Explore
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
        </section>
    );
}
