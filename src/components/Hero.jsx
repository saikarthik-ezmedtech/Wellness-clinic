import React from 'react';
import { MessageSquare, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden bg-[#f9f9f9]">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y: y1, scale }}
                className="absolute inset-0 z-0 h-[120%]"
            >
                <img
                    src="/assets/hero_bg.png"
                    alt="Wellness Background"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchpriority="high"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/25"></div>
                {/* Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </motion.div>

            {/* Content - centered within the hero area */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg"
                    >
                        .WELLNESS TAILORED TO YOU
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/95 text-xs sm:text-sm md:text-lg font-medium mb-12 max-w-4xl mx-auto drop-shadow-md px-2"
                    >
                        Personalized care designed around your body, goals, and lifestyle.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-5"
                    >
                        <a href="/quiz" className="group bg-gradient-to-r from-[#ADA77C] to-[#9C966C] hover:from-[#9C966C] hover:to-[#8B855B] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-[0_15px_30px_-10px_rgba(173,167,124,0.6)] hover:shadow-[0_20px_35px_-10px_rgba(173,167,124,0.7)] min-w-[220px] flex items-center justify-center gap-2 group">
                            <span>Self-Care Quiz</span>
                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <button className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-[#1A1A1A] text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl border border-white/20 min-w-[220px]">
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
