import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Values.css';

const Values = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Competenza",
      description: "Esperienza consolidata e specializzazione settoriale per soluzioni legali efficaci e innovative."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Chiarezza",
      description: "Comunicazione trasparente e comprensibile per garantire piena consapevolezza in ogni fase."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Affidabilità",
      description: "Relazioni durature basate su fiducia reciproca e risultati concreti per i nostri clienti."
    }
  ];

  return (
    <section id="about" className="values section">
      <div className="container">
        <motion.div 
          ref={ref}
          className="values__content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div className="values__header" variants={itemVariants}>
            <h2 className="values__title heading-lg">Chi siamo</h2>
            <p className="values__mission body-lg">
              INTELLEXIA è una società tra avvocati che offre consulenza legale specializzata 
              con un approccio moderno e orientato ai risultati. Combiniamo competenza tecnica, 
              innovazione e attenzione al cliente per fornire soluzioni su misura in ambito 
              bancario, finanziario e delle crisi d'impresa.
            </p>
          </motion.div>

          <motion.div className="values__grid" variants={containerVariants}>
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                variants={itemVariants}
              >
                <div className="value-card__icon">
                  {value.icon}
                </div>
                <h3 className="value-card__title heading-sm">{value.title}</h3>
                <p className="value-card__description body">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="values__approach" variants={itemVariants}>
            <h3 className="approach__title heading-md">Il nostro approccio</h3>
            <p className="approach__text body">
              Crediamo che ogni cliente meriti un servizio personalizzato e di eccellenza. 
              Il nostro team multidisciplinare lavora in sinergia per offrire consulenza 
              strategica e operativa, sempre aggiornata alle evoluzioni normative e di mercato.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
