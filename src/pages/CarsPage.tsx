import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { carModels } from '../data/carModels';
import { carContent } from '../data/carContent';

const CarsPage: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const categoryForModel = (model: string, slug: string) => {
    const lower = model.toLowerCase();
    if (lower.includes('bt-50') || lower.includes('poer') || lower.includes('wingle')) return 'Pickup';
    if (lower.includes('mazda 2') || lower.includes('mazda 3')) return 'Sedán';
    if (slug.startsWith('cx-') || lower.includes('haval') || lower.includes('tank')) return 'SUV';
    return 'SUV';
  };

  const cars = useMemo(
    () =>
      carModels.map((car) => {
        const content = carContent[car.modelSlug];
        return {
          brand: car.brand,
          model: car.model,
          slug: car.modelSlug,
          category: categoryForModel(car.model, car.modelSlug),
          image: encodeURI(car.heroImage),
          variants: car.variants.length,
          tagline: content?.tagline,
          description: content?.heroDescription,
          quickSpecs: content?.quickSpecs ?? [],
        };
      }),
    []
  );

  const uniqueBrands = useMemo(() => Array.from(new Set(cars.map((car) => car.brand))), [cars]);
  const uniqueCategories = useMemo(
    () => Array.from(new Set(cars.map((car) => car.category))),
    [cars]
  );

  const filteredCars = cars.filter(car => {
    if (selectedBrand && car.brand !== selectedBrand) return false;
    if (selectedCategory && car.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Autos Nuevos
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Descubre toda nuestra gama de vehículos Mazda y GWM
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marca
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Todas las marcas</option>
                {uniqueBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Todas las categorías</option>
                {uniqueCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setSelectedBrand('');
                  setSelectedCategory('');
                }}
                className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-3">
            <h2 className="text-2xl font-bold text-primary">
              {filteredCars.length} vehículos encontrados
            </h2>
            <p className="text-sm text-gray-500">
              Inventario total: {cars.length} modelos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <div key={`${car.brand}-${car.slug}`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.model}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.brand}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                    {car.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{car.model}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {car.tagline ?? car.description ?? 'Descubre detalles completos y ficha técnica.'}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.quickSpecs.slice(0, 3).map((spec) => (
                      <span
                        key={`${car.slug}-${spec.label}`}
                        className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full"
                      >
                        {spec.value} {spec.label}
                      </span>
                    ))}
                    <span className="text-xs font-semibold text-primary bg-primary/5 px-3 py-1 rounded-full">
                      {car.variants} versión{car.variants === 1 ? '' : 'es'}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/autos-nuevos/${car.brand.toLowerCase()}/${car.slug}`}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Ver detalles</span>
                      <ArrowRight size={16} />
                    </Link>
                    <a
                      href="https://wa.me/message/ITLGURPPW3NTK1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarsPage;
