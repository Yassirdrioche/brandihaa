"use client";

import { useState } from "react";
import RegisterPopup from "@/components/RegisterPopup";
import Image from "next/image";

export default function AiForm({ service, onClose }) {
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleGenerate = (e) => {
        e.preventDefault();
        setIsGenerating(true);
        // Simulate generation
        setTimeout(() => {
            setIsGenerating(false);
            setHasGenerated(true);
        }, 2000);
    };

    const handleDownload = () => {
        if (!isRegistered) {
            setShowRegisterPopup(true);
        } else {
            // Trigger download logic
            alert("Download starting...");
        }
    };

    const handleRegisterSuccess = () => {
        setIsRegistered(true);
        setShowRegisterPopup(false);
        // Auto download after register?
        alert("Registration successful! Download starting...");
    };

    // If showing register popup, we can either:
    // 1. Return ONLY the register popup (replacing this one)
    // 2. Render it ON TOP (using z-index)
    // Let's render it on top so context isn't lost.

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-effect animate-in fade-in duration-300">
            {showRegisterPopup && (
                <RegisterPopup onClose={() => setShowRegisterPopup(false)} onRegister={handleRegisterSuccess} />
            )}

            <div className="relative w-full max-w-[1200px] bg-background-light dark:bg-background-dark font-space text-white rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col relative overflow-x-hidden border border-white/10 modern-scrollbar">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 text-white/40 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full">
                    <span className="material-symbols-outlined !text-2xl">close</span>
                </button>

                 {/* Subtle Background Element: Chrome Orb */}
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full chrome-orb opacity-40 blur-[2px] pointer-events-none z-0"></div>
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="relative z-10 p-8 md:p-12">
                     {!hasGenerated ? (
                        <>
                            <header className="flex items-center justify-between whitespace-nowrap border-b border-white/10 pb-6 mb-8 w-full">
                                <div className="flex items-center gap-4">
                                    <div className="size-6 text-primary-blue">
                                         <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                />
                                    </div>
                                    <h2 className="text-white text-2xl font-bold leading-tight tracking-tight uppercase italic">Brandiha AI</h2>
                                </div>
                            </header>

                            <main className="flex-1 flex flex-col items-center justify-center">
                                <div className="w-full flex flex-col lg:flex-row gap-12">
                                    <div className="flex-1">
                                        <h1 className="text-white tracking-tighter text-5xl md:text-6xl font-bold leading-[1.1] pb-4">
                                            AI-Powered <br/> <span className="text-gray-muted">Generation.</span>
                                        </h1>
                                        <p className="text-white/40 text-lg font-light mb-8">
                                            Harness algorithmic precision to generate high-fidelity prototypes for your {service || 'project'}.
                                        </p>

                                        <div className="glass-panel rounded-xl p-8 relative">
                                            <form className="flex flex-col gap-6" onSubmit={handleGenerate}>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Project Name</label>
                                                    <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="e.g. Neo-Tokyo Coffee Shop" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Industry</label>
                                                    <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                                        <option>Fashion & Apparel</option>
                                                        <option>Tech & SaaS</option>
                                                        <option>Real Estate</option>
                                                        <option>Hospitality</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Aesthetic Style</label>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <button type="button" className="border border-white/10 hover:border-primary-blue/50 rounded-lg p-4 text-center text-sm text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10">Minimalist</button>
                                                        <button type="button" className="border border-white/10 hover:border-primary-blue/50 rounded-lg p-4 text-center text-sm text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10">Brutalist</button>
                                                        <button type="button" className="border border-white/10 hover:border-primary-blue/50 rounded-lg p-4 text-center text-sm text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10">Cyberpunk</button>
                                                        <button type="button" className="border border-white/10 hover:border-primary-blue/50 rounded-lg p-4 text-center text-sm text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10">Luxury</button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">AI Prompt Details</label>
                                                    <textarea className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors h-32" placeholder="Describe your vision in detail..."></textarea>
                                                </div>

                                                <button type="submit" disabled={isGenerating} className="mt-4 generate-glow w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-5 text-lg font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:cursor-wait">
                                                    {isGenerating ? (
                                                        <span>Generating...</span>
                                                    ) : (
                                                        <>
                                                            <span>Generate Concept</span>
                                                            <span className="material-symbols-outlined font-bold">blur_on</span>
                                                        </>
                                                    )}
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="hidden xl:flex flex-1 items-center justify-center relative">
                                        <div className="w-full aspect-square rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent opacity-50"></div>
                                            <span className="material-symbols-outlined text-[120px] text-white/5">image</span>
                                            <p className="absolute bottom-10 text-white/20 text-sm uppercase tracking-widest">Preview Area</p>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </>
                     ) : (
                        // Result View
                        <div className="flex flex-col items-center justify-center w-full h-full animate-in fade-in zoom-in duration-500">
                             <h2 className="text-white text-3xl font-bold uppercase tracking-wider mb-8">Generation Complete</h2>

                             <div className="relative w-full max-w-2xl aspect-video bg-black/50 rounded-xl overflow-hidden mb-8 border border-white/10 shadow-2xl group">
                                  {/* Mock Image Placeholder */}
                                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black flex items-center justify-center">
                                     <span className="material-symbols-outlined text-white/20 text-9xl">auto_awesome</span>
                                  </div>
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                                  {/* Mock Result Label */}
                                  <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded text-xs uppercase tracking-widest text-white/80 backdrop-blur-md">
                                      AI Generated Preview
                                  </div>
                             </div>

                             <div className="flex gap-4">
                                <button onClick={() => setHasGenerated(false)} className="px-8 py-4 border border-white/10 rounded-full text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                                    Regenerate
                                </button>
                                <button onClick={handleDownload} className="px-8 py-4 bg-primary-blue text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary-blue/80 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                    <span>Download Asset</span>
                                    <span className="material-symbols-outlined text-lg">download</span>
                                </button>
                             </div>
                        </div>
                     )}
                </div>
            </div>
        </div>
    );
}
