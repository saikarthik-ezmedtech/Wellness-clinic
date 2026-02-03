import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-9 w-full z-50 bg-white transition-all duration-300 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="#" className="flex items-center">
                        <img
                            src="/assets/Group 1171274938.svg"
                            alt="RegenMD"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {['About', 'Services', 'Testimonials', 'Plans', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-semibold text-gray-600 hover:text-[#ADA77C] transition-colors uppercase tracking-wide"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-gray-600 hover:text-black transition-colors">
                        <Search size={20} />
                    </button>
                    <button className="bg-[#ADA77C] hover:bg-[#9C966C] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-md">
                        Self-care quiz
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800">
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute top-full w-full shadow-lg py-4 px-6 flex flex-col space-y-4 border-t border-gray-100">
                    {['About', 'Services', 'Testimonials', 'Plans', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-gray-800 font-medium block hover:text-[#ADA77C]">{item}</a>
                    ))}
                    <button className="bg-[#ADA77C] text-white px-6 py-3 rounded-full w-full font-bold uppercase tracking-wider">
                        Self-care quiz
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
