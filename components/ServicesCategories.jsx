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
      className="relative z-50 w-full min-h-screen   text-white font-display "
    >
      {/* <div
        className="absolute inset-0 bg-fixed pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.85) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 1px, transparent 1px)
    `,
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute inset-0 bg-fixed opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "80px 80px",
        }}
      ></div> */}

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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight tracking-tight">
              <div className="flex flex-wrap items-center justify-center gap-x-8">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-split-human text-white/95"
                >
                  Our Expertise
                </motion.span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                ></motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-split-ai text-white/80"
                >
                  Our Services
                </motion.span>
              </div>
            </h1>
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
                className="service-card flex flex-col gap-12 p-12 group h-[500px]"
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
                  <span
                    className="material-symbols-outlined
                              group-hover:translate-x-[10px]
                                    text-sm"
                  >
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
