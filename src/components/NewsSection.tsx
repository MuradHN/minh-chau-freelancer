import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { news, UI_TEXT } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const NewsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const displayNews = news.length > 5 ? news : news.concat(news.slice(0, 5 - news.length));

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-2xl font-black md:font-bold text-[#0033FF] mb-8 md:mb-10 uppercase tracking-wide">
          {UI_TEXT.NEWS_TITLE}
        </h2>

        <div className="news-swiper-container relative">
          <Swiper
            modules={[Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              el: '.news-pagination',
              bulletClass:
                'swiper-pagination-bullet !bg-gray-200 !w-2 !h-2 !opacity-100 !mx-1 !transition-all !duration-300',
              bulletActiveClass: '!bg-[#0033FF] !w-6 !rounded-full',
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 5,
                slidesPerGroup: 1,
                spaceBetween: 16,
              },
            }}
            className="pb-12"
          >
            {displayNews.map((item, idx) => (
              <SwiperSlide key={idx}>
                <motion.div whileHover={{ y: -5 }} className="h-full">
                  <Link
                    to={item.slug ? `/${item.slug}` : '/tin-tuc'}
                    className="group block h-full"
                  >
                    <div className="rounded-2xl md:rounded-xl overflow-hidden mb-4 md:mb-3 h-[160px] md:h-[120px] relative border border-gray-200 border-dashed md:border-gray-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(event) => {
                          event.currentTarget.src =
                            'https://longchaupharma.com/storage/uploads/config/default-6.png';
                        }}
                      />
                    </div>
                    <h3 className="font-black md:font-bold text-[16px] md:text-[13px] text-gray-900 md:text-gray-800 mb-2 group-hover:text-[#0033FF] transition-colors leading-tight line-clamp-2">
                      {item.title}
                    </h3>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Tin trước"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-[38%] z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label="Tin tiếp theo"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-[38%] z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Custom pagination container */}
          <div className="news-pagination flex justify-center mt-6"></div>
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-6">
          <Link
            to="/tin-tuc"
            className="bg-gray-100 text-gray-700 px-8 py-3 md:px-6 md:py-2 rounded-full text-[14px] md:text-xs font-bold hover:bg-gray-200 transition-colors"
          >
            {UI_TEXT.SEE_MORE_NEWS}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
