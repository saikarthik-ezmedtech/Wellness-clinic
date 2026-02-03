import React from 'react';

const categories = [
    "Membership Discounts",
    "Partnership Perks",
    "Flexible Payment-Plans",
    "Walk-In Home",
    "Follow up Appointments",
    "Nationwide shipping",
    "Virtual Care Anywhere",
    "All Services"
];

const FeaturesGrid = () => {
    return (
        <div className="w-full bg-[#8C8464] py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#9C9474] hover:bg-[#A49C7C] text-white py-4 px-6 rounded-full text-center text-xs md:text-sm font-bold uppercase tracking-wide cursor-pointer transition-colors shadow-sm flex items-center justify-center"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesGrid;
