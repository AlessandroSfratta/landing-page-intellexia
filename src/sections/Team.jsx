import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import teamData from '../data/team.json';
import './Team.css';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.12 // 120ms stagger as specified
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 16 // translateY(16px) as specified
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="team section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="team__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="team__header">
            <h2 className="team__title heading-lg">Il nostro team</h2>
            <p className="team__subtitle body-lg">
              Professionisti con esperienza consolidata e specializzazione settoriale, 
              uniti dalla passione per l'eccellenza e l'innovazione nel diritto.
            </p>
          </div>

          <div className="team__grid">
            {teamData.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                variants={cardVariants}
              >
                <div className="team-card__photo">
                  <img 
                    src={member.foto} 
                    alt={`Ritratto di ${member.nome}`}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x375/CBB79E/FFFFFF?text=${member.nome.split(' ').map(n => n[0]).join('')}`;
                    }}
                  />
                </div>

                <div className="team-card__content">
                  <div className="team-card__header">
                    <h3 className="team-card__name heading-sm">{member.nome}</h3>
                    <p className="team-card__role body">{member.ruolo}</p>
                  </div>

                  <div className="team-card__areas">
                    {member.aree.slice(0, 4).map((area, areaIndex) => (
                      <span key={areaIndex} className="area-tag">
                        {area}
                      </span>
                    ))}
                    {member.aree.length > 4 && (
                      <span className="area-tag area-tag--more">
                        +{member.aree.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="team-card__bio">
                    <p className="bio-text">{member.bioBreve}</p>
                  </div>

                  <div className="team-card__contact">
                    <a 
                      href={`mailto:${member.email}`}
                      className="contact-link"
                      aria-label={`Invia email a ${member.nome}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {member.email}
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                      aria-label={`Profilo LinkedIn di ${member.nome}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>

                  <div className="team-card__actions">
                    <Link 
                      to={`/lawyer/${index}`}
                      className="btn btn-primary btn-sm"
                      aria-label={`Scopri di più su ${member.nome}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Scopri di più
                    </Link>
                    <a 
                      href={member.cvUrl}
                      className="btn btn-outline btn-sm"
                      download
                      aria-label={`Scarica CV di ${member.nome}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Scarica CV
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
