import React, { useId, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection = ({
  title,
  subtitle,
  products,
  bgColor = 'bg-white',
}: ProductSectionProps) => {
  const sectionId = useId().replace(/:/g, '');
  const paginationClass = `pagination-${sectionId}`;
  const swiperRef = useRef<SwiperType | null>(null);
  const isDarkSection = bgColor.includes('02203a') || bgColor.includes('062d4a');

  return (
    <section className={`py-8 md:py-12 ${bgColor}`}>
      <div className="container-custom text-left">
        <h2
          className={`text-3xl md:text-2xl font-black md:font-bold mb-6 md:mb-2 uppercase tracking-wide ${
            isDarkSection ? 'text-white' : 'text-[#0033FF]'
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-sm mb-10 ${isDarkSection ? 'text-white' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
        {!subtitle && <div className="mb-10" />}

        <div className="product-swiper-container relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={2}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              el: `.${paginationClass}`,
              bulletClass:
                'swiper-pagination-bullet !w-2 !h-2 !opacity-100 !mx-1 !transition-all !duration-300',
              bulletActiveClass: '!w-6 !rounded-full',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Sản phẩm trước"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute left-2 top-[42%] z-10 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg border flex items-center justify-center transition-colors ${
              isDarkSection
                ? 'bg-white/95 text-[#062d4a] border-white/20 hover:bg-[#0033FF] hover:text-white'
                : 'bg-white text-[#0033FF] border-gray-100 hover:bg-[#0033FF] hover:text-white'
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label="Sản phẩm tiếp theo"
            onClick={() => swiperRef.current?.slideNext()}
            className={`absolute right-2 top-[42%] z-10 -translate-y-1/2 h-10 w-10 rounded-full shadow-lg border flex items-center justify-center transition-colors ${
              isDarkSection
                ? 'bg-white/95 text-[#062d4a] border-white/20 hover:bg-[#0033FF] hover:text-white'
                : 'bg-white text-[#0033FF] border-gray-100 hover:bg-[#0033FF] hover:text-white'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Custom pagination container with unique class */}
          <div
            className={`${paginationClass} flex justify-center mt-4 ${
              isDarkSection
                ? '[&_.swiper-pagination-bullet]:!bg-white/45 [&_.swiper-pagination-bullet-active]:!bg-white'
                : '[&_.swiper-pagination-bullet]:!bg-gray-200 [&_.swiper-pagination-bullet-active]:!bg-[#0033FF]'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
