import React from 'react';
import HeroSection from '../components/home/HeroSection';
import SearchSection from '../components/home/SearchSection';
import FeaturedCars from '../components/home/FeaturedCars';
import ServiceBenefit from '../components/home/ServiceBenefit';
import PromoSection from '../components/home/PromoSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FinancingSection from '../components/home/FinancingSection';
import LocationSection from '../components/home/LocationSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SearchSection />
      <FeaturedCars />
      <ServiceBenefit />
      <PromoSection />
      <TestimonialsSection />
      <FinancingSection />
      <LocationSection />
    </div>
  );
};

export default HomePage;