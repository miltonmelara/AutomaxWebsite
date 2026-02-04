import React from 'react';
import { DollarSign, FileText, CheckCircle, Shield, Clock } from 'lucide-react';

const FinancingPage: React.FC = () => {

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: 'Mejores Tasas',
      description: 'Trabajamos con múltiples instituciones financieras para ofrecerte las mejores condiciones del mercado.',
      highlight: 'Desde 7.5% anual'
    },
    {
      icon: <Clock className="w-8 h-8 text-accent" />,
      title: 'Aprobación Rápida',
      description: 'Proceso de aprobación ágil con respuesta en menos de 24 horas hábiles.',
      highlight: 'Respuesta en 24h'
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: 'Documentos Mínimos',
      description: 'Proceso simplificado con la documentación mínima necesaria para tu comodidad.',
      highlight: 'Solo 3 documentos'
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Seguro Incluido',
      description: 'Protege tu inversión con nuestros seguros vehiculares a precios preferenciales.',
      highlight: 'Cobertura total'
    }
  ];

  const requirements = [
    'Cédula de vecindad o DPI',
    'Constancia de ingresos',
    'Estados de cuenta bancarios (3 meses)',
    'Referencias comerciales',
    'Comprobante de domicilio'
  ];

  const faqs = [
    {
      question: '¿Cuál es el enganche mínimo requerido?',
      answer: 'El enganche mínimo es del 15% del valor del vehículo. Sin embargo, recomendamos un 20% para obtener mejores condiciones de financiamiento.'
    },
    {
      question: '¿Qué plazo máximo puedo obtener?',
      answer: 'Ofrecemos plazos de financiamiento desde 12 hasta 84 meses, dependiendo del modelo del vehículo y tu perfil crediticio.'
    },
    {
      question: '¿Puedo hacer pagos anticipados sin penalización?',
      answer: 'Sí, todos nuestros créditos permiten pagos anticipados sin penalización, lo que te ayuda a reducir el costo total del financiamiento.'
    },
    {
      question: '¿Qué pasa si tengo mal historial crediticio?',
      answer: 'Evaluamos cada caso individualmente. Trabajamos con diferentes instituciones para encontrar la mejor opción según tu situación particular.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue to-blue/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Financiamiento Automotriz
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Haz realidad el sueño de tener tu auto nuevo con nuestros planes de financiamiento 
            flexibles y tasas competitivas.
          </p>
          <div className="flex justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Solicitar Financiamiento
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Por qué financiar con nosotros?
            </h2>
            <p className="text-gray-600 text-lg">
              Ofrecemos las mejores condiciones del mercado con un servicio personalizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="bg-accent/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>
                <div className="bg-accent/10 px-4 py-2 rounded-full">
                  <span className="text-accent font-semibold text-sm">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Requisitos para <br />
                <span className="text-accent">tu financiamiento</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8">
                Hemos simplificado el proceso para que obtengas tu financiamiento 
                de manera rápida y sencilla.
              </p>

              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue/10 rounded-2xl">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  ¿No tienes todos los documentos?
                </h3>
                <p className="text-gray-700 text-sm">
                  No te preocupes, nuestros asesores te ayudarán a completar 
                  tu expediente de la manera más conveniente para ti.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Solicita tu pre-aprobación
              </h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option>Ingresos mensuales</option>
                    <option>Q 5,000 - Q 10,000</option>
                    <option>Q 10,000 - Q 20,000</option>
                    <option>Q 20,000 - Q 30,000</option>
                    <option>Q 30,000+</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                    <option>Vehículo de interés</option>
                    <option>Mazda 2</option>
                    <option>Mazda 3</option>
                    <option>CX-3</option>
                    <option>CX-5</option>
                    <option>GWM H6</option>
                    <option>GWM Jolion</option>
                  </select>
                </div>
                <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Solicitar Pre-aprobación
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Respuesta en menos de 24 horas hábiles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 text-lg">
              Resolvemos las dudas más comunes sobre nuestros financiamientos
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              ¿Tienes más preguntas? Nuestros asesores están listos para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+502-1234-5678"
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Llamar ahora</span>
              </a>
              <a
                href="https://wa.me/message/ITLGURPPW3NTK1"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancingPage;