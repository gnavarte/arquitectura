import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} AgroSmart Solutions | Todos los derechos reservados | Desarrollado por{' '}
        <a href="https://tudireccionweb.com" className="footer-link">
          Tu Empresa
        </a>
      </p>
    </div>
  );
}

export default Footer;
