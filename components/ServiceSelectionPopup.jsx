"use client";

import { useState } from "react";

export default function ServiceSelectionPopup({ onClose, onConfirm }) {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleConfirm = () => {
    if (selectedMethod) {
        onConfirm(selectedMethod);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-effect">
        <div className="relative w-full max-w-[960px] bg-charcoal border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col font-manrope">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined !text-3xl">close</span>
            </button>
            <div className="pt-12 pb-8 px-12 text-center">
                <h1 className="text-white tracking-tight text-[36px] font-bold leading-tight pb-3 uppercase tracking-[0.1em]">
                    Select Methodology
                </h1>
                <p className="text-white/60 text-base font-normal leading-normal max-w-lg mx-auto">
                    Choose how you would like us to approach your project. Our AI systems provide speed, while our artisans provide soul.
                </p>
            </div>
            <div className="px-12 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AI-Powered Card */}
                    <div
                        onClick={() => setSelectedMethod('ai')}
                        className={`group relative bg-[#1a1a1a] border ${selectedMethod === 'ai' ? 'border-primary-blue ring-1 ring-primary-blue/50' : 'border-white/5 hover:border-white/20'} rounded-xl p-8 transition-all duration-300 cursor-pointer card-glow`}>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-8 relative">
                                <div className="absolute inset-0 bg-primary-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-symbols-outlined !text-[64px] text-white relative z-10 group-hover:scale-110 transition-transform duration-500">blur_on</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">AI-Powered</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                High-speed execution, algorithmic precision, and scalable innovation for modern demands.
                            </p>
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-primary-blue font-bold">
                                <span className="size-1.5 bg-primary-blue rounded-full animate-pulse"></span>
                                Fast Delivery
                            </div>
                        </div>
                    </div>
                    {/* Manual Process Card */}
                    <div
                        onClick={() => setSelectedMethod('manual')}
                        className={`group relative bg-[#1a1a1a] border ${selectedMethod === 'manual' ? 'border-white ring-1 ring-white/50' : 'border-white/5 hover:border-white/20'} rounded-xl p-8 transition-all duration-300 cursor-pointer card-glow`}>
                        <div className="flex flex-col items-center text-center">
                             <div className="mb-8 relative">
                                <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="material-symbols-outlined !text-[64px] text-white relative z-10 group-hover:scale-110 transition-transform duration-500">draw</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider">Manual Process</h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-6">
                                Artisanal strategy, human-centric design, and bespoke craftsmanship for unique excellence.
                            </p>
                            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                                <span className="size-1.5 bg-white/40 rounded-full"></span>
                                Bespoke Quality
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white/[0.02] px-12 py-8 flex flex-col items-center border-t border-white/5">
                <button
                    onClick={handleConfirm}
                    disabled={!selectedMethod}
                    className={`w-full max-w-sm flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 ${selectedMethod ? 'bg-white text-charcoal hover:bg-primary-blue hover:text-white' : 'bg-white/10 text-white/30 cursor-not-allowed'} text-sm font-black uppercase tracking-[0.2em] transition-all duration-300`}>
                    <span className="truncate">Confirm Selection</span>
                </button>
                <p className="mt-4 text-[11px] text-white/30 uppercase tracking-[0.1em]">
                    You can modify your workflow preference later in project settings.
                </p>
            </div>
        </div>
    </div>
  );
}
