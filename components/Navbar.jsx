"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-white/5 px-6 md:px-12 py-5 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={30}
                height={30}
                className="group-hover:rotate-12 transition-transform duration-500"
              />
              <div className="absolute -inset-1 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h2 className="text-lg font-bold tracking-tighter  uppercase">
              Brandihaa
            </h2>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[9px] uppercase tracking-[0.4em] font-medium text-white/50  ">
          <a
            className="hover:text-white transition-all hover:tracking-[0.5em]"
            href="#"
          >
            Services
          </a>
          <a
            className="hover:text-white transition-all hover:tracking-[0.5em]"
            href="#"
          >
            Methodology
          </a>
          <a
            className="hover:text-white transition-all hover:tracking-[0.5em]"
            href="#"
          >
            Portfolio
          </a>
          <a
            className="hover:text-white transition-all hover:tracking-[0.5em]"
            href="#"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[9px] uppercase tracking-[0.3em]  text-white/60 hover:text-white transition-colors">
            Client Login
          </button>
          <button className="flex items-center justify-center h-10 px-6 rounded-full glass-button btn-nexus hover:bg-white hover:text-black group">
            
            START PROJECT
          </button>
        </div>
      </div>
    </header>
  );
}
