import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Clock } from 'lucide-react';
import { FEATURES_DATA } from '../constants';

const icons = [
  <Truck className="text-[#0033FF]" size={32} />,
  <ShieldCheck className="text-[#0033FF]" size={32} />,
  <RotateCcw className="text-[#0033FF]" size={32} />,
  <Clock className="text-[#0033FF]" size={32} />,
];

const FeatureBar = () => (
  <section className="py-8 bg-white border-y border-gray-100">
    <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
      {FEATURES_DATA.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left"
        >
          <div className="bg-blue-50 p-3 rounded-full">{icons[idx]}</div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureBar;
