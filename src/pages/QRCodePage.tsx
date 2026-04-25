import { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';
import { Camera, Download, Home, Printer, ScanLine } from 'lucide-react';
import { bestSellers, UI_TEXT } from '../constants';

const QR_BADGE =
  'data:image/svg+xml;charset=UTF-8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">
      <rect width="96" height="96" rx="24" fill="#008f8c"/>
      <path d="M18 68V28h12.5l10.8 23.9L52.1 28H65v40H54.2V45.2L44.7 68h-6.8l-9.4-22.8V68H18Z" fill="#fff"/>
      <path d="M78.5 64.7c-3.9 3-8.8 4.3-14.3 4.3-12.1 0-20.8-8.7-20.8-20.6 0-12.1 8.9-20.4 20.8-20.4 5.7 0 10.3 1.6 14 4.7l-6.3 7.9c-2-1.7-4.5-2.7-7.4-2.7-6.1 0-10.2 4.5-10.2 10.7 0 6.4 4.2 10.7 10.4 10.7 3.2 0 5.6-1 7.7-2.8l6.1 8.2Z" fill="#fff"/>
    </svg>
  `);

const QR_SIZE = 238;
const PRODUCT_BASE_URL = 'https://minh-chau-demo.vercel.app';

const QRCodePage = () => {
  useEffect(() => {
    document.title = `${UI_TEXT.QR_CODES_TITLE} | ${UI_TEXT.BRAND_NAME}`;
    return () => {
      document.title = UI_TEXT.BRAND_NAME;
    };
  }, []);

  const qrCodes = bestSellers
    .filter((product) => product.id === 'ma01' || product.id === 'ma02')
    .map((product, index) => ({
      id: index + 1,
      category: product.category,
      productName: product.name,
      productId: product.id,
      url: `${PRODUCT_BASE_URL}/${product.category}/${product.id}`,
    }));

  const downloadQRCode = (productId: string) => {
    const svg = document.getElementById(`qr-${productId}`);
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    canvas.width = 1024;
    canvas.height = 1024;

    img.onload = () => {
      if (!ctx) return;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 96, 96, 832, 832);

      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `QR-Code-Product-${productId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="min-h-screen bg-[#f0fbfa]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-[#008f8c] mb-2">{UI_TEXT.QR_CODES_TITLE}</h1>
              <p className="text-gray-600 text-sm">{UI_TEXT.QR_CODES_SUBTITLE}</p>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-[#008f8c] text-white rounded-lg font-bold hover:bg-[#006f6c] transition-all shadow-lg"
            >
              <Home size={20} />
              <span className="hidden md:inline">Trang chủ</span>
            </Link>
          </div>
        </div>
      </div>

      {/* QR Codes Grid */}
      <div className="container-custom print-area py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qrCodes.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[8px] border border-[#bfe8e6] bg-white shadow-[0_14px_35px_rgba(0,143,140,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,143,140,0.16)]"
            >
              {/* Card Header */}
              <div className="bg-[#008f8c] p-6 text-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-black">
                    {UI_TEXT.QR_PRODUCT_LABEL} #{item.productId}
                  </h3>
                  <span className="bg-white text-[#008f8c] px-3 py-1 rounded-full text-xs font-black">
                    QR {item.id}
                  </span>
                </div>
                <p className="text-sm text-teal-50 line-clamp-2">{item.productName}</p>
              </div>

              {/* QR Code Display */}
              <div className="p-7 flex flex-col items-center">
                <div className="mb-6 w-full rounded-[8px] bg-[#e6f7f6] p-4">
                  <div className="relative mx-auto flex aspect-square w-full max-w-[292px] items-center justify-center rounded-[8px] bg-white p-5 shadow-[inset_0_0_0_1px_#d7e5f7,0_10px_28px_rgba(0,143,140,0.12)]">
                    <span className="absolute left-4 top-4 h-7 w-7 border-l-[4px] border-t-[4px] border-[#008f8c]" />
                    <span className="absolute right-4 top-4 h-7 w-7 border-r-[4px] border-t-[4px] border-[#008f8c]" />
                    <span className="absolute bottom-4 left-4 h-7 w-7 border-b-[4px] border-l-[4px] border-[#008f8c]" />
                    <span className="absolute bottom-4 right-4 h-7 w-7 border-b-[4px] border-r-[4px] border-[#008f8c]" />
                    <QRCodeSVG
                      id={`qr-${item.productId}`}
                      value={item.url}
                      size={QR_SIZE}
                      level="H"
                      includeMargin={false}
                      fgColor="#005f5d"
                      bgColor="#ffffff"
                      imageSettings={{
                        src: QR_BADGE,
                        x: undefined,
                        y: undefined,
                        height: 48,
                        width: 48,
                        excavate: true,
                      }}
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#008f8c]">
                    <ScanLine size={16} />
                    Quét để xem chi tiết sản phẩm
                  </div>
                </div>

                {/* URL Display */}
                <div className="w-full mb-6">
                  <p className="text-xs text-gray-500 mb-2 font-semibold">{UI_TEXT.URL_LABEL}</p>
                  <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-xs text-gray-700 break-all font-mono">{item.url}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 w-full">
                  <Link
                    to={`/${item.category}/${item.productId}`}
                    className="flex-1 bg-teal-50 text-[#008f8c] py-3 rounded-lg font-bold text-sm hover:bg-teal-100 transition-all text-center"
                  >
                    {UI_TEXT.QR_VIEW_PRODUCT}
                  </Link>
                  <button
                    onClick={() => downloadQRCode(item.productId)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-[#008f8c] text-white rounded-lg font-bold text-sm hover:bg-[#006f6c] transition-all shadow-lg"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">{UI_TEXT.QR_DOWNLOAD}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-16 rounded-[8px] border border-[#bfe8e6] bg-white p-8 shadow-[0_14px_35px_rgba(0,143,140,0.08)]">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <Camera className="text-[#008f8c]" size={30} />
            {UI_TEXT.QR_GUIDE_TITLE}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#008f8c] text-white rounded-full flex items-center justify-center font-black">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{UI_TEXT.QR_GUIDE_STEP1_TITLE}</h3>
                <p className="text-sm text-gray-600">{UI_TEXT.QR_GUIDE_STEP1_DESC}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#008f8c] text-white rounded-full flex items-center justify-center font-black">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{UI_TEXT.QR_GUIDE_STEP2_TITLE}</h3>
                <p className="text-sm text-gray-600">{UI_TEXT.QR_GUIDE_STEP2_DESC}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-[#008f8c] text-white rounded-full flex items-center justify-center font-black">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{UI_TEXT.QR_GUIDE_STEP3_TITLE}</h3>
                <p className="text-sm text-gray-600">{UI_TEXT.QR_GUIDE_STEP3_DESC}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Print Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-[#008f8c] text-white rounded-lg font-black text-lg hover:bg-[#006f6c] hover:shadow-2xl transition-all flex items-center gap-3"
          >
            <Printer size={24} />
            {UI_TEXT.QR_PRINT_ALL}
          </button>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-area, .print-area * {
            visibility: visible;
          }
          .print-area {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default QRCodePage;
