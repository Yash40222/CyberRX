import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/header';
import Hero from './Components/hero';
import ToolsShowcase from './Components/tools';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyCyberRX from './Components/WhyCyberRx';
import Footer from './Components/footer';
import ParticleBackground from './Components/Particles';

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
    <ParticleBackground></ParticleBackground>
<div className="mobile-warning">
  <h2 className="mobile-message">Sorry, this toolkit is crafted for PC users only.</h2>
  <h1 className="mobile-brand">Cyber-RX</h1>
  <p className="mobile-tagline">Precision tools for serious cyber defenders.</p>
  <img src="/logo.png" alt="Cyber-RX Logo" className="mobile-logo" />
  <button className="notify-btn">Notify Me When Mobile Launches</button>
</div>
<div style={{ position: 'relative', zIndex: 1 }}>
  
      <Header></Header>
      <Hero></Hero>
      <ToolsShowcase></ToolsShowcase>
      <WhyCyberRX></WhyCyberRX>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
