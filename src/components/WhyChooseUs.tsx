import { UI_TEXT } from '../constants';

const WhyChooseUs = () => (
  <section className="py-12 md:py-16 bg-[#EDF2F7]">
    <div className="container-custom">
      <h2 className="text-2xl md:text-[22px] font-bold text-[#0033FF] mb-8 uppercase">
        {UI_TEXT.WHY_CHOOSE_US_TITLE}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {UI_TEXT.WHY_CHOOSE_US_DATA.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center">
              <img
                src={
                  [
                    'https://nhathuocminhchau.vn/storage/uploads/images/cs.svg',
                    'https://nhathuocminhchau.vn/storage/uploads/images/deliveryBoy.svg',
                    'https://nhathuocminhchau.vn/storage/uploads/images/pincodeServed.svg',
                    'https://nhathuocminhchau.vn/storage/uploads/images/locationMarker.svg',
                  ][idx]
                }
                alt={item.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/80?text=Icon';
                }}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
