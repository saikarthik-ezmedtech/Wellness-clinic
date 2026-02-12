import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showQuiz, setShowQuiz] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer') || document.querySelector('.site-footer');
            let isFooterVisible = false;

            if (footer) {
                const rect = footer.getBoundingClientRect();
                isFooterVisible = rect.top < window.innerHeight;
            }

            // Show if scrolled down > 300px AND footer is NOT visible
            if (window.scrollY > 300 && !isFooterVisible) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const checkPath = () => {
            const path = window.location.pathname;
            setShowQuiz(!path.includes('/products/') && !path.includes('/quiz'));
        };

        // Initial check
        handleScroll();
        checkPath();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        window.addEventListener('popstate', checkPath);

        // Also check on mutation in case footer loads late
        const observer = new MutationObserver(handleScroll);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            window.removeEventListener('popstate', checkPath);
            observer.disconnect();
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-6 z-[999] flex flex-col gap-4 items-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Book Now Button */}
                    <motion.a
                        href="/contact"
                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#9C966C] to-[#8B855B] hover:scale-105 text-white px-6 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(156,150,108,0.4)] transition-all w-[210px]"
                        aria-label="Book Now"
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 flex-shrink-0 text-white/80">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span className="font-extrabold uppercase tracking-[0.15em] text-[10px] md:text-xs">Book Now</span>
                    </motion.a>

                    {/* Wellness Quiz Button (hidden on product pages) */}
                    {showQuiz && (
                        <motion.a
                            href="/quiz"
                            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#ADA77C] to-[#9C966C] hover:scale-105 text-white px-6 py-4 rounded-full shadow-[0_15px_30px_-10px_rgba(173,167,124,0.4)] transition-all w-[210px]"
                            aria-label="Self-Care Quiz"
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 012-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                            </svg>
                            <span className="font-extrabold uppercase tracking-[0.15em] text-[10px] md:text-xs drop-shadow-sm">Self-Care Quiz</span>
                        </motion.a>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
