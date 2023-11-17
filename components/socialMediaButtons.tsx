"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const commonIconStyle = {
  fontSize: '30px',  // Adjust the size based on your design
};

const coloredIconStyle = {
  ...commonIconStyle,
  color: '#DD6C49',  // Color for the first three icons
};

const whatsappIconStyle = {
  ...commonIconStyle,
  backgroundColor: '#25D366',  // Background color for the WhatsApp icon
  color: 'white',  // Text color for the WhatsApp icon
  borderRadius: '50%',  // Optional: Make it circular
  padding: '4px',  // Optional: Adjust padding for better visual appearance
};


// Define the social media buttons component
const SocialMediaButtons: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }} // Adjust x value based on your design
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '30%', // Adjust top position based on your design
        right: 30,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        zIndex: 1000, // Ensure it's above other elements
      }}
    >     
      {/* LinkedIn Button */}
      <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className=''>
        <FaLinkedin style={coloredIconStyle}/>
      </a>
      
      {/* Facebook Button */}
      <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare style={coloredIconStyle}/>
      </a>
      
      {/* Instagram Button */}
      <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={coloredIconStyle}/>
      </a>

      {/* WhatsApp Button */}
      <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className='pt-20'>
        <FaWhatsapp style={whatsappIconStyle}/>
      </a>
    </motion.div>
  );
};

export default SocialMediaButtons;