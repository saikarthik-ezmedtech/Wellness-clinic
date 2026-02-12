import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MissionSection from '../components/MissionSection';
import MembershipCTA from '../components/MembershipCTA';
import WellnessCTA from '../components/WellnessCTA';

const Services = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    const services = [
        {
            subheading: "Balance & Boost",
            title: "Peptide Therapy",
            link: "/pages/peptides",
            hoverColor: "#f4f3ed", // Subtle olive cream
            image: "/assets/regenmd_weightloss_transparent.png"
        },
        {
            subheading: "Smooth & Sculpt",
            title: "Injectables & Aesthetics",
            link: "/pages/injectables",
            hoverColor: "#f4f3ed",
            image: "/assets/regenmd_antiaging_transparent.png"
        },
        {
            subheading: "Refine & Glow",
            title: "Skincare Treatments",
            link: "/pages/skincare",
            hoverColor: "#f4f3ed",
            image: "/assets/regenmd_her_transparent.png"
        },
        {
            subheading: "Rebalance & Revive",
            title: "Hormone Replacement",
            link: "/pages/hormone-replacement-therapy",
            hoverColor: "#f4f3ed",
            image: "/assets/regenmd_him_transparent.png"
        },
        {
            subheading: "Strengthen & Reclaim",
            title: "Testosterone Replacement",
            link: "/pages/testosterone-replacement-therapy",
            hoverColor: "#f4f3ed",
            image: "/assets/regenmd_him_transparent.png"
        },
        {
            subheading: "Repair & Regenerate",
            title: "Platelet-Rich Plasma",
            link: "/pages/platelet-rich-plasma-therapy",
            hoverColor: "#f4f3ed",
            image: "/assets/wecare_strength_syringe_transparent.png"
        },
        {
            subheading: "Evaluate & Verify",
            title: "Lab Panels",
            link: "/pages/lab-panels",
            hoverColor: "#f4f3ed",
            image: "/assets/wecare_anti_aging_vial_transparent.png"
        },
        {
            subheading: "Hydrate & Replenish",
            title: "IV Therapy",
            link: "/pages/iv-therapy",
            hoverColor: "#f4f3ed",
            image: "/assets/regenmd_strength_transparent.png"
        }
    ];

    const dataText = [".PEPTIDES", ".INJECTABLES", ".TRT", ".HRT", ".PRP", ".IV THERAPY"];
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let timer;
        const currentFullText = dataText[loopNum % dataText.length];

        const handleTyping = () => {
            if (isDeleting) {
                setText(currentFullText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentFullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === currentFullText) {
                timer = setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                timer = setTimeout(() => { }, 500);
            } else {
                timer = setTimeout(handleTyping, typingSpeed);
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="bg-[#f9f9f9] min-h-screen">
            <style>{`
                .all-services-label {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: #ADA77C;
                    font-weight: 700;
                    margin-bottom: 5px;
                    display: block;
                }
                .typewriter-wrapper {
                    margin-bottom: 1rem;
                    height: 200px;
                    display: flex;
                    align-items: flex-end;
                    padding-bottom: 2rem;
                }
                .typewriter-section {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }
                .typewriter-title {
                    font-size: 4rem;
                    font-weight: 800;
                    color: #1A1A1A;
                    letter-spacing: -0.02em;
                    display: inline-block;
                    margin: 0;
                    border-right: 4px solid #ADA77C;
                    padding-right: 8px;
                    animation: caret 1s steps(1) infinite;
                    min-width: 500px;
                    height: 1.2rem;
                    line-height: 1.2;
                    white-space: nowrap;
                }
                @keyframes caret {
                    50% { border-color: transparent; }
                }
                .services-media-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    padding-bottom: 8rem;
                }
                .service-media-card {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    aspect-ratio: 21/9;
                    display: flex;
                    align-items: center;
                    padding: 60px;
                    background-color: #ffffff;
                    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                    border: 1px solid rgba(0,0,0,0.03);
                    text-decoration: none;
                }
                .service-media-card:hover {
                    box-shadow: 0 15px 45px rgba(0,0,0,0.06);
                }
                .service-subheading {
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    color: #666;
                    margin-bottom: 12px;
                    font-weight: 600;
                }
                .service-title {
                    font-size: 2.2rem;
                    font-weight: 400;
                    color: #1A1A1A;
                    margin-bottom: 28px;
                    line-height: 1.2;
                }
                .explore-btn {
                    display: inline-block;
                    padding: 14px 34px;
                    background: #1A1A1A;
                    color: #fff;
                    border-radius: 100px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.15em;
                    transition: all 0.3s ease;
                }
                .service-media-card:hover .explore-btn {
                    background: #ADA77C;
                    transform: scale(1.05);
                }
                .service-product-image {
                    position: absolute;
                    right: 40px;
                    bottom: 0px;
                    height: 80%;
                    pointer-events: none;
                    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                    opacity: 0.8;
                }
                .service-media-card:hover .service-product-image {
                    transform: scale(1.1) translateY(-10px);
                    opacity: 1;
                }
                @media (max-width: 992px) {
                    .services-media-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .service-media-card {
                        aspect-ratio: 16/9;
                        padding: 40px;
                    }
                    .service-title {
                        font-size: 1.8rem;
                    }
                    .typewriter-title {
                        font-size: 2.5rem;
                        min-width: 280px;
                    }
                    .service-product-image {
                        height: 60%;
                        right: 20px;
                    }
                    .typewriter-wrapper {
                        height: 140px;
                    }
                }
            `}</style>

            {/* Hero Section */}
            <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden">
                <motion.div
                    style={{ y: y1, scale }}
                    className="absolute inset-0 z-0 h-[120%]"
                >
                    <img
                        src="/assets/services_hero_bg.png"
                        alt="Services Background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight"
                    >
                        .SERVICES
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/95 max-w-xl font-medium drop-shadow-lg"
                    >
                        Explore Our Complete Range of Specialized Treatments
                    </motion.p>
                </div>
            </div>

            {/* Mission Section */}
            <MissionSection />

            {/* Content Section */}
            <div id="services-grid" className="max-w-7xl mx-auto px-6">
                <div className="typewriter-wrapper">
                    <div className="typewriter-section">
                        <span className="all-services-label">All Services</span>
                        <h2 className="typewriter-title">{text}</h2>
                    </div>
                </div>

                <div className="services-media-grid">
                    {services.map((service, index) => (
                        <a
                            key={index}
                            href={service.link}
                            className="service-media-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = service.hoverColor;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#ffffff';
                            }}
                        >
                            <div className="relative z-10 w-full text-left">
                                <div className="service-subheading">
                                    {service.subheading}
                                </div>
                                <h3 className="service-title">
                                    {service.title}
                                </h3>
                                <div className="explore-btn">
                                    EXPLORE
                                </div>
                            </div>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="service-product-image"
                            />
                        </a>
                    ))}
                </div>

                <MembershipCTA />
                <WellnessCTA />
            </div>
        </div>
    );
};

export default Services;
