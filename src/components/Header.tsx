import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lista com label e href corretos
  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Soluções', href: '#solutions' },
    { label: 'Estudos de Caso', href: '#case-studies' },
    { label: 'Sobre', href: '#about' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src="/earth-icon.png" alt="Logo Planeta" className="h-8 w-10 mr-2" />
          <span className={`font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>
            WALL.AI
          </span>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-accent'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Botão de Contato */}
          <Link
            href="#contact"
            className="bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded-md transition-all transform hover:scale-105"
          >
            Contato
          </Link>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? 'text-primary' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Navegação Mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-primary bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[...menuItems, { label: 'Contato', href: '#contact' }].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-2xl font-medium hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

