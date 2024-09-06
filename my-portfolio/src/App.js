import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';  // Make sure this line is present

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1.0
};

function App() {
  return (
    <motion.div
      className="App"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <Navigation />
      <main>
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Halil Ibrahim Demir. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}

export default App;