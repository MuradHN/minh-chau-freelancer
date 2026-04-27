import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Product } from '../types';
import { UI_TEXT } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const shouldScaleProductImage = ['ma01', 'ma02'].includes(product.id);

  return (
    <motion.div
      onClick={() => navigate(`/${product.category}/${product.id}`)}
      className="bg-white rounded-xl border-2 border-gray-100 transition-all duration-300 p-3 md:p-4 flex flex-col h-full hover:shadow-lg relative cursor-pointer"
    >
      <div className="text-[10px] md:text-[11px] text-gray-400 mb-1 md:mb-2 font-medium">
        #{product.id}
      </div>
      <div className="relative h-[140px] md:h-[180px] mb-3 md:mb-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={`max-w-full max-h-full object-contain ${
            shouldScaleProductImage ? 'scale-125' : ''
          }`}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://picsum.photos/400/400?random=' + product.id;
          }}
        />
      </div>
      <div className="flex-1 flex flex-col pt-1 md:pt-2">
        <div className="group/title relative mb-2">
          <h3
            title={product.name}
            className="product-card-title text-[13px] md:text-[14px] font-black md:font-bold text-gray-900 group-hover/title:text-[#0033FF]"
          >
            {product.name}
          </h3>
          <div className="pointer-events-none absolute bottom-full left-0 right-0 z-30 mb-2 hidden rounded-lg border border-gray-100 bg-white p-3 text-[13px] font-bold leading-snug text-gray-900 shadow-xl group-hover/title:block">
            {product.name}
          </div>
        </div>
        <div className="mt-auto">
          {!product.hasPrescription && product.price !== '0 đ' && (
            <>
              <p className="text-red-600 font-bold text-[15px] mb-1">{product.price}</p>
              {product.subPrice && (
                <p className="text-[11px] text-gray-500 mb-2">{product.subPrice}</p>
              )}
            </>
          )}

          {product.hasPrescription && (
            <button className="w-fit mx-auto bg-[#0033FF] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5 mt-6 hover:bg-[#0d3d7c] transition-colors">
              <span className="text-[14px]">📄</span> {UI_TEXT.SEND_PRESCRIPTION}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
