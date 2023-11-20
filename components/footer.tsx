import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customBlue">
      <div className="mx-auto py-10 flex flex-col items-center justify-center">
        <img src="/images/footerIcon.png" alt="Footer Icon" className="mb-4" />
        
        <p className="text-center text-xs text-white">
          Mar del Plata | 2235474466 | info@giardelli-gonzalez.com
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-10 pt-5">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: '30px', color: '#DD6C49' }} />
          </a>

          {/* Facebook Icon */}
          <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare style={{ fontSize: '30px', color: '#DD6C49' }} />
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: '30px', color: '#DD6C49' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;