import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>JH</span>
            </div>
            <div className="footer-info">
              <h3 className="footer-name">Joshua R. Hammond</h3>
              <p className="footer-title">Cloud Solutions Engineer | U.S. Army Veteran</p>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-cta">
            <h4 className="cta-title">Let's Work Together</h4>
            <p>Interested in collaborating or have questions?</p>
            <a href="#contact" className="cta-button">
              Get In Touch
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="social-icon" title="GitHub" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="social-icon" title="Twitter" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Joshua R. Hammond. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" className="legal-link">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
