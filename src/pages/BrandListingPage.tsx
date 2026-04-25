import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { BRAND_PAGE_DATA, brands, bestSellers, newArrivals, UI_TEXT } from '../constants';

const BrandListingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState('default');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Find brand by slug
  const brand = brands.find((b) => b.slug === slug);
  const brandPageData = slug ? BRAND_PAGE_DATA[slug] : undefined;

  const allProducts = brandPageData?.products ?? [...bestSellers, ...newArrivals];

  // Sort products based on selection
  const sortedProducts = [...allProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return (
          parseFloat(a.price.replace(/[^\d]/g, '')) - parseFloat(b.price.replace(/[^\d]/g, ''))
        );
      case 'price-desc':
        return (
          parseFloat(b.price.replace(/[^\d]/g, '')) - parseFloat(a.price.replace(/[^\d]/g, ''))
        );
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const sortOptions = [
    { value: 'default', label: UI_TEXT.SORT_DEFAULT },
    { value: 'price-asc', label: UI_TEXT.SORT_PRICE_LOW_HIGH },
    { value: 'price-desc', label: UI_TEXT.SORT_PRICE_HIGH_LOW },
    { value: 'name-asc', label: UI_TEXT.SORT_NAME_A_Z },
    { value: 'name-desc', label: UI_TEXT.SORT_NAME_Z_A },
  ];

  if (!brand) {
    return (
      <div className="container-custom py-12">
        <p className="text-center text-gray-600">{UI_TEXT.BRAND_NOT_FOUND}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-custom py-6 md:py-8">
        {/* Brand Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0033FF] uppercase">
                {brand.name}
              </h1>
              <p className="text-gray-600 mt-1">
                {(brandPageData?.totalProducts ?? sortedProducts.length).toLocaleString('vi-VN')}{' '}
                {UI_TEXT.PRODUCTS_COUNT}
              </p>
              {brandPageData?.description && (
                <p className="text-gray-500 mt-2 text-sm max-w-2xl">{brandPageData.description}</p>
              )}
            </div>
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">{UI_TEXT.ALL_PRODUCTS}</h2>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-[#0033FF] transition-colors"
            >
              <span className="text-sm text-gray-700">{UI_TEXT.SORT_BY}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      sortBy === option.value
                        ? 'text-[#0033FF] font-semibold bg-blue-50'
                        : 'text-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandListingPage;
