import { useMemo, useRef, useState, useEffect } from 'react';
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  Plus,
  X,
  Facebook,
  Youtube,
  LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  UI_TEXT,
  NAV_ITEM_SLUGS,
  NAV_SUBITEM_SLUGS,
  CATEGORY_PAGE_DATA,
  BRAND_PAGE_DATA,
  bestSellers,
  newArrivals,
  categories,
  LOGO_URL,
  SUB_LOGO_URL,
  LOGO_ALT,
} from '../constants';
import type { Product } from '../types';

interface HeaderProps {
  onOpenCart: () => void;
  cartCount: number;
  onOpenLogin: () => void;
  isLoginOpen: boolean;
  onCloseLogin: () => void;
}

interface IconButtonProps {
  Icon: LucideIcon;
  count?: number;
  label?: string;
  onClick?: () => void;
  showBorder?: boolean;
  className?: string;
}

const IconButton = ({
  Icon,
  count,
  label,
  onClick,
  showBorder = false,
  className = '',
}: IconButtonProps) => (
  <div
    className={`flex flex-col items-center justify-center cursor-pointer relative group px-1.5 md:px-2.5 lg:px-3 h-10 md:h-[50px] ${showBorder ? 'border-white/15 md:border-r' : ''} ${className}`}
    onClick={onClick}
  >
    <div className="relative">
      <Icon
        size={20}
        strokeWidth={1.9}
        className="transition-transform group-hover:scale-110 md:hidden"
      />
      <Icon
        size={22}
        strokeWidth={1.9}
        className="transition-transform group-hover:scale-110 hidden md:block lg:hidden"
      />
      <Icon
        size={24}
        strokeWidth={1.9}
        className="transition-transform group-hover:scale-110 hidden lg:block"
      />
      {count !== undefined && (
        <span className="absolute -top-2.5 -right-2.5 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-[#0033FF] bg-[#ffe840] px-1 text-[12px] font-black leading-none text-black shadow-lg z-10 md:-top-2.5 md:-right-2.5 md:h-6 md:min-w-6 md:text-[13px]">
          {count}
        </span>
      )}
    </div>
    {label && (
      <span className="text-[12px] lg:text-[14px] mt-1 font-medium group-hover:underline hidden md:block leading-none">
        {label}
      </span>
    )}
  </div>
);

