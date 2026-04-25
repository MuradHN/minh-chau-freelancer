import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { UI_TEXT } from '../constants';

const bannerImages = [
  'https://longchaupharma.com/storage/uploads/logo/s2-4688-hinh.webp',
  'https://longchaupharma.com/storage/uploads/logo/slider-2-5886-hinh.webp',
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white py-2 md:py-6">
      <div className="container-custom flex flex-col md:flex-row gap-4 md:h-[351px]">
        {/* Main Banner Slider */}
        <div className="md:w-[68%] aspect-[1300/494] md:aspect-auto md:h-full bg-orange-50 rounded-2xl overflow-hidden relative group border-2 border-gray-100">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <img
                src={bannerImages[currentIndex]}
                alt={`Banner ${currentIndex + 1}`}
                className="w-full h-full object-fill"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#0033FF] shadow-lg hover:bg-[#0033FF] hover:text-white transition-colors z-10"
            aria-label="Banner trước"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-[#0033FF] shadow-lg hover:bg-[#0033FF] hover:text-white transition-colors z-10"
            aria-label="Banner tiếp theo"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute inset-0 flex items-center justify-end pr-[10%] pointer-events-none z-10"></div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {bannerImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Side Banners */}
        <div className="md:w-[32%] hidden md:flex flex-col gap-4">
          {/* Top Side Banner */}
          <div className="flex-1 bg-[#1E4DB7] rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-gray-100">
            <img
              src="https://longchaupharma.com/storage/uploads/logo/banner-slide-1-860-hinh.webp"
              alt={UI_TEXT.SEARCH_GUIDE_TITLE}
              className="h-full w-full object-fill rounded-md"
            />
          </div>

          {/* Bottom Side Banner */}
          <div className="flex-1 bg-[#E1F3F9] rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-gray-100">
            <img
              src="https://longchaupharma.com/storage/uploads/logo/bd2-9807-hinh.png"
              alt="Bandage product"
              className="h-full w-full object-fill rounded-lg shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
