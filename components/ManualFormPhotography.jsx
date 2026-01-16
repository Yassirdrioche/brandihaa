"use client";

export default function ManualFormPhotography({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-effect animate-in fade-in duration-300">
            <div className="relative w-full max-w-[1200px] bg-background-light dark:bg-background-dark font-display text-white rounded-xl shadow-2xl overflow-y-auto max-h-[90vh] flex flex-col relative overflow-x-hidden border border-white/10 modern-scrollbar">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 text-white/40 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full">
                    <span className="material-symbols-outlined !text-2xl">close</span>
                </button>

                {/* Subtle Background Element */}
                <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full chrome-orb opacity-40 blur-[2px] pointer-events-none z-0"></div>
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary-blue/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

                <div className="relative z-10 p-8 md:p-12">
                     <div className="w-full flex flex-col items-center">
                        <div className="mb-10 text-center">
                            <h1 className="text-white tracking-tighter text-5xl md:text-6xl font-bold leading-[1.1] pb-4">
                                Photography Request
                            </h1>
                            <p className="text-white/40 text-lg max-w-lg mx-auto font-light">
                                Capture your brand's essence with cinematic excellence.
                            </p>
                        </div>

                        <div className="glass-panel rounded-xl p-8 md:p-12 shadow-2xl relative w-full max-w-4xl">
                             <form className="flex flex-col gap-8">
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Company / Client Name *</label>
                                        <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Email *</label>
                                        <input type="email" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Phone Number *</label>
                                        <input type="tel" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Location of Shoot</label>
                                        <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Project Type *</label>
                                        <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                            <option>Product Photography</option>
                                            <option>Corporate / Headshots</option>
                                            <option>Event Coverage</option>
                                            <option>Brand Campaign</option>
                                            <option>Real Estate / Architecture</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Preferred Date</label>
                                        <input type="date" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                                    </div>
                                </div>

                                {/* Creative Direction */}
                                <div className="border-t border-white/10 pt-6">
                                    <h3 className="text-white text-lg font-bold mb-4">Creative Direction</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Deliverables Required *</label>
                                            <div className="flex gap-4 flex-wrap">
                                                <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Photos Only</label>
                                                <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Video (Reels/TikTok)</label>
                                                <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Cinematic Film (Landscape)</label>
                                                <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Drone Footage</label>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Style / Mood</label>
                                            <input type="text" placeholder="e.g., Minimalist, High-Contrast, Warm & Cozy..." className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                                        </div>
                                         <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Reference Links (Pinterest/Instagram)</label>
                                            <textarea className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors h-20"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Estimated Duration *</label>
                                        <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                            <option>Half Day (4 hours)</option>
                                            <option>Full Day (8 hours)</option>
                                            <option>Multiple Days</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button className="generate-glow w-full flex items-center justify-center gap-3 bg-white text-black rounded-full py-5 text-lg font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-[1.01] active:scale-[0.98]">
                                        <span>Submit Request</span>
                                        <span className="material-symbols-outlined font-bold">send</span>
                                    </button>
                                </div>
                             </form>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}