const LoginDropdown = ({ onClose }: { onClose: () => void }) => (
  <>
    <div className="fixed inset-0 z-[110]" onClick={onClose} />
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-[calc(100%+16px)] right-[-60px] md:right-[-40px] w-[320px] md:w-[400px] bg-white z-[120] rounded-xl shadow-2xl overflow-hidden border border-gray-100"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute -top-1.5 right-[75px] md:right-[55px] w-3 h-3 bg-primary rotate-45" />

      <div className="bg-primary text-white p-5 relative">
        <h2 className="text-sm font-bold uppercase tracking-wide">{UI_TEXT.LOGIN_TITLE}</h2>
        <p className="text-[10px] opacity-80 mt-1">{UI_TEXT.LOGIN_SUBTITLE}</p>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
          <Plus className="rotate-45" size={24} />
        </button>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">
              {UI_TEXT.USERNAME_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
            </label>
            <input
              type="text"
              placeholder={UI_TEXT.USERNAME_PLACEHOLDER}
              className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm focus:border-primary outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-700 mb-1.5 uppercase">
              {UI_TEXT.PASSWORD_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
            </label>
            <input
              type="password"
              placeholder={UI_TEXT.PASSWORD_PLACEHOLDER}
              className="w-full border border-gray-200 rounded-md px-4 py-2 text-sm focus:border-primary outline-none"
            />
          </div>
          <button className="w-full bg-[#1A73E8] text-white py-3 rounded-md font-bold text-sm uppercase mt-2">
            {UI_TEXT.LOGIN}
          </button>
          <div className="text-[11px] text-gray-600 flex flex-col gap-2 pt-2">
            <p>
              {UI_TEXT.FORGOT_PASSWORD} -{' '}
              <span className="text-primary font-bold cursor-pointer hover:underline">
                {UI_TEXT.FIND_BACK}
              </span>
            </p>
            <p>
              {UI_TEXT.NO_ACCOUNT} -{' '}
              <span className="text-primary font-bold cursor-pointer hover:underline">
                {UI_TEXT.REGISTER}
              </span>
            </p>
          </div>
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
          </div>
          <div className="space-y-3">
            <button className="w-full bg-fb text-white py-2.5 rounded-md text-[12px] font-bold flex items-center justify-center gap-3">
              <Facebook size={18} /> {UI_TEXT.LOGIN_WITH_FB}
            </button>
            <button className="w-full bg-google text-white py-2.5 rounded-md text-[12px] font-bold flex items-center justify-center gap-3">
              <Youtube size={18} /> {UI_TEXT.LOGIN_WITH_GG}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </>
);

const normalizeSearch = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim();

const allSearchProducts = (() => {
  const productMap = new Map<string, Product>();
  [
    ...bestSellers,
    ...newArrivals,
    ...Object.values(CATEGORY_PAGE_DATA).flatMap((data) => data.products),
    ...Object.values(BRAND_PAGE_DATA).flatMap((data) => data.products),
  ].forEach((product) => {
    if (!product.id || !product.name || !product.category) return;
    productMap.set(`${product.category}-${product.id}`, product);
  });

  return Array.from(productMap.values());
})();

const allSearchCategories = (() => {
  const categoryMap = new Map<string, { title: string; slug: string }>();

  categories.forEach((category) => {
    categoryMap.set(category.slug, { title: category.title, slug: category.slug });
  });

  Object.entries(CATEGORY_PAGE_DATA).forEach(([slug, data]) => {
    categoryMap.set(slug, { title: data.title, slug });
  });

  Object.entries(NAV_ITEM_SLUGS).forEach(([title, slug]) => {
    categoryMap.set(slug, { title, slug });
  });

  Object.entries(NAV_SUBITEM_SLUGS).forEach(([title, slug]) => {
    if (!slug || slug === '-0' || slug === '-64') return;
    categoryMap.set(slug, { title, slug });
  });

  return Array.from(categoryMap.values());
})();

type SearchTab = 'products' | 'categories';

const Header = ({ onOpenCart, cartCount, onOpenLogin, isLoginOpen, onCloseLogin }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTab, setSearchTab] = useState<SearchTab>('products');
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!searchRef.current?.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const normalizedQuery = normalizeSearch(searchQuery);

  const searchProducts = useMemo(() => {
    if (!normalizedQuery) return [];

    return allSearchProducts
      .filter((product) =>
        normalizeSearch(`${product.name} ${product.id}`).includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [normalizedQuery]);

  const searchCategories = useMemo(() => {
    if (!normalizedQuery) return [];

    return allSearchCategories
      .filter((category) =>
        normalizeSearch(`${category.title} ${category.slug}`).includes(normalizedQuery),
      )
      .slice(0, 8);
  }, [normalizedQuery]);

  const hasSearchQuery = searchQuery.trim().length > 0;
  const showSearchPanel = isSearchOpen && hasSearchQuery;

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const goToProduct = (product: Product) => {
    navigate(`/${product.category}/${product.id}`);
    setIsSearchOpen(false);
  };

  const goToCategory = (slug: string) => {
    navigate(`/${slug}`);
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Deep Blue Header */}
      <div className="bg-[rgba(0,51,255,0.9)] text-white relative z-[60]">
        <div className="container-custom flex min-h-[66px] min-w-0 items-center justify-between gap-2 py-2 md:min-h-[92px] md:flex-wrap md:gap-x-3 md:gap-y-2 md:py-3 lg:flex-nowrap lg:py-0 lg:gap-x-5">
          {/* Logo */}
          <div className="cursor-pointer shrink-0" onClick={() => navigate('/')}>
            <img
              src={LOGO_URL}
              alt={LOGO_ALT}
              className="h-[40px] w-[112px] object-contain md:h-[58px] md:w-[170px]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Search Bar Container */}
          <div
            ref={searchRef}
            className="relative min-w-0 flex-1 md:order-3 lg:order-none lg:max-w-[520px] xl:max-w-[580px] 2xl:max-w-[640px]"
          >
            <div className="relative h-[38px]">
              <input
                type="text"
                placeholder={UI_TEXT.SEARCH_PLACEHOLDER}
                value={searchQuery}
                onFocus={() => setIsSearchOpen(true)}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setIsSearchOpen(true);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    const firstProduct = searchProducts[0];
                    const firstCategory = searchCategories[0];

                    if (searchTab === 'products' && firstProduct) {
                      goToProduct(firstProduct);
                    } else if (searchTab === 'categories' && firstCategory) {
                      goToCategory(firstCategory.slug);
                    }
                  }

                  if (event.key === 'Escape') {
                    closeSearch();
                  }
                }}
                className="h-full w-full rounded-full bg-white px-3 pr-9 text-[14px] text-gray-800 placeholder:text-gray-500 focus:outline-none md:px-5 md:pr-14 md:text-[16px]"
              />
              <button
                type="button"
                onClick={() => {
                  const firstProduct = searchProducts[0];
                  const firstCategory = searchCategories[0];

                  if (searchTab === 'products' && firstProduct) {
                    goToProduct(firstProduct);
                  } else if (searchTab === 'categories' && firstCategory) {
                    goToCategory(firstCategory.slug);
                  }
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-black transition-colors hover:text-primary md:right-5"
              >
                <Search size={20} strokeWidth={2.2} className="md:hidden" />
                <Search size={24} strokeWidth={2.2} className="hidden md:block" />
              </button>
            </div>
            {showSearchPanel && (
              <div className="absolute top-[calc(100%+1px)] left-0 right-0 z-[140] bg-white text-gray-900 rounded-b-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-3 md:px-5 pt-4">
                  <div className="flex items-center justify-between border-b border-primary">
                    <div className="flex items-end">
                      <button
                        type="button"
                        onClick={() => setSearchTab('products')}
                        className={`h-11 px-4 md:px-5 text-[13px] md:text-sm uppercase border border-b-0 border-gray-100 transition-colors ${
                          searchTab === 'products'
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-gray-50'
                        }`}
                      >
                        Sản phẩm
                      </button>
                      <button
                        type="button"
                        onClick={() => setSearchTab('categories')}
                        className={`h-11 px-4 md:px-5 text-[13px] md:text-sm uppercase border border-b-0 border-gray-100 transition-colors ${
                          searchTab === 'categories'
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary hover:bg-gray-50'
                        }`}
                      >
                        Danh mục
                      </button>
                    </div>
                    <button
                      type="button"
                      aria-label="Đóng tìm kiếm"
                      onClick={closeSearch}
                      className="mb-2 h-8 w-8 rounded-full border-2 border-gray-900 text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                <div className="px-3 md:px-5 py-4 max-h-[470px] overflow-y-auto">
                  {searchTab === 'products' && (
                    <div>
                      {searchProducts.map((product, index) => (
                        <button
                          type="button"
                          key={`${product.category}-${product.id}`}
                          onClick={() => goToProduct(product)}
                          className={`w-full min-h-[58px] px-2 md:px-3 py-2 flex items-center gap-3 text-left transition-colors hover:bg-gray-100 ${
                            index % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                          }`}
                        >
                          <span className="w-12 h-12 shrink-0 rounded bg-white flex items-center justify-center overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </span>
                          <span className="flex-1 text-[13px] md:text-[15px] leading-snug line-clamp-2">
                            {product.name}
                          </span>
                          {product.price !== 'Liên hệ' && (
                            <span className="hidden md:block text-[14px] font-black text-red-500 whitespace-nowrap">
                              {product.price}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}

                  {searchTab === 'categories' && (
                    <div>
                      {searchCategories.map((category, index) => (
                        <button
                          type="button"
                          key={category.slug}
                          onClick={() => goToCategory(category.slug)}
                          className={`w-full min-h-10 px-2 md:px-3 py-2 flex items-center text-left text-[14px] md:text-[15px] transition-colors hover:bg-gray-100 ${
                            index % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                          }`}
                        >
                          {category.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Popular keywords */}
            <div className="hidden justify-center gap-1 overflow-hidden whitespace-nowrap pt-2 text-[14px] font-normal leading-relaxed tracking-[0] text-white lg:flex xl:text-[15px]">
              {UI_TEXT.POPULAR_KEYWORDS.map((kw, i) => (
                <span key={kw} className="cursor-pointer hover:underline">
                  {kw}
                  {i < UI_TEXT.POPULAR_KEYWORDS.length - 1 && <span className="px-1">-</span>}
                </span>
              ))}
            </div>
          </div>

          <a
            href="https://zalo.me/840415224445769890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center lg:order-none 2xl:flex"
            aria-label="Kết nối với Minh Châu qua Zalo"
          >
            <img
              src={SUB_LOGO_URL}
              alt="Kết nối với Minh Châu qua Zalo"
              className="h-[38px] w-[200px] rounded-full object-contain"
              referrerPolicy="no-referrer"
            />
          </a>

          <div className="flex h-full shrink-0 items-center gap-0 border-white/15 md:border-l lg:order-none">
            <IconButton Icon={Heart} count={0} showBorder />

            <div className="relative hidden h-11 border-r border-white/15 px-2.5 md:block md:h-[50px] lg:px-3">
              <div
                className="flex h-full flex-col items-center justify-center cursor-pointer group"
                onClick={onOpenLogin}
              >
                <User
                  size={22}
                  strokeWidth={1.9}
                  className="transition-transform group-hover:scale-110 lg:hidden"
                />
                <User
                  size={24}
                  strokeWidth={1.9}
                  className="transition-transform group-hover:scale-110 hidden lg:block"
                />
                <span className="text-[12px] lg:text-[14px] mt-1 font-medium group-hover:underline leading-none">
                  {UI_TEXT.ACCOUNT}
                </span>
              </div>
              {isLoginOpen && <LoginDropdown onClose={onCloseLogin} />}
            </div>

            <IconButton
              Icon={ShoppingCart}
              count={cartCount}
              label={UI_TEXT.CART}
              onClick={onOpenCart}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
