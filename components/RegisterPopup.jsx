
"use client";

export default function RegisterPopup({ onClose, onRegister }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        onRegister();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 glass-effect">
        <div className="relative w-full max-w-md bg-charcoal border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col font-manrope animate-in fade-in zoom-in duration-300">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors duration-200">
                <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-8">
                <div className="text-center mb-6">
                    <h2 className="text-white text-2xl font-bold uppercase tracking-wider mb-2">Unlock Your Design</h2>
                    <p className="text-white/50 text-sm">Register to download your high-resolution assets.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 text-xs font-bold uppercase tracking-widest">Full Name</label>
                        <input type="text" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 text-xs font-bold uppercase tracking-widest">Email Address</label>
                        <input type="email" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-white/80 text-xs font-bold uppercase tracking-widest">Password</label>
                        <input type="password" className="bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary-blue transition-colors" required />
                    </div>

                    <button type="submit" className="mt-4 generate-glow w-full flex items-center justify-center gap-2 bg-white text-black rounded-lg py-4 text-sm font-black uppercase tracking-[0.2em] transition-all hover:scale-[1.02]">
                        <span>Create Account</span>
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">Already have an account? <a href="#" className="text-white hover:text-primary-blue transition-colors underline decoration-white/30">Login</a></p>
                </div>
            </div>
        </div>
    </div>
  );
}
