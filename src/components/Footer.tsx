import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, MapPin, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Automax</span>
            </div>
            <p className="text-gray-300 mb-4">
              Concesionario autorizado Mazda y GWM. Tu próximo auto te espera aquí.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/autos-nuevos" className="text-gray-300 hover:text-accent transition-colors">Autos Nuevos</Link></li>
              <li><Link to="/servicio-y-reparacion" className="text-gray-300 hover:text-accent transition-colors">Servicio</Link></li>
              <li><Link to="/financiamiento" className="text-gray-300 hover:text-accent transition-colors">Financiamiento</Link></li>
              <li><Link to="/nosotros" className="text-gray-300 hover:text-accent transition-colors">Nosotros</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marcas</h3>
            <ul className="space-y-2">
              <li><Link to="/autos-nuevos/mazda" className="text-gray-300 hover:text-accent transition-colors">Mazda</Link></li>
              <li><Link to="/autos-nuevos/gwm" className="text-gray-300 hover:text-accent transition-colors">GWM</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <span className="text-gray-300">+502 4368-5912</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <span className="text-gray-300">info@Automax.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-accent mt-1" />
                <span className="text-gray-300">
                  Zona 10, Ciudad de Guatemala<br />
                  Guatemala
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Automax. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
