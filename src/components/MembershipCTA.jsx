import React from 'react';

const MembershipCTA = () => {
    return (
        <div id="memberships-section" className="w-full py-0">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center py-16 md:py-0 px-4 md:px-0 aspect-auto md:aspect-[21/9] min-h-[400px] md:min-h-0">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/membership_cta_bg.png"
                            alt="Membership Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50 md:bg-black/40 md:hover:bg-black/50 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-4xl mx-auto">
                        <div className="text-[10px] md:text-sm font-semibold text-white/90 uppercase tracking-[0.2em] mb-4 drop-shadow-md">
                            Simplify & Save
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight whitespace-nowrap drop-shadow-xl">
                            .Memberships Designed for You
                        </h2>

                        <p className="text-base md:text-xl text-white/95 mb-10 max-w-lg mx-auto leading-relaxed drop-shadow-lg">
                            Flexible plans starting from just <strong className="text-[#ADA77C] bg-black/20 px-2 py-0.5 rounded backdrop-blur-sm">$99 per month.*</strong>
                        </p>

                        <a
                            href="/memberships"
                            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-10 py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-2xl"
                        >
                            FIND YOUR PEPTIDE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipCTA;
