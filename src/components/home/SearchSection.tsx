import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const brands = ['Mazda', 'GWM'];
  const models = {
    Mazda: ['Mazda 2', 'Mazda 3', 'CX-3', 'CX-30', 'CX-5', 'CX-9', 'BT-50'],
    GWM: ['H6', 'H6 GT', 'Jolion', 'Poer', 'Tank 300', 'Tank 500', 'Wingle 5']
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Encuentra tu auto ideal
          </h2>
          <p className="text-gray-600 text-lg">
            Usa nuestros filtros para encontrar el vehículo perfecto para ti
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand Filter */}
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
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Model Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Modelo
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                disabled={!selectedBrand}
              >
                <option value="">Todos los modelos</option>
                {selectedBrand && models[selectedBrand as keyof typeof models]?.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio
              </label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="">Todos los precios</option>
                <option value="0-200000">Q0 - Q200,000</option>
                <option value="200000-400000">Q200,000 - Q400,000</option>
                <option value="400000-600000">Q400,000 - Q600,000</option>
                <option value="600000+">Q600,000+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Search size={20} />
                <span>Buscar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;