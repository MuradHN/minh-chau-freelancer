import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CategoryGrid from '../components/CategoryGrid';
import ProductSection from '../components/ProductSection';
import FeaturedBrands from '../components/FeaturedBrands';
import NewsSection from '../components/NewsSection';
import { bestSellers, newArrivals, UI_TEXT } from '../constants';

const HomePage = () => (
  <main>
    <HeroSlider />
    <ProductSection title={UI_TEXT.BEST_SELLERS_TITLE} products={bestSellers} />
    <CategoryGrid />
    <ProductSection
      title={UI_TEXT.NEW_ARRIVALS_TITLE}
      subtitle={UI_TEXT.NEW_ARRIVALS_SUBTITLE}
      products={newArrivals}
      bgColor="bg-[#062d4a]"
    />
    <FeaturedBrands />
    <NewsSection />
  </main>
);

export default HomePage;
