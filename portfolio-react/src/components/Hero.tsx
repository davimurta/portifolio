import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="hero-label"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Desenvolvedor Full Stack
          </motion.span>

          <h1 className="hero-title">
            <motion.span
              className="title-line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Criando
            </motion.span>
            <motion.span
              className="title-line accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Experiencias
            </motion.span>
            <motion.span
              className="title-line"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Digitais
            </motion.span>
          </h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Transformo ideias em produtos digitais incriveis.
            Especializado em React, TypeScript e desenvolvimento web moderno.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <a href="#projects" className="btn btn-primary">
              Ver Projetos
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="visual-container">
            <div className="visual-circle circle-1"></div>
            <div className="visual-circle circle-2"></div>
            <div className="visual-circle circle-3"></div>
            <div className="visual-code">
              <span className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-var">developer</span> = {'{'}
              </span>
              <span className="code-line indent">
                <span className="code-prop">name</span>:{' '}
                <span className="code-string">"Seu Nome"</span>,
              </span>
              <span className="code-line indent">
                <span className="code-prop">stack</span>:{' '}
                <span className="code-array">["React", "TS", "Node"]</span>,
              </span>
              <span className="code-line indent">
                <span className="code-prop">passion</span>:{' '}
                <span className="code-string">"Building Cool Stuff"</span>
              </span>
              <span className="code-line">{'}'}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
