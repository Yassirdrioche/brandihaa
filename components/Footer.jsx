"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="relative z-10 overflow-hidden bg-black text-white">

            {/* Subtle top glow */}
            <div className="absolute inset-x-0 -top-32 h-64 bg-white/[0.03] blur-[120px] pointer-events-none" />

            {/* Top divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="px-4 lg:px-20 py-20"
            >
                <div className="max-w-[1400px] mx-auto flex flex-col gap-16">

                    {/* Main Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">

                        {/* Brand */}
                        <div className="flex items-center gap-4">
                          <Image
                                             src="/logo.svg"
                                             alt="Logo"
                                             width={32}
                                             height={32}
                                         />
                            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40">
                                Brandiha Agency
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex gap-12 text-[11px] font-bold tracking-[0.3em] uppercase">
                            {["Manifesto", "Terms", "Contact"].map((item) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    whileHover={{ y: -2 }}
                                    className="text-white/30 hover:text-white transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] uppercase tracking-[0.35em] text-white/50">
                        <span>© 2026 Brandiha Agency</span>
                        <span>Crafted with Precision · Digital Excellence</span>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}
