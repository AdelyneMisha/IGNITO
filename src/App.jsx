import { useState, useEffect } from 'react';
import './App.css';
import { motion, useScroll, useTransform } from "motion/react";
import astronautImg from './assets/astronaut.png'; 
import starsBg from './assets/stars.png';
import ursaImg from './assets/greatbear.png';
import orionImg from './assets/orion.png';
import cassiopeiaImg from './assets/queen.png';
import leoImg from './assets/leo.png';
import cygnusImg from './assets/swan.png';
import ScratImg from './assets/scrat.gif';


export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div 
      id="home"
      className="landing"
      style={{ "--bgimg": `url(${starsBg})` }}>

      {/* Three-column grid layout for background constellations */}
      <div className="constellation-grid">
        
        {/* Column 1 */}
        <div className="grid-column">
          <img src={ursaImg} alt="Ursa Major" className="constellation" />
          <img src={cassiopeiaImg} alt="Cassiopeia" className="constellation" />
        </div>

        {/* Column 2 (Center) 
        <div className="grid-column center-column">
          <img src={cygnusImg} alt="Cygnus" className="constellation" />
        </div>
        NEED TO MAKE IT POSITION BETTER*/}

        {/* Column 3 */}
        <div className="grid-column">
          <img src={orionImg} alt="Orion" className="constellation" />
          <img src={leoImg} alt="Leo" className="constellation" />
        </div>

      </div>
      <nav className={`navbar ${isScrolled ? 'visible' : ''}`}>
        <div className="nav-brand">
          <span className="nav-title">IGNITO '26</span>
          <img src={astronautImg} alt="Astronaut Icon" className="nav-astronaut" />
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#competitions">Competitions</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
        

      <div className={`hero-track ${isScrolled ? 'scrolled' : ''}`}>
        <div className="title">
          <h1 className="title">IGNITO '26</h1>
        </div>
        
        <div className="astronaut">
          <img src={astronautImg} alt="Astronaut" />
        </div>
        
      </div>
      
      <section className="info-section">
        <div className="info-card">
          <h2>THE COSMIC ARENA</h2>
          <p><strong>DATES:</strong> October 14 - 16, 2026</p>
          <p><strong>VENUE:</strong> Main Auditorium & Tech Grounds</p>
          <p>Prepare yourself for the ultimate celestial convergence of tech, design, and innovation.</p>
        </div>
      </section>

      <section id="competitions" className="info-section">
        <div className="info-card image-panel">
          <img src={ScratImg} alt="Competitions Graphic" className="panel-display-img" />
        </div>
        
      </section>

      <section id="events" className="info-section">
        <div className="info-card image-panel">
          <img src={ScratImg} alt="Events Graphic" className="panel-display-img" />
        </div>
      </section>

      <section id="contact" className="info-section">
        <div className="info-card image-panel">
          <img src={ScratImg} alt="Contact Us Graphic" className="panel-display-img" />
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 IGNITO. Crafted for the stars.</p>
      </footer>
    </div>
  );
}