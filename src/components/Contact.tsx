import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container" style={{ paddingBottom: '4rem' }}>
      <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 60%)',
          filter: 'blur(30px)',
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            Let's build the <span className="neon-text">future.</span>
          </h2>
          <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            Whether you're looking to collaborate on a groundbreaking project or just want to connect with a fellow visionary, I'm always open to meaningful conversations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="#" className="magnetic-btn interactive-element" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%' }} aria-label="GitHub">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="magnetic-btn interactive-element" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%' }} aria-label="LinkedIn">
              <ExternalLink size={20} />
            </a>
            <a href="#" className="magnetic-btn interactive-element" style={{ width: '50px', height: '50px', padding: 0, borderRadius: '50%' }} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </motion.div>
      
      <div style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} — Building technology that solves real-world problems.
      </div>
    </section>
  );
};

export default Contact;
