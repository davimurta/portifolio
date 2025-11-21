import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './OnPC.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  year: string;
}

const OnPC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma completa com carrinho, pagamentos e dashboard admin",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Sistema de visualizacao de dados com graficos interativos",
      tags: ["TypeScript", "Next.js", "PostgreSQL"],
      year: "2024"
    },
    {
      id: 3,
      title: "API REST",
      description: "Backend escalavel com autenticacao e documentacao completa",
      tags: ["Node.js", "Express", "JWT", "Swagger"],
      year: "2023"
    },
    {
      id: 4,
      title: "Chat Real-time",
      description: "Aplicacao de mensagens com websockets e notificacoes",
      tags: ["Socket.io", "React", "Redis"],
      year: "2023"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const customEase: [number, number, number, number] = [0.65, 0.05, 0, 1];

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: customEase,
      },
    },
  };

  return (
    <section id="on-pc" className="on-pc" ref={ref}>
      <div className="on-pc-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.65, 0.05, 0, 1] }}
        >
          <span className="label-number">01</span>
          <span className="label-line" />
          <span className="label-text">On-PC</span>
        </motion.div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.65, 0.05, 0, 1] }}
        >
          Projetos de <span className="text-lime">Trabalho</span>
        </motion.h2>

        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.65, 0.05, 0, 1] }}
        >
          Codigo, commits e muito cafe. Projetos profissionais e de estudo.
        </motion.p>
      </div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              <span className="card-number">0{index + 1}</span>
              <span className="card-year">{project.year}</span>
            </div>

            <h3 className="card-title">{project.title}</h3>
            <p className="card-description">{project.description}</p>

            <div className="card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>

            <div className="card-footer">
              <a href="#" className="card-link">
                Ver Projeto
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default OnPC;
