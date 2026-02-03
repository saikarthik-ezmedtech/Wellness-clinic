import React from 'react';

const PeptidesGrid = () => {
    const categories = [
        {
            title: 'Her',
            url: '/for-her',
            description: 'From fat burning, skincare, and aesthetics to reproductive health and more.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Vial_-_RegenMD.png?v=1740680253',
            gradient: 'from-pink-500 to-rose-400'
        },
        {
            title: 'Him',
            url: '/for-him',
            description: 'From muscle gain, stress reduction, and hair growth to enhanced libido and more.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Blue_Pill_-_RegenMD.png?v=1740680253',
            gradient: 'from-blue-500 to-cyan-400'
        },
        {
            title: 'Weight Loss',
            url: '/for-weight-loss',
            description: 'Promote weight loss, burn stubborn fat, and refine lean muscle definition.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Green_Pills_-_RegenMD.png?v=1740680253',
            gradient: 'from-green-500 to-emerald-400'
        },
        {
            title: 'Anti-Aging',
            url: '/for-anti-aging',
            description: 'Restore youthfulness, boost the immune system, and stimulate healthy cell activity.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Vitamin_-_RegenMD.png?v=1740680253',
            gradient: 'from-amber-500 to-orange-400'
        },
        {
            title: 'Strength & Fitness',
            url: '/for-strength-and-fitness',
            description: 'Improve muscle growth and repair, strengthen energy levels, and boost metabolism.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Syringe_-_RegenMD.png?v=1740680642',
            gradient: 'from-red-500 to-pink-400'
        },
        {
            title: 'Brain Health',
            url: '/for-brain-health',
            description: 'Relieve anxiety, support memory, uplift mood, and elevate cognitive function.',
            image: 'https://cdn.shopify.com/s/files/1/0784/6074/8094/files/Purple_Pills_-_RegenMD.png?v=1742348612',
            gradient: 'from-purple-500 to-violet-400'
        }
    ];

    return (
        <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#f9f9f9' }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
                        .PEPTIDES<span className="animate-pulse">|</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <a
                            key={index}
                            href={category.url}
                            className={`group relative bg-gradient-to-br ${category.gradient} rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[320px] flex flex-col justify-between`}
                        >
                            {/* Content */}
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        for <span className="font-extrabold">{category.title}</span>
                                    </h3>
                                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-white/95 text-sm md:text-base leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            {/* Product Image */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PeptidesGrid;
