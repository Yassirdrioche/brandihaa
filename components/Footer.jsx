"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full  pt-32 pb-12 px-12 border-t border-white/[0.03] font-display overflow-hidden">
      {/* Background Aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.svg"
                  alt="Brandiha Logo"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
                <h3 className="text-2xl font-light tracking-tight">
                  <span className="text-serif-ultra">Brandi</span>
                  <span className="font-technical text-white/40 uppercase text-lg ml-2">
                    Agency
                  </span>
                </h3>
              </div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase leading-relaxed max-w-sm">
                Converging human creativity with synthetic intelligence to
                architect the next generation of digital dominance.
              </p>
              <div className="flex gap-6">
                {["X-PROTOCOL", "QUANTUM-INSTAGRAM", "LINKEDIN-NETWORK"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[10px] tracking-[0.3em] text-white/20 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  ),
                )}
              </div>
            </motion.div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                Navigation
              </h4>
              {["Nexus Hub", "Protocol", "Manifesto", "Archives"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                Systems
              </h4>
              {["Creative AI", "Bespoke Design", "Strategy", "Consulting"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-2">
                Data
              </h4>
              <div className="p-4 border border-white/5 bg-white/[0.02] rounded-lg">
                <p className="text-[9px] tracking-[0.3em] text-white/20 uppercase mb-2">
                  Server Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="size-1.5 bg-green-500/50 rounded-full animate-pulse"></div>
                  <p className="text-xs font-mono text-white/60">Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4 opacity-30">
            <span className="material-symbols-outlined text-lg">adjust</span>
            <p className="text-[8px] tracking-[0.8em] uppercase">
              Brandiha Nexus Protocol © 2026
            </p>
          </div>

          <div className="flex gap-12 text-[8px] tracking-[0.4em] uppercase text-white/20">
            <a className="hover:text-white transition-colors" href="#">
              Legal Architecture
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Privacy Protocol
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Security Core
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-[8px] tracking-[0.5em] text-white/10 uppercase mb-1">
                Cohesion Factor
              </p>
              <p className="text-xs font-mono text-white/40">0.9984723</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
