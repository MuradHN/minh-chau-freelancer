import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Home,
  ChevronRight,
  Search,
  Star,
  ShoppingCart,
  Minus,
  Plus,
  RotateCcw,
  User,
  Mail,
  Phone,
  MessageSquare,
  Key,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import {
  BRAND_PAGE_DATA,
  CATEGORY_PAGE_DATA,
  PRODUCT_DETAIL_DATA,
  ProductContentSection,
  ProductDetailData,
  bestSellers,
  newArrivals,
  UI_TEXT,
} from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

import 'swiper/css';
import 'swiper/css/pagination';

interface ProductDetailPageProps {
  onAddToCart: (product: Product, qty: number) => void;
}

const ProductDetailPage = ({ onAddToCart }: ProductDetailPageProps) => {
  const { category, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const categoryProducts = Object.values(CATEGORY_PAGE_DATA).flatMap((data) => data.products);
  const brandProducts = Object.values(BRAND_PAGE_DATA).flatMap((data) => data.products);
  const allProducts = [...bestSellers, ...newArrivals, ...categoryProducts, ...brandProducts];
  const product = allProducts.find((p) => p.id === id) || bestSellers[0];
  const categoryTitle = CATEGORY_PAGE_DATA[category || '']?.title || UI_TEXT.CATEGORY;
  const fallbackRelatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 8);
  const fallbackDetail: ProductDetailData = {
    breadcrumbs: ['Danh mục', categoryTitle],
    infoRows: [
      { label: UI_TEXT.PACKAGING_SPEC, value: 'Đang cập nhật' },
      { label: UI_TEXT.BRAND_LABEL, value: 'Minh Châu Pharma' },
      { label: UI_TEXT.ORIGIN_LABEL, value: 'Đang cập nhật' },
      { label: UI_TEXT.DOSAGE_FORM, value: 'Đang cập nhật' },
    ],
    contentSections: [
      {
        title: `${UI_TEXT.BENEFITS_OF} ${product.name}`,
        bullets: ['Thông tin công dụng đang được cập nhật theo dữ liệu sản phẩm.'],
      },
      {
        title: UI_TEXT.INGREDIENTS,
        bullets: ['Thông tin thành phần đang được cập nhật.'],
      },
      {
        title: UI_TEXT.USAGE_TARGET,
        bullets: ['Sử dụng theo nhu cầu phù hợp và theo tư vấn của chuyên gia y tế khi cần.'],
      },
      {
        title: UI_TEXT.USAGE_GUIDE,
        bullets: ['Dùng theo hướng dẫn trên bao bì sản phẩm hoặc theo tư vấn của dược sĩ.'],
      },
      {
        title: UI_TEXT.STORAGE,
        bullets: ['Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.'],
      },
    ],
    relatedSameBrandIds: fallbackRelatedProducts.map((p) => p.id),
    sameCategoryIds: fallbackRelatedProducts.slice(0, 4).map((p) => p.id),
    sameBrandIds: fallbackRelatedProducts.slice(0, 4).map((p) => p.id),
  };
  const productDetail = PRODUCT_DETAIL_DATA[product.id] || fallbackDetail;
  const productsByIds = (ids?: string[]) =>
    (ids || [])
      .map((productId) => allProducts.find((p) => p.id === productId))
      .filter((item): item is Product => Boolean(item));
  const sameBrandOptions = productsByIds(productDetail.relatedSameBrandIds).length
    ? productsByIds(productDetail.relatedSameBrandIds)
    : fallbackRelatedProducts;
  const sameActiveProducts = productsByIds(productDetail.sameActiveIngredientIds).length
    ? productsByIds(productDetail.sameActiveIngredientIds)
    : sameBrandOptions.slice(0, 4);
  const sameCategoryProducts = productsByIds(productDetail.sameCategoryIds).length
    ? productsByIds(productDetail.sameCategoryIds)
    : fallbackRelatedProducts.slice(0, 4);
  const sameBrandProducts = productsByIds(productDetail.sameBrandIds).length
    ? productsByIds(productDetail.sameBrandIds)
    : sameBrandOptions.slice(0, 4);
  const previewSections = productDetail.contentSections.slice(0, 3);
  const renderSectionBody = (section: ProductContentSection, muted = false) => (
    <div
      className={`space-y-3 text-gray-700 font-medium ${muted ? 'text-gray-400 opacity-50 blur-[1px]' : ''}`}
    >
      {section.intro && <p>{section.intro}</p>}
      {section.bullets && (
        <ul className="list-disc pl-5 space-y-2">
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );

  // Update document title with product name
  useEffect(() => {
    document.title = `${product.name} | Minh Châu`;

    // Cleanup: restore default title when component unmounts
    return () => {
      document.title = 'Minh Châu';
    };
  }, [product.name]);

  const detailBrandSwiperRef = React.useRef<SwiperType | null>(null);
  const detailBrandMobileSwiperRef = React.useRef<SwiperType | null>(null);

  const [activeActiveDot, setActiveActiveDot] = useState(0);
  const activeScrollRef = React.useRef<HTMLDivElement>(null);

  const [activeCategoryDot, setActiveCategoryDot] = useState(0);
  const categoryScrollRef = React.useRef<HTMLDivElement>(null);

  const [activeBrandSectionDot, setActiveBrandSectionDot] = useState(0);
  const brandSectionScrollRef = React.useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const handleActiveScroll = () => {
    if (activeScrollRef.current) {
      const scrollLeft = activeScrollRef.current.scrollLeft;
      const width = activeScrollRef.current.offsetWidth;
      setActiveActiveDot(Math.round(scrollLeft / width));
    }
  };

  const handleCategoryScroll = () => {
    if (categoryScrollRef.current) {
      const scrollLeft = categoryScrollRef.current.scrollLeft;
      const width = categoryScrollRef.current.offsetWidth;
      setActiveCategoryDot(Math.round(scrollLeft / width));
    }
  };

  const handleBrandSectionScroll = () => {
    if (brandSectionScrollRef.current) {
      const scrollLeft = brandSectionScrollRef.current.scrollLeft;
      const width = brandSectionScrollRef.current.offsetWidth;
      setActiveBrandSectionDot(Math.round(scrollLeft / width));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="py-3 md:py-4 border-b border-gray-100 bg-white">
        <div className="container-custom flex flex-wrap items-center gap-1 md:gap-2 lg:gap-2.5 text-[12px] md:text-base lg:text-lg text-gray-500 leading-normal">
          <Link to="/" className="hover:text-primary flex items-center">
            <Home size={18} />
          </Link>
          {productDetail.breadcrumbs.map((item) => (
            <React.Fragment key={item}>
              <span className="text-gray-400">/</span>
              <span className="hover:text-primary cursor-pointer whitespace-nowrap">{item}</span>
            </React.Fragment>
          ))}
          <span className="text-gray-400">/</span>
          <span className="text-gray-800 font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="container-custom py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COLUMN: Main content that scrolls */}
          <div className="flex-1 lg:w-3/4">
            <div className="flex flex-col gap-6 mb-8 lg:mb-16">
              {/* Product Title on Mobile */}
              <h1 className="text-[22px] md:text-3xl font-black text-gray-900 leading-tight sm:hidden block">
                {product.name}
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 lg:gap-12">
                {/* Image Section */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="aspect-square border border-gray-200 border-dashed rounded-2xl md:rounded-3xl overflow-hidden p-6 md:p-12 flex items-center justify-center relative group bg-white shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 bg-white p-2.5 rounded-full cursor-pointer shadow-md border border-gray-100">
                      <Search size={22} className="text-gray-500" />
                    </div>
                  </div>

                  {/* Warning/Info Text */}
                  <div className="text-[13px] md:text-[11px] text-gray-500 space-y-2 md:space-y-1 px-1">
                    <p className="flex items-start gap-1">
                      <span className="text-gray-400">*</span>
                      <span>{UI_TEXT.PRODUCT_IMAGE_NOTICE}</span>
                    </p>
                    <p className="flex items-start gap-1">
                      <span className="text-gray-400">**</span>
                      <span>{UI_TEXT.PRODUCT_PRICE_NOTICE}</span>
                    </p>
                    <div className="pt-2 flex items-center gap-1.5 md:gap-2">
                      <span className="text-gray-400 text-xs">{UI_TEXT.RETURN_30_DAYS}</span>
                      <span className="text-primary font-black cursor-pointer hover:underline text-[13px]">
                        {UI_TEXT.SEE_DETAILS}
                      </span>
                    </div>
                    <div className="pt-4 flex items-center gap-3">
                      <div className="w-10 h-10 md:w-8 md:h-8 rounded-xl bg-blue-50 flex items-center justify-center text-xl shadow-sm border border-blue-100">
                        📦
                      </div>
                      <span className="text-gray-700 font-bold md:font-medium leading-tight">
                        {UI_TEXT.PACKAGING_SAFETY}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right/Middle Info (Desktop) */}
                <div className="lg:col-span-5 hidden lg:block">
                  {/* Product Title on Mobile */}
                  <h1 className="text-[22px] md:text-3xl font-black text-gray-900 leading-tight block">
                    {product.name}
                  </h1>
                  <div className="text-[11px] text-gray-400 mb-2 font-medium">#{product.id}</div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">5.0/5</span>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-gray-500 text-sm">{UI_TEXT.PRICE_LABEL}</span>
                    <span className="text-3xl font-black text-red-600">{product.price}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-4 hover:bg-gray-50 text-gray-400"
                      >
                        <Minus size={18} />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-14 text-center text-base font-bold focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-4 hover:bg-gray-50 text-gray-400"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                    <button
                      onClick={() => onAddToCart(product, quantity)}
                      className="flex-1 bg-primary text-white py-4 rounded-xl font-black flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-primary-dark transition-all"
                    >
                      <ShoppingCart size={22} /> {UI_TEXT.ADD_TO_CART}
                    </button>
                  </div>

                  <div className="bg-bg-main rounded-2xl p-5 flex gap-4 items-center mb-10 border border-blue-50">
                    <input
                      type="text"
                      placeholder={UI_TEXT.CONSULT_PHONE_PLACEHOLDER}
                      className="flex-1 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                    />
                    <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-md transition-all">
                      {UI_TEXT.CALL_ME_BTN}
                    </button>
                  </div>

                  {/* Lựa chọn khác cùng hãng - Slider */}
                  <div className="mb-6 relative">
                    <h3 className="text-base font-bold text-gray-900 mb-4">
                      {UI_TEXT.OTHER_OPTIONS_SAME_BRAND}
                    </h3>
                    <Swiper
                      modules={[Pagination]}
                      onSwiper={(swiper) => {
                        detailBrandSwiperRef.current = swiper;
                      }}
                      spaceBetween={12}
                      slidesPerView={1}
                      slidesPerGroup={1}
                      pagination={{
                        clickable: true,
                        dynamicBullets: false,
                      }}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          slidesPerGroup: 1,
                        },
                        1024: {
                          slidesPerView: 3,
                          slidesPerGroup: 1,
                        },
                      }}
                      className="!pb-12"
                    >
                      {sameBrandOptions.map((p) => (
                        <SwiperSlide key={p.id}>
                          <div
                            className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col cursor-pointer hover:shadow-lg transition-all h-full"
                            onClick={() => navigate(`/${p.category}/${p.id}`)}
                          >
                            <div className="text-xs text-gray-400 mb-2">#{p.id}</div>
                            <div className="aspect-square mb-3 flex items-center justify-center p-2">
                              <img
                                src={p.image}
                                alt={p.name}
                                className="max-h-full object-contain"
                              />
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 line-clamp-2 mb-2 flex-1 leading-tight">
                              {p.name}
                            </h4>
                            {p.hasPrescription ? (
                              <button className="w-fit mx-auto bg-primary text-white px-4 py-2 rounded-full text-[11px] font-bold">
                                {UI_TEXT.SEND_PRESCRIPTION}
                              </button>
                            ) : (
                              <div className="text-red-600 font-bold text-sm">{p.price}</div>
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <button
                      type="button"
                      aria-label="Sản phẩm cùng hãng trước"
                      onClick={() => detailBrandSwiperRef.current?.slidePrev()}
                      className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-9 w-9 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
                    >
                      <ChevronRight size={22} className="rotate-180" />
                    </button>
                    <button
                      type="button"
                      aria-label="Sản phẩm cùng hãng tiếp theo"
                      onClick={() => detailBrandSwiperRef.current?.slideNext()}
                      className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-9 w-9 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </div>

                  {/* Giao nhanh 2H Banner */}
                  <div className="mt-10 bg-white border border-gray-100 rounded-[28px] p-5 md:p-8 flex flex-row items-center md:items-start gap-4 md:gap-8 shadow-sm border-dashed">
                    <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-blue-50/30 rounded-[20px] flex items-center justify-center overflow-hidden">
                      <img
                        src="https://nhathuocminhchau.vn/storage/uploads/images/deliveryBoy.svg"
                        className="w-10 h-10 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-[16px] md:text-xl font-black text-gray-900 mb-2 leading-tight">
                        {UI_TEXT.GIAO_NHANH_2H_TITLE}
                      </h4>
                      <p className="text-[12px] md:text-sm text-gray-600 leading-relaxed max-w-xl">
                        Bạn muốn nhận hàng trước <span className="text-primary font-black">4h</span>{' '}
                        hôm nay. Đặt hàng trong <span className="text-primary font-black">55p</span>{' '}
                        tới và chọn giao hàng <span className="text-primary font-black">2H</span> ở
                        bước thanh toán.{' '}
                        <span className="text-primary underline font-bold cursor-pointer">
                          {UI_TEXT.SEE_DETAILS}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Rating (Visible only on mobile before other sections) */}
            <div className="flex lg:hidden items-center gap-2 mb-8 border-t border-gray-50 pt-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-base font-bold text-gray-600">5.0/5</span>
            </div>

            {/* Lựa chọn khác cùng hãng - Mobile/Tablet Slider */}
            <div className="lg:hidden mb-12 relative">
              <h3 className="text-base font-bold text-gray-900 mb-4">
                {UI_TEXT.OTHER_OPTIONS_SAME_BRAND}
              </h3>
              <Swiper
                modules={[Pagination]}
                onSwiper={(swiper) => {
                  detailBrandMobileSwiperRef.current = swiper;
                }}
                spaceBetween={12}
                slidesPerView={1}
                slidesPerGroup={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                  },
                }}
                className="!pb-12"
              >
                {sameBrandOptions.map((p) => (
                  <SwiperSlide key={p.id}>
                    <div
                      className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col cursor-pointer hover:shadow-lg transition-all h-full"
                      onClick={() => navigate(`/${p.category}/${p.id}`)}
                    >
                      <div className="text-xs text-gray-400 mb-2">#{p.id}</div>
                      <div className="aspect-square mb-3 flex items-center justify-center p-2">
                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 line-clamp-2 mb-2 flex-1 leading-tight">
                        {p.name}
                      </h4>
                      {p.hasPrescription ? (
                        <button className="w-fit mx-auto bg-primary text-white px-4 py-2 rounded-full text-[11px] font-bold">
                          {UI_TEXT.SEND_PRESCRIPTION}
                        </button>
                      ) : (
                        <div className="text-red-600 font-bold text-sm">{p.price}</div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                type="button"
                aria-label="Sản phẩm cùng hãng trước"
                onClick={() => detailBrandMobileSwiperRef.current?.slidePrev()}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 h-9 w-9 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
              >
                <ChevronRight size={22} className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Sản phẩm cùng hãng tiếp theo"
                onClick={() => detailBrandMobileSwiperRef.current?.slideNext()}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 h-9 w-9 rounded-full bg-white text-[#0033FF] shadow-lg border border-gray-100 flex items-center justify-center hover:bg-[#0033FF] hover:text-white transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Sticky Bottom Bar for Mobile */}
            <div className="lg:hidden fixed bottom-[74px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[14px] font-black text-red-600">
                  {UI_TEXT.PRICE_LABEL} {product.price}
                </span>
              </div>
              <button
                onClick={() => onAddToCart(product, quantity)}
                className="bg-primary text-white py-3 px-6 rounded-full font-bold flex items-center gap-2 text-[14px] shadow-lg shadow-blue-100 active:scale-95 transition-transform"
              >
                <ShoppingCart size={18} /> {UI_TEXT.ADD_TO_CART}
              </button>
            </div>

            {/* Alternative Products Section */}
            <div className="mt-20 border-t border-gray-100 pt-16">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{UI_TEXT.ALT_PRODUCTS_TITLE}</h2>
              <p className="text-[12px] text-gray-500 mb-8">{UI_TEXT.ALT_PRODUCTS_DISCLAIMER}</p>

              <div className="space-y-4 mb-10 max-w-2xl">
                {(
                  productDetail.alternativeProductNames || [
                    'Nebusal 6 CPC1 Hà Nội 1 vỉ x 5 ống x 5ml',
                    'Zencombi CPC1 Hà Nội 10 lọ x 2.5ml',
                    'Thalide 100 United Biotech 3 vỉ x 10 viên',
                    'Prorid 5mg Yoo Young 10 vỉ x 10 viên (Finasteride)',
                    'Aricept Evess 10mg Eisai 2 vỉ x 14 viên (Donepezil)',
                  ]
                ).map((link, idx) => (
                  <Link
                    key={idx}
                    to="#"
                    className="block text-[14px] text-primary hover:underline font-medium"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              <div className="flex justify-center mb-24">
                <button className="bg-primary text-white px-8 py-3 rounded-full text-[14px] font-bold shadow-lg shadow-blue-100 hover:bg-primary-dark transition-all uppercase">
                  {UI_TEXT.SEE_ALL_ALT_PRODUCTS}
                </button>
              </div>
            </div>

            {/* Cùng hoạt chất */}
            <div className="mt-20">
              <h2 className="text-[22px] md:text-2xl font-black text-gray-900 mb-8 uppercase px-1 lg:px-0">
                {UI_TEXT.SAME_ACTIVE_INGREDIENT}
              </h2>
              <div
                ref={activeScrollRef}
                onScroll={handleActiveScroll}
                className="flex lg:grid lg:grid-cols-4 gap-3 md:gap-6 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-0 snap-x snap-mandatory px-0.5"
              >
                {sameActiveProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-gray-100 rounded-2xl p-3 md:p-6 flex flex-col h-full hover:shadow-lg transition-all group cursor-pointer w-[calc(50%-6px)] lg:w-auto snap-start shrink-0"
                    onClick={() => navigate(`/${p.category}/${p.id}`)}
                  >
                    <div className="text-[11px] md:text-[13px] text-gray-400 mb-3 md:mb-6 font-bold">
                      #{p.id}
                    </div>
                    <div className="aspect-square mb-4 md:mb-8 flex items-center justify-center p-1 md:p-2">
                      <img
                        src={p.image}
                        className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-[13px] md:text-[16px] font-black text-gray-900 line-clamp-2 mb-4 md:mb-8 flex-1 px-1 h-10 group-hover:text-primary leading-tight">
                      {p.name}
                    </h4>
                    <div className="mt-auto">
                      {p.hasPrescription ? (
                        <button className="w-fit mx-auto bg-primary text-white px-4 py-2 md:py-3 rounded-full text-[11px] md:text-[13px] font-bold flex items-center justify-center gap-1.5 md:gap-2 hover:bg-primary-dark transition-all">
                          <span className="text-[14px] md:text-[16px]">📄</span>{' '}
                          {UI_TEXT.SEND_PRESCRIPTION}
                        </button>
                      ) : (
                        <div className="text-red-600 font-bold text-[14px] md:text-[15px] text-center">
                          {p.price}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Slider Dots for Mobile */}
              <div className="flex justify-center gap-3 mt-4 lg:hidden">
                {sameActiveProducts.map((item, dot) => (
                  <div
                    key={item.id}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeActiveDot === dot ? 'w-8 bg-primary' : 'w-2.5 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>

            {/* Sản phẩm cùng danh mục */}
            <div className="mt-20 pb-20">
              <div className="flex justify-between items-end mb-8 px-1 lg:px-0">
                <h2 className="text-[22px] md:text-2xl font-black text-gray-900 uppercase">
                  {UI_TEXT.SAME_CATEGORY_PRODUCTS}
                </h2>
                <Link
                  to="#"
                  className="text-primary text-[13px] font-black flex items-center gap-1 hover:underline mb-1 whitespace-nowrap"
                >
                  {UI_TEXT.SEE_ALL} <ChevronRight size={16} />
                </Link>
              </div>
              <div
                ref={categoryScrollRef}
                onScroll={handleCategoryScroll}
                className="flex lg:grid lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-0 snap-x snap-mandatory"
              >
                {sameCategoryProducts.map((p) => (
                  <div key={p.id} className="w-[calc(50%-6px)] lg:w-auto snap-start shrink-0">
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
              {/* Slider Dots for Mobile */}
              <div className="flex justify-center gap-3 mt-6 lg:hidden">
                {sameCategoryProducts.map((item, dot) => (
                  <div
                    key={item.id}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeCategoryDot === dot ? 'w-8 bg-primary' : 'w-2.5 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>

            {/* Cùng thương hiệu */}
            <div className="mt-10 md:mt-20 pb-20">
              <div className="flex justify-between items-end mb-8 px-1 lg:px-0">
                <h2 className="text-[22px] md:text-2xl font-black text-gray-900 uppercase">
                  {UI_TEXT.SAME_BRAND_PRODUCTS}
                </h2>
                <Link
                  to="#"
                  className="text-primary text-[13px] font-black flex items-center gap-1 hover:underline mb-1 whitespace-nowrap"
                >
                  {UI_TEXT.SEE_ALL_BRAND_PRODUCTS}{' '}
                  <span className="text-primary font-bold">
                    {productDetail.brandName || categoryTitle}
                  </span>{' '}
                  <ChevronRight size={16} />
                </Link>
              </div>
              <div
                ref={brandSectionScrollRef}
                onScroll={handleBrandSectionScroll}
                className="flex lg:grid lg:grid-cols-4 gap-3 md:gap-6 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-0 snap-x snap-mandatory px-0.5"
              >
                {sameBrandProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-gray-100 rounded-2xl p-3 md:p-6 flex flex-col h-full hover:shadow-lg transition-all group cursor-pointer w-[calc(50%-6px)] lg:w-auto snap-start shrink-0"
                    onClick={() => navigate(`/${p.category}/${p.id}`)}
                  >
                    <div className="text-[11px] md:text-[13px] text-gray-400 mb-3 md:mb-6 font-bold">
                      #{p.id || '21760'}
                    </div>
                    <div className="aspect-square mb-4 md:mb-8 flex items-center justify-center p-1 md:p-2">
                      <img
                        src={p.image}
                        className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4 className="text-[13px] md:text-[16px] font-black text-gray-900 line-clamp-2 mb-4 md:mb-8 flex-1 px-1 h-10 group-hover:text-primary leading-tight">
                      {p.name}
                    </h4>
                    <div className="mt-auto">
                      {p.hasPrescription ? (
                        <button className="w-fit mx-auto bg-primary text-white px-4 py-2 md:py-3 rounded-full text-[11px] md:text-[13px] font-bold flex items-center justify-center gap-1.5 md:gap-2 hover:bg-primary-dark transition-all">
                          <span className="text-[14px] md:text-[16px]">📄</span>{' '}
                          {UI_TEXT.SEND_PRESCRIPTION}
                        </button>
                      ) : (
                        <div className="text-red-600 font-bold text-[14px] md:text-[15px] text-center">
                          {p.price}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Slider Dots for Mobile */}
              <div className="flex justify-center gap-3 mt-4 lg:hidden">
                {sameBrandProducts.map((item, dot) => (
                  <div
                    key={item.id}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeBrandSectionDot === dot ? 'w-8 bg-primary' : 'w-2.5 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="mt-12 md:mt-20">
              <h2 className="text-[22px] md:text-2xl font-black text-gray-900 mb-8 px-1 lg:px-0">
                {UI_TEXT.PRODUCT_INFO_TITLE}
              </h2>
              <div className="border border-border-soft rounded-lg overflow-hidden">
                {productDetail.infoRows.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-[1.2fr_2fr] md:grid-cols-[1.5fr_3fr] ${idx !== 0 ? 'border-t border-border-soft' : ''}`}
                  >
                    <div className="bg-white p-3 md:px-6 md:py-4 border-r border-border-soft flex items-center">
                      <span className="text-[13px] md:text-[15px] font-black text-gray-900">
                        {row.label}
                      </span>
                    </div>
                    <div
                      className={`${idx % 2 === 0 ? 'bg-bg-highlight' : 'bg-transparent'} p-3 md:px-6 md:py-4 flex items-center justify-end`}
                    >
                      <span className="text-[13px] md:text-[15px] font-black text-primary text-right">
                        {row.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nội dung sản phẩm */}
            <div className="mt-12 md:mt-20">
              <h2 className="text-[22px] md:text-2xl font-black text-gray-900 mb-8 px-1 lg:px-0">
                {UI_TEXT.PRODUCT_CONTENT_TITLE}
              </h2>
              <div className="prose prose-blue max-w-none px-1 lg:px-0">
                <div className="space-y-8">
                  {previewSections.map((section, index) => (
                    <section
                      key={section.title}
                      className={index === previewSections.length - 1 ? 'relative' : undefined}
                    >
                      <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      {renderSectionBody(section, index === previewSections.length - 1)}
                      {index === previewSections.length - 1 && (
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                      )}
                    </section>
                  ))}
                </div>

                <div className="flex justify-center mt-12 pb-10">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-primary text-white px-10 py-3 rounded-full font-black flex items-center justify-center gap-3 shadow-lg shadow-blue-100 hover:bg-primary-dark transition-all"
                  >
                    {UI_TEXT.SEE_MORE_CONTENT}
                  </button>
                </div>
              </div>
            </div>

            {/* Full Content Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                <div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                  onClick={() => setIsModalOpen(false)}
                ></div>
                <div className="relative bg-white w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in duration-300">
                  {/* Modal Header */}
                  <div className="px-6 py-4 md:px-10 md:py-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                    <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                      <h2 className="text-[18px] md:text-2xl font-black text-primary whitespace-nowrap">
                        {UI_TEXT.PRODUCT_CONTENT_TITLE}
                      </h2>
                      <div className="hidden md:flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-500">
                          {UI_TEXT.FONT_SIZE_LABEL}
                        </span>
                        <button
                          onClick={() => setLargeText(!largeText)}
                          className={`px-4 py-1.5 rounded-full text-xs font-black transition-all ${largeText ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                        >
                          {UI_TEXT.LARGER_LABEL}
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-primary text-white px-6 py-2 md:px-8 md:py-2.5 rounded-full text-sm font-black shadow-lg shadow-blue-100 hover:bg-primary-dark active:scale-95 transition-all shrink-0"
                    >
                      {UI_TEXT.CLOSE}
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div
                    className={`overflow-y-auto p-6 md:p-10 custom-scrollbar ${largeText ? 'text-lg' : 'text-base'}`}
                  >
                    <div className="space-y-10 max-w-3xl mx-auto">
                      {productDetail.contentSections.map((section) => (
                        <section key={section.title}>
                          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 underline decoration-gray-200 underline-offset-8 leading-tight">
                            {section.title}
                          </h3>
                          {renderSectionBody(section)}
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Đánh giá - Bình luận */}
            <div className="mt-12 border-t border-gray-100 pt-16 mb-20 max-w-5xl">
              <h2 className="text-[22px] md:text-2xl font-black text-gray-900 mb-6 px-1 lg:px-0 uppercase">
                {UI_TEXT.REVIEWS_COMMENTS_TITLE}
              </h2>
              <div className="flex items-center gap-2 mb-10 px-1 lg:px-0 text-gray-900">
                <MessageSquare size={20} className="fill-current" />
                <span className="text-[15px] font-black uppercase">
                  {UI_TEXT.YOUR_COMMENT_TITLE}
                </span>
              </div>

              <div className="bg-white px-1 lg:px-0">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[15px] font-bold text-gray-800">
                    {UI_TEXT.YOUR_RATING_LABEL}
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={28}
                        className="text-gray-300 cursor-pointer hover:text-yellow-400 transition-colors"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12">
                  {/* Left Column: Personal Info */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        placeholder={UI_TEXT.NAME_PLACEHOLDER}
                        className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-10 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                      />
                      <span className="absolute right-4 inset-y-0 flex items-center text-red-500 text-xl font-bold">
                        {UI_TEXT.REQUIRED}
                      </span>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        placeholder={UI_TEXT.EMAIL_PLACEHOLDER}
                        className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-10 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                      />
                      <span className="absolute right-4 inset-y-0 flex items-center text-red-500 text-xl font-bold">
                        {UI_TEXT.REQUIRED}
                      </span>
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                        <Phone size={20} />
                      </div>
                      <input
                        type="tel"
                        placeholder={UI_TEXT.PHONE_PLACEHOLDER}
                        className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-10 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                      />
                    </div>
                  </div>

                  {/* Right Column: Comment and Captcha */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute top-4 left-4 pointer-events-none text-gray-400">
                        <MessageSquare size={20} />
                      </div>
                      <textarea
                        placeholder={UI_TEXT.COMMENT_PLACEHOLDER}
                        rows={4}
                        className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-10 py-3 text-[14px] focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none font-medium"
                      />
                      <span className="absolute right-4 top-4 text-red-500 text-xl font-bold">
                        {UI_TEXT.REQUIRED}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1 flex border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <div className="bg-bg-main px-4 flex items-center border-r border-gray-200 text-gray-600 gap-2">
                          <Key size={18} className="translate-y-[-1px]" />
                          <span className="text-[13px] font-bold">{UI_TEXT.CAPTCHA}</span>
                        </div>
                        <input
                          type="text"
                          placeholder={UI_TEXT.CAPTCHA_PLACEHOLDER}
                          className="flex-1 bg-white px-4 py-2.5 text-[14px] focus:outline-none font-medium"
                        />
                      </div>
                      <div className="w-28 bg-bg-main border border-gray-200 rounded-lg flex items-center justify-center p-1 overflow-hidden select-none relative">
                        <div className="text-primary font-black italic tracking-widest text-lg transform rotate-[-5deg]">
                          n8u
                        </div>
                        {/* Decorative squiggly lines for captcha feel */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <div className="absolute h-px w-full bg-blue-500 top-1/2 left-0 -rotate-12"></div>
                          <div className="absolute h-px w-full bg-green-500 top-2/3 left-0 rotate-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-12 pb-10">
                  <button className="bg-primary text-white px-10 py-3 rounded-full text-[15px] font-black shadow-lg shadow-blue-100 hover:bg-primary-dark active:scale-95 transition-all">
                    {UI_TEXT.SUBMIT_COMMENT}
                  </button>
                  <button className="flex items-center gap-2 border border-gray-300 px-8 py-3 rounded-full text-[15px] font-bold text-gray-600 hover:bg-gray-50 hover:border-primary hover:text-primary active:scale-95 transition-all">
                    <RotateCcw size={18} className="rotate-180" /> {UI_TEXT.RESET}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="lg:w-1/4 relative">
            <div className="sticky top-32">
              <div className="mb-10">
                <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase tracking-wider">
                  {UI_TEXT.QUICK_LINKS_TITLE}
                </h3>
                <ul className="space-y-3 text-[13px] font-medium">
                  {productDetail.contentSections.map((section) => (
                    <li
                      key={section.title}
                      className="text-primary hover:underline cursor-pointer flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full"></span> {section.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-blue-200 border-dashed rounded-xl p-6 relative bg-white">
                <div className="absolute top-2 left-2 text-white bg-blue-400 p-1.5 rounded-lg">
                  <RotateCcw size={16} />
                </div>
                <ul className="space-y-4 text-[11px] text-gray-600 mt-6 pl-2">
                  <li>
                    • {UI_TEXT.ORDER_PRESCRIPTION_IN}{' '}
                    <span className="font-bold">30 {UI_TEXT.MINUTES}</span>.{' '}
                    <span className="text-blue-500 cursor-pointer">
                      {UI_TEXT.SEND_PRESCRIPTION_SHORT}
                    </span>
                  </li>
                  <li>
                    • {UI_TEXT.FAST_DELIVERY_2H}.{' '}
                    <span className="text-blue-500 cursor-pointer">
                      {UI_TEXT.FAST_DELIVERY_POLICY}.
                    </span>
                  </li>
                  <li>
                    • <span className="font-bold text-red-600">{UI_TEXT.BUY_1_GET_1}</span> Đông
                    Trùng Hạ Thảo Famitaa.{' '}
                    <span className="text-blue-500 cursor-pointer">{UI_TEXT.SEE_NOW}</span>
                  </li>
                  <li>
                    • {UI_TEXT.BUY_COMBO_PRICE}.{' '}
                    <span className="text-blue-500 cursor-pointer">{UI_TEXT.VISIT_NOW}</span>
                  </li>
                  <li>
                    • {UI_TEXT.FREE_SHIPPING_FOR} <span className="font-bold">700K</span>
                  </li>
                  <li>
                    • {UI_TEXT.RETURN_POLICY_6_DAYS}.{' '}
                    <span className="text-blue-500 cursor-pointer">
                      {UI_TEXT.RETURN_POLICY_LINK}
                    </span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <span className="text-red-600 font-black text-lg">{UI_TEXT.CSKH_LABEL}</span>
                  <span className="text-primary font-black text-lg">{UI_TEXT.HOTLINE}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
