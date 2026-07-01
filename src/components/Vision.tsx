import React from 'react';
import { motion } from 'framer-motion';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="flex-center" style={{ minHeight: '60vh', position: 'relative' }}>
      
      {/* Background glow for the vision section */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '800px',
        height: '300px',
        background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.2,
            background: 'linear-gradient(to right, #fff, var(--text-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            "My goal is to build a company that creates ethical technology, provides opportunities for people, solves meaningful problems, and <span className="neon-text">positively impacts society.</span>"
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
