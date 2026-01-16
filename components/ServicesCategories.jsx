"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ServiceSelectionPopup from "./ServiceSelectionPopup";

export default function ServicesCategories({ onMethodSelect }) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = (category) => {
        setSelectedCategory(category);
        setIsPopupOpen(true);
    };

    const handleConfirmSelection = (method) => {
        setIsPopupOpen(false);
        if (onMethodSelect) {
            onMethodSelect(method, selectedCategory);
        }
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="services"
            className="relative z-50 w-full min-h-screen  bg-transparent text-white font-display"
        >
            {/* Background Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none ">
                <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full shape-chrome opacity-80 blur-[2px]" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 torus-shape opacity-40 rotate-45 border-matte-white" />
                <div className="absolute top-[10%] right-[15%] w-48 h-48 rounded-full shape-obsidian opacity-90" />
                <div className="absolute top-[40%] right-[25%] w-12 h-12 rounded-full shape-chrome" />
                <div className="absolute bottom-[30%] left-[30%] w-8 h-8 rounded-full shape-chrome blur-[1px]" />
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full shape-matte opacity-90" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="relative z-10 px-4 lg:px-20 flex justify-center py-24"
            >
                <div className="flex flex-col max-w-[1400px] w-full">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-center gap-8 pb-10 border-b border-white/10">
                            <div>
                                <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-gray-muted mb-4 block">
                                    PREMIUM SERVICES
                                </span>
                                <h2 className="text-6xl md:text-8xl uppercase font-bruno-ace-sc lg:text-8xl leading-none">
                                    Our Expertise
                                </h2>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px backdrop-blur-sm"
                    >
                        {[
                            {
                                id: "website",
                                index: "01",
                                icon: "language",
                                title: "Website + Landing Pages",
                                desc: "High-conversion digital architectures optimized for performance and aesthetic dominance.",
                            },
                            {
                                id: "photography",
                                index: "02",
                                icon: "photo_camera",
                                title: "Videography / Photography",
                                desc: "Cinematic visual storytelling that captures the essence of premium luxury and detail.",
                            },
                            {
                                id: "smm",
                                index: "03",
                                icon: "hub",
                                title: "SMM Strategies",
                                desc: "Strategic social presence management focused on organic growth and premium engagement.",
                            },
                            {
                                id: "marketing",
                                index: "04",
                                icon: "tactic",
                                title: "Marketing Execution",
                                desc: "Data-driven growth protocols and market positioning for elite industry leaders.",
                            },
                        ].map((service) => (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -8 }}
                                className="service-card rounded-lg flex flex-col gap-12 p-12 group h-[500px]"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="material-symbols-outlined text-5xl font-extralight">
                                        {service.icon}
                                    </span>
                                    <span className="text-[11px] font-bold text-white/20 tracking-[0.3em]">
                                        {service.index}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-bold uppercase leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 text-sm font-light leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>

                                <motion.button

                                    onClick={() => openPopup(service.id)}
                                    className="mt-auto group pt-8 border-t border-white/5 flex items-center text-[10px] font-bold tracking-[0.3em] uppercase transition-all"
                                >
                                    <span className="">View Details</span>
                              <span className="material-symbols-outlined
                              group-hover:translate-x-[10px]
                                    text-sm">
                                        arrow_forward
                                    </span>
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Popup */}
            {isPopupOpen && (
                <ServiceSelectionPopup
                    onClose={() => setIsPopupOpen(false)}
                    onConfirm={handleConfirmSelection}
                    category={selectedCategory}
                />
            )}
        </section>
    );
}
