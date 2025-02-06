import React from 'react';
import "./Footer.css";


const Footer = () => {
  return (
  
    <div className="footer">
      <p>Made with ♥️ by Zeynep Bahar </p>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </div>
  );
};

export default Footer;
