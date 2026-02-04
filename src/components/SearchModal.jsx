import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    const popularPeptides = [
        { name: 'Compounded GLP-1', path: '/products/tirzepatide-semaglutide' },
        { name: 'Define Stack', path: '/products/define-stack' },
        { name: 'NAD+', path: '/products/nad' },
        { name: 'EmpowerHer Blend', path: '/products/empowerher-blend' },
        { name: 'Fat Burner Blend', path: '/products/fat-burner-blend' },
        { name: 'Recovery Blend', path: '/products/recovery-blend' }
    ];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setSearchQuery('');
        }
    }, [isOpen]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase().trim();
        if (!query) return;

        // Expanded Universal Search Logic
        const searchMappings = [
            { keywords: ['wellness', 'home', 'main', 'clinic', 'regenmd', 'regen md', 'about'], path: '/' },
            { keywords: ['peptide', 'bpc', 'tb500', 'semaglutide', 'tirzepatide', 'weight loss', 'fat loss', 'slim', 'metabolism', 'glp-1', 'glp1'], path: '/#peptides-section' },
            { keywords: ['man', 'men', 'male', 'him', 'guy', 'trt', 'testosterone', 'libido', 'hair'], path: '/#peptides-section' },
            { keywords: ['woman', 'women', 'female', 'her', 'lady', 'hormone', 'hrt', 'menopause', 'skincare'], path: '/#peptides-section' },
            { keywords: ['aging', 'anti-aging', 'young', 'wrinkle', 'skin', 'beauty', 'injectable', 'botox', 'filler'], path: '/services#services-grid' },
            { keywords: ['muscle', 'strength', 'fitness', 'gym', 'performance', 'energy', 'iv', 'drip', 'hydrate', 'recovery'], path: '/services#services-grid' },
            { keywords: ['member', 'join', 'subscri', 'cost', 'price', 'plan', 'package', 'discount'], path: '/#memberships-section' },
            { keywords: ['quiz', 'test', 'start', 'journey', 'evaluate', 'assess', 'health score'], path: '/quiz' },
            { keywords: ['contact', 'email', 'phone', 'support', 'help', 'location', 'address', 'book', 'consult'], path: '/contact' }
        ];

        const match = searchMappings.find(m => m.keywords.some(k => query.includes(k) || k.includes(query)));

        if (match) {
            navigate(`${match.path}${match.path.includes('?') ? '&' : '?'}q=${encodeURIComponent(query)}`);
        } else {
            navigate(`/services?q=${encodeURIComponent(query)}`);
        }

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 w-screen h-screen bg-white" style={{ zIndex: 999999 }}>
            <style>{`
                .search-link {
                    font-size: 1rem;
                    color: #4b5563;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    border-bottom: 2px solid #f3f4f6;
                    padding-bottom: 4px;
                }
                .search-link:hover {
                    color: #ADA77C;
                    border-color: #ADA77C;
                }
                .dot::before {
                    content: "";
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    background-color: #000;
                    border-radius: 50%;
                    margin-right: 12px;
                    vertical-align: middle;
                }
            `}</style>

            {/* Header Content */}
            <div className="w-full flex justify-end p-6 md:p-12">
                <button
                    onClick={onClose}
                    className="p-2 hover:rotate-90 transition-transform duration-500"
                    aria-label="Close search"
                >
                    <X size={40} strokeWidth={1} className="text-black" />
                </button>
            </div>

            {/* Modal Body */}
            <div className="w-full h-full overflow-y-auto pb-24">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-left">
                    {/* Search Field Area */}
                    <div className="mb-24 mt-12">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-black block mb-10">
                            SEARCH
                        </label>
                        <form onSubmit={handleSearchSubmit} className="relative flex items-center border-b-2 border-gray-100 focus-within:border-black transition-colors pb-8">
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Enter your search term"
                                className="w-full text-4xl md:text-8xl font-light text-black placeholder-gray-200 bg-transparent border-none focus:ring-0 p-0"
                                autoComplete="off"
                            />
                            <button type="submit" className="ml-4 p-2 text-black hover:text-[#ADA77C] transition-colors">
                                <Search size={48} strokeWidth={1} />
                            </button>
                        </form>
                    </div>

                    {/* Popular Peptides */}
                    <div>
                        <div className="flex items-center mb-10">
                            <span className="dot text-xs font-bold uppercase tracking-[0.2em] text-black">
                                Popular Peptides
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-x-12 gap-y-6">
                            {popularPeptides.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        navigate(item.path);
                                        onClose();
                                    }}
                                    className="search-link"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
