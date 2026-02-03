import React from 'react';

const GradientCTA = () => {
    return (
        <div className="w-full py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center" style={{ aspectRatio: '21 / 9' }}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/image 29.svg"
                            alt="Gradient Background"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-6 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                            Book a free consultation and start your wellness journey.
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#get-started"
                                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg min-w-[180px]"
                            >
                                Get Started
                            </a>
                            <a
                                href="#quiz"
                                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 min-w-[180px]"
                            >
                                Find Your Peptide
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradientCTA;
