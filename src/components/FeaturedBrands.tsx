import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { brands, UI_TEXT } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedBrands = () => {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const [showControls, setShowControls] = useState(false);

  const updateControlVisibility = () => {
    const width = window.innerWidth;
    const visibleSlides = width >= 1024 ? 6 : width >= 768 ? 3 : 2;
    setShowControls(brands.length > visibleSlides);
  };

  useEffect(() => {
    updateControlVisibility();
    window.addEventListener('resize', updateControlVisibility);
    return () => window.removeEventListener('resize', updateControlVisibility);
  }, []);

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-2xl font-black md:font-bold text-[#0033FF] mb-2 uppercase tracking-wide">
          {UI_TEXT.FEATURED_BRANDS_TITLE}
        </h2>
        <p className="text-gray-600 text-sm mb-10">{UI_TEXT.FEATURED_BRANDS_SUBTITLE}</p>

        <div className="brands-swiper-container relative overflow-hidden px-1">
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={12}
            slidesPerView={2}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              el: '.brands-pagination',
              bulletClass:
                'swiper-pagination-bullet !bg-gray-200 !w-2 !h-2 !opacity-100 !mx-1 !transition-all !duration-300',
              bulletActiveClass: '!bg-[#0033FF] !w-6 !rounded-full',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 6,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {brands.map((brand, idx) => (
              <SwiperSlide key={idx} className="!h-auto py-3 px-1">
                <motion.div
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/brand/${brand.slug}`)}
                  className="bg-white rounded-2xl shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] hover:shadow-[0_0.75rem_1.5rem_rgba(0,0,0,0.2)] p-4 md:p-6 flex flex-col items-center justify-between h-[220px] md:h-[260px] cursor-pointer transition-all duration-300 w-full"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-[140px] md:max-h-[160px] object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/150x80?text=' + brand.name;
                      }}
                    />
                  </div>
                  <span className="text-[10px] md:text-[11px] font-black md:font-bold text-gray-800 text-center mt-3 md:mt-4 tracking-wider uppercase">
                    {brand.name}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {showControls && (
            <>
              <button
                type="button"
                aria-label="Thương hiệu trước"
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-2 top-[42%] z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                aria-label="Thương hiệu tiếp theo"
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-2 top-[42%] z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Custom pagination container */}
          <div className="brands-pagination flex justify-center mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
