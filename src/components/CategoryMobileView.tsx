import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  ShoppingCart,
  Heart,
  Pill,
  Zap,
  Baby,
  ShoppingBag,
  Stethoscope,
  BookOpenText,
  Newspaper,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { MEGA_MENU_DATA, UI_TEXT, NAV_ITEM_SLUGS, NAV_SUBITEM_SLUGS } from '../constants';
import { useNavigate } from 'react-router-dom';

const categoryIcons: Record<string, LucideIcon> = {
  'CHĂM SÓC & LÀM ĐẸP': ShoppingBag,
  THUỐC: Pill,
  'THỰC PHẨM CHỨC NĂNG': Zap,
  'THIẾT BỊ Y TẾ': Stethoscope,
  'SỮA & THỰC PHẨM CAO CẤP': Baby,
  'TÌM HIỂU BỆNH': BookOpenText,
  'TIN TỨC': Newspaper,
};

const toSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

interface CategoryMobileViewProps {
  isOpen: boolean;
  onClose: () => void;
  cartCount: number;
}

const CategoryMobileView = ({ isOpen, onClose, cartCount }: CategoryMobileViewProps) => {
  const categories = Object.keys(MEGA_MENU_DATA);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const navigateAndClose = (path: string) => {
    navigate(path);
    onClose();
  };

  const getCategoryPath = (category: string) => `/${NAV_ITEM_SLUGS[category] ?? toSlug(category)}`;
  const getMenuItemPath = (label: string) => `/${NAV_SUBITEM_SLUGS[label] ?? toSlug(label)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-white z-[200] flex flex-col md:hidden"
        >
          {/* Header */}
          <div className="bg-[#0033FF] text-white p-4 shrink-0">
            <div className="flex items-center justify-between gap-4">
              <div
                className="flex flex-col leading-tight cursor-pointer"
                onClick={() => {
                  navigate('/');
                  onClose();
                }}
              >
                <span className="text-xl font-bold tracking-tight">{UI_TEXT.LOGO_PART1}</span>
                <span className="text-xl font-bold tracking-tight -mt-1">{UI_TEXT.LOGO_PART2}</span>
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
                  className="w-full bg-white text-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none text-sm"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Heart size={28} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#0033FF] text-[12px] font-black min-w-6 h-6 px-1 flex items-center justify-center rounded-full border-2 border-[#0033FF] leading-none">
                    0
                  </span>
                </div>
                <div className="relative">
                  <ShoppingCart size={28} />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#0033FF] text-[12px] font-black min-w-6 h-6 px-1 flex items-center justify-center rounded-full border-2 border-[#0033FF] leading-none">
                    {cartCount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sub Header / Close */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-white sticky top-0 z-10">
            <h2
              className="text-sm font-black text-gray-900 uppercase cursor-pointer hover:text-primary"
              onClick={() => {
                navigateAndClose(getCategoryPath(activeCategory));
              }}
            >
              {activeCategory}
            </h2>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors"
            >
              <span className="text-xs font-bold">{UI_TEXT.CLOSE}</span>
              <X size={20} className="border-2 border-gray-500 rounded-full p-0.5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Sidebar - No scroll, items scale to fit */}
            <div className="w-[100px] border-r border-gray-100 bg-[#F8F9FA] flex flex-col shrink-0">
              {categories.map((cat) => {
                const CategoryIcon = categoryIcons[cat];

                return (
                  <div
                    key={cat}
                    onClick={() => {
                      if (activeCategory === cat) {
                        navigateAndClose(getCategoryPath(cat));
                        return;
                      }

                      setActiveCategory(cat);
                    }}
                    className={`flex-1 min-h-0 p-2 text-[9px] font-bold text-center flex flex-col items-center justify-center border-b border-gray-100 last:border-0 transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-white text-[#0033FF] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[3px] after:bg-[#0033FF]'
                        : 'text-gray-500'
                    }`}
                  >
                    <div
                      className={`mb-1 transition-all duration-200 ${activeCategory === cat ? 'text-[#0033FF] scale-110' : 'text-gray-400'}`}
                    >
                      <CategoryIcon size={18} strokeWidth={2.5} />
                    </div>
                    <span className="leading-tight uppercase tracking-tighter">{cat}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white custom-scrollbar">
              <h3
                className="text-lg font-black text-center mb-8 cursor-pointer hover:text-primary"
                onClick={() => {
                  navigateAndClose(getCategoryPath(activeCategory));
                }}
              >
                {activeCategory}
              </h3>

              <div className="space-y-8">
                {MEGA_MENU_DATA[activeCategory]?.map((section, idx) => (
                  <div key={idx} className="border-l-[3px] border-[#0033FF] pl-4">
                    <h4
                      className="text-[15px] font-black text-gray-900 mb-3 cursor-pointer hover:text-[#0033FF] transition-colors"
                      onClick={() => navigateAndClose(getMenuItemPath(section.name))}
                    >
                      {section.name}
                    </h4>
                    <ul className="space-y-2.5">
                      {section.sub.map((item, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-[14px] text-gray-700 font-medium hover:text-[#0033FF] transition-colors cursor-pointer"
                          onClick={() => navigateAndClose(getMenuItemPath(item))}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoryMobileView;
