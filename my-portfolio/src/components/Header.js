import React from 'react';
import { motion } from 'framer-motion';
import avatarImage from '../assets/avatar.jpg'; // Make sure to add your avatar image to the assets folder

const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    <div className="header-left">
      <img src={avatarImage} alt="Halil Ibrahim Demir" className="avatar" />
      <h1>Halil Ibrahim Demir</h1>
    </div>
    <nav>
      <ul>
        {['about', 'projects', 'certificates', 'contact'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  </motion.header>
);

export default Header;