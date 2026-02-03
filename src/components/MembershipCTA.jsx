import React from 'react';

const MembershipCTA = () => {
    return (
        <div className="w-full py-0">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center" style={{ aspectRatio: '21 / 9' }}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/assets/image 25.svg"
                            alt="Membership Background"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-6 max-w-3xl mx-auto">
                        <div className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-2">
                            Simplify & Save
                        </div>

                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
                            .Memberships Designed for You
                        </h2>

                        <p className="text-base md:text-xl text-white mb-6">
                            Flexible plans starting from just <strong>$99 per month.*</strong>
                        </p>

                        <a
                            href="/memberships"
                            className="inline-block bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipCTA;
