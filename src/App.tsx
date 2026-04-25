import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import FloatingButtons from './components/FloatingButtons';
import BottomNav from './components/BottomNav';
import MobileMenu from './components/MobileMenu';
import CategoryMobileView from './components/CategoryMobileView';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryListingPage from './pages/CategoryListingPage';
import BrandListingPage from './pages/BrandListingPage';
import CheckoutPage from './pages/CheckoutPage';
import MemberPage from './pages/MemberPage';
import QRCodePage from './pages/QRCodePage';
import ArticleDetailPage from './pages/ArticleDetailPage';

import WhyChooseUs from './components/WhyChooseUs';

// Types
import { Product } from './types';
import { articleDetailBySlug } from './articleData';

const CART_STORAGE_KEY = 'minh_chau_cart_items';

const ArticleOrCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const article = categorySlug ? articleDetailBySlug[categorySlug] : undefined;
  console.log(article, '---article')
  if (article) {
    return <ArticleDetailPage article={article} />;
  }

  return <CategoryListingPage />;
};

const getInitialCartItems = (): Product[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedItems = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!storedItems) {
      return [];
    }

    const parsedItems = JSON.parse(storedItems);
    return Array.isArray(parsedItems) ? parsedItems : [];
  } catch {
    return [];
  }
};

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>(getInitialCartItems);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product, qty: number) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + qty } : item,
        );
      }

      return [...prevItems, { ...product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== productId);
      }

      return prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item));
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-[#0033FF] selection:text-white pb-20 md:pb-0">
        <Header
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
          onOpenLogin={() => setIsLoginOpen(true)}
          isLoginOpen={isLoginOpen}
          onCloseLogin={() => setIsLoginOpen(false)}
        />

        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveItem={handleRemoveCartItem}
          onClearCart={handleClearCart}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thanh-toan" element={<CheckoutPage cartItems={cartItems} />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/qr-codes" element={<QRCodePage />} />
          <Route path="/brand/:slug" element={<BrandListingPage />} />
          <Route
            path="/:category/:id"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/:categorySlug" element={<ArticleOrCategoryPage />} />
        </Routes>

        <WhyChooseUs />
        <Footer />

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        <CategoryMobileView
          isOpen={isCategoryOpen}
          onClose={() => setIsCategoryOpen(false)}
          cartCount={cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        />
        <FloatingButtons />
        <BottomNav
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenCategory={() => setIsCategoryOpen(true)}
        />
      </div>
    </BrowserRouter>
  );
}
