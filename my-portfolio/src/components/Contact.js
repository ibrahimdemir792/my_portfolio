import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    if (response.ok) {
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Failed to send message. Please try again.');
    }
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
        {status && <p>{status}</p>}
      </motion.section>
    </ScrollAnimation>
  );
};

export default Contact;