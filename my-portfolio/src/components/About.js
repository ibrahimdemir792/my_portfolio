import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import reactLogo from '../assets/react.svg';
import jsLogo from '../assets/javascript.svg';
import htmlCssLogo from '../assets/html.svg';
import nodeLogo from '../assets/nodejs.svg';
import pythonLogo from '../assets/python.svg';
import djangoLogo from '../assets/django.svg';

const skills = [
  { name: 'React', logo: reactLogo },
  { name: 'JavaScript', logo: jsLogo },
  { name: 'HTML/CSS', logo: htmlCssLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'Django', logo: djangoLogo },
];

const About = () => (
  <ScrollAnimation>
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>About Me</h2>
      <motion.p
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        I'm a passionate web developer with experience in React, Node.js, and Python. I love creating user-friendly and efficient web applications.
      </motion.p>
      <h3>Skills</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="skill-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </ScrollAnimation>
);

export default About;