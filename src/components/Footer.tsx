import React from 'react';
import { UI_TEXT } from '../constants';

const Footer = () => (
  <footer className="bg-white pt-12">
    <div className="container-custom border-t border-gray-100 pt-12 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Tài khoản */}
        <div>
          <h4 className="text-base font-bold text-gray-800 mb-6 uppercase">{UI_TEXT.ACCOUNT}</h4>
          <ul className="space-y-3 text-[13px] text-gray-600">
            <li className="hover:text-[#0033FF] cursor-pointer">{UI_TEXT.LOGIN}</li>
            <li className="hover:text-[#0033FF] cursor-pointer">{UI_TEXT.REGISTER}</li>
            <li className="hover:text-[#0033FF] cursor-pointer">{UI_TEXT.SITEMAP}</li>
          </ul>
        </div>

        {/* Chính sách chung */}
        <div>
          <h4 className="text-base font-bold text-gray-800 mb-6 uppercase">{UI_TEXT.POLICIES}</h4>
          <ul className="space-y-3 text-[13px] text-gray-600">
            <li className="hover:text-[#0033FF] cursor-pointer flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span> {UI_TEXT.POLICY_RETURN}
            </li>
            <li className="hover:text-[#0033FF] cursor-pointer flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span> {UI_TEXT.POLICY_DELIVERY}
            </li>
            <li className="hover:text-[#0033FF] cursor-pointer flex items-center gap-2">
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span> {UI_TEXT.POLICY_PRIVACY}
            </li>
          </ul>
        </div>

        {/* Minh Châu Pharma Info */}
        <div>
          <h4 className="text-base font-bold text-gray-800 mb-6 uppercase">{UI_TEXT.BRAND_NAME}</h4>
          <div className="space-y-2 text-[13px] text-gray-600">
            <p className="font-bold">341 Nguyễn Văn Công, Phường Hạnh Thông, TPHCM</p>
            <p>
              <span className="font-bold">{UI_TEXT.CSKH_LABEL}</span> {UI_TEXT.HOTLINE}
            </p>
            <p>
              <span className="font-bold">{UI_TEXT.EMAIL_LABEL}</span> cskh@longchaupharma.com
            </p>
            <p>
              <span className="font-bold">{UI_TEXT.WEBSITE_LABEL}</span> www.longchaupharma.com
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#EEEEEE] py-4">
      <div className="container-custom text-center">
        <p className="text-[12px] text-gray-600">{UI_TEXT.COPYRIGHT}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
