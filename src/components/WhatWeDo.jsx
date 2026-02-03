import React from 'react';
import { Sparkles, Zap, Scale, Clock, Dumbbell, Brain, ArrowRight } from 'lucide-react';

const categories = [
    {
        title: "Her",
        description: "From fat burning, skincare, and aesthetics to reproductive health and more.",
        icon: Sparkles,
        bgColor: "bg-pink-50/50",
        borderColor: "border-pink-100",
        iconColor: "text-pink-500",
        hoverBg: "hover:bg-pink-50"
    },
    {
        title: "Him",
        description: "From muscle gain, stress reduction, and hair growth to enhanced libido and more.",
        icon: Zap,
        bgColor: "bg-blue-50/50",
        borderColor: "border-blue-100",
        iconColor: "text-blue-500",
        hoverBg: "hover:bg-blue-50"
    },
    {
        title: "Weight Loss",
        description: "Promote weight loss, burn stubborn fat, and refine lean muscle definition.",
        icon: Scale,
        bgColor: "bg-emerald-50/50",
        borderColor: "border-emerald-100",
        iconColor: "text-emerald-500",
        hoverBg: "hover:bg-emerald-50"
    },
    {
        title: "Anti-Aging",
        description: "Restore youthfulness, boost the immune system, and stimulate healthy cell activity.",
        icon: Clock,
        bgColor: "bg-orange-50/50",
        borderColor: "border-orange-100",
        iconColor: "text-orange-500",
        hoverBg: "hover:bg-orange-50"
    },
    {
        title: "Strength & Fitness",
        description: "Improve muscle growth and repair, strengthen energy levels, and boost metabolism.",
        icon: Dumbbell,
        bgColor: "bg-amber-50/50",
        borderColor: "border-amber-100",
        iconColor: "text-amber-600",
        hoverBg: "hover:bg-amber-50"
    },
    {
        title: "Brain Health",
        description: "Relieve anxiety, support memory, uplift mood, and elevate cognitive function.",
        icon: Brain,
        bgColor: "bg-purple-50/50",
        borderColor: "border-purple-100",
        iconColor: "text-purple-500",
        hoverBg: "hover:bg-purple-50"
    }
];

const WhatWeDo = () => {
    return (
        <section className="w-full py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3 font-medium">What We Do</p>
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900">.HRT</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <a
                                key={index}
                                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className={`group relative ${category.bgColor} ${category.hoverBg} border-2 ${category.borderColor} rounded-2xl p-8 h-64 flex flex-col justify-between transition-all duration-300 overflow-hidden`}
                            >
                                {/* Top Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-medium text-gray-900 mb-3">
                                        for {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed max-w-[70%] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Bottom Right Icon */}
                                <div className="absolute bottom-6 right-6 transition-transform duration-300 group-hover:scale-110">
                                    <div className="relative">
                                        {/* Large decorative circle */}
                                        <div className={`w-24 h-24 ${category.bgColor} rounded-full flex items-center justify-center border ${category.borderColor}`}>
                                            <Icon className={`w-12 h-12 ${category.iconColor}`} strokeWidth={1.5} />
                                        </div>
                                        {/* Small arrow indicator */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
