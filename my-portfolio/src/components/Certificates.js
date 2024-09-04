import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

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
          { title: 'Web Development Bootcamp', issuer: 'Udemy', year: '2023', image: 'path/to/cert1-image.jpg' },
          { title: 'React Fundamentals', issuer: 'FreeCodeCamp', year: '2022', image: 'path/to/cert2-image.jpg' },
          { title: 'Python for Data Science', issuer: 'Coursera', year: '2021', image: 'path/to/cert3-image.jpg' },
          { title: 'Machine Learning', issuer: 'Stanford Online', year: '2021', image: 'path/to/cert4-image.jpg' },
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
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </ScrollAnimation>
);

export default Certificates;