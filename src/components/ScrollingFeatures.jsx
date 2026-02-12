import React from 'react';
import {
    Monitor,
    DoorOpen,
    Truck,
    CreditCard,
    Gift,
    Calendar,
    Users,
    Sparkles
} from 'lucide-react';

const features = [
    { icon: Monitor, text: "Virtual Care Anywhere" },
    { icon: DoorOpen, text: "Walk-Ins Welcome" },
    { icon: Truck, text: "Nation-Wide Shipping" },
    { icon: CreditCard, text: "Flexible Payment Plans" },
    { icon: Gift, text: "Membership Discounts" },
    { icon: Calendar, text: "Follow-Up Appointments" },
    { icon: Users, text: "Partnership Perks" },
    { icon: Sparkles, text: "All Services" }
];

const ScrollingFeatures = () => {
    return (
        <div className="w-full bg-[#75714B] py-12 overflow-hidden">
            <div className="relative h-[170px] flex flex-col items-center justify-center gap-8">
                {/* First Row - Scrolling Left */}
                <div className="relative w-full h-[50px] flex items-center overflow-hidden">
                    <div
                        className="flex gap-6 animate-scroll-left"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                        }}
                    >
                        {/* First set */}
                        <div className="flex gap-6 px-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <span
                                        key={`left-1-${idx}`}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer text-sm font-medium"
                                    >
                                        <Icon size={20} />
                                        {feature.text}
                                    </span>
                                );
                            })}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex gap-6 px-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <span
                                        key={`left-2-${idx}`}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer text-sm font-medium"
                                    >
                                        <Icon size={20} />
                                        {feature.text}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Second Row - Scrolling Right */}
                <div className="relative w-full h-[50px] flex items-center overflow-hidden">
                    <div
                        className="flex gap-6 animate-scroll-right"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
                        }}
                    >
                        {/* First set */}
                        <div className="flex gap-6 px-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <span
                                        key={`right-1-${idx}`}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer text-sm font-medium"
                                    >
                                        <Icon size={20} />
                                        {feature.text}
                                    </span>
                                );
                            })}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex gap-6 px-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                return (
                                    <span
                                        key={`right-2-${idx}`}
                                        className="flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full whitespace-nowrap transition-all cursor-pointer text-sm font-medium"
                                    >
                                        <Icon size={20} />
                                        {feature.text}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollingFeatures;
