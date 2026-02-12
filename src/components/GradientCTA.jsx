import React from 'react';

const GradientCTA = () => {
    return (
        <div className="w-full py-16 md:py-24">
            <div className="max-w-[1380px] mx-auto px-5">
                <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center min-h-[350px] md:min-h-0 md:h-[400px] py-12 md:py-0">
                    {/* High-End Clinic Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/wellness_consultation_bg.png"
                            alt="Wellness Consultation"
                            className="w-full h-full object-cover"
                        />
                        {/* Dark Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-6 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                            Book a free consultation and start your wellness journey.
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <a
                                href="#get-started"
                                className="bg-white hover:bg-[#fcfaf2] text-[#75714B] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all transform hover:scale-105 shadow-xl min-w-[200px] flex items-center justify-center"
                            >
                                Get Started
                            </a>
                            <a
                                href="/quiz"
                                className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all transform hover:scale-105 min-w-[200px] flex items-center justify-center"
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
