import React from 'react';

const AnnouncementBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-9 z-[60] bg-[#ADA77C] text-center flex items-center justify-center px-4 cursor-pointer hover:bg-[#969066] transition-colors">
            <p className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase">
                Reset & Recalibrate <span className="font-normal opacity-90 ml-2">See January Specials →</span>
            </p>
        </div>
    );
};

export default AnnouncementBar;
