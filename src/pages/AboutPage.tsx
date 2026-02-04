import React from 'react';
import { Award, Users, Shield, Target, CheckCircle, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: 'Confianza',
      description: 'Construimos relaciones duraderas basadas en la transparencia y honestidad en cada transacción.'
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: 'Excelencia',
      description: 'Nos esforzamos por superar las expectativas en cada aspecto de nuestro servicio.'
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Compromiso',
      description: 'Estamos comprometidos con la satisfacción total de nuestros clientes y su experiencia.'
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: 'Innovación',
      description: 'Adoptamos las últimas tecnologías para brindar el mejor servicio automotriz.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      label: 'Años de experiencia'
    },
    {
      number: '5,000+',
      label: 'Clientes satisfechos'
    },
    {
      number: '2',
      label: 'Marcas representadas'
    },
    {
      number: '98%',
      label: 'Satisfacción del cliente'
    }
  ];

  const team = [
    {
      name: 'Carlos Mendoza',
      position: 'Gerente General',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: '15 años de experiencia en la industria automotriz'
    },
    {
      name: 'María González',
      position: 'Directora de Ventas',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Especialista en atención al cliente y ventas consultivas'
    },
    {
      name: 'Roberto Silva',
      position: 'Jefe de Taller',
      image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Técnico certificado con más de 12 años de experiencia'
    }
  ];

  const certifications = [
    'Concesionario Autorizado Mazda',
    'Distribuidor Oficial GWM',
    'Certificación ISO 9001:2015',
    'Taller Autorizado de Fábrica',
    'Programa de Excelencia en Servicio'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nosotros
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Más de 15 años conectando a las familias guatemaltecas con el vehículo 
            perfecto para sus necesidades.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Automax nació en 2009 con una visión clara: revolucionar la experiencia 
                  de compra y servicio automotriz en Guatemala. Comenzamos como un pequeño 
                  concesionario familiar con el sueño de ofrecer vehículos de calidad y 
                  un servicio excepcional.
                </p>
                <p>
                  A lo largo de los años, hemos crecido hasta convertirnos en uno de los 
                  concesionarios más confiables del país, representando marcas prestigiosas 
                  como Mazda y GWM. Nuestro compromiso con la excelencia nos ha permitido 
                  construir relaciones duraderas con miles de familias guatemaltecas.
                </p>
                <p>
                  Hoy, seguimos innovando y adaptándonos a las necesidades cambiantes de 
                  nuestros clientes, manteniendo siempre nuestros valores fundamentales 
                  de honestidad, calidad y servicio personalizado.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nuestro showroom"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 text-lg">
              Los principios que guían cada decisión y acción en nuestra empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-accent/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Logros
            </h2>
            <p className="text-xl text-white/90">
              Números que reflejan nuestro compromiso y dedicación
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/90">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-lg">
              Profesionales apasionados comprometidos con tu satisfacción
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <div className="text-accent font-semibold mb-3">
                  {member.position}
                </div>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3" />
                Nuestra Misión
              </h3>
              <p className="text-lg leading-relaxed">
                Brindar soluciones de movilidad excepcionales a través de vehículos 
                de calidad, servicio personalizado y tecnología innovadora, 
                contribuyendo al progreso y bienestar de las familias guatemaltecas.
              </p>
            </div>

            <div className="bg-blue text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Star className="w-8 h-8 mr-3" />
                Nuestra Visión
              </h3>
              <p className="text-lg leading-relaxed">
                Ser el concesionario automotriz líder en Guatemala, reconocido por 
                nuestra excelencia en servicio, innovación constante y compromiso 
                inquebrantable con la satisfacción del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-gray-600 text-lg">
              Avalados por las mejores marcas y organizaciones de la industria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
                <span className="font-medium text-primary">{cert}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Compromiso con la Calidad
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestras certificaciones no son solo reconocimientos, sino compromisos 
                tangibles con la excelencia. Cada certificación representa horas de 
                capacitación, inversión en tecnología y dedicación para ofrecer el 
                mejor servicio automotriz de Guatemala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para ser parte de nuestra familia?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Únete a miles de clientes satisfechos que han confiado en nosotros 
            para encontrar su vehículo ideal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
              Ver nuestros vehículos
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Contactar ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;