import React, { useState } from 'react';
import { CheckCircle, Clock, Shield, Wrench, Calendar, Phone } from 'lucide-react';

const ServicePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    {
      icon: <Wrench className="w-8 h-8 text-accent" />,
      title: 'Mantenimiento Preventivo',
      description: 'Cambio de aceite, filtros, revisión general',
      duration: '2-3 horas',
      price: 'Desde Q 350'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Diagnóstico Computarizado',
      description: 'Análisis completo del sistema electrónico',
      duration: '1 hora',
      price: 'Q 150'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent" />,
      title: 'Sistema de Frenos',
      description: 'Revisión y reparación de frenos',
      duration: '2-4 horas',
      price: 'Desde Q 450'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: 'Aire Acondicionado',
      description: 'Mantenimiento y reparación de A/C',
      duration: '1-2 horas',
      price: 'Desde Q 280'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Agenda tu cita',
      description: 'Reserva online o por teléfono',
      time: '2 minutos'
    },
    {
      step: 2,
      title: 'Recepción del vehículo',
      description: 'Evaluación inicial y cotización',
      time: '15 minutos'
    },
    {
      step: 3,
      title: 'Servicio especializado',
      description: 'Técnicos certificados trabajando',
      time: 'Según servicio'
    },
    {
      step: 4,
      title: 'Entrega y seguimiento',
      description: 'Vehículo listo con garantía',
      time: '5 minutos'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Service appointment:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=1200')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicio y Reparación
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Mantenemos tu vehículo en perfectas condiciones con nuestro servicio especializado 
            y técnicos certificados de fábrica.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
            Agenda tu cita ahora
          </button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Servicios que Ofrecemos
            </h2>
            <p className="text-gray-600 text-lg">
              Servicios especializados para mantener tu vehículo en óptimas condiciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="text-lg font-semibold text-accent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proceso Transparente
            </h2>
            <p className="text-gray-600 text-lg">
              Conoce paso a paso cómo cuidamos tu vehículo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {step.description}
                </p>
                <div className="text-sm text-accent font-medium">
                  {step.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/5835532/pexels-photo-5835532.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Taller especializado"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Garantía de Fábrica <br />
                <span className="text-accent">Intacta</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Somos taller autorizado para Mazda y GWM. Nuestros servicios mantienen 
                tu garantía de fábrica completamente vigente.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-gray-700">Refacciones originales garantizadas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-gray-700">Técnicos certificados por la marca</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-gray-700">Procedimientos de fábrica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="text-gray-700">Garantía en mano de obra</span>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Beneficio Exclusivo
                </h3>
                <p className="text-gray-700">
                  Si compraste tu vehículo con nosotros, obtén tu primer servicio 
                  de mantenimiento completamente gratis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Testimonios de Clientes
            </h2>
            <p className="text-gray-600 text-lg">
              La satisfacción de nuestros clientes nos respalda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Roberto Martínez',
                service: 'Mantenimiento Mazda 3',
                comment: 'Excelente servicio, muy profesionales. Mi auto quedó como nuevo y mantuve mi garantía.',
                rating: 5,
                image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
              },
              {
                name: 'Carmen López',
                service: 'Reparación GWM H6',
                comment: 'Rapidez y transparencia en todo el proceso. Los técnicos explicaron todo detalladamente.',
                rating: 5,
                image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
              },
              {
                name: 'Diego Hernández',
                service: 'Diagnóstico CX-5',
                comment: 'Encontraron el problema rápidamente y la reparación fue exitosa. Muy recomendado.',
                rating: 5,
                image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.service}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agenda tu Cita
            </h2>
            <p className="text-xl text-gray-300">
              Reserva tu servicio online y obtén atención prioritaria
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-primary">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehículo
                </label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Ej: Mazda CX-5 2020"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de servicio
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="diagnostico">Diagnóstico</option>
                  <option value="frenos">Sistema de Frenos</option>
                  <option value="ac">Aire Acondicionado</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha preferida
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe los síntomas o problemas que has notado..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors"
                >
                  Agendar Cita
                </button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-accent" />
                  <span>¿Prefieres llamar? +502 4368-5912</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-accent" />
                  <span>Respuesta en 2 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;