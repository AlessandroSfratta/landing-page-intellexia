import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import teamData from '../data/team.json';
import './LawyerDetail.css';

const LawyerDetail = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    const lawyerData = teamData.find((member, index) => index.toString() === id);
    setLawyer(lawyerData);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!lawyer) {
    return (
      <div className="lawyer-detail-loading">
        <div className="container">
          <p>Caricamento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lawyer-detail">
      <div className="container">
        <div className="lawyer-detail__content">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb__link">Home</Link>
            <span className="breadcrumb__separator">›</span>
            <Link to="/#team" className="breadcrumb__link">Team</Link>
            <span className="breadcrumb__separator">›</span>
            <span className="breadcrumb__current">{lawyer.nome}</span>
          </nav>

          {/* Header */}
          <div className="lawyer-header">
            <div className="lawyer-header__photo">
              <img 
                src={lawyer.foto} 
                alt={`Ritratto di ${lawyer.nome}`}
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x500/CBB79E/FFFFFF?text=${lawyer.nome.split(' ').map(n => n[0]).join('')}`;
                }}
              />
            </div>
            <div className="lawyer-header__info">
              <h1 className="lawyer-header__name heading-xl">{lawyer.nome}</h1>
              <p className="lawyer-header__role heading-sm">{lawyer.ruolo}</p>
              
              <div className="lawyer-header__contact">
                <a 
                  href={`mailto:${lawyer.email}`}
                  className="contact-button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {lawyer.email}
                </a>
                <a 
                  href={lawyer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href={lawyer.cvUrl}
                  className="contact-button btn-primary"
                  download
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scarica CV
                </a>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="lawyer-content">
            {/* Biography */}
            <section className="lawyer-section">
              <h2 className="section-title">Biografia</h2>
              <div className="section-content">
                <p className="bio-text">{lawyer.bioCompleta}</p>
              </div>
            </section>

            {/* Areas of Expertise */}
            <section className="lawyer-section">
              <h2 className="section-title">Aree di Specializzazione</h2>
              <div className="section-content">
                <div className="areas-grid">
                  {lawyer.aree.map((area, index) => (
                    <div key={index} className="area-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Awards */}
            {lawyer.riconoscimenti && lawyer.riconoscimenti.length > 0 && (
              <section className="lawyer-section">
                <h2 className="section-title">Riconoscimenti</h2>
                <div className="section-content">
                  <div className="awards-grid">
                    {lawyer.riconoscimenti.map((riconoscimento, index) => (
                      <div key={index} className="award-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        <span>{riconoscimento}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Publications */}
            {lawyer.pubblicazioni && lawyer.pubblicazioni.length > 0 && (
              <section className="lawyer-section">
                <h2 className="section-title">Pubblicazioni</h2>
                <div className="section-content">
                  <div className="publications-grid">
                    {lawyer.pubblicazioni.map((pubblicazione, index) => (
                      <div key={index} className="publication-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{pubblicazione}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Back Button */}
          <div className="lawyer-actions">
            <Link to="/#team" className="btn btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Torna al Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetail;
