import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import avatarImage from '../assets/avatar.jpg'; // Make sure to add your avatar image to the assets folder

const Header = () => {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="header-left">
        <img src={avatarImage} alt="Halil Ibrahim Demir" className="avatar" />
        <h1>
          Hi, I'm Halil Ibrahim Demir
          <span className={`emoji-wave ${isWaving ? 'wave' : ''}`} style={{ marginLeft: '10px', display: 'inline-block' }}>👋</span>
        </h1>
      </div>
    </motion.header>
  );
};

export default Header;