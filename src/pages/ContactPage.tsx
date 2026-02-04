import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: 'Dirección',
      details: [
        '12 Avenida 15-25, Zona 10',
        'Ciudad de Guatemala, Guatemala'
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: 'Teléfonos',
      details: [
        '+502 4368-5912',
        '+502 4314-2720'
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: 'Email',
      details: [
        'ventas1@automax.gt',
        'info@automax.gt'
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: 'Horarios',
      details: [
        'Lun - Vie: 8:00 AM - 6:00 PM',
        'Sáb: 8:00 AM - 2:00 PM',
        'Dom: Cerrado'
      ]
    }
  ];

  const departments = [
    {
      name: 'Ventas',
      phone: '+502 4368-5912',
      email: 'ventas1@automax.gt',
      description: 'Información sobre vehículos nuevos, cotizaciones y financiamiento'
    },
    {
      name: 'Servicio Técnico',
      phone: '+502 1234-5679',
      email: 'info@automax.gt',
      description: 'Citas de mantenimiento, reparaciones y garantías'
    },
    {
      name: 'Repuestos',
      phone: '+502 1234-5680',
      email: 'repuestos@Automax.com',
      description: 'Refacciones originales y accesorios'
    },
    {
      name: 'Financiamiento',
      phone: '+502 1234-5681',
      email: 'creditos@Automax.com',
      description: 'Asesoría crediticia y planes de financiamiento'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Ponte en contacto con nosotros por cualquier 
            consulta sobre nuestros vehículos o servicios.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Envíanos un mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    Asunto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="ventas">Información de ventas</option>
                    <option value="servicio">Servicio técnico</option>
                    <option value="financiamiento">Financiamiento</option>
                    <option value="repuestos">Repuestos</option>
                    <option value="otros">Otros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar mensaje</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Tiempo de respuesta:</strong> Menos de 2 horas en horario laboral
                </p>
              </div>
            </div>

            {/* Map and Quick Contact */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61805.51264029883!2d-90.5585285513672!3d14.493612300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a57c68c29169%3A0x1ffec1a049847bbf!2sAutomax!5e0!3m2!1sen!2sgt!4v1760629016489!5m2!1sen!2sgt"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Automax"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Visítanos en nuestro showroom
                  </h3>
                  <p className="text-gray-600">
                    12 Avenida 15-25, Zona 10, Ciudad de Guatemala
                  </p>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Contacto inmediato
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+502-1234-5678"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <div className="font-medium text-primary">Llamar ahora</div>
                      <div className="text-sm text-gray-600">+502 4368-5912</div>
                    </div>
                  </a>
                  
                  <a
                    href="https://wa.me/message/ITLGURPPW3NTK1"
                    className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-primary">WhatsApp</div>
                      <div className="text-sm text-gray-600">Respuesta inmediata</div>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:info@Automax.com"
                    className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-primary">Email</div>
                      <div className="text-sm text-gray-600">info@Automax.com</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Departamentos Especializados
            </h2>
            <p className="text-gray-600 text-lg">
              Contacta directamente al departamento que mejor pueda ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {dept.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center justify-center space-x-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Phone size={16} />
                    <span>{dept.phone}</span>
                  </a>
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;