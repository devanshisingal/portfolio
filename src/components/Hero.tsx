import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="flex-center" style={{ minHeight: '80vh', position: 'relative' }}>
      
      {/* Floating AI Orb */}
      <motion.div
        animate={{
          y: [-15, 15, -15],
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '15%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-electric-blue) 0%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-deep-purple) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 0
        }}
      />

      <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
        <motion.h1 
          className="heading-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span className="gradient-text">Building technology that solves</span>
          <br />
          <span className="neon-text">real-world problems.</span>
        </motion.h1>
        
        <motion.p
          className="text-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ fontSize: '1.25rem', letterSpacing: '0.05em', color: 'var(--accent-electric-blue)' }}
        >
          Aspiring Software Engineer <span style={{color: 'var(--text-secondary)'}}>|</span> AI Builder <span style={{color: 'var(--text-secondary)'}}>|</span> Future Founder <span style={{color: 'var(--text-secondary)'}}>|</span> Problem Solver
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ marginTop: '3rem' }}
        >
          <a href="#projects" className="magnetic-btn interactive-element">
            <span>Explore My Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
