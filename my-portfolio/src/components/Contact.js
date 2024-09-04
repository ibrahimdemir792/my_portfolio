import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    setFormStatus('Thanks for your message!');
  };

  return (
    <ScrollAnimation>
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Me</h2>
        <motion.form onSubmit={handleSubmit} initial={{ y: 50 }} animate={{ y: 0 }}>
          <motion.input type="text" placeholder="Name" required whileFocus={{ scale: 1.05 }} />
          <motion.input type="email" placeholder="Email" required whileFocus={{ scale: 1.05 }} />
          <motion.textarea placeholder="Message" required whileFocus={{ scale: 1.05 }} />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </motion.form>
        {formStatus && <p>{formStatus}</p>}
      </motion.section>
    </ScrollAnimation>
  );
};

export default Contact;