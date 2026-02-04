import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fuel, Users, Calendar } from 'lucide-react';

const FeaturedCars: React.FC = () => {
  const featuredCars = [
    {
      id: 1,
      brand: 'Mazda',
      model: 'Mazda 3 Sedán',
      slug: 'mazda-3',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Q 2,500',
      priceType: 'mes',
      features: {
        fuel: '18 km/l',
        seats: '5 pasajeros',
        year: '2024'
      }
    },
    {
      id: 2,
      brand: 'Mazda',
      model: 'CX-5',
      slug: 'cx-5',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Q 3,200',
      priceType: 'mes',
      features: {
        fuel: '16 km/l',
        seats: '7 pasajeros',
        year: '2024'
      }
    },
    {
      id: 3,
      brand: 'GWM',
      model: 'H6 GT',
      slug: 'h6-gt',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Q 2,800',
      priceType: 'mes',
      features: {
        fuel: '15 km/l',
        seats: '5 pasajeros',
        year: '2024'
      }
    },
    {
      id: 4,
      brand: 'GWM',
      model: 'Jolion',
      slug: 'jolion',
      image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'Q 2,100',
      priceType: 'mes',
      features: {
        fuel: '17 km/l',
        seats: '5 pasajeros',
        year: '2024'
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Destacados Nuevos
          </h2>
          <p className="text-gray-600 text-lg">
            Los modelos más populares con las mejores condiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.model}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {car.brand}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{car.model}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-accent">
                    desde {car.price}
                    <span className="text-sm text-gray-500">/{car.priceType}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Fuel size={16} className="mr-2 text-accent" />
                    <span>{car.features.fuel}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-accent" />
                    <span>{car.features.seats}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-accent" />
                    <span>{car.features.year}</span>
                  </div>
                </div>

                <Link
                  to={`/autos-nuevos/${car.brand.toLowerCase()}/${car.slug}`}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Ver detalles</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/autos-nuevos"
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
          >
            <span>Ver todos los vehículos</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;