import React from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import networkAppImage from '../assets/networkApp.jpg';
import mailAppImage from '../assets/mailApp.jpg';
import auctionAppImage from '../assets/auctionApp.jpg';
import wikiAppImage from '../assets/wikiApp.jpg';

const Projects = () => (
  <ScrollAnimation>
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Very First Projects</h2>
      <div className="grid-container">
        {[
          { title: 'Social Network App', description: 'Twitter clone built with React and Django', image: networkAppImage },
          { title: 'Mail App', description: 'Mail App built with React and Django', image: mailAppImage },
          { title: 'Auction App', description: 'An Auction App built with Django', image: auctionAppImage },
          { title: 'Project 4', description: 'A brief description of project 4.', image: wikiAppImage },
        ].map((project, index) => (
          <motion.div
            key={project.title}
            className="card project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </ScrollAnimation>
);

export default Projects;