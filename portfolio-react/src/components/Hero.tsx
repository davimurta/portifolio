import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated grid background like Lando site
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;

      ctx.strokeStyle = 'rgba(210, 255, 0, 0.04)';
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = offset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = offset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offset += 0.15;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const customEase: [number, number, number, number] = [0.65, 0.05, 0, 1];

  const textVariants = {
    hidden: { opacity: 0, y: 100, skewY: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        delay: 0.3 + i * 0.12,
        duration: 0.9,
        ease: customEase,
      },
    }),
  };

  return (
    <section id="home" className="hero">
      {/* Background Canvas Grid */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Gradient Glows */}
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.65, 0.05, 0, 1] }}
        >
          <span className="eyebrow-line" />
          <span className="eyebrow-text">Full Stack Developer</span>
          <span className="eyebrow-line" />
        </motion.div>

        <div className="hero-title-wrapper">
          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
          >
            <div className="title-line-wrap">
              <motion.span className="title-line" custom={0} variants={textVariants}>
                Criando
              </motion.span>
            </div>
            <div className="title-line-wrap">
              <motion.span className="title-line title-accent" custom={1} variants={textVariants}>
                Experiencias
              </motion.span>
            </div>
            <div className="title-line-wrap">
              <motion.span className="title-line" custom={2} variants={textVariants}>
                Digitais
              </motion.span>
            </div>
          </motion.h1>
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.65, 0.05, 0, 1] }}
        >
          Transformando ideias em codigo. React, TypeScript, Node.js.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.65, 0.05, 0, 1] }}
        >
          <a href="#on-pc" className="btn btn-primary">
            Ver Projetos
          </a>
          <a href="#contact" className="btn btn-outline">
            Contato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
