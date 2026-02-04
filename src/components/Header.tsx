import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Car, Wrench } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Autos Nuevos', href: '/autos-nuevos' },
    { name: 'Servicio', href: '/servicio-y-reparacion' },
    { name: 'Financiamiento', href: '/financiamiento' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 8:00 AM - 2:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+502-1234-5678" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+502 4368-5912</span>
            </a>
            <a href="https://wa.me/message/ITLGURPPW3NTK1" className="flex items-center space-x-1 hover:text-accent transition-colors">
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-primary">Automax</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href ? 'text-accent' : 'text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="flex">
          <a
            href="https://wa.me/message/ITLGURPPW3NTK1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center py-3 text-primary hover:bg-gray-50 transition-colors"
          >
            <Car size={20} className="mr-2" />
            <span className="text-sm font-medium">Cotizar</span>
          </a>
          <Link
            to="/servicio-y-reparacion"
            className="flex-1 flex items-center justify-center py-3 text-primary hover:bg-gray-50 transition-colors border-l"
          >
            <Wrench size={20} className="mr-2" />
            <span className="text-sm font-medium">Servicio</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;