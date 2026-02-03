import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full overflow-hidden" style={{
            height: '100vh',
            minHeight: '650px',
            backgroundColor: '#f9f9f9'
        }}>
            {/* Static Image Background - extends behind navbar and announcement */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/pexels-ketut-subiyanto-5037355 2.svg"
                    alt="Wellness Background"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Content - positioned with padding from top to account for navbar */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 pt-[92px]">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg whitespace-nowrap"
                    >
                        .WELLNESS TAILORED TO YOU
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/95 text-sm md:text-lg font-medium mb-12 max-w-4xl mx-auto drop-shadow-md whitespace-nowrap"
                    >
                        Personalized care designed around your body, goals, and lifestyle.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <button className="bg-[#ADA77C] hover:bg-[#9C966C] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl min-w-[200px] border border-transparent hover:border-white/20">
                            Self-care quiz
                        </button>
                        <button className="bg-[#2D2D2D]/90 backdrop-blur-md hover:bg-black text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl min-w-[200px]">
                            Book Consultation
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Text Us Button - bottom left */}
            <div className="absolute bottom-8 left-8 z-20">
                <button className="bg-black/80 hover:bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-semibold transition-all hover:scale-105">
                    <MessageSquare size={18} />
                    TEXT US
                </button>
            </div>
        </div>
    );
};

export default Hero;
