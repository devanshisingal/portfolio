import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter: React.FC<{ value: number; suffix?: string; title: string }> = ({ value, suffix = "", title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(duration / end, 10);
      
      const timer = setInterval(() => {
        start += Math.max(Math.floor(end / (duration / incrementTime)), 1);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div className="neon-text" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {title}
      </div>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="container">
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ padding: '4rem 2rem' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <AnimatedCounter value={300} suffix="+" title="DSA Problems Solved" />
          <AnimatedCounter value={10} suffix="+" title="AI Projects Built" />
          <AnimatedCounter value={15} suffix="+" title="Full Stack Apps" />
          <AnimatedCounter value={100} suffix="%" title="Continuous Learning" />
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
