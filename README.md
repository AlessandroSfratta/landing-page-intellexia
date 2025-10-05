# INTELLEXIA - Sito Web Istituzionale

Sito web istituzionale per INTELLEXIA - Società tra Avvocati, realizzato con React + Vite seguendo le specifiche di design e funzionalità richieste.

## 🚀 Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Anteprima build di produzione
npm run preview
```

## 📋 Caratteristiche Implementate

### ✅ Design & UI
- **Palette colori elegante**: Navy, Ivory, Stone, Ink, Champagne
- **Typography**: Cormorant Garamond (headings) + Inter (body)
- **Design responsive** ottimizzato per mobile, tablet e desktop
- **Animazioni micro-motion** per il team (fade-in + translateY con stagger 120ms)
- **Effetti hover** puliti e professionali

### ✅ Struttura del Sito
- **Header sticky** con navigazione smooth scroll
- **Hero section** con payoff, 3 pillars e CTA
- **About section** con mission, valori e approccio
- **Team section** con card eleganti e bio espandibili
- **Contact section** con form GDPR compliant
- **Footer** con informazioni complete

### ✅ Funzionalità Avanzate
- **Form contatti** con validazione, honeypot e consenso privacy obbligatorio
- **Animazioni** rispettose di `prefers-reduced-motion`
- **Accessibilità** WCAG AA/AAA compliant
- **SEO ottimizzato** con meta tags, Open Graph e Schema.org
- **Performance** ottimizzata per LCP < 2.5s

### ✅ Team Data
- **3 profili completi** con bio, aree di competenza, contatti
- **Bio espandibili** con "Leggi di più" / "Mostra meno"
- **Download CV** e link LinkedIn
- **Foto placeholder** con fallback elegante

## 🎨 Personalizzazione

### Colori e Design Tokens
I colori sono definiti in `src/styles/tokens.css`:

```css
:root {
  --ix-navy: #1E2A36;      /* Sfondi scuri, bottoni primari */
  --ix-ivory: #F6F5F2;     /* Fondo pagine chiare */
  --ix-stone: #E7E3DC;     /* Box neutri, separatori */
  --ix-ink: #0B1220;       /* Testo scuro, header */
  --ix-champagne: #CBB79E; /* Accento premium */
}
```

### Contenuti del Team
Modifica `src/data/team.json` per aggiornare:
- Informazioni dei soci
- Aree di competenza
- Bio brevi e complete
- Link CV e LinkedIn
- Foto (sostituisci i placeholder)

### Testi e Contenuti
- **Hero**: Modifica payoff e sottotitolo in `src/components/Hero.jsx`
- **About**: Aggiorna mission e valori in `src/components/Values.jsx`
- **Contact**: Modifica indirizzi e contatti in `src/components/Contact.jsx`

### Immagini
Sostituisci i placeholder in `public/assets/`:
```
public/
├── assets/
│   ├── team/
│   │   ├── francesco.jpg
│   │   ├── vanessa.jpg
│   │   └── tommaso.jpg
│   └── cv/
│       ├── Francesco_Saltelli.pdf
│       ├── Vanessa_Solimeno.pdf
│       └── Tommaso_Ranchino.pdf
├── favicon.svg
├── favicon.png
└── apple-touch-icon.png
```

## 🔧 Configurazione

### SEO e Meta Tags
Aggiorna in `index.html`:
- Title e description
- URL canonico
- Open Graph images
- Schema.org structured data

### Analytics e Tracking
Aggiungi Google Analytics o altri servizi di tracking nel `<head>` di `index.html`.

### Form Contatti
Il form è configurato per simulazione. Per l'integrazione reale:
1. Sostituisci la simulazione in `src/components/Contact.jsx` (riga 45)
2. Configura endpoint backend per l'invio email
3. Implementa validazione server-side

## 📱 Responsive Design

Il sito è ottimizzato per:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

Breakpoints principali:
- `480px`: Mobile small
- `768px`: Tablet
- `1024px`: Desktop

## ♿ Accessibilità

Implementazioni WCAG:
- **Contrasti**: AA/AAA compliant
- **Focus management**: Outline visibili
- **Screen readers**: ARIA labels e live regions
- **Keyboard navigation**: Completamente navigabile
- **Reduced motion**: Rispetta preferenze utente

## 🚀 Performance

Ottimizzazioni implementate:
- **Font loading**: Preconnect e preload
- **Images**: Lazy loading e fallback
- **CSS**: Variabili custom e media queries efficienti
- **JS**: Code splitting con React + Vite
- **Animations**: Hardware accelerated

Target Lighthouse:
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95  
- **SEO**: ≥ 90
- **LCP**: < 2.5s mobile

## 📦 Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── Header.jsx/css
│   ├── Hero.jsx/css
│   ├── Values.jsx/css
│   ├── Team.jsx/css
│   ├── Contact.jsx/css
│   └── Footer.jsx/css
├── data/
│   └── team.json       # Dati del team
├── styles/
│   └── tokens.css      # Design tokens
├── App.jsx/css         # App principale
└── main.jsx           # Entry point
```

## 🛠️ Tecnologie Utilizzate

- **React 19** - Framework UI
- **Vite 7** - Build tool e dev server
- **Framer Motion** - Animazioni
- **CSS Custom Properties** - Design system
- **ESLint** - Code quality

## 📞 Supporto

Per modifiche o supporto tecnico, contatta il team di sviluppo.

---

**INTELLEXIA - Società tra Avvocati**  
Consulenza legale chiara, affidabile, su misura.
