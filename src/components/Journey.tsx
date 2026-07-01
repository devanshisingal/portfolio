import React from 'react';
import { motion } from 'framer-motion';

const journeyItems = [
  {
    year: "Present",
    title: "Building Real-World Systems",
    desc: "Architecting full stack applications and continuously improving software engineering practices. Focusing on scalable AI integrations."
  },
  {
    year: "Recent",
    title: "AI Systems & Machine Learning",
    desc: "Dived deep into Generative AI, RAG systems, and Neural Networks, building projects that bridge AI research with practical applications."
  },
  {
    year: "Ongoing",
    title: "Mastering Algorithms",
    desc: "Consistently solving complex Data Structures and Algorithms problems, participating in competitive programming to hone optimization skills."
  },
  {
    year: "Foundation",
    title: "Open Source Contributions",
    desc: "Started by improving open-source projects, learning Git workflows, and collaborating with global developer communities."
  }
];

const Journey: React.FC = () => {
  return (
    <section id="journey" className="container">
      <motion.h2 
        className="heading-lg" 
        style={{ textAlign: 'center', marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Coding <span className="gradient-text">Journey</span>
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          top: 0, bottom: 0, left: '50%',
          width: '2px',
          background: 'linear-gradient(to bottom, var(--accent-electric-blue), var(--accent-deep-purple))',
          transform: 'translateX(-50%)',
          opacity: 0.3
        }} />

        {journeyItems.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                paddingRight: isEven ? '50%' : '0',
                paddingLeft: isEven ? '0' : '50%',
                position: 'relative',
                marginBottom: '4rem'
              }}
            >
              {/* Timeline Node */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translate(-50%, -10px)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--bg-deep-black)',
                border: '3px solid var(--accent-electric-blue)',
                boxShadow: '0 0 10px var(--accent-electric-blue)',
                zIndex: 2
              }} />

              <div className="glass-panel" style={{
                padding: '2rem',
                margin: isEven ? '0 3rem 0 0' : '0 0 0 3rem',
                width: '100%'
              }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(112, 0, 255, 0.2)',
                  color: 'var(--accent-electric-blue)',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  {item.year}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Journey;
