import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} AgroSmart Solutions | Todos los derechos reservados | Impulsado por{' '}
        <a href="https://aws.amazon.com/es/" className="footer-link" target="_blank" rel="noopener noreferrer">
          AWS
        </a>
      </p>
    </div>
  );
}

export default Footer;
