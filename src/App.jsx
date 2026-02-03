import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnnouncementBar from './components/AnnouncementBar'
import GradientCTA from './components/GradientCTA'
import ScrollingFeatures from './components/ScrollingFeatures'
import WhatWeDo from './components/WhatWeDo'
import MembershipCTA from './components/MembershipCTA'
import WellnessCTA from './components/WellnessCTA'
import Footer from './components/Footer'
import FooterLinks from './components/FooterLinks'
import BottomFooter from './components/BottomFooter'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900" style={{ backgroundColor: '#f9f9f9' }}>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <GradientCTA />
      <ScrollingFeatures />
      <WhatWeDo />
      <MembershipCTA />
      <WellnessCTA />
      <Footer />
      <FooterLinks />
      <BottomFooter />
      <FloatingCTA />
    </div>
  )
}

export default App
