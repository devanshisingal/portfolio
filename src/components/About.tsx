import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="glass-panel"
        style={{ padding: '4rem', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, var(--accent-deep-purple) 0%, transparent 60%)',
          filter: 'blur(40px)',
          opacity: 0.2,
          zIndex: 0
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 variants={itemVariants} className="heading-lg" style={{ marginBottom: '2rem' }}>
            Vision & <span className="gradient-text">Identity</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="text-body" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            I am a student developer driven by an uncompromising ambition to shape the future through technology. My focus is not just on writing code, but on architecting systems that create meaningful impact and redefine what's possible.
          </motion.div>

          <motion.h3 variants={itemVariants} className="heading-md" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            Passionate About:
          </motion.h3>

          <div className="grid-2">
            {[
              { title: "Artificial Intelligence", desc: "Pushing the boundaries of intelligent systems." },
              { title: "Full Stack Development", desc: "Building scalable, world-class architectures from end to end." },
              { title: "Competitive Programming", desc: "Solving complex algorithmic challenges with optimal efficiency." },
              { title: "Building Impactful Startups", desc: "Translating technical innovation into real-world value." },
              { title: "Meaningful Solutions", desc: "Leveraging technology to solve the most pressing problems of tomorrow." }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '16px'
                }}
              >
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
