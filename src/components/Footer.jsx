import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="logo-text">INTELLEXIA</span>
                <span className="logo-subtitle">Società tra Avvocati</span>
              </div>
              <p className="footer__description">
                Consulenza legale specializzata con un approccio moderno e orientato ai risultati 
                in ambito bancario, finanziario e delle crisi d'impresa.
              </p>
            </div>

            <div className="footer__links">
              <div className="footer__section">
                <h3 className="footer__section-title">Navigazione</h3>
                <ul className="footer__nav">
                  <li>
                    <button 
                      onClick={() => scrollToSection('home')}
                      className="footer__link"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="footer__link"
                    >
                      Chi siamo
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('team')}
                      className="footer__link"
                    >
                      Il nostro team
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="footer__link"
                    >
                      Contatti
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer__section">
                <h3 className="footer__section-title">Aree di competenza</h3>
                <ul className="footer__nav">
                  <li><span className="footer__text">Diritto bancario</span></li>
                  <li><span className="footer__text">Finanza strutturata</span></li>
                  <li><span className="footer__text">Ristrutturazioni</span></li>
                  <li><span className="footer__text">NPL e UTP</span></li>
                  <li><span className="footer__text">Real Estate</span></li>
                  <li><span className="footer__text">Contenzioso</span></li>
                </ul>
              </div>

              <div className="footer__section">
                <h3 className="footer__section-title">Contatti</h3>
                <div className="footer__contact">
                  <div className="contact-item">
                    <span className="contact-label">Roma:</span>
                    <a href="tel:+390612345678" className="footer__link">
                      +39 06 1234 5678
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Milano:</span>
                    <a href="tel:+390287654321" className="footer__link">
                      +39 02 8765 4321
                    </a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email:</span>
                    <a href="mailto:info@intellexia.it" className="footer__link">
                      info@intellexia.it
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__bottom">
            <div className="footer__legal">
              <p className="footer__copyright">
                © {currentYear} INTELLEXIA - Società tra Avvocati. Tutti i diritti riservati.
              </p>
              <div className="footer__legal-links">
                <a href="#privacy" className="footer__legal-link">
                  Privacy Policy
                </a>
                <a href="#cookie" className="footer__legal-link">
                  Cookie Policy
                </a>
                <a href="#terms" className="footer__legal-link">
                  Termini e Condizioni
                </a>
              </div>
            </div>

            <div className="footer__social">
              <a 
                href="https://www.linkedin.com/company/intellexia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Segui INTELLEXIA su LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
