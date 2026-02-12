import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import FooterLinks from './components/FooterLinks';
import BottomFooter from './components/BottomFooter';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import Services from './pages/Services';

import Quiz from './pages/Quiz';

const Layout = () => {
  const location = useLocation();
  const isQuizPage = location.pathname === '/quiz';

  return (
    <div className={`min-h-screen font-sans text-gray-900 ${isQuizPage ? '' : 'pt-[100px] md:pt-[100px]'}`} style={{ backgroundColor: '#f9f9f9' }}>
      {!isQuizPage && <AnnouncementBar />}
      <Navbar isQuizPage={isQuizPage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      {!isQuizPage && (
        <>
          <Footer />
          <FooterLinks />
          <BottomFooter />
          <FloatingCTA />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
