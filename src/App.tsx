import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import CarDetailPage from './pages/CarDetailPage';
import ServicePage from './pages/ServicePage';
import FinancingPage from './pages/FinancingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/autos-nuevos" element={<CarsPage />} />
            <Route path="/autos-nuevos/:brand/:model" element={<CarDetailPage />} />
            <Route path="/servicio-y-reparacion" element={<ServicePage />} />
            <Route path="/financiamiento" element={<FinancingPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/nosotros" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;