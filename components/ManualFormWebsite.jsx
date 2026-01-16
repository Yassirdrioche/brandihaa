"use client";

export default function ManualFormWebsite({ onClose }) {
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
                                Website Request
                            </h1>
                            <p className="text-white/40 text-lg max-w-lg mx-auto font-light">
                                Provide us with the details, and our artisans will craft your digital presence.
                            </p>
                        </div>

                        <div className="glass-panel rounded-xl p-8 md:p-12 shadow-2xl relative w-full max-w-4xl">
                             <form className="flex flex-col gap-8">
                                {/* Basic Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Company Name *</label>
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
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Address</label>
                                        <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                                    </div>
                                </div>

                                {/* Activity & Website Type */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Field of Activity *</label>
                                        <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                            <option>E-commerce</option>
                                            <option>Services</option>
                                            <option>Education</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Website Type *</label>
                                        <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                            <option>Showcase (Site vitrine)</option>
                                            <option>E-commerce Store</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Brand Assets */}
                                <div className="border-t border-white/10 pt-6">
                                    <h3 className="text-white text-lg font-bold mb-4">Brand Assets & Technicals</h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Do you have a Visual Identity (Logo, Colors)? *</label>
                                            <div className="flex gap-4">
                                                <label className="flex items-center gap-2"><input type="radio" name="branding" value="yes" className="text-primary-blue" /> Yes</label>
                                                <label className="flex items-center gap-2"><input type="radio" name="branding" value="no" className="text-primary-blue" /> No</label>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Domain Name status</label>
                                            <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors mb-2">
                                                <option>Yes, I have one</option>
                                                <option>No, I need help choosing/booking</option>
                                            </select>
                                            <input type="text" placeholder="If you have an idea, type it here..." className="bg-white/5 border border-white/10 rounded-lg p-3 text-white/60 text-sm focus:outline-none focus:border-primary-blue transition-colors" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Hosting *</label>
                                             <div className="flex gap-4">
                                                <label className="flex items-center gap-2"><input type="radio" name="hosting" value="yes" className="text-primary-blue" /> Yes, I have hosting</label>
                                                <label className="flex items-center gap-2"><input type="radio" name="hosting" value="no" className="text-primary-blue" /> No, please handle it</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content & Products */}
                                <div className="border-t border-white/10 pt-6">
                                    <h3 className="text-white text-lg font-bold mb-4">Content & Products</h3>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Languages *</label>
                                        <div className="flex gap-4 flex-wrap">
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Arabic</label>
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> French</label>
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> English</label>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Approximate # of Products</label>
                                            <input type="number" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                                        </div>
                                         <div className="flex flex-col gap-2">
                                            <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Product Photos</label>
                                            <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                                <option>Ready</option>
                                                <option>Need a photoshoot</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 mb-4">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Product Descriptions</label>
                                        <select className="bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors">
                                            <option>I have descriptions</option>
                                            <option>I need help writing/improving them</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                         <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Payment Methods</label>
                                        <div className="flex gap-4 flex-wrap">
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Cash on Delivery</label>
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Credit Card</label>
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> PayPal</label>
                                            <label className="flex items-center gap-2"><input type="checkbox" className="text-primary-blue" /> Other</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-white/80 text-xs font-semibold uppercase tracking-widest">Desired Deadline *</label>
                                        <input type="text" placeholder="e.g. 2 weeks" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
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
