import React from 'react';
import { motion } from 'framer-motion';

const FooterLinks = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const columnVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="w-full py-0" style={{ backgroundColor: '#f9f9f9' }}>
            <motion.div
                className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className="bg-[#f5f5f5] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

                    {/* Peptides Column */}
                    <motion.div className="flex flex-col" variants={columnVariants}>
                        <h3 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-6 sm:mb-8">Peptides</h3>
                        <div className="flex flex-col gap-2">
                            <a href="/for-him" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">For Him</a>
                            <a href="/for-her" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">For Her</a>
                            <a href="/for-weight-loss" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Weight Loss</a>
                            <a href="/for-anti-aging" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Anti-Aging</a>
                            <a href="/for-strength-and-fitness" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Strength & Fitness</a>
                            <a href="/for-brain-health" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Brain Health</a>
                        </div>
                    </motion.div>

                    {/* Popular Column */}
                    <motion.div className="flex flex-col" variants={columnVariants}>
                        <h3 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-6 sm:mb-8">Popular</h3>
                        <div className="flex flex-col gap-2">
                            <a href="/tirzepatide-semaglutide" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Compounded GLP-1</a>
                            <a href="/NAD" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">NAD+</a>
                            <a href="/define-stack" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Define Stack</a>
                            <a href="/empowerher-blend" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">EmpowerHer Blend</a>
                            <a href="/fat-burner-blend" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Fat Burner Blend</a>
                            <a href="/recovery-blend" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Recovery Blend</a>
                        </div>
                    </motion.div>

                    {/* Navigate Column */}
                    <motion.div className="flex flex-col" variants={columnVariants}>
                        <h3 className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider mb-6 sm:mb-8">Navigate</h3>
                        <div className="flex flex-col gap-2">
                            <a href="/" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Home</a>
                            <a href="/peptides" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Peptides</a>
                            <a href="/services" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Services</a>
                            <a href="/memberships" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Memberships</a>
                            <a href="/#quiz" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Wellness Quiz</a>
                            <a href="/refill-request" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Refill</a>
                        </div>
                    </motion.div>

                    {/* Book Now + Links Column */}
                    <motion.div className="flex flex-col col-span-2 md:col-span-1" variants={columnVariants}>
                        <motion.a
                            href="#book-now"
                            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all mb-6 sm:mb-8"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Book Now</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                            </svg>
                        </motion.a>
                        <div className="flex flex-col gap-2">
                            <a href="/instructional-guides" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Instructions & Guides</a>
                            <a href="/sourcing-safety" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Sourcing & Safety</a>
                            <a href="/science-research" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Science & Research</a>
                            <a href="/rmd-partners" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">RMD+ Partners</a>
                            <a href="/payment-plans" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Payment Plans</a>
                            <a href="/our-team" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Meet the Team</a>
                            <a href="/contact" className="text-sm sm:text-base lg:text-lg text-gray-900 hover:opacity-70 transition-opacity">Contact</a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default FooterLinks;
