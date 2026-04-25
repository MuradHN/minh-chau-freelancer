import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, ShoppingCart as CartIcon } from 'lucide-react';
import { Product } from '../types';
import { UI_TEXT } from '../constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

const CartSidebar = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartSidebarProps) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    return acc + priceNum * (item.quantity || 1);
  }, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + ' ' + UI_TEXT.UNIT_PRICE;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm" onClick={onClose} />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-full max-w-[480px] bg-white z-[101] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center bg-white">
          <h2 className="text-[15px] font-bold text-gray-800 uppercase">{UI_TEXT.YOUR_CART}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Plus className="rotate-45" size={24} />
          </button>
        </div>

        {/* Summary Bar */}
        <div className="bg-[#00CFEA] text-white px-4 py-2.5 flex justify-between items-center text-[13px] font-bold">
          <span>
            {UI_TEXT.TOTAL_AMOUNT} {formatPrice(total)}
          </span>
          <span>
            {UI_TEXT.QUANTITY} {cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
          </span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400">
              <CartIcon size={64} className="mb-4 opacity-20" />
              <p>{UI_TEXT.EMPTY_CART}</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-50 pb-6 relative group">
                <div className="w-20 h-20 shrink-0 border border-gray-100 rounded-lg p-1">
                  <img src={item.image} className="w-full h-full object-contain" alt={item.name} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between gap-2 mb-1">
                    <h3 className="text-[13px] font-bold text-gray-800 leading-snug line-clamp-2 pr-6">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors absolute top-0 right-0 p-1"
                      aria-label={`Xóa ${item.name}`}
                    >
                      <Plus className="rotate-45 scale-75" size={24} />
                    </button>
                  </div>
                  <p className="text-[12px] text-gray-400 mb-4">
                    {UI_TEXT.TOTAL_AMOUNT} {UI_TEXT.PRODUCT_UNIT}:{' '}
                    <span className="text-red-500 italic">{item.price}</span>
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-bold text-gray-800">{item.price}</span>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200 rounded-md h-8">
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                          className="w-8 h-full flex items-center justify-center text-gray-400 hover:bg-gray-50"
                          aria-label={`Giảm số lượng ${item.name}`}
                        >
                          <Minus size={14} />
                        </button>
                        <input
                          type="text"
                          value={item.quantity || 1}
                          readOnly
                          className="w-8 text-center text-xs font-bold focus:outline-none"
                        />
                        <button
                          onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                          className="w-8 h-full flex items-center justify-center text-gray-400 hover:bg-gray-50"
                          aria-label={`Tăng số lượng ${item.name}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex justify-end mb-6">
              <button
                onClick={onClearCart}
                className="text-gray-400 text-xs hover:text-red-500 transition-colors"
              >
                {UI_TEXT.CLEAR_CART}
              </button>
            </div>
            <button
              onClick={() => {
                navigate('/thanh-toan');
                onClose();
              }}
              className="w-full bg-[#E33E43] text-white py-4 rounded-md font-bold text-base hover:bg-[#c93338] transition-colors shadow-lg shadow-red-100 uppercase tracking-widest"
            >
              {UI_TEXT.CHECKOUT_NOW}
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartSidebar;
