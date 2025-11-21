import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3+", label: "Anos de Experiencia" },
    { number: "50+", label: "Projetos Concluidos" },
    { number: "30+", label: "Clientes Satisfeitos" },
    { number: "100%", label: "Dedicacao" },
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Sobre Mim</span>
          <h2 className="section-title">
            Desenvolvedor <span className="text-accent">Apaixonado</span> por Tecnologia
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <div className="image-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="image-frame"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-description">
              Ola! Sou um desenvolvedor full stack com paixao por criar experiencias
              digitais excepcionais. Minha jornada na programacao comecou ha alguns anos,
              e desde entao venho aprimorando minhas habilidades em tecnologias modernas.
            </p>
            <p className="about-description">
              Especializo-me em desenvolvimento web utilizando React, TypeScript, Node.js
              e outras tecnologias de ponta. Acredito que o codigo limpo e a boa arquitetura
              sao fundamentais para o sucesso de qualquer projeto.
            </p>
            <p className="about-description">
              Quando nao estou codando, gosto de explorar novas tecnologias, contribuir
              para projetos open source e compartilhar conhecimento com a comunidade.
            </p>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                Vamos Conversar
              </a>
              <a href="#" className="btn btn-outline">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
