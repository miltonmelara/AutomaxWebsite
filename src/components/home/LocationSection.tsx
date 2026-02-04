import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const LocationSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Visítanos
          </h2>
          <p className="text-gray-600 text-lg">
            Encuentra nuestra ubicación y horarios de atención
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative">
            <div className="bg-gray-300 rounded-2xl overflow-hidden h-96">
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
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Dirección</h4>
                    <p className="text-gray-600">
                      Ofibodegas Campestre Comercial, Bodega 14,<br />
                      Carr. a El Salvador, Guatemala 
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Teléfonos</h4>
                    <p className="text-gray-600">
                      <a href="tel:+502-1234-5678" className="hover:text-accent transition-colors">
                        +502 4368-5912
                      </a><br />
                      <a href="tel:+502-8765-4321" className="hover:text-accent transition-colors">
                        +502 4314-2720
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:ventas1@automax.gt" className="hover:text-accent transition-colors">
                        ventas1@automax.gt
                      </a><br />
                      <a href="mailto:info@automax.gt" className="hover:text-accent transition-colors">
                        info@automax.gt
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Horarios</h4>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 AM - 6:00 PM<br />
                      Sábado: 8:00 AM - 2:00 PM<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">
                ¿Tienes alguna pregunta?
              </h4>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está listo para ayudarte. Contáctanos por WhatsApp 
                para respuestas inmediatas.
              </p>
              <a
                href="https://wa.me/message/ITLGURPPW3NTK1"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Chatear por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;