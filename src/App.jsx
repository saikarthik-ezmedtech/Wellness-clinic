import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnnouncementBar from './components/AnnouncementBar'
import GradientCTA from './components/GradientCTA'
import ScrollingFeatures from './components/ScrollingFeatures'
import WhatWeDo from './components/WhatWeDo'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <GradientCTA />
      <ScrollingFeatures />
      <WhatWeDo />
    </div>
  )
}

export default App
