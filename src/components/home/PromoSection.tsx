import React, { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

const PromoSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 8,
    minutes: 42,
    seconds: 15
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-accent/90 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Zap className="w-8 h-8" />
          <span className="text-xl font-bold">PROMOCIÓN ESPECIAL</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          0% Comisión de Apertura
        </h2>
        
        <p className="text-xl mb-8 text-white/90">
          Además, tu primer servicio de mantenimiento completamente gratis
        </p>

        {/* Countdown Timer */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Clock className="w-6 h-6" />
          <span className="text-lg font-semibold">Tiempo restante:</span>
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-sm text-white/80">Días</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm text-white/80">Horas</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm text-white/80">Min</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm text-white/80">Seg</div>
          </div>
        </div>

        <button className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105">
          Aprovechar Oferta
        </button>
      </div>
    </section>
  );
};

export default PromoSection;