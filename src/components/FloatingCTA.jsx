import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showQuiz, setShowQuiz] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const checkPath = () => {
            const path = window.location.pathname;
            setShowQuiz(!path.includes('/products/'));
        };

        handleScroll();
        checkPath();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('popstate', checkPath);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('popstate', checkPath);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Book Now Button */}
                    <motion.a
                        href="/#book-now"
                        className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full shadow-2xl transition-all text-xs sm:text-sm"
                        aria-label="Book Now"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                        </svg>
                        <span className="font-bold uppercase tracking-wide whitespace-nowrap">Book Now</span>
                    </motion.a>

                    {/* Wellness Quiz Button (hidden on product pages) */}
                    {showQuiz && (
                        <motion.a
                            href="/#quiz"
                            className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-full shadow-2xl transition-all text-xs sm:text-sm"
                            aria-label="Wellness Quiz"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path>
                            </svg>
                            <span className="font-bold uppercase tracking-wide whitespace-nowrap">Wellness Quiz</span>
                        </motion.a>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
