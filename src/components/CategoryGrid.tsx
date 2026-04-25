import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { categories, UI_TEXT } from '../constants';

const CategoryGrid = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const dotCount = Math.ceil(categories.length / 3);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const index = Math.round(container.scrollLeft / container.clientWidth);
      if (index !== activeDot && index < dotCount) {
        setActiveDot(index);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.clientWidth * index,
        behavior: 'smooth',
      });
      setActiveDot(index);
    }
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container-custom text-left">
        <h2 className="text-3xl md:text-2xl font-black md:font-bold text-[#0033FF] mb-8 md:mb-10 uppercase tracking-wide">
          {UI_TEXT.SEARCH_BY_CATEGORY}
        </h2>

        {/* Desktop Grid / Mobile Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-4 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 md:pb-0"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/${cat.slug}`)}
              className="flex flex-col items-center gap-4 cursor-pointer group flex-shrink-0 w-[calc(33.333%-11px)] md:w-auto snap-start"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#F2F4F7] flex items-center justify-center rounded-full overflow-hidden transition-all duration-300">
                <img
                  src={cat.image || `https://picsum.photos/200/200?random=${cat.id}`}
                  alt={cat.title}
                  className="w-2/3 h-2/3 object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=200';
                  }}
                />
              </div>
              <span className="text-[12px] md:text-[13px] font-bold text-gray-800 group-hover:text-[#0033FF] transition-colors text-center px-1 leading-tight md:px-2">
                {cat.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, dot) => (
            <div
              key={dot}
              onClick={() => scrollToIndex(dot)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${activeDot === dot ? 'bg-[#0033FF] w-6' : 'bg-gray-200 w-2'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
