import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import Hero from './Components/hero';
import ToolsShowcase from './Components/tools';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyCyberRX from './Components/WhyCyberRx';
import Footer from './Components/footer';
import About from './Components/about';
import ComingSoon from './Components/ComingSoon';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import EmailDetector from './Components/EmailDetector';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* 🚫 Mobile-only warning */}
      <div className="mobile-warning">
        <h2 className="mobile-message">Sorry, this toolkit is crafted for PC users only.</h2>
        <h1 className="mobile-brand">Cyber-RX</h1>
        <p className="mobile-tagline">Precision tools for serious cyber defenders.</p>
        <img src="/logo.png" alt="Cyber-RX Logo" className="mobile-logo" />
        <button className="notify-btn">Notify Me When Mobile Launches</button>
      </div>

      {/* 💻 Main Site */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Homepage components inside main layout */}
              <Route index element={
                <>
                  <Hero />
                  <ToolsShowcase />
                  <WhyCyberRX />
                  
                </>
              } />
              {/* About page also inside layout */}
              <Route path="about" element={<About />} />
              <Route path="EmailDetector" element={<EmailDetector />} />
               {/* Coming Soon Pages */}
               <Route path="pricing" element={<ComingSoon title="Pricing – Coming Soon!" />} />
  <Route path="features" element={<ComingSoon title="Features – Coming Soon!" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
