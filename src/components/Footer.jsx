import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isSupport, setIsSupport] = useState(false);
    const [currentDay, setCurrentDay] = useState(0);
    const [isPhoneAvailable, setIsPhoneAvailable] = useState(false);

    // Office hours in EST (24-hour format)
    const officeHours = [
        { day: 'M', hours: '9 a.m. - 5 p.m.', open: 9, close: 17 },
        { day: 'T', hours: '9 a.m. - 5 p.m.', open: 9, close: 17 },
        { day: 'W', hours: '9 a.m. - 5 p.m.', open: 9, close: 17 },
        { day: 'T', hours: '9 a.m. - 5 p.m.', open: 9, close: 17 },
        { day: 'F', hours: '8 a.m. - 4 p.m.', open: 8, close: 16 },
        { day: 'S', hours: 'Closed', open: null, close: null },
        { day: 'S', hours: 'Closed', open: null, close: null }
    ];

    const supportHours = [
        { day: 'M', hours: '5 p.m. - 7 p.m.', open: 17, close: 19 },
        { day: 'T', hours: '5 p.m. - 7 p.m.', open: 17, close: 19 },
        { day: 'W', hours: '5 p.m. - 7 p.m.', open: 17, close: 19 },
        { day: 'T', hours: '5 p.m. - 7 p.m.', open: 17, close: 19 },
        { day: 'F', hours: '4 p.m. - 7 p.m.', open: 16, close: 19 },
        { day: 'S', hours: '10 a.m. - 3 p.m.', open: 10, close: 15 },
        { day: 'S', hours: '10 a.m. - 3 p.m.', open: 10, close: 15 }
    ];

    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const dayOfWeek = now.getDay();
            const currentHour = now.getHours();

            // Adjust for Sunday (0 -> 6 for array index)
            const arrayIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
            setCurrentDay(arrayIndex);

            // Check if support is available
            const supportToday = supportHours[arrayIndex];
            if (supportToday.open !== null && currentHour >= supportToday.open && currentHour < supportToday.close) {
                setIsPhoneAvailable(true);
                setIsSupport(true);
            } else {
                setIsPhoneAvailable(false);
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter subscription submitted');
    };

    return (
        <section className="w-full py-0" style={{ backgroundColor: '#f9f9f9' }}>
            <motion.div
                className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="bg-[#f5f5f5] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
                    {/* Left Section - Newsletter */}
                    <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <a href="/" className="mb-5 sm:mb-6">
                            <img
                                src="/assets/Group 1171274938.svg"
                                alt="RegenMD"
                                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[280px] sm:max-w-[320px]"
                            />
                        </a>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-5 sm:mb-6">
                            Sign up for our newsletter and access special offers and exclusive launches.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8">
                            <input
                                type="email"
                                placeholder="E-MAIL"
                                required
                                className="flex-1 px-5 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#ADA77C]"
                            />
                            <button
                                type="submit"
                                className="bg-[#ADA77C] hover:bg-[#9C966C] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-all hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                            >
                                Subscribe
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Section - Contact Info */}
                    <motion.div
                        className="flex flex-col md:text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="mb-5 sm:mb-6">
                            <p className="mb-2 sm:mb-3">
                                <a href="tel:4706715955" className="text-sm sm:text-base lg:text-lg hover:opacity-70 transition-opacity">
                                    (470) 671-5955
                                </a>
                            </p>
                            <p className="mb-2 sm:mb-3">
                                <a href="mailto:contact@regenmdwellness.com" className="text-sm sm:text-base lg:text-lg hover:opacity-70 transition-opacity break-all">
                                    contact@regenmdwellness.com
                                </a>
                            </p>
                            <p className="mb-5 sm:mb-6">
                                <a
                                    href="https://www.google.com/maps/place/900+Ashwood+Pkwy+%23120,+Atlanta,+GA+30338"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm sm:text-base lg:text-lg hover:opacity-70 transition-opacity"
                                >
                                    900 Ashwood Parkway, Suite 120<br />
                                    Atlanta, GA 30338
                                </a>
                            </p>
                        </div>

                        {/* Hours Section */}
                        <div className="max-w-[340px] md:ml-auto">
                            {/* Toggle */}
                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:justify-end">
                                <span className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-all ${!isSupport ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                    Office
                                </span>
                                <label className="relative inline-block w-11 h-6 sm:w-12 sm:h-6 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isSupport}
                                        onChange={() => setIsSupport(!isSupport)}
                                        className="opacity-0 w-0 h-0"
                                    />
                                    <span className={`absolute inset-0 rounded-full transition-colors ${isSupport ? 'bg-[#9C966C]' : 'bg-[#ADA77C]'}`}>
                                        <span className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${isSupport ? 'translate-x-5 sm:translate-x-6' : ''}`}></span>
                                    </span>
                                </label>
                                <span className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-all ${isSupport ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Support
                                </span>
                            </div>

                            {/* Phone Available Indicator */}
                            {isPhoneAvailable && (
                                <motion.div
                                    className="flex items-center gap-2 text-xs sm:text-sm text-[#ADA77C] font-medium mb-2 sm:mb-3 md:justify-end"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                >
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                    Phone support is currently available
                                </motion.div>
                            )}

                            {/* Hours Table */}
                            <table className="w-full text-xs sm:text-sm">
                                <tbody>
                                    {(isSupport ? supportHours : officeHours).map((item, index) => (
                                        <tr
                                            key={index}
                                            className={currentDay === index ? 'bg-[#ADA77C]/20 rounded-lg' : ''}
                                        >
                                            <td className="py-1 sm:py-1.5 pl-3 sm:pl-4 pr-2 font-medium text-left">{item.day}</td>
                                            <td className="py-1 sm:py-1.5 pr-3 sm:pr-4 text-right">{item.hours}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Footer;
