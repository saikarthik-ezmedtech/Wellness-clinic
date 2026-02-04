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
                        className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white px-6 py-3 rounded-full shadow-lg transition-all w-[200px]"
                        aria-label="Book Now"
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                        </svg>
                        <span className="font-bold uppercase tracking-wide text-sm font-mono">Book Now</span>
                    </motion.a>

                    {/* Wellness Quiz Button (hidden on product pages) */}
                    {showQuiz && (
                        <motion.a
                            href="/quiz"
                            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-[#ADA77C] to-[#C4BE8A] hover:from-[#9C966C] hover:to-[#ADA77C] text-white px-6 py-3 rounded-full shadow-lg transition-all w-[200px]"
                            aria-label="Self-Care Quiz"
                            whileHover={{ scale: 1.02, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 flex-shrink-0">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"></path>
                            </svg>
                            <span className="font-bold uppercase tracking-wide text-sm font-mono">Self-Care Quiz</span>
                        </motion.a>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
