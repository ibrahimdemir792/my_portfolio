import React from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        {['about', 'projects', 'certificates', 'contact'].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;