import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Explore from './components/Explore';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'WALL.AI - World Analytics for Long Life';

    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="antialiased">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Explore />
        <CaseStudies />
        <About />
        <Team /> {/* 👈 Adicionado aqui corretamente */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
