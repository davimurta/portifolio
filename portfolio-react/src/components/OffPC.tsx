import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './OffPC.css';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

const OffPC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      id: 1,
      title: "Open Source",
      description: "Contribuicoes para projetos da comunidade e libs proprias",
      category: "Community"
    },
    {
      id: 2,
      title: "Tech Blog",
      description: "Artigos sobre desenvolvimento, tutoriais e experiencias",
      category: "Writing"
    },
    {
      id: 3,
      title: "Side Projects",
      description: "Experimentos com novas tecnologias e ideias malucas",
      category: "Learning"
    },
    {
      id: 4,
      title: "Gaming",
      description: "Relaxando com alguns jogos quando o codigo compila",
      category: "Hobby"
    }
  ];

  return (
    <section id="off-pc" className="off-pc" ref={ref}>
      <div className="off-pc-container">
        <div className="off-pc-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.65, 0.05, 0, 1] }}
          >
            <span className="label-number">02</span>
            <span className="label-line" />
            <span className="label-text">Off-PC</span>
          </motion.div>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0.05, 0, 1] }}
          >
            Alem do <span className="text-accent">Codigo</span>
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0.05, 0, 1] }}
          >
            Porque a vida nao e so trabalho. Projetos pessoais e hobbies.
          </motion.p>
        </div>

        <div className="off-pc-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="off-pc-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.65, 0.05, 0, 1]
              }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="off-pc-category">{project.category}</span>
              <h3 className="off-pc-title">{project.title}</h3>
              <p className="off-pc-description">{project.description}</p>

              <div className="off-pc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          className="off-pc-marquee"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="marquee-track">
            <div className="marquee-content">
              {[...Array(2)].map((_, i) => (
                <span key={i} className="marquee-text">
                  React * TypeScript * Node.js * Next.js * PostgreSQL * MongoDB * Docker * AWS *
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffPC;
