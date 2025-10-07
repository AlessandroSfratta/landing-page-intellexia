import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <div className="logo-container">
                <img 
                  src="/assets/logo/LogoGold (1).png" 
                  
                  alt="Intellexia - Società tra Avvocati" 
                  className="logo-image"
                />
                <span className="logo-text">INTELLEXIA</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Navigazione principale">
            <ul className="nav-list">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  className="nav-link"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className="nav-link"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
                  className="nav-link"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="header__cta">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
              aria-label="Vai alla sezione contatti"
            >
              Contattaci
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="header__mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Apri menu di navigazione"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav aria-label="Navigazione mobile">
            <ul className="mobile-nav-list">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                  className="mobile-nav-link"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                  className="mobile-nav-link"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
                  className="mobile-nav-link"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                  className="mobile-nav-link"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="mobile-cta">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Contattaci
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
