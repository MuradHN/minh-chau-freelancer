import React from 'react';
import { Home, Facebook } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UI_TEXT } from '../constants';

const MemberPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb Area */}
      <div className="container-custom py-6">
        <h1 className="text-2xl font-black text-gray-900 mb-4">{UI_TEXT.MEMBER_PAGE_TITLE}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home
            size={18}
            className="cursor-pointer hover:text-[#0033FF]"
            onClick={() => navigate('/')}
          />
          <span>/</span>
          <span className="text-[#0033FF]">{UI_TEXT.LOGIN_TITLE}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-black text-center text-gray-900 mb-2">
              {UI_TEXT.LOGIN_MEMBER_TITLE}
            </h2>
            <p className="text-xs text-center text-gray-600 italic mb-8">
              {UI_TEXT.LOGIN_MEMBER_SUBTITLE}
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-[13px] font-bold text-gray-800 mb-2">
                  {UI_TEXT.USERNAME_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                </label>
                <input
                  type="text"
                  placeholder={UI_TEXT.USERNAME_PLACEHOLDER}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#0033FF] focus:ring-1 focus:ring-[#0033FF] outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-800 mb-2">
                  {UI_TEXT.PASSWORD_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                </label>
                <input
                  type="password"
                  placeholder={UI_TEXT.PASSWORD_PLACEHOLDER}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-[#0033FF] focus:ring-1 focus:ring-[#0033FF] outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <button className="w-full bg-[#0070F3] text-white py-3.5 rounded-lg font-black text-base transition-transform hover:scale-[1.02] active:scale-[0.98]">
                {UI_TEXT.LOGIN}
              </button>
            </form>

            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-600">
              <p>
                {UI_TEXT.FORGOT_PASSWORD} -{' '}
                <span className="text-gray-900 font-bold border-b border-gray-900 cursor-pointer">
                  {UI_TEXT.FIND_BACK}
                </span>
              </p>
              <p>
                {UI_TEXT.NO_ACCOUNT} -{' '}
                <span className="text-gray-900 font-bold border-b border-gray-900 cursor-pointer">
                  {UI_TEXT.REGISTER}
                </span>
              </p>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-4 text-gray-400">{UI_TEXT.OR}</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-center font-black text-gray-900 text-lg mb-4">
                {UI_TEXT.LOGIN_SOCIAL}
              </h3>

              <button className="w-full bg-[#4867AA] text-white py-3 px-4 rounded-lg flex items-center gap-4 transition-opacity hover:opacity-90">
                <div className="flex items-center gap-4 w-full">
                  <Facebook size={20} fill="currentColor" />
                  <div className="w-[1px] h-6 bg-white/20"></div>
                  <span className="font-bold text-sm">{UI_TEXT.LOGIN_WITH_FB}</span>
                </div>
              </button>

              <button className="w-full bg-[#E54235] text-white py-3 px-4 rounded-lg flex items-center gap-4 transition-opacity hover:opacity-90">
                <div className="flex items-center gap-4 w-full">
                  <div className="font-black text-xl leading-none">G</div>
                  <div className="w-[1px] h-6 bg-white/20"></div>
                  <span className="font-bold text-sm">{UI_TEXT.LOGIN_WITH_GG}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
