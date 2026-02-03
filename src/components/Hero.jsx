import React from 'react';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] md:h-screen flex flex-col overflow-hidden bg-gray-50">

            {/* Static Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/pexels-ketut-subiyanto-5037355 2.svg"
                    alt="Wellness Background"
                    className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient for text readability - subtle fade from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-grow flex items-center justify-center px-4 mt-20">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg whitespace-nowrap"
                    >
                        .WELLNESS TAILORED TO YOU
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-white/95 text-sm md:text-lg font-medium mb-12 max-w-4xl mx-auto drop-shadow-md whitespace-nowrap"
                    >
                        Personalized care designed around your body, goals, and lifestyle.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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

            {/* Floating Text Us Button */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-10 left-10 z-20 hidden md:block"
            >
                <button className="flex items-center gap-3 bg-black/80 backdrop-blur text-white px-6 py-3 rounded-full hover:bg-black transition-colors shadow-2xl border border-white/10 group">
                    <MessageSquare size={18} className="group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-wide">Text Us</span>
                </button>
            </motion.div>
        </div>
    );
};

export default Hero;
