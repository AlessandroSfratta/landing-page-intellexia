import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import LawyerDetail from './components/LawyerDetail';
import Footer from './components/Footer';
import './styles/tokens.css';
import './App.css';

function App() {
  return (
    <Router basename="/landing-page-intellexia">
      <div className="App">
        <a href="#main-content" className="skip-link">
          Salta al contenuto principale
        </a>
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lawyer/:id" element={<LawyerDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
