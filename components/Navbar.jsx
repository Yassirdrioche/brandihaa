"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-8">
            <Link href="/">
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                />
                <h2 className="text-lg font-bold tracking-tighter uppercase">Brandihaa</h2>
            </div></Link>
            <nav className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/60">
                <a className="hover:text-white transition-colors" href="#">Services</a>
                <a className="hover:text-white transition-colors" href="#">Methodology</a>
                <a className="hover:text-white transition-colors" href="#">Portfolio</a>
                <a className="hover:text-white transition-colors" href="#">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center size-10 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 group">
                    <span className="material-symbols-outlined text-[20px]">person_add</span>
                </button>
            </div>
        </header>
    );
}
