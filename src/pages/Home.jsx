import React from 'react';
import Hero from '../components/Hero';
import GradientCTA from '../components/GradientCTA';
import ScrollingFeatures from '../components/ScrollingFeatures';
import WhatWeDo from '../components/WhatWeDo';
import MembershipCTA from '../components/MembershipCTA';
import WellnessCTA from '../components/WellnessCTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <GradientCTA />
            <ScrollingFeatures />
            <WhatWeDo />
            <MembershipCTA />
            <WellnessCTA />
        </main>
    );
};

export default Home;
