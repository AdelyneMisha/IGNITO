import { useState, useEffect } from 'react';
import './App.css';
import astronautImg from './assets/astronaut.png'; 
import starsBg from './assets/stars.png';
import ursaImg from './assets/greatbear.png';
import orionImg from './assets/orion.png';
import cassiopeiaImg from './assets/queen.png';
import leoImg from './assets/leo.png';
import cygnusImg from './assets/swan.png';
import ScratImg from './assets/scrat.gif';

import Competitions from './components/Competitions';
import Events from './components/Events';
import Contact from './components/Contact';

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePage, setActivePage] = useState('home');

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
      <nav className={`navbar ${isScrolled || activePage !== 'home' ? 'visible' : 'fixed-top'}`}>
        <div className="nav-brand">
          <span className="nav-title">IGNITO '26</span>
          <img src={astronautImg} alt="Astronaut Icon" className="nav-astronaut" />
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>Home</button>
          <button className={`nav-btn ${activePage === 'competitions' ? 'active' : ''}`} onClick={() => setActivePage('competitions')}>Competitions</button>
          <button className={`nav-btn ${activePage === 'events' ? 'active' : ''}`} onClick={() => setActivePage('events')}>Events</button>
          <button className={`nav-btn ${activePage === 'contact' ? 'active' : ''}`} onClick={() => setActivePage('contact')}>Contact</button>
        </div>
      </nav>
        

      {activePage === 'home' && (
        <>
          <div className={`hero-track ${isScrolled ? 'scrolled' : ''}`}>
            <div className="title">
              <h1 className="title">IGNITO '26</h1>
            </div>
            <div className="astronaut">
              <img src={astronautImg} alt="Astronaut" />
            </div>
          </div>
          
          <section id="about" className="info-section">
            <div className="info-card">
              <h2>feb 30,31</h2>
              <h2>at mec</h2>
              <p>there are secrets hidden in the stars, can you find them? </p>
              <p>hint: is the space around really empty?</p>
              
            </div>
          </section>
        </>
      )}

      {/* Render your imported sub-files cleanly based on state */}
      {activePage === 'competitions' && <Competitions />}
      {activePage === 'events' && <Events />}
      {activePage === 'contact' && <Contact />}

      

      <footer className="footer">
        <p>&copy; 2026 IGNITO. Crafted for the stars.</p>
      </footer>
    </div>
  );
}