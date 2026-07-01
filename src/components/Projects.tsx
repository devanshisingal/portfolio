import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Portfolio Generator",
    problem: "Developers struggle to build premium personal brands quickly.",
    stack: ["Next.js", "React", "OpenAI API", "TailwindCSS"],
    challenges: "Generating responsive, styled components dynamically from LLM outputs while maintaining a cohesive design system.",
    github: "#",
    live: "#"
  },
  {
    title: "CAPTCHA Vision Assistant",
    problem: "Accessibility issues for visually impaired users facing complex visual CAPTCHAs.",
    stack: ["Python", "PyTorch", "OCR", "FastAPI"],
    challenges: "Training a robust vision model capable of generalizing across different distorted text variations and noise patterns.",
    github: "#",
    live: "#"
  },
  {
    title: "NextGen SaaS Platform",
    problem: "Fragmented team productivity and resource management.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    challenges: "Implementing real-time collaborative features and ensuring sub-second latency for state synchronization.",
    github: "#",
    live: "#"
  },
  {
    title: "Eco-Route Optimizer",
    problem: "High carbon footprint in urban delivery logistics.",
    stack: ["C++", "Python", "Google Maps API"],
    challenges: "Designing a heuristic algorithm that balances time constraints with fuel efficiency in complex city networks.",
    github: "#",
    live: "#"
  }
];

const ProjectCard: React.FC<{ project: any; idx: number }> = ({ project, idx }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: idx * 0.1, duration: 0.5 }}
      className="glass-panel"
    >
      <div style={{ transform: "translateZ(30px)", padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--accent-electric-blue)', fontSize: '0.9rem' }}>Problem Solved:</strong>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>{project.problem}</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <strong style={{ color: 'var(--accent-deep-purple)', fontSize: '0.9rem' }}>Challenges Faced:</strong>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.25rem' }}>{project.challenges}</p>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
            {project.stack.map((tech: string, i: number) => (
              <span key={i} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                {tech}
              </span>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={project.github} className="interactive-element" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', transition: 'color 0.2s' }}>
              <ExternalLink size={16} /> Code
            </a>
            <a href={project.live} className="interactive-element" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)', transition: 'color 0.2s' }}>
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container" style={{ perspective: "1000px" }}>
      <motion.h2 
        className="heading-lg" 
        style={{ textAlign: 'center', marginBottom: '4rem' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="grid-2">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
