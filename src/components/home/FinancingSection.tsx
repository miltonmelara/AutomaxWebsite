import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, FileText, CheckCircle } from 'lucide-react';

const FinancingSection: React.FC = () => {
  const benefits = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: 'Cálculo Instantáneo',
      description: 'Conoce tu cuota mensual en segundos'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Mejores Tasas',
      description: 'Trabajamos con múltiples bancos'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Proceso Simple',
      description: 'Documentos mínimos requeridos'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Aprobación Rápida',
      description: 'Respuesta en 24 horas'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue to-blue/90 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Estrena sin ahogar <br />
              <span className="text-white/90">tu bolsillo</span>
            </h2>
            
            <p className="text-xl mb-8 text-white/90">
              Simula tu pago en menos de un minuto y descubre lo fácil que es 
              tener tu auto nuevo con nuestros planes de financiamiento.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-white/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/financiamiento"
              className="inline-flex items-center space-x-2 bg-white text-blue hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Calculator size={20} />
              <span>Calcular cuota</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinancingSection;