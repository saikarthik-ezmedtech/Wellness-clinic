import React, { useState, useEffect } from 'react';

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide when scrolling down, show when scrolling up or at top
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full h-9 z-[60] bg-[#ADA77C]/95 backdrop-blur-sm text-center flex items-center justify-center px-4 cursor-pointer hover:bg-[#969066]/95 transition-all duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <p className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Reset & Recalibrate <span className="font-normal opacity-90 ml-2">See January Specials →</span>
            </p>
        </div>
    );
};

export default AnnouncementBar;
