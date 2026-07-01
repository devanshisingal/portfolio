import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI"]
  },
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["Generative AI", "RAG Systems", "NLP", "Agentic AI", "PyTorch"]
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "Docker", "PostgreSQL", "MongoDB"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container">
      <motion.h2 
        className="heading-lg" 
        style={{ textAlign: 'center', marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="gradient-text">Arsenal</span>
      </motion.h2>

      <div className="grid-2">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="glass-panel"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--accent-electric-blue)' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <motion.span
                  key={sIdx}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 240, 255, 0.1)', color: 'var(--text-primary)' }}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
