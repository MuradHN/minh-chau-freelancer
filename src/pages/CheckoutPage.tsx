import { useEffect, useState } from 'react';
import { Plus, Minus, Trash2, ChevronDown } from 'lucide-react';
import { Product } from '../types';
import { UI_TEXT } from '../constants';

interface CheckoutPageProps {
  cartItems: Product[];
}

interface WardData {
  name: string;
}

interface DistrictData {
  name: string;
  wards: WardData[];
}

interface ProvinceData {
  name: string;
  districts: DistrictData[];
}

const ADDRESS_DATA: ProvinceData[] = [
  {
    name: 'Thành phố Hồ Chí Minh',
    districts: [
      {
        name: 'Quận 1',
        wards: [
          { name: 'Phường Bến Nghé' },
          { name: 'Phường Bến Thành' },
          { name: 'Phường Cầu Kho' },
          { name: 'Phường Cô Giang' },
          { name: 'Phường Đa Kao' },
        ],
      },
      {
        name: 'Quận 3',
        wards: [
          { name: 'Phường 1' },
          { name: 'Phường 2' },
          { name: 'Phường 3' },
          { name: 'Phường 4' },
          { name: 'Phường Võ Thị Sáu' },
        ],
      },
      {
        name: 'Quận Gò Vấp',
        wards: [
          { name: 'Phường 1' },
          { name: 'Phường 3' },
          { name: 'Phường 5' },
          { name: 'Phường 7' },
          { name: 'Phường Hạnh Thông' },
        ],
      },
      {
        name: 'Thành phố Thủ Đức',
        wards: [
          { name: 'Phường An Khánh' },
          { name: 'Phường Bình Thọ' },
          { name: 'Phường Hiệp Bình Chánh' },
          { name: 'Phường Linh Trung' },
          { name: 'Phường Thảo Điền' },
        ],
      },
    ],
  },
  {
    name: 'Thành phố Hà Nội',
    districts: [
      {
        name: 'Quận Ba Đình',
        wards: [
          { name: 'Phường Cống Vị' },
          { name: 'Phường Điện Biên' },
          { name: 'Phường Đội Cấn' },
          { name: 'Phường Kim Mã' },
          { name: 'Phường Liễu Giai' },
        ],
      },
      {
        name: 'Quận Hoàn Kiếm',
        wards: [
          { name: 'Phường Chương Dương' },
          { name: 'Phường Cửa Đông' },
          { name: 'Phường Hàng Bạc' },
          { name: 'Phường Hàng Bông' },
          { name: 'Phường Tràng Tiền' },
        ],
      },
      {
        name: 'Quận Cầu Giấy',
        wards: [
          { name: 'Phường Dịch Vọng' },
          { name: 'Phường Dịch Vọng Hậu' },
          { name: 'Phường Mai Dịch' },
          { name: 'Phường Nghĩa Đô' },
          { name: 'Phường Yên Hòa' },
        ],
      },
    ],
  },
  {
    name: 'Thành phố Đà Nẵng',
    districts: [
      {
        name: 'Quận Hải Châu',
        wards: [
          { name: 'Phường Bình Hiên' },
          { name: 'Phường Hải Châu I' },
          { name: 'Phường Hải Châu II' },
          { name: 'Phường Hòa Cường Bắc' },
          { name: 'Phường Thạch Thang' },
        ],
      },
      {
        name: 'Quận Sơn Trà',
        wards: [
          { name: 'Phường An Hải Bắc' },
          { name: 'Phường An Hải Đông' },
          { name: 'Phường Mân Thái' },
          { name: 'Phường Nại Hiên Đông' },
          { name: 'Phường Phước Mỹ' },
        ],
      },
      {
        name: 'Quận Thanh Khê',
        wards: [
          { name: 'Phường An Khê' },
          { name: 'Phường Chính Gián' },
          { name: 'Phường Tam Thuận' },
          { name: 'Phường Tân Chính' },
          { name: 'Phường Vĩnh Trung' },
        ],
      },
    ],
  },
  {
    name: 'Tỉnh Bình Dương',
    districts: [
      {
        name: 'Thành phố Thủ Dầu Một',
        wards: [
          { name: 'Phường Chánh Nghĩa' },
          { name: 'Phường Hiệp Thành' },
          { name: 'Phường Phú Cường' },
          { name: 'Phường Phú Hòa' },
          { name: 'Phường Phú Lợi' },
        ],
      },
      {
        name: 'Thành phố Dĩ An',
        wards: [
          { name: 'Phường An Bình' },
          { name: 'Phường Bình An' },
          { name: 'Phường Dĩ An' },
          { name: 'Phường Đông Hòa' },
          { name: 'Phường Tân Đông Hiệp' },
        ],
      },
      {
        name: 'Thành phố Thuận An',
        wards: [
          { name: 'Phường An Phú' },
          { name: 'Phường Bình Chuẩn' },
          { name: 'Phường Lái Thiêu' },
          { name: 'Phường Thuận Giao' },
          { name: 'Phường Vĩnh Phú' },
        ],
      },
    ],
  },
  {
    name: 'Tỉnh Đồng Nai',
    districts: [
      {
        name: 'Thành phố Biên Hòa',
        wards: [
          { name: 'Phường An Bình' },
          { name: 'Phường Bửu Long' },
          { name: 'Phường Hố Nai' },
          { name: 'Phường Long Bình' },
          { name: 'Phường Tân Phong' },
        ],
      },
      {
        name: 'Huyện Long Thành',
        wards: [
          { name: 'Thị trấn Long Thành' },
          { name: 'Xã An Phước' },
          { name: 'Xã Long An' },
          { name: 'Xã Long Đức' },
          { name: 'Xã Phước Thái' },
        ],
      },
      {
        name: 'Huyện Trảng Bom',
        wards: [
          { name: 'Thị trấn Trảng Bom' },
          { name: 'Xã Bắc Sơn' },
          { name: 'Xã Hố Nai 3' },
          { name: 'Xã Sông Trầu' },
          { name: 'Xã Tây Hòa' },
        ],
      },
    ],
  },
  {
    name: 'Thành phố Cần Thơ',
    districts: [
      {
        name: 'Quận Ninh Kiều',
        wards: [
          { name: 'Phường An Cư' },
          { name: 'Phường An Hòa' },
          { name: 'Phường Cái Khế' },
          { name: 'Phường Tân An' },
          { name: 'Phường Xuân Khánh' },
        ],
      },
      {
        name: 'Quận Bình Thủy',
        wards: [
          { name: 'Phường An Thới' },
          { name: 'Phường Bình Thủy' },
          { name: 'Phường Bùi Hữu Nghĩa' },
          { name: 'Phường Long Hòa' },
          { name: 'Phường Trà An' },
        ],
      },
      {
        name: 'Quận Cái Răng',
        wards: [
          { name: 'Phường Ba Láng' },
          { name: 'Phường Hưng Phú' },
          { name: 'Phường Lê Bình' },
          { name: 'Phường Phú Thứ' },
          { name: 'Phường Thường Thạnh' },
        ],
      },
    ],
  },
  {
    name: 'Thành phố Hải Phòng',
    districts: [
      {
        name: 'Quận Hồng Bàng',
        wards: [
          { name: 'Phường Hạ Lý' },
          { name: 'Phường Hoàng Văn Thụ' },
          { name: 'Phường Minh Khai' },
          { name: 'Phường Quán Toan' },
          { name: 'Phường Sở Dầu' },
        ],
      },
      {
        name: 'Quận Lê Chân',
        wards: [
          { name: 'Phường An Biên' },
          { name: 'Phường Cát Dài' },
          { name: 'Phường Dư Hàng' },
          { name: 'Phường Kênh Dương' },
          { name: 'Phường Trại Cau' },
        ],
      },
      {
        name: 'Quận Ngô Quyền',
        wards: [
          { name: 'Phường Cầu Đất' },
          { name: 'Phường Đằng Giang' },
          { name: 'Phường Đông Khê' },
          { name: 'Phường Lạch Tray' },
          { name: 'Phường Máy Tơ' },
        ],
      },
    ],
  },
  {
    name: 'Tỉnh Khánh Hòa',
    districts: [
      {
        name: 'Thành phố Nha Trang',
        wards: [
          { name: 'Phường Lộc Thọ' },
          { name: 'Phường Phước Hải' },
          { name: 'Phường Phước Hòa' },
          { name: 'Phường Vạn Thạnh' },
          { name: 'Phường Vĩnh Hải' },
        ],
      },
      {
        name: 'Thành phố Cam Ranh',
        wards: [
          { name: 'Phường Ba Ngòi' },
          { name: 'Phường Cam Lộc' },
          { name: 'Phường Cam Nghĩa' },
          { name: 'Phường Cam Phú' },
          { name: 'Xã Cam Thành Nam' },
        ],
      },
    ],
  },
  {
    name: 'Tỉnh Lâm Đồng',
    districts: [
      {
        name: 'Thành phố Đà Lạt',
        wards: [
          { name: 'Phường 1' },
          { name: 'Phường 2' },
          { name: 'Phường 3' },
          { name: 'Phường 8' },
          { name: 'Phường 10' },
        ],
      },
      {
        name: 'Thành phố Bảo Lộc',
        wards: [
          { name: 'Phường 1' },
          { name: 'Phường 2' },
          { name: 'Phường B’Lao' },
          { name: 'Phường Lộc Phát' },
          { name: 'Xã Lộc Thanh' },
        ],
      },
    ],
  },
  {
    name: 'Tỉnh Long An',
    districts: [
      {
        name: 'Thành phố Tân An',
        wards: [
          { name: 'Phường 1' },
          { name: 'Phường 2' },
          { name: 'Phường 3' },
          { name: 'Phường 4' },
          { name: 'Phường 5' },
        ],
      },
      {
        name: 'Huyện Đức Hòa',
        wards: [
          { name: 'Thị trấn Đức Hòa' },
          { name: 'Xã Đức Hòa Đông' },
          { name: 'Xã Đức Hòa Hạ' },
          { name: 'Xã Hựu Thạnh' },
          { name: 'Xã Mỹ Hạnh Nam' },
        ],
      },
    ],
  },
];

