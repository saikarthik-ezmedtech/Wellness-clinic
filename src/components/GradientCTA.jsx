import React from 'react';
import { Play } from 'lucide-react';

const GradientCTA = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
            <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center" style={{ aspectRatio: '28 / 9' }}>
                <div className="absolute inset-0">
                    <img
                        src="/assets/image 29.svg"
                        alt="Gradient Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm mb-8 leading-relaxed">
                        .Book a free consultation and start your wellness journey
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-white/30 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all">
                            Book Now
                        </button>
                        <button className="bg-[#2D2D2D] hover:bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2">
                            <span>Find your peptide</span>
                            <Play size={10} fill="currentColor" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientCTA;
