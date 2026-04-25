import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ChevronDown, ChevronUp, Filter, X, Home } from 'lucide-react';
import {
  NAV_ITEM_SLUGS,
  CATEGORY_PAGE_DATA,
  DISEASE_PAGE_DATA,
  NEWS_PAGE_SECTIONS,
  bestSellers,
  newArrivals,
  categories,
  UI_TEXT,
} from '../constants';
import ProductCard from '../components/ProductCard';
import { AnimatePresence } from 'motion/react';

const DEFAULT_FILTERS = {
  LOAI_TIN: ['Chăm sóc da mặt', 'Chăm sóc cơ thể', 'Chăm sóc tóc', 'Trang điểm'],
  QUY_CACH: ['10ml', '15ml', '40ml', '50ml', '75ml', '100ml'],
  NHA_SAN_XUAT: ['Uriage', 'Fixderma Indian', 'Hendel LLC', 'Golden Health PTY Ltd'],
  THUONG_HIEU: ['Uriage', 'Costar', 'Golden Health', 'Shiseido', "Summer's Eve", 'Fixderma'],
  XUAT_XU: ['Pháp', 'Ấn Độ', 'Mỹ', 'Nhật Bản', 'Úc', 'Việt Nam'],
  HOAT_CHAT: ['Vitamin C', 'Retinol', 'Hyaluronic Acid', 'Niacinamide', 'Salicylic Acid'],
};

const FALLBACK_IMAGE = 'https://longchaupharma.com/storage/uploads/config/default-6.png';

const CategoryListingPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    loaiTin: true,
    quyCach: true,
    nhaSanXuat: true,
    thuongHieu: true,
    xuatXu: true,
    hoatChat: true,
  });

  const toggleFilter = (key: string) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categoryPageData = categorySlug ? CATEGORY_PAGE_DATA[categorySlug] : undefined;
  const filters = categoryPageData?.filters ?? DEFAULT_FILTERS;

  const renderFilterSections = () => (
    <>
      {/* Category Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('loaiTin')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_CATEGORY}
          {openFilters.loaiTin ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.loaiTin && (
          <div className="space-y-3">
            {filters.LOAI_TIN.map((item) => {
              const isSelected = item === categoryName;
              return (
                <label key={item} className="flex items-center gap-3 cursor-pointer group">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-primary'}`}
                  >
                    {isSelected ? (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                    )}
                  </div>
                  <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                    {item}
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Packaging Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('quyCach')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_PACKAGING}
          {openFilters.quyCach ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.quyCach && (
          <div className="space-y-3">
            {filters.QUY_CACH.map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </label>
            ))}
            <button className="text-[12px] text-primary font-bold mt-2 flex items-center gap-1">
              Mở rộng/Ẩn bớt <ChevronDown size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Manufacturer Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('nhaSanXuat')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_MANUFACTURER}
          {openFilters.nhaSanXuat ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.nhaSanXuat && (
          <div className="space-y-3">
            {filters.NHA_SAN_XUAT.map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </label>
            ))}
            <button className="text-[12px] text-primary font-bold mt-2 flex items-center gap-1">
              Mở rộng/Ẩn bớt <ChevronDown size={12} />
            </button>
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('thuongHieu')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_BRAND}
          {openFilters.thuongHieu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.thuongHieu && (
          <div className="space-y-3">
            {filters.THUONG_HIEU.map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Origin Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('xuatXu')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_ORIGIN}
          {openFilters.xuatXu ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.xuatXu && (
          <div className="space-y-3">
            {filters.XUAT_XU.map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Active Ingredient Filter */}
      <div className="border-b border-gray-100 last:border-0 p-4">
        <button
          onClick={() => toggleFilter('hoatChat')}
          className="flex items-center justify-between w-full font-bold text-gray-800 text-[14px] mb-4"
        >
          {UI_TEXT.FILTER_ACTIVE_INGREDIENT}
          {openFilters.hoatChat ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {openFilters.hoatChat && (
          <div className="space-y-3">
            {filters.HOAT_CHAT.map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <span className="text-[13px] text-gray-600 group-hover:text-primary transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const categoryName = useMemo(() => {
    if (categoryPageData) {
      return categoryPageData.title;
    }

    // Tìm trong NAV_ITEM_SLUGS trước
    const navEntry = Object.entries(NAV_ITEM_SLUGS).find(([_, slug]) => slug === categorySlug);
    if (navEntry) {
      return navEntry[0].toLowerCase().replace(/(?:^|\s)\w/g, (l) => l.toUpperCase());
    }

    // Nếu không tìm thấy, tìm trong categories
    const category = categories.find((cat) => cat.slug === categorySlug);
    if (category) {
      return category.title;
    }

    return 'Danh mục';
  }, [categoryPageData, categorySlug]);

  const products = useMemo(() => {
    if (categoryPageData) {
      return categoryPageData.products;
    }

    const allProducts = [...bestSellers, ...newArrivals];
    const categoryProducts = allProducts.filter((product) => product.category === categorySlug);
    return categoryProducts.length > 0 ? categoryProducts : allProducts;
  }, [categoryPageData, categorySlug]);
  console.log(products, '---products')
  const totalProducts = categoryPageData?.totalProducts ?? products.length;
  const isDiseasePage = categorySlug === 'tim-hieu-benh';
  const isNewsPage = categorySlug === 'tin-tuc';
  const normalizedTitle = isDiseasePage ? 'Tìm hiểu bệnh' : isNewsPage ? 'Tin tức' : categoryName;

  const renderContentBreadcrumb = () => (
    <nav className="flex items-center gap-2 text-[18px] text-gray-900 mb-10">
      <Link to="/" className="hover:text-primary transition-colors" aria-label="Trang chủ">
        <Home size={22} fill="currentColor" strokeWidth={0} />
      </Link>
      <span className="text-gray-400">/</span>
      <span>{normalizedTitle}</span>
    </nav>
  );

  if (isDiseasePage) {
    return (
      <div className="bg-white min-h-screen pb-16">
        <div className="container-custom py-5">
          {renderContentBreadcrumb()}
          <h1 className="text-[30px] md:text-[32px] font-black text-gray-950 mb-8">
            {normalizedTitle}
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-9">
            {DISEASE_PAGE_DATA.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group bg-white rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden transition-transform hover:-translate-y-0.5"
              >
                <div className="aspect-[16/8.5] rounded-t-[10px] border border-dashed border-gray-300 overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </div>
                <div className="px-3 py-3 text-center">
                  <h2 className="text-[17px] font-black leading-tight text-gray-950">
                    {item.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isNewsPage) {
    return (
      <div className="bg-white min-h-screen pb-16">
        <div className="container-custom py-5">
          {renderContentBreadcrumb()}
          <h1 className="text-[30px] md:text-[32px] font-black text-gray-950 mb-5">
            {normalizedTitle}
          </h1>

          <div className="space-y-16">
            {NEWS_PAGE_SECTIONS.map((section) => {
              const visibleItems = section.items.slice(0, 5);

              return (
                <section key={section.title}>
                  <div className="flex items-center justify-between gap-4 mb-9">
                    <h2 className="text-[30px] md:text-[32px] font-black text-gray-950">
                      {section.title}
                    </h2>
                    <a
                      href={section.href}
                      className="text-primary text-[17px] font-medium flex items-center gap-1 hover:underline"
                    >
                      Xem tất cả <ChevronRight size={20} />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {visibleItems.map((item) => (
                      <a key={item.href} href={item.href} className="group block">
                        <div className="aspect-[16/9] rounded-[10px] border border-dashed border-gray-300 overflow-hidden bg-white mb-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            onError={(event) => {
                              event.currentTarget.src = FALLBACK_IMAGE;
                            }}
                          />
                        </div>
                        <div className="text-primary text-[16px] mb-6">{item.category}</div>
                        <h3 className="text-[18px] font-black leading-[1.55] text-gray-950 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </a>
                    ))}
                  </div>

                  {section.items.length > 5 && (
                    <div className="mt-12 flex justify-center gap-3">
                      <span className="h-3 w-3 rounded-full bg-gray-500" />
                      <span className="h-3 w-3 rounded-full bg-gray-300" />
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-12">
      <div className="container-custom py-4">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap items-center gap-2 text-[16px] text-gray-900 mb-5">
          <Link to="/" className="hover:text-primary transition-colors">
            <Home size={20} fill="currentColor" strokeWidth={0} />
          </Link>
          {(categoryPageData?.breadcrumbs || ['Danh mục']).map((item) => (
            <span key={item} className="contents">
              <span className="text-gray-400">/</span>
              <span>{item}</span>
            </span>
          ))}
          <span className="text-gray-400">/</span>
          <span className="font-medium">{categoryName}</span>
        </nav>

        <h1 className="text-[30px] font-black text-gray-950 mb-5">{categoryName}</h1>

        <div className="flex flex-col lg:flex-row gap-6 relative">
          {/* Desktop Sidebar / Filters */}
          <aside className="hidden lg:block w-full lg:w-[260px] shrink-0">
            <div className="bg-white overflow-hidden sticky top-24">{renderFilterSections()}</div>
          </aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsFilterOpen(false)}
                  className="fixed inset-0 bg-black/40 z-[200] lg:hidden backdrop-blur-sm"
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[201] lg:hidden flex flex-col shadow-2xl"
                >
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-bold text-gray-900 uppercase">{UI_TEXT.FILTER_LABEL}</h2>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <X size={24} className="text-gray-400" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">{renderFilterSections()}</div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-5 relative">
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <div className="lg:hidden -ml-4">
                  <button
                    onClick={() => setIsFilterOpen(true)}
                    className="bg-[#F2F2F2] text-gray-700 px-4 py-2 rounded-r-xl flex items-center gap-2 text-[13px] font-bold shadow-sm hover:bg-gray-200 transition-colors"
                  >
                    <Filter size={14} className="fill-gray-700" /> {UI_TEXT.FILTER_BTN}
                  </button>
                </div>
                <div className="text-[16px] text-gray-500 whitespace-nowrap">
                  {UI_TEXT.TOTAL_PRODUCTS}
                  <span className="text-gray-500">{totalProducts.toLocaleString('vi-VN')}</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative group">
                  <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-[14px] font-medium text-gray-700 flex items-center gap-2 hover:border-primary transition-colors">
                    {UI_TEXT.SORT_BY} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                    <button className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                      {UI_TEXT.SORT_PRICE_LOW_TO_HIGH}
                    </button>
                    <button className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                      {UI_TEXT.SORT_PRICE_HIGH_TO_LOW}
                    </button>
                    <button className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                      {UI_TEXT.SORT_NEWEST}
                    </button>
                    <button className="w-full text-left px-4 py-2 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors">
                      {UI_TEXT.SORT_BEST_SELLING}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
              {products.map((product, idx) => (
                <ProductCard key={`${product.id}-${idx}`} product={product} />
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 flex justify-center">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/20 transition-all flex items-center gap-2 group">
                {UI_TEXT.LOAD_MORE} {products.length}/{totalProducts.toLocaleString('vi-VN')}{' '}
                {UI_TEXT.PRODUCTS_REMAINING}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryListingPage;
