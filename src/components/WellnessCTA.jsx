import React from 'react';

const WellnessCTA = () => {
    return (
        <section className="w-full py-20 md:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10 leading-tight">
                    Ready to feel good again?<br />
                    Start your wellness journey today.
                </h2>

                <div className="flex justify-center">
                    <a
                        href="#get-started"
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl"
                    >
                        Book A Consultation
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WellnessCTA;
