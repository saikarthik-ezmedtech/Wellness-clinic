import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';

const Navbar = ({ isQuizPage = false }) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileSubmenus, setMobileSubmenus] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 100);

            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMobileSubmenu = (menu) => {
        setMobileSubmenus(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`fixed w-full z-[100] transition-all duration-500 ease-in-out
                ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
                    : 'bg-white/95 backdrop-blur-md border-b border-white/20'} 
                ${isVisible || isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
                ${isQuizPage ? 'top-0' : (!isMobileMenuOpen && isVisible ? 'top-9' : 'top-0')}
                `}>
                {/* Accent line for scrolled state */}
                {isScrolled && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ADA77C]/40 to-transparent"></div>
                )}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center h-16">

                        {/* Left - Mobile Menu + Logo */}
                        <div className="flex items-center gap-4">
                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 -ml-2 text-gray-800 hover:text-[#ADA77C] transition-colors"
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>

                            {/* Logo */}
                            <a href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <img
                                    src="/assets/Group 1171274938.svg"
                                    alt="RegenMD"
                                    className="h-10 w-auto"
                                />
                            </a>
                        </div>

                        {/* Center - Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {/* Peptides Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('peptides')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ADA77C] transition-colors uppercase tracking-wide">
                                    Peptides
                                    <ChevronDown size={16} />
                                </button>
                                {activeDropdown === 'peptides' && (
                                    <div className="absolute left-0 top-full mt-0 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                                        <a href="/for-him" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">For Him</a>
                                        <a href="/for-her" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">For Her</a>
                                        <a href="/for-weight-loss" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Weight Loss</a>
                                        <a href="/for-anti-aging" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Anti-Aging</a>
                                        <a href="/for-strength-and-fitness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Strength & Fitness</a>
                                        <a href="/for-brain-health" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Brain Health</a>
                                        <div className="border-t border-gray-100 my-2"></div>
                                        <a href="/peptides" className="block px-4 py-2 text-sm font-semibold text-[#ADA77C] hover:bg-gray-50">All Peptides →</a>
                                    </div>
                                )}
                            </div>

                            {/* Services Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('services')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ADA77C] transition-colors uppercase tracking-wide">
                                    Services
                                    <ChevronDown size={16} />
                                </button>
                                {activeDropdown === 'services' && (
                                    <div className="absolute left-0 top-full mt-0 w-64 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                                        <a href="/peptides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Peptide Therapy</a>
                                        <a href="/injectables" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Injectables</a>
                                        <a href="/skincare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Skincare</a>
                                        <a href="/hormone-replacement-therapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Hormone Replacement Therapy</a>
                                        <a href="/testosterone-replacement-therapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Testosterone Replacement Therapy</a>
                                        <a href="/iv-therapy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">IV Therapy</a>
                                        <div className="border-t border-gray-100 my-2"></div>
                                        <a href="/services" className="block px-4 py-2 text-sm font-semibold text-[#ADA77C] hover:bg-gray-50">All Services →</a>
                                    </div>
                                )}
                            </div>

                            <a href="/memberships" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ADA77C] transition-colors uppercase tracking-wide">
                                Memberships
                            </a>

                            <a href="/refill-request" className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ADA77C] transition-colors uppercase tracking-wide">
                                Refill
                            </a>

                            {/* Resources Dropdown */}
                            <div
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown('resources')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#ADA77C] transition-colors uppercase tracking-wide">
                                    Resources
                                    <ChevronDown size={16} />
                                </button>
                                {activeDropdown === 'resources' && (
                                    <div className="absolute right-0 top-full mt-0 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                                        <a href="/instructional-guides" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Instructions & Guides</a>
                                        <a href="/sourcing-safety" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Sourcing & Safety</a>
                                        <a href="/science-research" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Science & Research</a>
                                        <a href="/rmd-partners" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">RMD+ Partners</a>
                                        <a href="/payment-plans" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Payment Plans</a>
                                        <a href="/quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Self-Care Quiz</a>
                                        <a href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Meet the Team</a>
                                        <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Contact</a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right - Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setIsSearchModalOpen(true)}
                                className="hidden md:flex items-center gap-[0.6rem] text-gray-700 hover:text-[#ADA77C] transition-all text-sm font-semibold uppercase tracking-wider group"
                            >
                                <Search size={22} className="group-hover:scale-110 transition-transform stroke-[1.5]" />
                                <span>Search</span>
                            </button>
                            <a href="/quiz" className="hidden lg:block bg-gradient-to-r from-[#ADA77C] to-[#9C966C] hover:from-[#9C966C] hover:to-[#8B855B] text-white px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105 shadow-[0_8px_15px_-5px_rgba(173,167,124,0.4)] hover:shadow-[0_12px_20px_-5px_rgba(173,167,124,0.5)] whitespace-nowrap">
                                Self-Care Quiz
                            </a>

                        </div>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                <div
                    className={`md:hidden fixed inset-0 bg-white z-[110] transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
                        }`}
                    style={{ top: '64px', height: 'calc(100vh - 64px)' }}
                >
                    <div className="px-6 py-8 h-full flex flex-col overflow-y-auto pb-32">
                        {/* Search Mobile */}
                        <div className="mb-8">
                            <button
                                onClick={() => {
                                    setIsSearchModalOpen(true);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 rounded-xl text-sm font-semibold text-gray-800 transition-colors"
                            >
                                <Search size={18} className="text-gray-500" />
                                <span>Search Treatments...</span>
                            </button>
                        </div>

                        {/* Main Links */}
                        <div className="space-y-2">
                            {/* Peptides Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleMobileSubmenu('peptides')}
                                    className="flex items-center justify-between w-full py-4 text-xl font-bold text-gray-900 border-b border-gray-50"
                                >
                                    Peptides
                                    <ChevronRight className={`transition-transform duration-300 ${mobileSubmenus.peptides ? 'rotate-90 text-[#ADA77C]' : ''}`} size={20} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenus.peptides ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                                    <div className="pl-4 space-y-1 py-2 bg-gray-50/50 rounded-xl">
                                        <a href="/for-him" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">For Him</a>
                                        <a href="/for-her" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">For Her</a>
                                        <a href="/for-weight-loss" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Weight Loss</a>
                                        <a href="/for-anti-aging" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Anti-Aging</a>
                                        <a href="/for-strength-and-fitness" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Strength & Fitness</a>
                                        <a href="/for-brain-health" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Brain Health</a>
                                        <a href="/peptides" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-bold text-[#ADA77C]">All Peptides →</a>
                                    </div>
                                </div>
                            </div>

                            {/* Services Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleMobileSubmenu('services')}
                                    className="flex items-center justify-between w-full py-4 text-xl font-bold text-gray-900 border-b border-gray-50"
                                >
                                    Services
                                    <ChevronRight className={`transition-transform duration-300 ${mobileSubmenus.services ? 'rotate-90 text-[#ADA77C]' : ''}`} size={20} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenus.services ? 'max-h-[500px] mt-2' : 'max-h-0'}`}>
                                    <div className="pl-4 space-y-1 py-2 bg-gray-50/50 rounded-xl">
                                        <a href="/peptides" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Peptide Therapy</a>
                                        <a href="/injectables" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Injectables</a>
                                        <a href="/skincare" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Skincare</a>
                                        <a href="/hormone-replacement-therapy" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">HRT</a>
                                        <a href="/testosterone-replacement-therapy" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">TRT</a>
                                        <a href="/iv-therapy" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">IV Therapy</a>
                                        <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base font-bold text-[#ADA77C]">All Services →</a>
                                    </div>
                                </div>
                            </div>

                            <a href="/memberships" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 text-xl font-bold text-gray-900 border-b border-gray-50">
                                Memberships
                            </a>

                            <a href="/refill-request" onClick={() => setIsMobileMenuOpen(false)} className="block py-4 text-xl font-bold text-gray-900 border-b border-gray-50">
                                Refill
                            </a>

                            {/* Resources Mobile */}
                            <div>
                                <button
                                    onClick={() => toggleMobileSubmenu('resources')}
                                    className="flex items-center justify-between w-full py-4 text-xl font-bold text-gray-900 border-b border-gray-50"
                                >
                                    Resources
                                    <ChevronRight className={`transition-transform duration-300 ${mobileSubmenus.resources ? 'rotate-90 text-[#ADA77C]' : ''}`} size={20} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenus.resources ? 'max-h-[600px] mt-2' : 'max-h-0'}`}>
                                    <div className="pl-4 space-y-1 py-2 bg-gray-50/50 rounded-xl">
                                        <a href="/instructional-guides" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Instructions & Guides</a>
                                        <a href="/sourcing-safety" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Sourcing & Safety</a>
                                        <a href="/science-research" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Science & Research</a>
                                        <a href="/rmd-partners" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">RMD+ Partners</a>
                                        <a href="/payment-plans" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Payment Plans</a>
                                        <a href="/quiz" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Self-Care Quiz</a>
                                        <a href="/our-team" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Meet the Team</a>
                                        <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-base text-gray-600">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA for Mobile */}
                        <div className="mt-auto pt-10 flex flex-col gap-4">
                            <a href="/quiz" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-gradient-to-r from-[#ADA77C] to-[#9C966C] text-white text-center py-4 rounded-full font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                                Take Self-Care Quiz
                            </a>
                            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-[#1A1A1A] text-white text-center py-4 rounded-full font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                                Book A Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <SearchModal
                isOpen={isSearchModalOpen}
                onClose={() => setIsSearchModalOpen(false)}
            />
        </>
    );
};

export default Navbar;
