"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <main className="flex-1 flex  flex-col items-center justify-center relative  pt-20 px-4">
      {/* <div
        className="absolute inset-0 pointer-events-none bg-fixed opacity-[0.06]"
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

      <div className="text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight mb-12 leading-tight tracking-tight">
          <div className="flex flex-wrap items-center justify-center gap-x-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-split-human text-white/95"
            >
              Creativity
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
              Intelligence
            </motion.span>
          </div>
        </h1>

        <div className="relative w-full max-w-5xl z-50 h-[350px] md:h-[450px] my-12 mx-auto flex items-center justify-center">
          <motion.div
            animate={{ left: ["10%", "90%", "10%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="scan-line z-40 mix-blend-difference"
          ></motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute z-20 size-20 md:size-24 rounded-full glass-premium flex items-center justify-center border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)]"
          >
            <div className="absolute inset-0 bg-white/5 animate-pulse rounded-full"></div>
            <span className="material-symbols-outlined text-white/80 text-3xl font-extralight">
              flare
            </span>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-between px-12 md:px-24">
            <motion.div
              initial={{ opacity: 0, filter: "grayscale(1) brightness(0)" }}
              animate={{
                opacity: 0.8,
                filter: "grayscale(1) brightness(1.2) contrast(1.1)",
              }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="w-1/2 h-full relative"
            >
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwxUrDd1vPvtiHhSZWw_4jpd6ZJQjdHt9Zf4kuBWnSqeE_GffaV6UXHIUpjXoPgjyDB_MLPUHp6YTHqbVvkrqcj0o0aw7rjHU8_YztL4SdZ-f76bnl7YDfJ8pneSTfgtm_T9ACIUrxuR_6bJJiAb6PAF8gITitwYmDmZtbHS1pgXho-3i1_xAeSJVXZQUTsNx8dGfH-zn8RsJc_lDVh73nmvzMW0qn2xWKSfGjeOICuRA6xLvMYV0tOD-grLpAREJD2IgqMPlq5CE')",
                }}
              ></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "grayscale(1) brightness(0)" }}
              animate={{
                opacity: 0.8,
                filter: "grayscale(1) brightness(1.1) contrast(1.2)",
              }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="w-1/2 h-full relative"
            >
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain transform -scale-x-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1wlE3a7qqX-h1GlbqpqiXR851Sn4uFrmCP3OApR8zbKzt3s_JrpVEcIgZPy9n5_jx5_s0_tvET3PPhq1a0dNXOUgZZEvJT_1st6bfcl3vgBfe4yZlYvTivIXU7pAHK41XzXf8tGUQmetaPuNiDpO6NeCw7jzIe7N_heYcXmYl3r4QjlIci-sVhqa1FeMgV_ydIbacnaKz6_TicFjoGGCQ5xcpMwK9nfinVmVRawkywkebENgJr6Vsj01Bciz4HQCenZTGFgEwzKg')",
                }}
              ></div>
            </motion.div>
          </div>
          <div className="absolute z-30 size-1 bg-white rounded-full shadow-[0_0_20px_2px_rgba(255,255,255,1)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-2xl mx-auto space-y-12"
        >
          <p className="text-sm md:text-base text-white/40 font-light leading-relaxed tracking-widest uppercase px-6">
            The architectural synthesis of human intuition and synthetic logic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="#services">
              <button className="w-full sm:w-auto min-w-[220px] h-14 glass-button text-[11px] tracking-[0.4em] uppercase text-white">
                Start your project
              </button>
            </a>
            <a href="#manifest">
              <button className="w-full sm:w-auto min-w-[220px] h-14 glass-button text-[11px] tracking-[0.4em] uppercase text-white/50 hover:text-white">
                View Manifest
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="w-full px-8 py-16 mt-auto"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5">
          <StatBox
            label="Synapse Latency"
            value="0.002ms"
            status="Nominal"
            icon="circle_notifications"
          />
          <StatBox
            label="Cohesion Rate"
            value="99.98%"
            status="Optimized"
            icon="all_inclusive"
            border
          />
          <StatBox
            label="Neural Capacity"
            value="Infinite"
            status="Scalable"
            icon="memory"
          />
        </div>
      </motion.section>
    </main>
  );
};

const StatBox = ({ label, value, status, icon, border }) => (
  <div
    className={`nexus-gradient-bg p-10 group z-10 ${border ? "-x border-white/5" : ""}`}
  >
    <div className="flex justify-between items-start mb-6">
      <p className="text-white/30 text-[9px] font-medium uppercase tracking-[0.3em]">
        {label}
      </p>
      <span className="material-symbols-outlined text-white/20 text-lg">
        {icon}
      </span>
    </div>
    <div className="flex items-baseline gap-3">
      <p className="text-2xl font-light tracking-tighter">{value}</p>
      <p className="text-[9px] text-white/20 uppercase tracking-widest">
        {status}
      </p>
    </div>
  </div>
);

export default HeroSection;
