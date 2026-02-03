import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    return (
        <nav className={`fixed top-9 w-full z-50 shadow-sm border-b transition-all duration-500 ${isScrolled
                ? 'bg-white border-gray-100'
                : 'bg-white/95 backdrop-blur-md border-white/20'
            } ${isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+36px)]'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">

                    {/* Left - Mobile Menu + Logo */}
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-gray-800 hover:text-[#ADA77C] transition-colors"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        {/* Logo */}
                        <a href="/" className="flex items-center">
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
                                    <a href="/#quiz" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Wellness Quiz</a>
                                    <a href="/our-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Meet the Team</a>
                                    <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#ADA77C]">Contact</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right - Actions */}
                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 text-gray-600 hover:text-[#ADA77C] transition-colors text-sm font-medium">
                            <Search size={18} />
                            <span>Search</span>
                        </button>
                        <a href="/#quiz" className="hidden lg:block bg-[#ADA77C] hover:bg-[#9C966C] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-md whitespace-nowrap">
                            Wellness Quiz
                        </a>
                        <a href="/account" className="hidden md:block text-sm font-medium text-gray-700 hover:text-[#ADA77C] transition-colors">
                            Account
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
                    <div className="px-6 py-4 space-y-1">
                        {/* Peptides Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubmenu('peptides')}
                                className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800 hover:text-[#ADA77C]"
                            >
                                Peptides
                                <ChevronRight className={`transition-transform ${mobileSubmenus.peptides ? 'rotate-90' : ''}`} size={20} />
                            </button>
                            {mobileSubmenus.peptides && (
                                <div className="pl-4 space-y-2 py-2">
                                    <a href="/for-him" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">For Him</a>
                                    <a href="/for-her" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">For Her</a>
                                    <a href="/for-weight-loss" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Weight Loss</a>
                                    <a href="/for-anti-aging" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Anti-Aging</a>
                                    <a href="/for-strength-and-fitness" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Strength & Fitness</a>
                                    <a href="/for-brain-health" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Brain Health</a>
                                    <a href="/peptides" className="block py-2 text-sm font-semibold text-[#ADA77C]">All Peptides →</a>
                                </div>
                            )}
                        </div>

                        {/* Services Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubmenu('services')}
                                className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800 hover:text-[#ADA77C]"
                            >
                                Services
                                <ChevronRight className={`transition-transform ${mobileSubmenus.services ? 'rotate-90' : ''}`} size={20} />
                            </button>
                            {mobileSubmenus.services && (
                                <div className="pl-4 space-y-2 py-2">
                                    <a href="/peptides" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Peptide Therapy</a>
                                    <a href="/injectables" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Injectables</a>
                                    <a href="/skincare" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Skincare</a>
                                    <a href="/hormone-replacement-therapy" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">HRT</a>
                                    <a href="/testosterone-replacement-therapy" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">TRT</a>
                                    <a href="/iv-therapy" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">IV Therapy</a>
                                    <a href="/services" className="block py-2 text-sm font-semibold text-[#ADA77C]">All Services →</a>
                                </div>
                            )}
                        </div>

                        <a href="/memberships" className="block py-3 text-base font-semibold text-gray-800 hover:text-[#ADA77C]">
                            Memberships
                        </a>

                        <a href="/refill-request" className="block py-3 text-base font-semibold text-gray-800 hover:text-[#ADA77C]">
                            Refill
                        </a>

                        {/* Resources Mobile */}
                        <div>
                            <button
                                onClick={() => toggleMobileSubmenu('resources')}
                                className="flex items-center justify-between w-full py-3 text-base font-semibold text-gray-800 hover:text-[#ADA77C]"
                            >
                                Resources
                                <ChevronRight className={`transition-transform ${mobileSubmenus.resources ? 'rotate-90' : ''}`} size={20} />
                            </button>
                            {mobileSubmenus.resources && (
                                <div className="pl-4 space-y-2 py-2">
                                    <a href="/instructional-guides" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Instructions & Guides</a>
                                    <a href="/sourcing-safety" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Sourcing & Safety</a>
                                    <a href="/science-research" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Science & Research</a>
                                    <a href="/rmd-partners" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">RMD+ Partners</a>
                                    <a href="/payment-plans" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Payment Plans</a>
                                    <a href="/#quiz" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Wellness Quiz</a>
                                    <a href="/our-team" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Meet the Team</a>
                                    <a href="/contact" className="block py-2 text-sm text-gray-600 hover:text-[#ADA77C]">Contact</a>
                                </div>
                            )}
                        </div>

                        <div className="pt-4 space-y-3">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-800 transition-colors">
                                <Search size={18} />
                                Search
                            </button>
                            <a href="/account" className="block w-full text-center px-4 py-3 bg-[#ADA77C] hover:bg-[#9C966C] text-white rounded-full text-sm font-bold uppercase tracking-wider transition-colors">
                                Account
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
