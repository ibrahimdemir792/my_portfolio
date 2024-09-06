import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import cs50xImage from '../assets/cs50x.jpg';
import cs50pImage from '../assets/cs50p.jpg';
import cs50wImage from '../assets/cs50w.jpg';

const Certificates = () => (
  <ScrollAnimation>
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Certificates</h2>
      <div className="grid-container">
        {[
          { title: 'Introduction to Computer Science', issuer: 'Harvard University', year: '2023', image: cs50xImage, href: 'https://courses.edx.org/certificates/c82f1ca49d8e4ca78d19f261288a2ae2' },
          { title: 'Introduction to Programming with Python', issuer: 'Harvard University', year: '2023', image: cs50pImage, href: 'https://courses.edx.org/certificates/f51a72edad7648f68f042f90fb16e44a' },
          { title: 'Web Programming with Python and JavaScript', issuer: 'Harvard University', year: '2023', image: cs50wImage },
          // { title: 'Machine Learning', issuer: 'Stanford Online', year: '2021', image: 'path/to/cert4-image.jpg' },
        ].map((cert, index) => (
          <motion.div
            key={cert.title}
            className="card certificate-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={cert.image} alt={cert.title} className="card-image" />
            <div className="card-content">
              <h3>{cert.title}</h3>
              <p>Issuer: {cert.issuer}</p>
              <p>Year: {cert.year}</p>
              <motion.a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Certificate
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </ScrollAnimation>
);

export default Certificates;