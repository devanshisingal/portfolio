import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Generative AI in Software Engineering",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    date: "July 2026"
  },
  {
    title: "Architecting Scalable Systems for Startups",
    category: "System Design",
    readTime: "8 min read",
    date: "June 2026"
  },
  {
    title: "Building Agentic Workflows with LLMs",
    category: "Generative AI",
    readTime: "6 min read",
    date: "May 2026"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex-between"
        style={{ marginBottom: '3rem' }}
      >
        <h2 className="heading-lg">
          Insights & <span className="gradient-text">Learning</span>
        </h2>
        <a href="#" className="interactive-element" style={{ color: 'var(--accent-electric-blue)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
          View All <ArrowRight size={18} />
        </a>
      </motion.div>

      <div className="grid-3">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel interactive-element"
            style={{ padding: '2rem', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
            whileHover={{ y: -5, borderColor: 'var(--accent-electric-blue)' }}
          >
            <span style={{ 
              color: 'var(--accent-deep-purple)', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem' 
            }}>
              {post.category}
            </span>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.4 }}>
              {post.title}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
