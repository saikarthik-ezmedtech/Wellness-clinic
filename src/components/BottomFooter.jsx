import React from 'react';
import { motion } from 'framer-motion';

const BottomFooter = () => {
    return (
        <section className="w-full py-4 sm:py-6" style={{ backgroundColor: '#f9f9f9' }}>
            <motion.div
                className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">

                    {/* Left - Policy Links */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 text-center sm:text-left">
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                            <a href="/privacy-policy" className="hover:opacity-70 transition-opacity whitespace-nowrap">Privacy Policy</a>
                            <span className="text-gray-400 hidden sm:inline">•</span>
                            <a href="/terms-of-service" className="hover:opacity-70 transition-opacity whitespace-nowrap">Terms of Service</a>
                            <span className="text-gray-400 hidden sm:inline">•</span>
                            <a href="/sourcing-safety" className="hover:opacity-70 transition-opacity whitespace-nowrap">Sourcing & Safety</a>
                        </div>
                        <p className="text-gray-700 mt-2 sm:mt-0">
                            Digital Marketing by{' '}
                            <a
                                href="https://www.threewolf.co/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity inline-flex items-center gap-1"
                            >
                                Three Wolf
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                                </svg>
                            </a>
                        </p>
                    </div>

                    {/* Right - Social Media Icons */}
                    <ul className="flex items-center gap-3 sm:gap-4">
                        <li>
                            <motion.a
                                href="https://www.facebook.com/RegenMDwellness/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-9 h-9 sm:w-10 sm:h-10 text-gray-700 hover:text-[#ADA77C] transition-colors"
                                aria-label="Facebook"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full">
                                    <path d="M24.17,0.55h1.47c6.03,0,11.73,2.56,17.13,7.68c3.79,4.6,5.88,8.76,6.26,12.49c0.29,1.76,0.43,2.88,0.43,3.35
                                    v2.02c0,3.27-1.11,7.05-3.33,11.35c-3.23,5.3-7.84,8.98-13.82,11.04c-3.03,0.78-5.4,1.17-7.11,1.17h-0.57
                                    c-6.26,0-12.08-2.52-17.44-7.56c-4.55-5.04-6.83-10.9-6.83-17.58v-0.29c0-0.22,0.05-0.41,0.14-0.57c0-0.11-0.05-0.17-0.14-0.17
                                    c0.62-4.73,1.88-8.55,3.78-11.46c3.01-4.9,7.66-8.39,13.94-10.47C20.43,0.88,22.46,0.55,24.17,0.55z M20.84,16.22l0.14,4.5
                                    c0,0.14-0.14,0.29-0.43,0.45h-2.47v5.07h2.47c0.14,0,0.29,0.15,0.43,0.45v12.49l0.07,0.88h5.16V26.54c0.03-0.21,0.13-0.31,0.29-0.31
                                    h4.21c0.19,0,0.44-1.59,0.74-4.78v-0.29H26.5c-0.19,0-0.29-0.1-0.29-0.29v-3.5c0-1.49,0.87-2.31,2.62-2.47h2.9v-4.35
                                    c0-0.29-1.01-0.43-3.04-0.43h-0.74c-3.35,0-5.53,1.25-6.54,3.76C21.22,14.41,21.03,15.19,20.84,16.22z"/>
                                </svg>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                href="https://www.instagram.com/regenmdwellness_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-9 h-9 sm:w-10 sm:h-10 text-gray-700 hover:text-[#ADA77C] transition-colors"
                                aria-label="Instagram"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full">
                                    <path d="M23.3,1.46h3.4c3.64,0,7.77,1.5,12.41,4.51c3.5,2.73,6.03,5.88,7.6,9.45c1.42,3.4,2.13,6.28,2.13,8.62v1.96
                                    c0,5.27-2.16,10.49-6.49,15.67c-5.02,4.88-10.85,7.32-17.49,7.32c-8.29,0-15.06-3.86-20.31-11.58c-2.25-4.16-3.37-8.25-3.37-12.27
                                    c0-6.62,2.73-12.59,8.18-17.91C14.43,3.38,19.08,1.46,23.3,1.46z M12.3,22.04v7.35c0,4.01,1.27,6.68,3.81,8.02
                                    c1.14,0.65,4.81,0.89,11,0.72c4.74,0,7.47-0.52,8.18-1.55c1.6-1.28,2.4-3.4,2.4-6.35v-9.45c0-3.73-1.32-6.17-3.95-7.32l-1.76-0.58
                                    l-1.78-0.14H19.93c-3.67,0-6.12,1.79-7.35,5.36C12.4,19.19,12.3,20.5,12.3,22.04z M20.34,15h9.87c3.57,0,5.36,1.88,5.36,5.64v10
                                    c-0.48,3.48-1.93,5.22-4.37,5.22h-4.09c-1.91,0-3.93,0.05-6.05,0.14c-3.54,0-5.61-1.12-6.22-3.37c-0.18-1.25-0.28-3.13-0.28-5.64
                                    v-3.12c0-4.7,0.38-7.05,1.13-7.05C16.45,15.6,18,15,20.34,15z M18.52,25.58c0,3.03,1.74,5.14,5.22,6.33h2.82
                                    c3.37-1.22,5.06-3.37,5.06-6.47v-0.3c0-1.76-0.89-3.4-2.68-4.92c-1.22-0.85-2.48-1.27-3.79-1.27h-0.14c-2.91,0-4.94,1.5-6.08,4.51
                                    C18.78,23.65,18.64,24.36,18.52,25.58z M25.01,21.19h0.14c2.03,0,3.4,1.09,4.09,3.26c0.09,0.12,0.14,0.45,0.14,0.99
                                    c-0.45,2.91-1.86,4.37-4.23,4.37c-1.88,0-3.24-0.94-4.09-2.82c-0.12-0.15-0.22-0.62-0.3-1.41C21.1,22.65,22.52,21.19,25.01,21.19z
                                    M30.35,18.81c0.42,0.94,0.94,1.41,1.57,1.41c0.63,0,1.15-0.47,1.55-1.41c-0.22-1.14-0.79-1.71-1.71-1.71
                                    C30.82,17.39,30.35,17.96,30.35,18.81z"/>
                                </svg>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a
                                href="https://www.tiktok.com/@regenmd_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-9 h-9 sm:w-10 sm:h-10 text-gray-700 hover:text-[#ADA77C] transition-colors"
                                aria-label="TikTok"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg viewBox="0 0 50 50" fill="currentColor" className="w-full h-full">
                                    <path d="M25,0.19C11.3,0.19,0.19,11.3,0.19,25C0.19,38.7,11.3,49.81,25,49.81S49.81,38.7,49.81,25
                                    C49.81,11.3,38.7,0.19,25,0.19z M38.63,22.16c-0.93,0-1.83-0.12-2.73-0.33c-1.55-0.35-2.97-0.98-4.3-1.85
                                    c-0.07-0.05-0.14-0.14-0.22-0.11c-0.09,0.04-0.04,0.16-0.04,0.25c0,3.56,0.01,7.12-0.01,10.67c-0.01,2.49-0.81,4.71-2.43,6.61
                                    c-1.73,2.01-3.93,3.18-6.57,3.5c-2.03,0.25-3.96-0.12-5.79-1.02c-0.3-0.15-0.58-0.32-0.84-0.52c-0.08-0.07-0.17-0.15-0.25-0.22
                                    c0,0,0,0,0,0c-0.2-0.09-0.36-0.23-0.52-0.36c-1.63-1.3-2.79-2.93-3.42-4.92c-0.22-0.69-0.36-1.4-0.42-2.13
                                    c-0.05-0.52-0.05-1.05-0.02-1.57c0.08-1.21,0.36-2.36,0.86-3.47c0.52-1.15,1.23-2.18,2.13-3.06c1.05-1.03,2.27-1.8,3.66-2.3
                                    c0.87-0.31,1.76-0.5,2.69-0.57c0.67-0.05,1.33-0.03,2,0.04c0.09,0.01,0.14,0.03,0.14,0.14c-0.01,0.37-0.01,0.74-0.01,1.11
                                    c0.01,0.01,0.05,2.81,0.05,4.09c0,0.05,0,0.09,0,0.14c-0.01,0.13-0.07,0.17-0.19,0.14c-0.35-0.1-0.71-0.15-1.07-0.17
                                    c-0.56-0.03-1.12,0.05-1.64,0.24c-1.76,0.65-2.83,1.91-3.06,3.77c-0.22,1.83,0.5,3.3,2.03,4.36c0.13,0.09,0.26,0.17,0.38,0.27
                                    c0.03,0.03,0.06,0.05,0.09,0.08c0.35,0.14,0.71,0.28,1.09,0.36c1.2,0.24,2.32,0.05,3.36-0.59c1.2-0.74,1.91-1.82,2.16-3.2
                                    c0.05-0.26,0.05-0.53,0.05-0.79c0-7.14,0-14.29,0-21.43c0-0.33-0.05-0.29,0.29-0.29c1.65,0,3.29,0,4.94,0c0.04,0,0.08,0,0.12,0
                                    c0.17,0,0.17,0,0.17,0.17c0,0.38,0.16,1.28,0.17,1.35c0.71,3.61,4.92,5.82,6.22,6.02c0.36,0.05,0.72,0.10,1.08,0.09
                                    c0.15,0,0.16,0,0.15,0.15c0,0.34,0.07,3.79,0.06,5.05C38.96,22.15,38.92,22.16,38.63,22.16z"/>
                                </svg>
                            </motion.a>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default BottomFooter;
