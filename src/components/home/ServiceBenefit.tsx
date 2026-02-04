import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Clock, Wrench } from 'lucide-react';

const ServiceBenefit: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Refacciones Originales',
      description: 'Utilizamos únicamente repuestos originales para mantener tu garantía intacta'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: 'Técnicos Certificados',
      description: 'Nuestro equipo está certificado por las marcas para brindarte el mejor servicio'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: 'Citas Online',
      description: 'Agenda tu cita de servicio desde la comodidad de tu hogar'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mecánico trabajando"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold">Servicio Experto</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Servicio experto, <br />
              <span className="text-accent">garantía intacta</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8">
              Mantenemos tu vehículo en óptimas condiciones con nuestro servicio especializado, 
              preservando tu garantía de fábrica y la tranquilidad que mereces.
            </p>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/servicio-y-reparacion"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span>Reserva ahora</span>
              <CheckCircle size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefit;