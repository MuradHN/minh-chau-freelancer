import React from 'react';
import { Home, LayoutGrid, User, AlignLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UI_TEXT } from '../constants';

const ZALO_ICON_URL = 'https://longchaupharma.com/resources/layout1/images/sodienthoaizalo.svg';
const ZALO_LINK = 'https://zalo.me/vi/';
const PHONE_ICON_URL = 'https://longchaupharma.com/resources/layout1/images/sodienthoai.svg';

interface BottomNavProps {
  onOpenMenu: () => void;
  onOpenCategory: () => void;
}

const BottomNav = ({ onOpenMenu, onOpenCategory }: BottomNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isMember = location.pathname === '/member';

  return (
    <div className="md:hidden fixed -bottom-2 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-between z-[100] shadow-[0_-4px_10px_rgba(0,0,0,0.03)] rounded-t-[20px] pt-3 pb-2 px-1">
      <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={onOpenMenu}>
        <AlignLeft size={24} className="text-gray-800" strokeWidth={2.5} />
        <span className="text-[11px] mt-1 text-gray-900 font-medium">{UI_TEXT.MENU_LABEL}</span>
      </div>
      <div
        className="flex flex-col items-center flex-1 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <Home size={24} className={isHome ? 'text-primary' : 'text-gray-700'} strokeWidth={2} />
        <span
          className={`text-[11px] mt-1 font-medium ${isHome ? 'text-primary' : 'text-gray-900'}`}
        >
          {UI_TEXT.HOME}
        </span>
      </div>
      <div className="flex flex-col items-center flex-1 cursor-pointer" onClick={onOpenCategory}>
        <LayoutGrid
          size={24}
          className={location.pathname.includes('category') ? 'text-primary' : 'text-gray-700'}
          strokeWidth={2}
        />
        <span
          className={`text-[11px] mt-1 font-medium ${location.pathname.includes('category') ? 'text-primary' : 'text-gray-900'}`}
        >
          {UI_TEXT.CATEGORY}
        </span>
      </div>
      <div className="flex flex-col items-center flex-1 cursor-pointer">
        <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm overflow-hidden">
          <img
            src={PHONE_ICON_URL}
            alt={UI_TEXT.HOTLINE_LABEL}
            className="h-full w-full object-contain animate-phone-shake"
          />
        </div>
        <span className="text-[11px] mt-1 text-gray-900 font-medium">{UI_TEXT.HOTLINE_LABEL}</span>
      </div>
      <a
        href={ZALO_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center flex-1 cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm overflow-hidden">
          <img src={ZALO_ICON_URL} alt={UI_TEXT.ZALO} className="h-full w-full object-contain" />
        </div>
        <span className="text-[11px] mt-1 text-gray-900 font-medium">{UI_TEXT.ZALO}</span>
      </a>
      <div
        className="flex flex-col items-center flex-1 cursor-pointer"
        onClick={() => navigate('/member')}
      >
        <User size={24} className={isMember ? 'text-primary' : 'text-gray-700'} strokeWidth={2} />
        <span
          className={`text-[11px] mt-1 font-medium ${isMember ? 'text-primary' : 'text-gray-900'}`}
        >
          {UI_TEXT.ACCOUNT}
        </span>
      </div>
    </div>
  );
};

export default BottomNav;
