import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleNetwork from './components/ParticleNetwork';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Vision from './components/Vision';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Ensure scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="grid-bg"></div>
      
      <div className="main-layout-container">
        <ParticleNetwork />
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Vision />
        <Blog />
        <Contact />
      </div>
    </>
  );
}

export default App;
