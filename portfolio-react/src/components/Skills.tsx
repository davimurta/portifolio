import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "react" },
        { name: "TypeScript", level: 85, icon: "typescript" },
        { name: "Next.js", level: 80, icon: "nextjs" },
        { name: "HTML/CSS", level: 95, icon: "html" },
        { name: "Tailwind CSS", level: 85, icon: "tailwind" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, icon: "nodejs" },
        { name: "Express", level: 80, icon: "express" },
        { name: "Python", level: 70, icon: "python" },
        { name: "PostgreSQL", level: 75, icon: "postgresql" },
        { name: "MongoDB", level: 80, icon: "mongodb" },
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 90, icon: "git" },
        { name: "Docker", level: 70, icon: "docker" },
        { name: "AWS", level: 65, icon: "aws" },
        { name: "Figma", level: 75, icon: "figma" },
        { name: "VS Code", level: 95, icon: "vscode" },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Habilidades</span>
          <h2 className="section-title">
            Minhas <span className="text-accent">Skills</span>
          </h2>
          <p className="section-description">
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee de tecnologias */}
        <motion.div
          className="tech-marquee"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="marquee-content">
            <span className="marquee-item">React</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">TypeScript</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Node.js</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Next.js</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">PostgreSQL</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Docker</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">AWS</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">React</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">TypeScript</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Node.js</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Next.js</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">PostgreSQL</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">Docker</span>
            <span className="marquee-separator">*</span>
            <span className="marquee-item">AWS</span>
            <span className="marquee-separator">*</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
