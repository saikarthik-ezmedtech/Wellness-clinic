import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoryOptions = [
    { id: 'weight-loss', label: 'Weight loss' },
    { id: 'build-muscle', label: 'Build muscle' },
    { id: 'better-sleep', label: 'Better sleep' },
    { id: 'anti-aging', label: 'Anti-aging' },
    { id: 'joint-pain', label: 'Joint pain relief' },
    { id: 'better-sex', label: 'Better sex' },
    { id: 'less-fatigue', label: 'Less fatigue & more energy' },
    { id: 'focus-brain', label: 'Focus & brain health' },
    { id: 'athletic-performance', label: 'Athletic performance' }
];

const detailedOptions = [
    { id: 'lose-5-15', label: 'Lose 5-15 lbs', category: 'Weight loss' },
    { id: 'lose-20-plus', label: 'Lose 20 lbs or more', category: 'Weight loss' },
    { id: 'joint-pain', label: 'Relief from joint pain', category: 'Joint pain relief' },
    { id: 'more-alert', label: 'Be more alert', category: 'Focus & brain health' },
    { id: 'better-erections', label: 'Better erections', category: 'Better sex' },
    { id: 'anti-aging', label: 'Slow down aging process', category: 'Anti-aging' },
    { id: 'muscle-def', label: 'More muscle definition', category: 'Build muscle' },
    { id: 'energy-day', label: 'Have energy to get through the day', category: 'Less fatigue & more energy' },
    { id: 'sex-drive', label: 'Increase sex drive', category: 'Better sex' },
    { id: 'immunity', label: 'Not get sick easily', category: 'Health' },
    { id: 'skin-tone', label: 'Better skin tone', category: 'Anti-aging' },
    { id: 'energy-workout', label: 'Have energy to workout', category: 'Athletic performance' },
    { id: 'brain-fog', label: 'Clear brain fog', category: 'Focus & brain health' },
    { id: 'sleep-8h', label: 'Be able to sleep 8 hours a night', category: 'Better sleep' }
];

