import React, { useState, useEffect } from 'react';

const PeptidesGrid = () => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const dataText = [".PEPTIDES", ".INJECTABLES", ".TRT", ".HRT", ".PRP", ".IV THERAPY"];
        let iscomponentMounted = true;

        const typeWriter = (text, i, fnCallback) => {
            if (!iscomponentMounted) return;
            if (i < text.length) {
                setDisplayText(text.substring(0, i + 1));
                setTimeout(() => {
                    typeWriter(text, i + 1, fnCallback);
                }, 100);
            } else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 2000);
            }
        };

        const deleteWriter = (text, i, fnCallback) => {
            if (!iscomponentMounted) return;
            if (i > 0) {
                setDisplayText(text.substring(0, i - 1));
                setTimeout(() => {
                    deleteWriter(text, i - 1, fnCallback);
                }, 50);
            } else if (typeof fnCallback == 'function') {
                setTimeout(fnCallback, 500);
            }
        };

        const animateText = (textIndex) => {
            if (!iscomponentMounted) return;
            const currentText = dataText[textIndex];
            typeWriter(currentText, 0, () => {
                deleteWriter(currentText, currentText.length, () => {
                    const nextIndex = (textIndex + 1) % dataText.length;
                    animateText(nextIndex);
                });
            });
        };

        animateText(0);

        return () => {
            iscomponentMounted = false;
        };
    }, []);

    return (
        <section id="peptides-section" className="w-full py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
            <style>{`
                .padding {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    width: 100%;
                    margin: 0 auto;
                }

                .grid-item {
                    background-color: #f6f6f6;
                    border-radius: 16px;
                    padding: 32px;
                    position: relative;
                    display: flex;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s ease;
                    height: 240px;
                    overflow: hidden;
                    border: 2px solid transparent;
                }

                /* Unique Colors Per Category */
                .grid-item[data-category="her"] { border-color: #ebdfe7; }
                .grid-item[data-category="him"] { border-color: #e6ecf3; }
                .grid-item[data-category="weight-loss"] { border-color: #ebf0e8; }
                .grid-item[data-category="anti-aging"] { border-color: #fdebda; }
                .grid-item[data-category="muscle-gain"] { border-color: #fdefc8; }
                .grid-item[data-category="brain-health"] { border-color: #e7e6ee; }

                /* Hover Backgrounds */
                .grid-item[data-category="her"]:hover { background-color: #ebdfe7; }
                .grid-item[data-category="him"]:hover { background-color: #e6ecf3; }
                .grid-item[data-category="weight-loss"]:hover { background-color: #ebf0e8; }
                .grid-item[data-category="anti-aging"]:hover { background-color: #fdebda; }
                .grid-item[data-category="muscle-gain"]:hover { background-color: #fdefc8; }
                .grid-item[data-category="brain-health"]:hover { background-color: #e7e6ee; }

                /* Hover Titles & Arrows */
                .grid-item[data-category="her"]:hover .title, .grid-item[data-category="her"]:hover .highlight { color: #9a6883; }
                .grid-item[data-category="him"]:hover .title, .grid-item[data-category="him"]:hover .highlight { color: #637cad; }
                .grid-item[data-category="weight-loss"]:hover .title, .grid-item[data-category="weight-loss"]:hover .highlight { color: #586e4b; }
                .grid-item[data-category="anti-aging"]:hover .title, .grid-item[data-category="anti-aging"]:hover .highlight { color: #f18446; }
                .grid-item[data-category="muscle-gain"]:hover .title, .grid-item[data-category="muscle-gain"]:hover .highlight { color: #f99207; }
                .grid-item[data-category="brain-health"]:hover .title, .grid-item[data-category="brain-health"]:hover .highlight { color: #6a5b7c; }

                .grid-item[data-category="her"]:hover .arrow { background-color: #9a6883; }
                .grid-item[data-category="him"]:hover .arrow { background-color: #637cad; }
                .grid-item[data-category="weight-loss"]:hover .arrow { background-color: #586e4b; }
                .grid-item[data-category="anti-aging"]:hover .arrow { background-color: #f18446; }
                .grid-item[data-category="muscle-gain"]:hover .arrow { background-color: #f99207; }
                .grid-item[data-category="brain-health"]:hover .arrow { background-color: #6a5b7c; }

                .content {
                    flex-grow: 1;
                    position: relative;
                    z-index: 2;
                }

                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }

                .title {
                    font-size: 2em;
                    color: #151515;
                    margin: 0;
                    transition: color 0.3s ease;
                }
                
                .highlight {
                    font-weight: 700;
                    transition: color 0.3s ease;
                }
                
                .grid-item:hover .highlight {
                    color: #ADA77C;
                }

                .description {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                    color: #666;
                    font-size: 1.1em;
                    max-width: 80%;
                    margin: 0;
                    position: absolute;
                    top: 60px;
                }

                .grid-item:hover .description {
                    opacity: 1;
                    transform: translateY(0);
                }

                .arrow {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: all 0.3s ease;
                    background-color: transparent; 
                }

                .grid-item:hover .arrow {
                    opacity: 1;
                }
                
                /* Mobile specific arrow coloring */
                @media (max-width: 768px) {
                    .arrow {
                        opacity: 1;
                        background-color: #ADA77C;
                    }
                }

                .arrow svg {
                    width: 20px;
                    height: 20px;
                    stroke: white;
                    stroke-width: 2;
                }

                .product-image {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    width: 200px;
                    height: 200px;
                    object-fit: contain;
                    transition: all 0.5s ease;
                    z-index: 1;
                }

                .grid-item:hover .product-image {
                    transform: scale(1.1) rotate(-5deg);
                    mix-blend-mode: multiply;
                }

                @media (max-width: 1024px) {
                   .grid-item {
                        height: 220px;
                    }
                    .title {
                        font-size: 1.5em;
                    }
                    
                    .product-image {
                        width: 160px;
                        height: 160px;
                    }
                }

                @media (max-width: 768px) {
                    .padding {
                        padding: 0 16px;
                    }

                    .grid-container {
                        grid-template-columns: 1fr;
                    }

                    .title {
                        font-size: 1.75em;
                        color: #151515;
                    }

                    /* On mobile, description is always visible */
                    .description {
                        opacity: 1;
                        transform: translateY(0);
                        font-size: .9em;
                        position: relative;
                        top: 0;
                        margin-top: 8px;
                        max-width: 65%;
                    }

                    .grid-item {
                        height: auto;
                        min-height: 200px;
                        padding: 24px;
                    }

                    .arrow {
                        opacity: 1;
                        width: 28px;
                        height: 28px;
                    }

                    /* Colored arrows on mobile by default */
                    .grid-item[data-category="her"] .arrow { background-color: #9a6883; }
                    .grid-item[data-category="him"] .arrow { background-color: #637cad; }
                    .grid-item[data-category="weight-loss"] .arrow { background-color: #586e4b; }
                    .grid-item[data-category="anti-aging"] .arrow { background-color: #f18446; }
                    .grid-item[data-category="muscle-gain"] .arrow { background-color: #f99207; }
                    .grid-item[data-category="brain-health"] .arrow { background-color: #6a5b7c; }

                    .product-image {
                        width: 120px;
                        height: 120px;
                        right: -10px;
                        bottom: 10px;
                        transform: none;
                    }
                    
                    .grid-item:hover .product-image {
                        transform: none;
                    }
                }

                @keyframes searchHighlight {
                    0% { outline: 0px solid transparent; background-color: transparent; }
                    20% { outline: 4px solid #ADA77C; background-color: #ADA77C15; }
                    80% { outline: 4px solid #ADA77C; background-color: #ADA77C15; }
                    100% { outline: 0px solid transparent; background-color: transparent; }
                }
                
                :target {
                    animation: searchHighlight 3s ease-in-out;
                    border-radius: 24px;
                    scroll-margin-top: 120px;
                }
            `}</style>

            <div className="padding">
                {/* Rich Text What We Do */}
                <div className="rich-text container mb-4">
                    <div className="rich-text__wrapper rich-text__wrapper--column">
                        <div className="rich-text__title">
                            <div className="rich-text__subheading subheading margin-none text-base font-bold uppercase tracking-wider text-gray-900">
                                What We Do
                            </div>
                        </div>
                    </div>
                </div>

                {/* Typewriter Title */}
                <div className="mb-12" style={{ minHeight: '120px' }}>
                    <div className="typewriter-section container">
                        <h2 className="typewriter-title text-4xl md:text-6xl font-bold text-gray-900 border-r-4 border-black pr-2 inline-block" style={{ minWidth: '300px', display: 'inline-block' }}>
                            {displayText}<span aria-hidden="true"></span>
                        </h2>
                    </div>
                </div>

                <div className="grid-container">
                    <a href="/pages/for-her" className="grid-item" data-category="her">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Her</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">From fat burning, skincare, and aesthetics to reproductive health and more.</p>
                        </div>
                        <img src="/assets/regenmd_her_transparent.png" alt="REGENMD" className="product-image" />
                    </a>

                    <a href="/pages/for-him" className="grid-item" data-category="him">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Him</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">From muscle gain, stress reduction, and hair growth to enhanced libido and more.</p>
                        </div>
                        <img src="/assets/regenmd_him_transparent.png" alt="REGENMD" className="product-image" />
                    </a>

                    <a href="/pages/for-weight-loss" className="grid-item" data-category="weight-loss">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Weight Loss</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">Promote weight loss, burn stubborn fat, and refine lean muscle definition.</p>
                        </div>
                        <img
                            src="/assets/regenmd_weightloss_transparent.png"
                            alt="REGENMD"
                            className="product-image"
                        />
                    </a>

                    <a href="/pages/for-anti-aging" className="grid-item" data-category="anti-aging">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Anti-Aging</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">Restore youthfulness, boost the immune system, and stimulate healthy cell activity.</p>
                        </div>
                        <img src="/assets/regenmd_antiaging_transparent.png" alt="REGENMD" className="product-image" />
                    </a>

                    <a href="/pages/for-strength-and-fitness" className="grid-item" data-category="muscle-gain">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Strength &amp; Fitness</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">Improve muscle growth and repair, strengthen energy levels, and boost metabolism.</p>
                        </div>
                        <img src="/assets/regenmd_strength_transparent.png" alt="REGENMD" className="product-image" />
                    </a>

                    <a href="/pages/for-brain-health" className="grid-item" data-category="brain-health">
                        <div className="content">
                            <div className="header">
                                <h3 className="title">for <span className="highlight">Brain Health</span></h3>
                                <div className="arrow">
                                    <svg viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                            </div>
                            <p className="description">Relieve anxiety, support memory, uplift mood, and elevate cognitive function.</p>
                        </div>
                        <img
                            src="/assets/regenmd_brainhealth_transparent.png"
                            alt="REGENMD"
                            className="product-image"
                        />
                    </a>
                </div>

                <div className="flex justify-center mt-12">
                    <a href="/services" className="bg-[#2D2D2D] hover:bg-black text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg border border-transparent hover:border-black/20">
                        Explore All Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PeptidesGrid;
