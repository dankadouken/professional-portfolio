import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-mark">JH</div>
          <div className="logo-text">
            <h1>Joshua R. Hammond</h1>
            <p>Cloud Solutions Engineer | U.S. Army Veteran</p>
          </div>
        </div>
        
        <nav className={`nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul>
            <li>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
                <span className="nav-link-number">01.</span> Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                <span className="nav-link-number">02.</span> About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
                <span className="nav-link-number">03.</span> Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <span className="nav-link-number">04.</span> Contact
              </a>
            </li>
          </ul>
          
          <a 
            href="#contact" 
            className="mobile-cta-button"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </nav>
        
        <div className="desktop-cta">
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </div>
        
        <div 
          className={`mobile-nav-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;