import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="footer-logo">
              <span className="logo-text">PORTFOLIO</span>
              <span className="logo-dot"></span>
            </a>
            <p className="footer-description">
              Desenvolvedor Full Stack apaixonado por criar experiencias digitais incriveis.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Links Rapidos</h4>
            <nav className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">Sobre</a>
              <a href="#projects">Projetos</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contato</a>
            </nav>
          </motion.div>

          <motion.div
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="footer-title">Contato</h4>
            <div className="footer-contact-info">
              <a href="mailto:contato@seudominio.com">contato@seudominio.com</a>
              <span>Brasil</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            &copy; {currentYear} Portfolio. Todos os direitos reservados.
          </p>
          <p className="credits">
            Desenvolvido com <span className="heart">&#x2665;</span> e React + TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
