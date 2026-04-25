import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UI_TEXT, MOBILE_MENU_ITEMS, NAV_ITEM_SLUGS, NAV_SUBITEM_SLUGS } from '../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openSub, setOpenSub] = useState<string | null>(null);
  const navigate = useNavigate();

  const menuItems = MOBILE_MENU_ITEMS;
  const categoryMenuItems = [
    'Chăm sóc & Làm đẹp',
    'Thuốc',
    'Thực phẩm chức năng',
    'Thiết bị y tế',
    'Sữa & Thực phẩm cao cấp',
    'Shopping',
    'Thuốc không kê đơn',
  ];
  const aboutMenuItems = [
    'Chính sách bảo mật',
    'Liên hệ',
    'Chính sách giao hàng',
    'Tuyển dụng',
    'Chính sách đổi trả',
  ];

  const toggleSub = (id: string, hasSub?: boolean) => {
    if (!hasSub) return;
    setOpenSub(openSub === id ? null : id);
  };

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const getSubItems = (id: string) => {
    if (id === '5') return categoryMenuItems;
    if (id === '8') return aboutMenuItems;
    return [];
  };

  const normalizeMenuKey = (value: string) => value.toUpperCase();

  const navigateToMenuItem = (label: string) => {
    const slug =
      NAV_SUBITEM_SLUGS[label] ??
      NAV_ITEM_SLUGS[normalizeMenuKey(label)] ??
      NAV_ITEM_SLUGS[label] ??
      label
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    navigate(`/${slug}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[200] backdrop-blur-[2px] md:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[368px] bg-white z-[201] shadow-2xl flex flex-col md:hidden overflow-hidden overscroll-contain"
          >
            {/* Header */}
            <div className="bg-[#0033FF] p-4 flex items-center gap-3 shrink-0">
              <button
                onClick={onClose}
                className="text-white p-1.5 hover:bg-white/10 rounded-full transition-colors shrink-0"
              >
                <X size={26} strokeWidth={2.5} />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
                  className="w-full bg-white rounded-full py-2.5 pl-5 pr-12 text-[14px] focus:outline-none font-medium placeholder:text-gray-400"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800">
                  <Search size={22} />
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden bg-white custom-scrollbar overscroll-contain">
              <div className="divide-y divide-gray-50 pb-8">
                {menuItems.map((item) => (
                  <div key={item.id} className="w-full">
                    <div
                      className="flex items-center justify-between px-4 py-3.5 group cursor-pointer active:bg-gray-50 transition-colors"
                      onClick={() => toggleSub(item.id, item.hasSub)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full border-[2.5px] border-black" />
                        </div>
                        <span
                          className={`text-[13px] font-black leading-tight uppercase transition-colors ${item.active ? 'text-gray-950' : 'text-gray-900'}`}
                        >
                          {item.label}
                        </span>
                      </div>
                      {item.hasSub && (
                        <ChevronDown
                          size={18}
                          strokeWidth={3}
                          className={`text-gray-900 transition-transform duration-200 ${openSub === item.id ? 'rotate-180' : ''}`}
                        />
                      )}
                    </div>

                    {/* Simple Submenu Placeholder */}
                    <AnimatePresence>
                      {item.hasSub && openSub === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-white overflow-hidden"
                        >
                          <div className="py-1 pl-[54px] pr-4">
                            {getSubItems(item.id).map((subItem) => (
                              <button
                                key={subItem}
                                type="button"
                                onClick={() => navigateToMenuItem(subItem)}
                                className="w-full flex items-center justify-between gap-3 py-3 text-left text-[14px] font-black text-gray-950 hover:text-primary transition-colors"
                              >
                                <span className="flex items-center gap-2">
                                  <ChevronRight
                                    size={12}
                                    className="text-gray-300 fill-gray-300"
                                    strokeWidth={0}
                                  />
                                  {subItem}
                                </span>
                                {item.id === '5' && (
                                  <ChevronDown
                                    size={18}
                                    strokeWidth={3}
                                    className="text-gray-900"
                                  />
                                )}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-0 border-t border-gray-100 shrink-0">
              <button className="w-full bg-[#E33E43] text-white py-4 font-black text-base tracking-wide hover:bg-[#c93338] transition-colors shadow-[0_-4px_15px_rgba(227,62,67,0.1)]">
                {UI_TEXT.HOTLINE_LABEL}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
