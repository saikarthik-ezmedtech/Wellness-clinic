import React from 'react';

const MissionSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <style>{`
                .mission-container {
                    max-width: 1380px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .simple-media-list {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                }

                .simple-media-card {
                    position: relative;
                    border-radius: 24px;
                    overflow: hidden;
                    height: 380px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    text-align: center;
                    transition: transform 0.3s ease;
                }

                .simple-media-card:hover {
                    transform: translateY(-5px);
                }

                .card-bg {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                }

                .card-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.1);
                    z-index: 2;
                    transition: background 0.3s ease;
                }

                .simple-media-card:hover .card-overlay {
                    background: rgba(0, 0, 0, 0.15);
                }

                .card-content {
                    position: relative;
                    z-index: 3;
                    color: #1a1a1a;
                }

                .mission-text {
                    font-size: 1.5rem;
                    line-height: 1.6;
                    font-weight: 400;
                    max-width: 80%;
                    margin: 0 auto;
                }

                .book-btn {
                    background: white;
                    color: black;
                    padding: 14px 32px;
                    border-radius: 100px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                    display: inline-block;
                    text-decoration: none;
                    font-size: 0.9rem;
                    margin-top: 20px;
                }

                .book-btn:hover {
                    background: #f0f0f0;
                    transform: scale(1.05);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }

                @media (max-width: 768px) {
                    .simple-media-list {
                        grid-template-columns: 1fr;
                    }
                    .simple-media-card {
                        height: 320px;
                        padding: 30px;
                    }
                    .mission-text {
                        font-size: 1.2rem;
                    }
                }
            `}</style>

            <div className="mission-container">
                <div className="simple-media-list">
                    {/* Mission Card */}
                    <div className="simple-media-card group">
                        <img
                            src="/assets/mission_abstract_gradient.png"
                            alt="Our Mission"
                            className="card-bg transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="card-overlay" style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)' }}></div>
                        <div className="card-content relative z-10 px-8">
                            <p className="mission-text text-white font-semibold leading-relaxed drop-shadow-xl">
                                We believe that feeling good is for everyone, and our mission is to provide accessible and personalized wellness solutions that empower individuals to achieve their optimal state of physical and mental well-being.
                            </p>
                        </div>
                    </div>

                    {/* Image Card */}
                    <div className="simple-media-card group">
                        <img
                            src="/assets/book_now_bg_v2.png"
                            alt="Wellness Consultation"
                            className="card-bg transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="card-overlay" style={{ background: 'rgba(0, 0, 0, 0.2)' }}></div>
                        <div className="card-content relative z-10">
                            <a
                                href="#book-now"
                                className="bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.15em] transition-all transform hover:scale-105 active:scale-95 min-w-[200px] flex items-center justify-center shadow-2xl"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