const ageOptions = [
    { id: '18-25', label: '18 - 25' },
    { id: '26-30', label: '26 - 30' },
    { id: '31-40', label: '31 - 40' },
    { id: '41-54', label: '41 - 54' },
    { id: '55+', label: '55+' }
];

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedDetails, setSelectedDetails] = useState([]);
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedCancer, setSelectedCancer] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');

    const handleCategoryToggle = (id) => {
        setSelectedCategories(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            if (prev.length >= 3) {
                return prev;
            }
            return [...prev, id];
        });
    };

    const handleDetailToggle = (id) => {
        setSelectedDetails(prev => {
            if (prev.includes(id)) {
                return prev.filter(item => item !== id);
            }
            if (prev.length >= 3) {
                return prev;
            }
            return [...prev, id];
        });
    };

    const handleAgeSelect = (id) => {
        setSelectedAge(id);
        // Auto-advance after brief delay
        setTimeout(() => {
            handleNextStep();
        }, 300);
    };

    const handleCancerSelect = (answer) => {
        setSelectedCancer(answer);
        // Auto-advance after brief delay
        setTimeout(() => {
            handleNextStep();
        }, 300);
    };

    const handleNextStep = () => {
        setStep(step + 1);
        window.scrollTo(0, 0);
    };

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            window.scrollTo(0, 0);
        }
    };

    const progress = Math.round(((step - 1) / 6) * 100);

    return (
        <div className="h-screen pt-16 pb-24 px-4 sm:px-6 bg-white relative overflow-hidden flex flex-col">
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {/* STEP 1: CATEGORY SELECTION */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="text-center mb-6">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                                    WHAT ARE YOUR PRIMARY CONCERNS?
                                </h1>
                                <p className="text-base text-gray-800 font-medium">
                                    Choose up to three.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-3xl mx-auto mb-6 w-full">
                                {categoryOptions.map((option) => {
                                    const isSelected = selectedCategories.includes(option.id);
                                    return (
                                        <div
                                            key={option.id}
                                            onClick={() => handleCategoryToggle(option.id)}
                                            className={`relative flex items-center p-3 rounded-md cursor-pointer transition-all duration-200 border ${isSelected
                                                ? 'bg-[#a9a9a9] border-[#999] text-white'
                                                : 'bg-[#e5e5e5] border-transparent text-gray-800 hover:bg-gray-300'
                                                }`}
                                        >
                                            <div className={`
                                                flex-shrink-0 w-7 h-7 rounded-[4px] flex items-center justify-center mr-3 border-2 transition-colors
                                                ${isSelected ? 'bg-black border-black' : 'bg-white border-white'}
                                            `}>
                                                {isSelected && (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-base font-medium">
                                                {option.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleNextStep}
                                    className={`px-10 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md ${selectedCategories.length > 0
                                        ? 'bg-[#ADA77C] text-white hover:bg-[#9C966C]'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={selectedCategories.length === 0}
                                >
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: DETAILED SELECTION */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="text-center mb-6">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    WHAT ARE YOUR SPECIFIC GOALS?
                                </h1>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-w-3xl mx-auto mb-6 w-full max-h-[60vh] overflow-y-auto pr-2">
                                {detailedOptions.map((option) => {
                                    const isSelected = selectedDetails.includes(option.id);
                                    return (
                                        <div
                                            key={option.id}
                                            onClick={() => handleDetailToggle(option.id)}
                                            className={`relative flex items-center p-3 rounded-md cursor-pointer transition-all duration-200 border ${isSelected
                                                ? 'bg-[#a9a9a9] border-[#999] text-white'
                                                : 'bg-[#e5e5e5] border-transparent text-gray-800 hover:bg-gray-300'
                                                }`}
                                        >
                                            <div className={`
                                                flex-shrink-0 w-7 h-7 rounded-[4px] flex items-center justify-center mr-3 border-2 transition-colors
                                                ${isSelected ? 'bg-black border-black' : 'bg-white border-white'}
                                            `}>
                                                {isSelected && (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-base font-medium">
                                                {option.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleNextStep}
                                    className={`px-10 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md ${selectedDetails.length > 0
                                        ? 'bg-[#ADA77C] text-white hover:bg-[#9C966C]'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                    disabled={selectedDetails.length === 0}
                                >
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: AGE SELECTION */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    WHAT IS YOUR AGE?
                                </h1>
                            </div>

                            <div className="flex flex-col gap-2.5 max-w-xl mx-auto mb-6 w-full">
                                {ageOptions.map((option) => {
                                    const isSelected = selectedAge === option.id;
                                    return (
                                        <div
                                            key={option.id}
                                            onClick={() => handleAgeSelect(option.id)}
                                            className={`relative flex items-center justify-center p-4 rounded-md cursor-pointer transition-all duration-200 border ${isSelected
                                                ? 'bg-[#a9a9a9] border-[#999] text-white'
                                                : 'bg-[#e5e5e5] border-transparent text-gray-800 hover:bg-gray-300'
                                                }`}
                                        >
                                            <span className="text-base font-medium">
                                                {option.label}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: CANCER HISTORY */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="text-center mb-8">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                    DO YOU HAVE A HISTORY OF CANCER OR ARE<br />YOU CURRENTLY BEING TREATED FOR CANCER?
                                </h1>
                            </div>

                            <div className="flex flex-col gap-2.5 max-w-xl mx-auto mb-6 w-full">
                                {['Yes', 'No'].map((answer) => {
                                    const isSelected = selectedCancer === answer;
                                    return (
                                        <div
                                            key={answer}
                                            onClick={() => handleCancerSelect(answer)}
                                            className={`relative flex items-center justify-center p-4 rounded-md cursor-pointer transition-all duration-200 border ${isSelected
                                                ? 'bg-[#a9a9a9] border-[#999] text-white'
                                                : 'bg-[#e5e5e5] border-transparent text-gray-800 hover:bg-gray-300'
                                                }`}
                                        >
                                            <span className="text-base font-medium">
                                                {answer}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}


                    {/* STEP 5: CONTACT FORM */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="text-center mb-6">
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                                    CONTACT INFORMATION
                                </h1>
                            </div>

                            <div className="max-w-2xl mx-auto w-full space-y-4 mb-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        className="w-full bg-white border-2 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#ADA77C] transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your.email@example.com"
                                        className="w-full bg-white border-2 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#ADA77C] transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="(555) 123-4567"
                                        className="w-full bg-white border-2 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#ADA77C] transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>

                                {/* Location */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="City, State"
                                        className="w-full bg-white border-2 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:border-[#ADA77C] transition-colors text-gray-800 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={handleNextStep}
                                    disabled={!name.trim() || !email.trim() || !email.includes('@') || !phone.trim() || !location.trim()}
                                    className={`px-10 py-3 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-md ${(name.trim() && email.trim() && email.includes('@') && phone.trim() && location.trim())
                                        ? 'bg-[#ADA77C] text-white hover:bg-[#9C966C]'
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    Continue
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 6: THANK YOU */}
                    {step === 6 && (
                        <motion.div
                            key="step6"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col h-full justify-center"
                        >
                            <div className="max-w-3xl mx-auto w-full text-center">
                                <motion.h1
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                                >
                                    Thank You!
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="text-base text-gray-700 leading-relaxed mb-8 px-4"
                                >
                                    Your quiz answers will be reviewed by our wellness specialists. A consultant will be reaching out to you directly to discuss a recommended treatment plan. In the meantime, check out these peptide blends that may mitigate or improve those areas in your life!
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mb-8"
                                >
                                    <div className="inline-block">
                                        <img
                                            src="/assets/regenmd_her_transparent.png"
                                            alt="REGENMD for Her"
                                            className="w-56 h-56 mx-auto mb-4 object-contain"
                                        />
                                        <p className="text-sm font-semibold text-gray-800">REGENMD for Her</p>
                                    </div>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    className="text-lg font-semibold text-gray-800 mb-6"
                                >
                                    Are you ready to get started?
                                </motion.p>

                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    href="/contact"
                                    className="inline-block bg-[#ADA77C] hover:bg-[#9C966C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-lg transform hover:scale-105"
                                >
                                    Book a Consult
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* STICKY FOOTER - Hide on thank you page */}
            {step < 6 && (
                <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-50 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-gray-600 font-mono tracking-tight">
                            {progress}% complete
                        </span>
                        <div className="w-24 md:w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#ADA77C] transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handlePrevStep}
                            disabled={step === 1}
                            className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${step === 1
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                : 'bg-[#e5e5e5] text-gray-500 hover:bg-gray-300'
                                }`}
                            aria-label="Previous Step"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                                <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNextStep}
                            disabled={step === 1 ? selectedCategories.length === 0 : step === 2 ? selectedDetails.length === 0 : step === 3 ? !selectedAge : step === 4 ? !selectedCancer : step === 5 ? (!name.trim() || !email.trim() || !email.includes('@') || !phone.trim() || !location.trim()) : true}
                            className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${(step === 1 ? selectedCategories.length === 0 : step === 2 ? selectedDetails.length === 0 : step === 3 ? !selectedAge : step === 4 ? !selectedCancer : step === 5 ? (!name.trim() || !email.trim() || !email.includes('@') || !phone.trim() || !location.trim()) : true)
                                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                                : 'bg-[#aec3d8] text-black hover:bg-[#9aacbf]'
                                }`}
                            aria-label="Next Step"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 fill-current">
                                <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Quiz;