const CheckoutPage = ({ cartItems }: CheckoutPageProps) => {
  const [items, setItems] = useState<Product[]>(cartItems);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'transfer'>('cod');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  const province = ADDRESS_DATA.find((item) => item.name === selectedProvince);
  const district = province?.districts.find((item) => item.name === selectedDistrict);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  const subtotal = items.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
    return acc + priceNum * (item.quantity || 1);
  }, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + ' ' + UI_TEXT.UNIT_PRICE;
  };

  return (
    <div className="bg-white min-h-screen pt-10 md:pt-12 pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-7 xl:gap-8 items-start">
          {/* LEFT: Shipping Info */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-1.5 mb-5">
              <h1 className="text-[24px] md:text-[26px] font-black text-gray-950 uppercase leading-none">
                {UI_TEXT.CHECKOUT_TITLE}
              </h1>
              <span className="text-gray-500 text-[13px] font-medium">
                ({items.length} Sản phẩm)
              </span>
            </div>

            <div className="space-y-4">
              {/* Họ tên */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-gray-900">
                  {UI_TEXT.FULL_NAME_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                </label>
                <input
                  type="text"
                  className="w-full h-9 md:h-10 border border-gray-300 rounded-full px-4 text-[14px] focus:border-primary outline-none transition-all placeholder:text-gray-500 bg-white"
                />
              </div>

              {/* Điện thoại & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-gray-900">
                    {UI_TEXT.PHONE_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                  </label>
                  <input
                    type="tel"
                    className="w-full h-9 md:h-10 border border-gray-300 rounded-full px-4 text-[14px] focus:border-primary outline-none transition-all placeholder:text-gray-500 bg-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-gray-900">
                    {UI_TEXT.EMAIL_LABEL}
                  </label>
                  <input
                    type="email"
                    className="w-full h-9 md:h-10 border border-gray-300 rounded-full px-4 text-[14px] focus:border-primary outline-none transition-all placeholder:text-gray-500 bg-white"
                  />
                </div>
              </div>

              {/* Địa chỉ */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-gray-900">
                  {UI_TEXT.ADDRESS_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                </label>
                <input
                  type="text"
                  className="w-full h-9 md:h-10 border border-gray-300 rounded-full px-4 text-[14px] focus:border-primary outline-none transition-all placeholder:text-gray-500 bg-white"
                  placeholder={UI_TEXT.ADDRESS_PLACEHOLDER}
                />
              </div>

              {/* Tỉnh / Quận / Phường */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-gray-900">
                    {UI_TEXT.PROVINCE_LABEL}{' '}
                    <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProvince}
                      onChange={(event) => {
                        setSelectedProvince(event.target.value);
                        setSelectedDistrict('');
                        setSelectedWard('');
                      }}
                      className="w-full h-10 border border-gray-300 rounded-full px-3 text-[14px] focus:border-[#0033FF] outline-none appearance-none transition-all bg-white font-medium text-gray-900"
                    >
                      <option value="">{UI_TEXT.PROVINCE_PLACEHOLDER}</option>
                      {ADDRESS_DATA.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-gray-900">
                    {UI_TEXT.DISTRICT_LABEL}{' '}
                    <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDistrict}
                      disabled={!province}
                      onChange={(event) => {
                        setSelectedDistrict(event.target.value);
                        setSelectedWard('');
                      }}
                      className="w-full h-10 border border-gray-300 rounded-full px-3 text-[14px] focus:border-[#0033FF] outline-none appearance-none transition-all bg-white font-medium text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    >
                      <option value="">{UI_TEXT.DISTRICT_PLACEHOLDER}</option>
                      {province?.districts.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[14px] font-medium text-gray-900">
                    {UI_TEXT.WARD_LABEL} <span className="text-red-500">{UI_TEXT.REQUIRED}</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedWard}
                      disabled={!district}
                      onChange={(event) => setSelectedWard(event.target.value)}
                      className="w-full h-10 border border-gray-300 rounded-full px-3 text-[14px] focus:border-[#0033FF] outline-none appearance-none transition-all bg-white font-medium text-gray-900 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    >
                      <option value="">{UI_TEXT.WARD_PLACEHOLDER}</option>
                      {district?.wards.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={14}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* Ghi chú */}
              <div className="space-y-1.5">
                <label className="text-[14px] font-medium text-gray-900">
                  {UI_TEXT.NOTE_LABEL}
                </label>
                <textarea
                  rows={4}
                  className="w-full min-h-[96px] border border-gray-300 rounded-[20px] px-4 py-3 text-[14px] focus:border-primary outline-none transition-all placeholder:text-gray-500 resize-none font-medium bg-white"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Order Summary */}
          <div className="w-full lg:w-[480px] xl:w-[500px]">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-32">
              <div className="p-3">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[16px] font-black text-primary uppercase tracking-wide">
                    {UI_TEXT.ORDER_SUMMARY}
                  </h2>
                  <span className="text-[12px] font-medium text-primary whitespace-nowrap uppercase">
                    ({items.length} {UI_TEXT.PRODUCTS_LABEL_UPPER})
                  </span>
                </div>

                <div className="space-y-5 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="border-l-2 border-primary pl-3 border-b border-dashed border-gray-200 pb-3 last:border-b last:pb-3"
                    >
                      <div className="flex gap-3 mb-4 relative">
                        <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center">
                          <img src={item.image} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 pr-9">
                          <h4 className="text-[15px] font-black text-gray-950 leading-snug mb-2 line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-[12px] text-gray-600">
                            {UI_TEXT.TOTAL_AMOUNT} {UI_TEXT.PRODUCT_UNIT}:{' '}
                            <span className="text-red-500 italic font-medium">{item.price}</span>
                          </p>
                        </div>
                        <button className="absolute top-0 right-0 text-gray-200 hover:text-red-500 transition-colors">
                          <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white">
                            <Trash2 size={14} className="stroke-[1.5]" />
                          </div>
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[15px] font-medium text-gray-950">
                          {item.price.replace(/\s/g, '')}
                        </span>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden h-9 bg-white">
                            <button className="w-9 h-full flex items-center justify-center text-gray-900 hover:bg-gray-50 border-r border-gray-200">
                              <Minus size={13} />
                            </button>
                            <input
                              type="text"
                              value={item.quantity || 1}
                              className="w-[44px] text-center text-[14px] font-medium text-gray-900 outline-none"
                              readOnly
                            />
                            <button className="w-9 h-full flex items-center justify-center text-gray-900 hover:bg-gray-50 border-l border-gray-200">
                              <Plus size={13} />
                            </button>
                          </div>
                          <button className="bg-primary text-white px-4 py-2 rounded-full text-[13px] font-bold hover:bg-primary-dark transition-colors">
                            {UI_TEXT.UPDATE}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-md overflow-hidden mb-6">
                  <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300">
                    <span className="text-[15px] font-medium text-gray-900">
                      {UI_TEXT.SUBTOTAL}
                    </span>
                    <span className="text-[15px] font-black text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center px-4 py-3">
                    <span className="text-[15px] font-medium text-gray-900">
                      {UI_TEXT.GRAND_TOTAL}
                    </span>
                    <span className="text-red-600 font-black text-[22px]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mt-6">
                  <h3 className="text-[15px] font-black text-gray-900 mb-4 uppercase">
                    {UI_TEXT.PAYMENT_METHOD_TITLE}
                  </h3>
                  <div className="space-y-3">
                    <label
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-200'}`}
                      >
                        {paymentMethod === 'cod' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <span
                        className={`text-[14px] font-black ${paymentMethod === 'cod' ? 'text-gray-900' : 'text-gray-700'}`}
                      >
                        {UI_TEXT.COD_LABEL}
                      </span>
                    </label>
                    <label
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={() => setPaymentMethod('transfer')}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'transfer' ? 'border-primary' : 'border-gray-200'}`}
                      >
                        {paymentMethod === 'transfer' && (
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </div>
                      <span
                        className={`text-[14px] font-black ${paymentMethod === 'transfer' ? 'text-gray-900' : 'text-gray-700'}`}
                      >
                        {UI_TEXT.TRANSFER_LABEL}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Place order button */}
                <button className="w-full bg-accent text-white py-3.5 rounded-3xl font-black text-[16px] hover:bg-accent-dark transition-all shadow-xl shadow-red-100 uppercase mt-7 tracking-widest active:scale-[0.98]">
                  {UI_TEXT.CHECKOUT_TITLE}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
