import { Category, Product, Brand, NewsItem } from './types';

export const categories: Category[] = [
  {
    id: 1,
    title: 'Sữa rửa mặt',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/sua-rua-mat-778-1-typeicon.webp',
    slug: 'sua-rua-mat',
  },
  {
    id: 2,
    title: 'Multivitamin',
    image:
      'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/daily-multivitamin-65-typeicon.webp',
    slug: 'multivitamin',
  },
  {
    id: 3,
    title: 'Bổ não',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/bo-nao-4-typeicon.webp',
    slug: 'bo-nao',
  },
  {
    id: 4,
    title: 'Bổ gan',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/thuoc-bo-gan-91-typeicon.webp',
    slug: 'bo-gan',
  },
  {
    id: 5,
    title: 'Hỗ trợ giảm cân',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/thuoc-giam-can-70-typeicon.webp',
    slug: 'ho-tro-giam-can',
  },
  {
    id: 6,
    title: 'Bổ xương khớp, gout',
    image:
      'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/thuoc-xuong-khop-45-typeicon.webp',
    slug: 'bo-xuong-khop-gout',
  },
  {
    id: 7,
    title: 'Tim mạch, huyết áp',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/thuoc-bo-tim-2-typeicon.webp',
    slug: 'tim-mach-huyet-ap',
  },
  {
    id: 8,
    title: 'Thiết bị y tế',
    image: 'https://cdn.famitaa.net/storage/uploads/danhmuc/thumb/thiet-bi-y-te-34-typeicon.webp',
    slug: 'thiet-bi-y-te',
  },
];

export const bestSellers: Product[] = [
  {
    id: '21479',
    category: 'thuc-pham-chuc-nang',
    name: 'Buonavit D3 Forte Buona 12ml - Bổ sung Vitamin D cho trẻ',
    price: '254.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/buonavit-d3-forte-buona-12ml-bo-sung-vitamin-d-cho-tre-0.webp',
  },
  {
    id: '21480',
    category: 'thuc-pham-chuc-nang',
    name: 'Energia Oro Buona 10 lọ x 10ml – Hỗ trợ biếng ăn cho trẻ',
    price: '318.600 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/energia-oro-buona-10-lo-x-10ml-ho-tro-bieng-an-cho-tre-0.webp',
  },
  {
    id: '21481',
    category: 'thuc-pham-chuc-nang',
    name: 'Buonavit Baby Buona 20ml - Bổ sung Vitamin cho bé',
    price: '243.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/energia-oro-buona-10-lo-x-10ml-ho-tro-bieng-an-cho-tre-0.webp',
  },
  {
    id: '21483',
    category: 'thuc-pham-chuc-nang',
    name: 'Ferrodue Buona 15ml - Bổ sung sắt cho trẻ',
    price: '232.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ferrodue-buona-15ml-bo-sung-sat-cho-tre-0.webp',
  },
  {
    id: '21484',
    category: 'thuc-pham-chuc-nang',
    name: 'Zincodue Buona 30ml - Bổ sung kẽm cho trẻ',
    price: '286.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zincodue-buona-30ml-bo-sung-kem-cho-tre-0.webp',
  },
  {
    id: '21487',
    category: 'thuc-pham-chuc-nang',
    name: 'Circadiem Buona 20ml - Hỗ trợ giúp ngủ ngon',
    price: '270.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/circadiem-buona-20ml-ho-tro-giup-ngu-ngon-0.webp',
  },
  {
    id: '21488',
    category: 'thuc-pham-chuc-nang',
    name: 'Simbiosistem Buona 10ml - Bổ sung lợi khuẩn cho trẻ',
    price: '325.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/simbiosistem-buona-10ml-bo-sung-loi-khuan-cho-tre-0.webp',
  },
  {
    id: '21489',
    category: 'thuc-pham-chuc-nang',
    name: 'Simbiosistem Buona 20 gói x 2g - Hỗ trợ rối loạn tiêu hóa',
    price: '325.000 đ',
    subPrice: '16,250 đ/Gói',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/simbiosistem-buona-20-goi-x-2g-ho-tro-roi-loan-tieu-hoa-0.webp',
  },
  {
    id: '21599',
    category: 'thuoc',
    name: 'Odistad 60 Stellapharm 2 vỉ x 21 viên',
    price: 'Liên hệ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/odistad-60-stellapharm-2-vi-x-21-vien-0.webp',
    hasPrescription: true,
  },
  {
    id: '21601',
    category: 'thuoc',
    name: 'Corbiere Calcium Plus Sanofi 30 ống x 10ml - Bổ sung calci, vitamin D3 cho cơ thể',
    price: 'Liên hệ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/corbiere-calcium-plus-sanofi-30-ong-x-10ml-bo-sung-calci-vitamin-d3-cho-co-the-0.webp',
  },
];

export const newArrivals: Product[] = [
  {
    id: '21056',
    category: 'thuc-pham-chuc-nang',
    name: 'Viên uống SpringLeaf Glucosamine 1500 Plus Chondroitin 90 viên',
    price: '890.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/vien-uong-springleaf-glucosamine-1500-plus-chondroitin-90-vien-0.webp',
  },
  {
    id: '21338',
    category: 'thiet-bi-y-te',
    name: 'Blood Glucose TS3300 Max MediUSA 50 cái - Que thử đường huyết',
    price: '298.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/blood-glucose-ts3300-max-mediusa-50-cai-que-thu-duong-huyet-0.webp',
  },
  {
    id: '21340',
    category: 'thiet-bi-y-te',
    name: 'Blood Glucose MM3300 MediUSA 25 cái - Kim lấy máu',
    price: '30.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/blood-glucose-mm3300-mediusa-25-cai-kim-lay-mau-0.webp',
  },
  {
    id: '21391',
    category: 'thuc-pham-chuc-nang',
    name: 'Glucosamine Chondroitin MSM Calcium MediUSA 30 viên - Hỗ trợ giảm thoái hóa khớp',
    price: '259.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/glucosamine-chondroitin-msm-calcium-mediusa-30-vien-ho-tro-giam-thoai-hoa-khop-0.webp',
  },
  {
    id: '21586',
    category: 'thuc-pham-chuc-nang',
    name: 'Super Glucoisamin Goodlife CT 60 viên - Hỗ trợ giảm đau xương khớp',
    price: '295.000 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/super-glucoisamin-goodlife-ct-60-vien-ho-tro-giam-dau-xuong-khop-0.webp',
  },
  {
    id: '21874',
    category: 'thuoc',
    name: 'Mebecar Chewtab Boston Pharma 1 vỉ x 1 viên',
    price: 'Liên hệ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mebecar-chewtab-boston-pharma-1-vi-x-1-vien-2.webp',
    hasPrescription: true,
  },
  {
    id: '21876',
    category: 'thuoc',
    name: 'Mitizen 400 Hasan 1 vỉ x 1 viên',
    price: 'Liên hệ',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/mitizen-400-hasan-1-vi-x-1-vien-0.webp',
    hasPrescription: true,
  },
  {
    id: '21877',
    category: 'thuoc',
    name: 'Abiraheet 250mg Heet Health Care lọ 120 viên',
    price: 'Liên hệ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/abiraheet-250mg-heet-health-care-lo-120-vien-0.webp',
    hasPrescription: true,
  },
  {
    id: '21878',
    category: 'thiet-bi-y-te',
    name: 'MD H2O 500ml - Nước uống tăng năng lượng',
    price: '0 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/md-h2o-500ml-nuoc-uong-tang-nang-luong-0.webp',
  },
  {
    id: '21879',
    category: 'thiet-bi-y-te',
    name: 'Glow Ultra Purified Water MD H2O 100ml - Nước siêu tinh khiết',
    price: '0 đ',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/glow-ultra-purified-water-md-h2o-100ml-nuoc-sieu-tinh-khiet-0.webp',
  },
];

export interface ProductContentSection {
  title: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
}

export interface ProductDetailData {
  breadcrumbs: string[];
  infoRows: {
    label: string;
    value: string;
  }[];
  contentSections: ProductContentSection[];
  relatedSameBrandIds: string[];
  alternativeProductNames?: string[];
  sameActiveIngredientIds?: string[];
  sameCategoryIds?: string[];
  sameBrandIds?: string[];
  brandName?: string;
}

const buonaRelatedIds = ['21479', '21480', '21481', '21483', '21484', '21487', '21488', '21489'];
const chiaNewArrivalIds = ['196', '197', '198', '199', '200'];
const beautyNewArrivalIds = ['211', '305', '309', '318', '375', '376', '377', '378', '379'];
const hairNewArrivalIds = ['213', '383'];
const supplementNewArrivalIds = ['264', '333', '358'];
const medicalNewArrivalIds = ['382-260'];

interface NewArrivalDetailConfig {
  id: string;
  breadcrumbs: string[];
  infoRows: ProductDetailData['infoRows'];
  benefits: string[];
  ingredients: string[];
  targets: string[];
  usage: string[];
  storage?: string[];
  relatedIds: string[];
  brandName: string;
}

const createNewArrivalDetail = ({
  id,
  breadcrumbs,
  infoRows,
  benefits,
  ingredients,
  targets,
  usage,
  storage = [
    'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
    'Để xa tầm tay trẻ em.',
  ],
  relatedIds,
  brandName,
}: NewArrivalDetailConfig): ProductDetailData => {
  const product = newArrivals.find((item) => item.id === id);
  const name = product?.name || id;

  return {
    breadcrumbs,
    infoRows,
    contentSections: [
      {
        title: `Công dụng của ${name}`,
        bullets: benefits,
      },
      {
        title: 'Thành phần',
        bullets: ingredients,
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: targets,
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: usage,
      },
      {
        title: 'Bảo quản',
        bullets: storage,
      },
    ],
    relatedSameBrandIds: relatedIds.filter((item) => item !== id),
    sameCategoryIds: relatedIds.filter((item) => item !== id).slice(0, 4),
    sameBrandIds: relatedIds.filter((item) => item !== id).slice(0, 4),
    brandName,
  };
};

export const PRODUCT_DETAIL_DATA: Record<string, ProductDetailData> = {
  '21479': {
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Vitamin theo tuổi', 'Vitamin D'],
    infoRows: [
      { label: 'Quy cách đóng gói:', value: '12ml' },
      { label: 'Thương hiệu:', value: 'Buona' },
      { label: 'Xuất xứ:', value: 'Italia' },
      { label: 'Dạng bào chế:', value: 'Siro' },
      { label: 'Nhà sản xuất:', value: 'Inpharma Spa' },
    ],
    contentSections: [
      {
        title: 'Công dụng của Buonavit D3 Forte Buona 12ml - Bổ sung Vitamin D cho trẻ',
        bullets: [
          'Bổ sung vitamin D, Vitamin E, Nervonic acid, DHA cho trẻ trong độ tuổi phát triển.',
          'Hỗ trợ xương, răng chắc khỏe.',
        ],
      },
      {
        title: 'Thành phần',
        intro: 'Hàm lượng trong 4 giọt (tương ứng 0,18ml):',
        bullets: [
          'Vitamin D (Cholecalciferol): 20mcg (tương ứng 800 IU).',
          'Hỗn hợp chất béo trung tính giàu beta palmitate (Betapol 45, triglyceride chuỗi trung bình): 50mg.',
          'DHA có nguồn gốc từ vi tảo Schizochytrium sp.: 25mg.',
          'Vitamin E (DL-alpha-tocopherryl acetate): 6mg.',
          'Nervonic acid: 5mg.',
        ],
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: ['Trẻ trong độ tuổi phát triển.', 'Trẻ chậm lớn, còi xương do thiếu Vitamin D.'],
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: [
          'Trẻ sơ sinh, trẻ nhỏ và thanh thiếu niên: Uống 4 giọt mỗi ngày một lần.',
          'Hoặc dùng theo chỉ định của bác sĩ.',
        ],
        paragraphs: [
          'Lưu ý: Sản phẩm không chứa Gluten, Lactose. Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.',
        ],
      },
      {
        title: 'Bảo quản',
        bullets: ['Nơi khô ráo, thoáng mát tránh ánh nắng trực tiếp.', 'Để xa tầm tay trẻ em.'],
      },
    ],
    relatedSameBrandIds: buonaRelatedIds.filter((id) => id !== '21479'),
    sameCategoryIds: ['21480', '21481', '21483', '21484'],
    sameBrandIds: buonaRelatedIds.filter((id) => id !== '21479'),
    brandName: 'Buona',
  },
  '21480': {
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Sức khỏe trẻ em', 'Hỗ trợ biếng ăn'],
    infoRows: [
      { label: 'Quy cách đóng gói:', value: '10 lọ' },
      { label: 'Thương hiệu:', value: 'Buona' },
      { label: 'Xuất xứ:', value: 'Italia' },
      { label: 'Dạng bào chế:', value: 'Siro' },
      { label: 'Nhà sản xuất:', value: 'Inpharma Spa' },
    ],
    contentSections: [
      {
        title: 'Công dụng của Energia Oro Buona 10 lọ x 10ml – Hỗ trợ biếng ăn cho trẻ',
        bullets: [
          'Giúp cải thiện chứng biếng ăn, tạo cảm giác thèm ăn.',
          'Giúp tăng cường quá trình trao đổi chất, tăng cường sức đề kháng.',
          'Giúp củng cố, phục hồi sức khỏe cho trẻ đang ốm, sau khi ốm dậy.',
        ],
      },
      {
        title: 'Thành phần',
        bullets: [
          'Sữa ong chúa (1,3% 10-HDA): 600mg.',
          'Chiết xuất cao khô tầm xuân: 80mg.',
          'Chiết xuất cao việt quất (5% anthocyanin): 50mg.',
          'Vitamin B2: 1,4mg.',
          'Vitamin B6: 1,4mg.',
          'Vitamin B1: 1,1mg.',
        ],
        paragraphs: [
          'Nước, maltodextrin, mật ong, fructose, acid citric, hương thực phẩm, kali sorbat vừa đủ 10ml.',
        ],
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: [
          'Trẻ ốm yếu, suy dinh dưỡng, biếng ăn, chậm lớn, thể chất suy nhược.',
          'Trẻ sức đề kháng kém mắc các bệnh đường hô hấp, tiêu hóa.',
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: [
          'Lắc đều trước khi sử dụng.',
          'Trẻ em mỗi ngày 10ml hoặc sử dụng theo sự hướng dẫn của thầy thuốc hoặc chuyên gia dinh dưỡng.',
        ],
        paragraphs: [
          'Lưu ý: Sản phẩm không chứa Gluten và Lactose tốt cho trẻ không dung nạp Gluten và Lactose.',
        ],
      },
      {
        title: 'Bảo quản',
        bullets: ['Nơi khô ráo, thoáng mát tránh ánh nắng trực tiếp.', 'Để xa tầm tay trẻ em.'],
      },
    ],
    relatedSameBrandIds: buonaRelatedIds.filter((id) => id !== '21480'),
    sameCategoryIds: ['21479', '21481', '21483', '21484'],
    sameBrandIds: buonaRelatedIds.filter((id) => id !== '21480'),
    brandName: 'Buona',
  },
  '21481': {
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Vitamin theo tuổi', 'Vitamin tổng hợp'],
    infoRows: [
      { label: 'Quy cách đóng gói:', value: '20ml' },
      { label: 'Thương hiệu:', value: 'Buona' },
      { label: 'Xuất xứ:', value: 'Italia' },
      { label: 'Dạng bào chế:', value: 'Siro nhỏ giọt' },
      { label: 'Nhà sản xuất:', value: 'Inpharma Spa' },
    ],
    contentSections: [
      {
        title: 'Công dụng của Buonavit Baby Buona 20ml - Bổ sung Vitamin cho bé',
        bullets: [
          'Bổ sung vitamin cho trẻ nhỏ.',
          'Hỗ trợ trẻ phát triển khỏe mạnh trong giai đoạn tăng trưởng.',
        ],
      },
      {
        title: 'Thành phần',
        bullets: [
          'Vitamin nhóm B, vitamin D, vitamin E và các dưỡng chất hỗ trợ phát triển cho trẻ.',
        ],
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: [
          'Trẻ có nhu cầu bổ sung vitamin.',
          'Trẻ ăn uống kém hoặc trong giai đoạn phục hồi sức khỏe.',
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: [
          'Dùng theo liều khuyến nghị trên bao bì hoặc theo hướng dẫn của chuyên gia y tế.',
        ],
      },
      {
        title: 'Bảo quản',
        bullets: ['Nơi khô ráo, thoáng mát tránh ánh nắng trực tiếp.', 'Để xa tầm tay trẻ em.'],
      },
    ],
    relatedSameBrandIds: buonaRelatedIds.filter((id) => id !== '21481'),
    sameCategoryIds: ['21479', '21480', '21483', '21484'],
    sameBrandIds: buonaRelatedIds.filter((id) => id !== '21481'),
    brandName: 'Buona',
  },
  '21483': {
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Khoáng chất', 'Sắt'],
    infoRows: [
      { label: 'Quy cách đóng gói:', value: '15ml' },
      { label: 'Thương hiệu:', value: 'Buona' },
      { label: 'Xuất xứ:', value: 'Italia' },
      { label: 'Dạng bào chế:', value: 'Siro' },
      { label: 'Nhà sản xuất:', value: 'Inpharma Spa' },
    ],
    contentSections: [
      {
        title: 'Công dụng của Ferrodue Buona 15ml - Bổ sung sắt cho trẻ',
        bullets: [
          'Bổ sung sắt cho cơ thể.',
          'Hỗ trợ tạo hồng cầu giúp giảm nguy cơ thiếu máu do thiếu sắt.',
        ],
      },
      {
        title: 'Thành phần',
        bullets: ['Sắt (sắt bisglycinate): 10mg.'],
        paragraphs: ['Phụ liệu: Fructose, nước tinh khiết, chất điều chỉnh độ pH, hương dâu.'],
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: [
          'Trẻ bị thiếu máu do thiếu sắt.',
          'Trẻ có nhu cầu bổ sung do chế độ ăn thiếu sắt hoặc cơ thể tăng nhu cầu về sắt.',
        ],
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: [
          'Trẻ sinh non: 2 giọt/kg thể trọng mỗi ngày.',
          'Trẻ sơ sinh từ 0 đến 12 tháng: 1 giọt/kg thể trọng mỗi ngày.',
          'Trẻ em trên 1 tuổi và độ tuổi đi học: 10 giọt mỗi ngày.',
        ],
      },
      {
        title: 'Bảo quản',
        bullets: ['Nơi khô ráo, thoáng mát tránh ánh nắng trực tiếp.', 'Để xa tầm tay trẻ em.'],
      },
    ],
    relatedSameBrandIds: buonaRelatedIds.filter((id) => id !== '21483'),
    sameCategoryIds: ['21479', '21480', '21481', '21484'],
    sameBrandIds: buonaRelatedIds.filter((id) => id !== '21483'),
    brandName: 'Buona',
  },
  '21599': {
    breadcrumbs: ['Danh mục', 'Thuốc', 'Thuốc kê đơn'],
    infoRows: [
      { label: 'Quy cách đóng gói:', value: '2 vỉ x 21 viên' },
      { label: 'Thương hiệu:', value: 'Stellapharm' },
      { label: 'Xuất xứ:', value: 'Việt Nam' },
      { label: 'Dạng bào chế:', value: 'Viên nén' },
      { label: 'Nhà sản xuất:', value: 'Stellapharm' },
    ],
    contentSections: [
      {
        title: 'Công dụng của Odistad 60 Stellapharm 2 vỉ x 21 viên',
        bullets: [
          'Sản phẩm thuốc kê đơn, sử dụng theo chỉ định của bác sĩ hoặc dược sĩ chuyên môn.',
        ],
      },
      {
        title: 'Thành phần',
        bullets: ['Thông tin thành phần cần tham khảo theo tờ hướng dẫn sử dụng đi kèm sản phẩm.'],
      },
      {
        title: 'Đối tượng sử dụng',
        bullets: ['Người bệnh được bác sĩ chỉ định sử dụng thuốc.'],
      },
      {
        title: 'Hướng dẫn sử dụng',
        bullets: [
          'Dùng đúng liều lượng và thời gian theo đơn thuốc. Không tự ý thay đổi liều dùng.',
        ],
      },
      {
        title: 'Bảo quản',
        bullets: ['Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp.', 'Để xa tầm tay trẻ em.'],
      },
    ],
    relatedSameBrandIds: ['21601'],
    sameCategoryIds: ['21601'],
    sameBrandIds: ['21601'],
    brandName: 'Stellapharm',
  },
  ...Object.fromEntries(
    [
      {
        id: '196',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Hạt dinh dưỡng', 'Hạt chia'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Nutiva' },
          { label: 'Xuất xứ:', value: 'USA' },
          { label: 'Dạng bào chế:', value: 'Hạt dinh dưỡng' },
        ],
        benefits: [
          'Bổ sung chất xơ, omega 3 thực vật, vitamin và khoáng chất cho cơ thể.',
          'Hỗ trợ chế độ ăn lành mạnh và kiểm soát khẩu phần dinh dưỡng hằng ngày.',
        ],
        ingredients: [
          'Hạt chia Nutiva USA.',
          'Chứa chất xơ, acid béo omega 3, protein thực vật và khoáng chất tự nhiên.',
        ],
        targets: [
          'Người cần bổ sung chất xơ và dinh dưỡng từ thực vật.',
          'Người ăn kiêng, ăn chay hoặc cần thêm nguồn omega 3 thực vật.',
        ],
        usage: [
          'Dùng trực tiếp cùng nước, sữa, sinh tố, yogurt hoặc trộn với món ăn.',
          'Dùng lượng phù hợp theo nhu cầu dinh dưỡng hằng ngày.',
        ],
        relatedIds: chiaNewArrivalIds,
        brandName: 'Nutiva',
      },
      {
        id: '197',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Hạt dinh dưỡng', 'Hạt chia'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Organic Chia Seeds' },
          { label: 'Xuất xứ:', value: 'Đang cập nhật' },
          { label: 'Dạng bào chế:', value: 'Hạt dinh dưỡng' },
        ],
        benefits: [
          'Bổ sung năng lượng, chất xơ và omega 3 thực vật.',
          'Hỗ trợ tăng cảm giác no và bổ sung dinh dưỡng trong khẩu phần ăn.',
        ],
        ingredients: [
          'Hạt chia organic.',
          'Chứa chất xơ, protein thực vật, omega 3 và khoáng chất.',
        ],
        targets: [
          'Người cần bổ sung hạt dinh dưỡng trong chế độ ăn.',
          'Người vận động, ăn kiêng hoặc cần nguồn năng lượng từ thực vật.',
        ],
        usage: [
          'Ngâm hạt chia với nước hoặc trộn cùng đồ uống, yogurt, ngũ cốc.',
          'Không dùng thay thế bữa ăn chính khi chưa có chế độ dinh dưỡng phù hợp.',
        ],
        relatedIds: chiaNewArrivalIds,
        brandName: 'Organic Chia Seeds',
      },
      {
        id: '198',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Hạt dinh dưỡng', 'Hạt chia'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'The Chia Co' },
          { label: 'Xuất xứ:', value: 'Úc' },
          { label: 'Dạng bào chế:', value: 'Hạt dinh dưỡng' },
        ],
        benefits: [
          'Bổ sung hạt chia trắng giàu chất xơ và omega 3.',
          'Hỗ trợ chế độ ăn uống cân bằng, tốt cho người cần tăng cường dưỡng chất từ thực vật.',
        ],
        ingredients: [
          'Hạt chia trắng The Chia Co.',
          'Nguồn chất xơ, omega 3, protein thực vật và khoáng chất.',
        ],
        targets: ['Người cần bổ sung chất xơ.', 'Người theo chế độ ăn lành mạnh hoặc ăn chay.'],
        usage: [
          'Ngâm nở trước khi dùng hoặc trộn cùng thức uống và món ăn.',
          'Dùng lượng vừa phải và uống đủ nước trong ngày.',
        ],
        relatedIds: chiaNewArrivalIds,
        brandName: 'The Chia Co',
      },
      {
        id: '199',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Hạt dinh dưỡng', 'Hạt chia'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'The Chia Co' },
          { label: 'Xuất xứ:', value: 'Úc' },
          { label: 'Dạng bào chế:', value: 'Hạt dinh dưỡng' },
        ],
        benefits: [
          'Bổ sung hạt chia đen, chất xơ và acid béo omega 3 thực vật.',
          'Hỗ trợ bổ sung dinh dưỡng cho khẩu phần ăn hằng ngày.',
        ],
        ingredients: [
          'Hạt chia đen The Chia Co.',
          'Chứa chất xơ, protein thực vật, omega 3 và khoáng chất.',
        ],
        targets: [
          'Người cần bổ sung chất xơ và hạt dinh dưỡng.',
          'Người ăn kiêng, ăn chay hoặc muốn đa dạng khẩu phần.',
        ],
        usage: [
          'Có thể dùng cùng nước, sữa, sinh tố, salad hoặc yogurt.',
          'Ngâm hạt trước khi dùng để dễ sử dụng hơn.',
        ],
        relatedIds: chiaNewArrivalIds,
        brandName: 'The Chia Co',
      },
      {
        id: '200',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Hạt dinh dưỡng', 'Hạt chia'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Nature Superfood' },
          { label: 'Xuất xứ:', value: 'Úc' },
          { label: 'Dạng bào chế:', value: 'Hạt dinh dưỡng' },
        ],
        benefits: [
          'Bổ sung hạt chia organic giúp tăng cường chất xơ và dưỡng chất thực vật.',
          'Hỗ trợ chế độ ăn uống lành mạnh.',
        ],
        ingredients: [
          'Hạt chia organic Nature Superfood.',
          'Chứa omega 3 thực vật, chất xơ, protein và khoáng chất.',
        ],
        targets: [
          'Người cần bổ sung dinh dưỡng từ hạt.',
          'Người đang xây dựng chế độ ăn cân bằng.',
        ],
        usage: [
          'Dùng kèm thức uống, món ăn, yogurt hoặc ngũ cốc.',
          'Nên ngâm nở hạt trước khi sử dụng.',
        ],
        relatedIds: chiaNewArrivalIds,
        brandName: 'Nature Superfood',
      },
      {
        id: '211',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Kem nở ngực'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'No.1 Best' },
          { label: 'Xuất xứ:', value: 'USA' },
          { label: 'Dạng bào chế:', value: 'Kem bôi' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc vùng da ngực.',
          'Giúp dưỡng ẩm, làm mềm và hỗ trợ cải thiện độ săn chắc của da.',
        ],
        ingredients: [
          'Thành phần dưỡng da và làm mềm da.',
          'Thông tin chi tiết thành phần cần tham khảo trên bao bì sản phẩm.',
        ],
        targets: [
          'Người có nhu cầu chăm sóc và dưỡng da vùng ngực.',
          'Người cần sản phẩm dưỡng thể chuyên biệt.',
        ],
        usage: [
          'Thoa lượng vừa đủ lên vùng da cần chăm sóc và massage nhẹ nhàng.',
          'Không dùng trên vùng da trầy xước hoặc kích ứng.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'No.1 Best',
      },
      {
        id: '213',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc tóc', 'Dầu gội'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: '30ml' },
          { label: 'Thương hiệu:', value: 'Beauty Star' },
          { label: 'Xuất xứ:', value: 'Hàn Quốc' },
          { label: 'Dạng bào chế:', value: 'Dầu gội' },
        ],
        benefits: [
          'Hỗ trợ làm sạch tóc và da đầu.',
          'Hỗ trợ che phủ tóc bạc tạm thời theo tính năng sản phẩm.',
        ],
        ingredients: [
          'Thành phần làm sạch tóc và hỗ trợ lên màu.',
          'Xem kỹ bảng thành phần trên bao bì trước khi sử dụng.',
        ],
        targets: ['Người cần dầu gội chăm sóc tóc.', 'Người muốn hỗ trợ làm đen tóc tạm thời.'],
        usage: [
          'Làm ướt tóc, dùng lượng vừa đủ, massage nhẹ rồi xả sạch.',
          'Thử trên vùng da nhỏ trước khi dùng nếu có cơ địa nhạy cảm.',
        ],
        relatedIds: hairNewArrivalIds,
        brandName: 'Beauty Star',
      },
      {
        id: '264',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Fish oil - Omega'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Golden Health' },
          { label: 'Xuất xứ:', value: 'Úc' },
          { label: 'Dạng bào chế:', value: 'Viên uống' },
        ],
        benefits: [
          'Bổ sung dầu cá Omega 3 cho cơ thể.',
          'Hỗ trợ sức khỏe tim mạch, mắt và não bộ.',
        ],
        ingredients: ['Dầu cá Omega 3 1000mg.', 'Các acid béo EPA và DHA theo công bố sản phẩm.'],
        targets: [
          'Người cần bổ sung omega 3.',
          'Người có chế độ ăn ít cá béo hoặc cần hỗ trợ sức khỏe tim mạch.',
        ],
        usage: [
          'Dùng theo hướng dẫn trên bao bì hoặc theo tư vấn của chuyên gia y tế.',
          'Nên dùng sau bữa ăn.',
        ],
        relatedIds: supplementNewArrivalIds,
        brandName: 'Golden Health',
      },
      {
        id: '305',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt', 'Kem dưỡng da'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Uriage' },
          { label: 'Xuất xứ:', value: 'Pháp' },
          { label: 'Dạng bào chế:', value: 'Kem bôi' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc da hằng ngày.',
          'Giúp dưỡng ẩm và bảo vệ da trước tác động của ánh nắng với SPF50.',
        ],
        ingredients: [
          'Thành phần dưỡng da, chống nắng và hỗ trợ làm đều màu da.',
          'Thông tin chi tiết xem trên bao bì sản phẩm.',
        ],
        targets: [
          'Người cần kem chăm sóc da ban ngày.',
          'Người muốn hỗ trợ bảo vệ da trước tia UV.',
        ],
        usage: [
          'Thoa lên da mặt sau bước làm sạch và dưỡng da.',
          'Nên dùng lại khi tiếp xúc nắng lâu hoặc sau khi ra mồ hôi nhiều.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Uriage',
      },
      {
        id: '309',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt', 'Kem trị mụn'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: '40ml' },
          { label: 'Thương hiệu:', value: 'Uriage' },
          { label: 'Xuất xứ:', value: 'Pháp' },
          { label: 'Dạng bào chế:', value: 'Kem bôi' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc da mụn.',
          'Giúp làm thông thoáng bề mặt da và hỗ trợ giảm khuyết điểm trên da.',
        ],
        ingredients: [
          'Thành phần chăm sóc da mụn theo công bố của Uriage.',
          'Xem kỹ bảng thành phần nếu da nhạy cảm.',
        ],
        targets: [
          'Người có làn da dầu, da mụn.',
          'Người cần sản phẩm chăm sóc vùng da có khuyết điểm.',
        ],
        usage: ['Thoa lượng vừa đủ lên vùng da cần chăm sóc.', 'Tránh tiếp xúc trực tiếp với mắt.'],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Uriage',
      },
      {
        id: '318',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt', 'Tinh chất dưỡng da'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: '30ml' },
          { label: 'Thương hiệu:', value: 'Uriage' },
          { label: 'Xuất xứ:', value: 'Pháp' },
          { label: 'Dạng bào chế:', value: 'Serum' },
        ],
        benefits: [
          'Hỗ trợ giảm nhăn, làm mịn và săn chắc da.',
          'Bổ sung bước chăm sóc chuyên sâu cho da có dấu hiệu lão hóa.',
        ],
        ingredients: [
          'Thành phần dưỡng ẩm, hỗ trợ làm mịn và cải thiện bề mặt da.',
          'Thông tin chi tiết theo bao bì sản phẩm.',
        ],
        targets: ['Người có nhu cầu chăm sóc da lão hóa.', 'Người cần serum dưỡng da chuyên sâu.'],
        usage: [
          'Dùng sau bước làm sạch và toner, trước kem dưỡng.',
          'Thoa đều lên mặt và cổ, tránh vùng mắt.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Uriage',
      },
      {
        id: '333',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Tiêu hóa'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Đang cập nhật' },
          { label: 'Xuất xứ:', value: 'Đang cập nhật' },
          { label: 'Dạng bào chế:', value: 'Viên nhai' },
        ],
        benefits: [
          'Hỗ trợ trung hòa acid dạ dày.',
          'Hỗ trợ giảm cảm giác khó chịu do dư acid sau bữa ăn.',
        ],
        ingredients: [
          'Calcium Antacid theo công bố sản phẩm.',
          'Tá dược vừa đủ theo dạng viên nhai.',
        ],
        targets: [
          'Người cần hỗ trợ tiêu hóa và dạ dày.',
          'Người có nhu cầu sử dụng viên nhai bổ sung calcium antacid.',
        ],
        usage: [
          'Nhai viên trước khi nuốt, dùng theo hướng dẫn trên bao bì.',
          'Không lạm dụng sản phẩm nếu triệu chứng kéo dài.',
        ],
        relatedIds: supplementNewArrivalIds,
        brandName: 'Calcium Antacid',
      },
      {
        id: '358',
        breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Vitamin theo tuổi', 'Vitamin D'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Fluoretten' },
          { label: 'Xuất xứ:', value: 'Đang cập nhật' },
          { label: 'Dạng bào chế:', value: 'Viên uống' },
        ],
        benefits: [
          'Bổ sung vitamin D hỗ trợ hấp thu canxi.',
          'Hỗ trợ phòng ngừa tình trạng còi xương do thiếu vitamin D ở trẻ em.',
        ],
        ingredients: [
          'Vitamin D Fluoretten 500 I.E.',
          'Thành phần chi tiết xem trên bao bì sản phẩm.',
        ],
        targets: [
          'Trẻ em có nhu cầu bổ sung vitamin D.',
          'Người cần hỗ trợ hấp thu canxi theo tư vấn chuyên môn.',
        ],
        usage: [
          'Dùng theo hướng dẫn trên bao bì hoặc theo chỉ định của chuyên gia y tế.',
          'Không tự ý dùng quá liều khuyến nghị.',
        ],
        relatedIds: supplementNewArrivalIds,
        brandName: 'Fluoretten',
      },
      {
        id: '375',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Vệ sinh phụ nữ'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Summer’s Eve' },
          { label: 'Xuất xứ:', value: 'Mỹ' },
          { label: 'Dạng bào chế:', value: 'Chai xịt' },
        ],
        benefits: [
          'Hỗ trợ làm sạch và khử mùi vùng kín.',
          'Mang lại cảm giác sạch thoáng, dễ chịu khi sử dụng đúng cách.',
        ],
        ingredients: [
          'Thành phần làm sạch và tạo hương theo công bố sản phẩm.',
          'Xem kỹ bao bì nếu có cơ địa nhạy cảm.',
        ],
        targets: [
          'Phụ nữ có nhu cầu vệ sinh cá nhân hằng ngày.',
          'Người cần sản phẩm xịt phụ khoa tiện dụng.',
        ],
        usage: [
          'Sử dụng ngoài da theo hướng dẫn trên bao bì.',
          'Ngưng dùng nếu có dấu hiệu kích ứng.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Summer’s Eve',
      },
      {
        id: '376',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Kem tan mỡ'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Eveline' },
          { label: 'Xuất xứ:', value: 'Ba Lan' },
          { label: 'Dạng bào chế:', value: 'Serum bôi ngoài da' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc vùng da tích tụ mỡ.',
          'Giúp làm ấm, massage và hỗ trợ cải thiện bề mặt da khi kết hợp vận động.',
        ],
        ingredients: [
          'Thành phần chăm sóc da và hỗ trợ massage theo công bố của Eveline.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người cần chăm sóc vùng da bụng, đùi, hông.',
          'Người muốn kết hợp sản phẩm massage trong lộ trình giảm cân.',
        ],
        usage: [
          'Thoa lên vùng da cần chăm sóc và massage đều.',
          'Không dùng trên vùng da trầy xước, kích ứng hoặc nhạy cảm quá mức.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Eveline',
      },
      {
        id: '377',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Kem tan mỡ'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Eveline' },
          { label: 'Xuất xứ:', value: 'Ba Lan' },
          { label: 'Dạng bào chế:', value: 'Serum bôi ngoài da' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc vùng da tích tụ mỡ và nâng cơ bề mặt da.',
          'Phù hợp dùng kèm massage cơ thể.',
        ],
        ingredients: [
          'Thành phần chăm sóc da, làm ấm và hỗ trợ massage theo công bố sản phẩm.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người có nhu cầu chăm sóc vùng da kém săn chắc.',
          'Người đang kết hợp chế độ vận động và chăm sóc cơ thể.',
        ],
        usage: [
          'Thoa đều lên vùng da cần chăm sóc và massage theo chuyển động tròn.',
          'Rửa tay sau khi dùng, tránh tiếp xúc mắt.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Eveline',
      },
      {
        id: '378',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Kem tan mỡ'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Eveline' },
          { label: 'Xuất xứ:', value: 'Ba Lan' },
          { label: 'Dạng bào chế:', value: 'Kem bôi ngoài da' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc da cơ thể, giúp da săn chắc hơn.',
          'Hỗ trợ massage vùng da tích tụ mỡ.',
        ],
        ingredients: [
          'Thành phần dưỡng da và hỗ trợ massage theo công bố của Eveline.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người cần chăm sóc vùng da kém săn chắc.',
          'Người muốn dùng kem bôi hỗ trợ trong quá trình chăm sóc vóc dáng.',
        ],
        usage: [
          'Thoa sản phẩm lên vùng da cần chăm sóc và massage đều.',
          'Không dùng cho vùng da tổn thương.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Eveline',
      },
      {
        id: '379',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc cơ thể', 'Kem tan mỡ'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Đang cập nhật' },
          { label: 'Thương hiệu:', value: 'Eveline' },
          { label: 'Xuất xứ:', value: 'Ba Lan' },
          { label: 'Dạng bào chế:', value: 'Serum bôi ngoài da' },
        ],
        benefits: [
          'Hỗ trợ chăm sóc vùng da tích tụ mỡ.',
          'Giúp massage và cải thiện cảm giác săn chắc của da.',
        ],
        ingredients: [
          'Thành phần chăm sóc da theo công bố sản phẩm Eveline Slim Extreme 4D.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người cần chăm sóc vùng bụng, đùi, hông.',
          'Người muốn hỗ trợ massage cơ thể tại nhà.',
        ],
        usage: [
          'Thoa một lượng vừa đủ và massage đến khi thấm.',
          'Dùng đều đặn theo hướng dẫn trên bao bì.',
        ],
        relatedIds: beautyNewArrivalIds,
        brandName: 'Eveline',
      },
      {
        id: '382-260',
        breadcrumbs: ['Danh mục', 'Thiết bị y tế', 'Cao dán'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: 'Hộp 140 miếng' },
          { label: 'Thương hiệu:', value: 'Salonpas' },
          { label: 'Xuất xứ:', value: 'Nhật Bản' },
          { label: 'Dạng bào chế:', value: 'Miếng dán' },
        ],
        benefits: [
          'Hỗ trợ giảm đau tại chỗ vùng cơ, vai, lưng, khớp.',
          'Mang lại cảm giác dễ chịu khi dùng ngoài da.',
        ],
        ingredients: [
          'Thành phần hoạt chất giảm đau dùng ngoài da theo công bố Salonpas.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người đau mỏi cơ, vai gáy, lưng hoặc khớp.',
          'Người cần miếng dán giảm đau tiện dụng.',
        ],
        usage: [
          'Dán lên vùng da sạch, khô tại vị trí cần hỗ trợ.',
          'Không dán lên vết thương hở hoặc vùng da kích ứng.',
        ],
        relatedIds: medicalNewArrivalIds,
        brandName: 'Salonpas',
      },
      {
        id: '383',
        breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc tóc', 'Dầu xả'],
        infoRows: [
          { label: 'Quy cách đóng gói:', value: '385ml' },
          { label: 'Thương hiệu:', value: 'OGX' },
          { label: 'Xuất xứ:', value: 'Đang cập nhật' },
          { label: 'Dạng bào chế:', value: 'Dầu xả' },
        ],
        benefits: [
          'Hỗ trợ dưỡng tóc mềm mượt.',
          'Giúp chăm sóc tóc yếu, tóc cần bổ sung độ ẩm và độ bóng.',
        ],
        ingredients: [
          'Biotin, collagen và thành phần dưỡng tóc theo công bố sản phẩm.',
          'Thông tin chi tiết xem trên bao bì.',
        ],
        targets: [
          'Người có tóc khô, xơ hoặc cần dưỡng tóc mềm mượt.',
          'Người sử dụng dầu xả chăm sóc tóc hằng ngày.',
        ],
        usage: [
          'Sau khi gội, thoa dầu xả lên thân và ngọn tóc, massage nhẹ rồi xả sạch.',
          'Tránh tiếp xúc trực tiếp với mắt.',
        ],
        relatedIds: hairNewArrivalIds,
        brandName: 'OGX',
      },
    ].map((item) => [item.id, createNewArrivalDetail(item)]),
  ),
};

export interface CategoryPageData {
  title: string;
  breadcrumbs?: string[];
  totalProducts: number;
  products: Product[];
  filters: {
    LOAI_TIN: string[];
    QUY_CACH: string[];
    NHA_SAN_XUAT: string[];
    THUONG_HIEU: string[];
    XUAT_XU: string[];
    HOAT_CHAT: string[];
  };
}

export const CATEGORY_PAGE_DATA: Record<string, CategoryPageData> = {
  'sua-rua-mat': {
    title: 'Sữa rửa mặt',
    breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt', 'Làm sạch'],
    totalProducts: 194,
    products: [
      {
        id: '21803',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Gentle Foaming Cleanser CPC1 Hà Nội 175ml - Bọt rửa mặt',
        price: '150.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-gentle-foaming-cleanser-cpc1-ha-noi-175ml-bot-rua-mat-0.webp',
      },
      {
        id: '21806',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Facial Cleanser CPC1 Hà Nội tuýp 100ml - Sữa rửa mặt',
        price: '75.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-facial-cleanser-cpc1-ha-noi-tuyp-100ml-sua-rua-mat-0.webp',
      },
      {
        id: '22263',
        category: 'cham-soc-lam-dep',
        name: 'Aloe Vera Gesichtwaschgel Sanct Bernhard 250ml - Sữa rửa mặt',
        price: '470.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aloe-vera-gesichtwaschgel-sanct-bernhard-250ml-sua-rua-mat-0.webp',
      },
      {
        id: '21272',
        category: 'cham-soc-lam-dep',
        name: 'Complex 3 Kingphar 100g - Sữa rửa mặt thảo dược',
        price: '63.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/complex-3-kingphar-100g-sua-rua-mat-thao-duoc-0.webp',
      },
      {
        id: '21271',
        category: 'cham-soc-lam-dep',
        name: 'Face Wash Kingphar 100g - Sữa rửa mặt',
        price: '50.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/face-wash-kingphar-100g-sua-rua-mat-0.webp',
      },
      {
        id: '14948',
        category: 'cham-soc-lam-dep',
        name: 'Biona Maxima 50g - Sữa rửa mặt ngừa mụn',
        price: '58.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/biona-maxima-50g-sua-rua-mat-ngua-mun-0.webp',
      },
      {
        id: '9793',
        category: 'cham-soc-lam-dep',
        name: 'Cetaphil Oily Skin Cleanser 125ml - Sữa rửa mặt cho da dầu',
        price: '275.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cetaphil-oily-skin-cleanser-125ml-sua-rua-mat-cho-da-dau-0.webp',
      },
      {
        id: '21241',
        category: 'cham-soc-lam-dep',
        name: 'Freeskin Cleansing Brush - Máy rửa mặt',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/freeskin-cleansing-brush-may-rua-mat-0.webp',
        hasPrescription: true,
      },
      {
        id: '21078',
        category: 'cham-soc-lam-dep',
        name: 'Fixderma Non Drying Cleanser 100g - Sữa rửa mặt',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fixderma-non-drying-cleanser-100g-sua-rua-mat-0.webp',
      },
      {
        id: '20665',
        category: 'cham-soc-lam-dep',
        name: 'Anti Pollution Facial Cleanser 100ml - Sữa rửa mặt',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/anti-pollution-facial-cleanser-100ml-sua-rua-mat-0.webp',
        hasPrescription: true,
      },
    ],
    filters: {
      LOAI_TIN: ['Bông tẩy trang', 'Sữa rửa mặt', 'Tẩy tế bào chết', 'Tẩy trang', 'Toner'],
      QUY_CACH: ['10ml', '50ml', '100ml', '200ml', '150ml', '250ml'],
      NHA_SAN_XUAT: ['Uriage', 'Fixderma Indian', 'Aloe Vera of America, Inc.'],
      THUONG_HIEU: ['Uriage', 'Kingphar', 'Cetaphil', 'Fixderma', 'Sanct Bernhard'],
      XUAT_XU: ['Pháp', 'Việt Nam', 'Đức', 'Ấn Độ', 'Canada'],
      HOAT_CHAT: ['Aloe Vera', 'Niacinamide', 'Glycerin', 'Salicylic Acid'],
    },
  },
  'chong-nang-da-mat': {
    title: 'Chống nắng da mặt',
    breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt'],
    totalProducts: 128,
    products: [
      {
        id: '14872',
        category: 'chong-nang-da-mat',
        name: 'Kem chống nắng Fixderma Shadow Silicone Matte Cream SPF 50 50ml',
        price: '895.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-fixderma-shadow-silicone-matte-cream-spf-50-50ml-551-0.webp',
      },
      {
        id: '14809',
        category: 'chong-nang-da-mat',
        name: 'FCLChemfree SPF 30 50ml - Kem chống nắng vật lý',
        price: '1.240.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fclchemfree-spf-30-50ml-kem-chong-nang-vat-ly-0.webp',
      },
      {
        id: '21085',
        category: 'chong-nang-da-mat',
        name: 'Lotion chống nắng FCL Light Weight Non-Greasy Broad Spectrum SPF 80 Lotion 50ml',
        price: '727.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lotion-chong-nang-fcl-light-weight-non-greasy-broad-spectrum-spf-80-lotion-50ml-0.webp',
      },
      {
        id: '21084',
        category: 'chong-nang-da-mat',
        name: 'Lotion chống nắng Fixderma Shadow SPF 80+ Lotion 75ml',
        price: '649.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lotion-chong-nang-fixderma-shadow-spf-80-lotion-75ml-0.webp',
      },
      {
        id: '21082',
        category: 'chong-nang-da-mat',
        name: 'Gel chống nắng Fixderma Shadow A-Gel SPF 30 75ml',
        price: '397.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gel-chong-nang-fixderma-shadow-a-gel-spf-30-75ml-0.webp',
      },
      {
        id: '21077',
        category: 'chong-nang-da-mat',
        name: 'Gel chống nắng Fixderma Shadow SPF 55+ Gel 75g',
        price: '459.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gel-chong-nang-fixderma-shadow-spf-55-gel-75g-0.webp',
      },
      {
        id: '20664',
        category: 'chong-nang-da-mat',
        name: 'Kem Chống Nắng UV Tone Up 50+ C-Renew 50g',
        price: '170.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-uv-tone-up-50-c-renew-50g-214-0.webp',
      },
      {
        id: '20324',
        category: 'chong-nang-da-mat',
        name: 'Kem chống nắng Sun Cream SPF50 DottorPrimo 50ml',
        price: '515.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-sun-cream-spf50-dottorprimo-50ml_00545.webp',
      },
      {
        id: '20279',
        category: 'chong-nang-da-mat',
        name: 'Kem Chống Nắng Pink Tone Sun Cream Dermasoo 50ml',
        price: '275.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-pink-tone-sun-cream-dermasoo-50ml_00191.webp',
      },
      {
        id: '20278',
        category: 'chong-nang-da-mat',
        name: 'Kem Chống Nắng Tone Up Sun Cream Dermasoo 50ml',
        price: '275.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-tone-up-sun-cream-dermasoo-50ml_00242.webp',
      },
      {
        id: '19334',
        category: 'chong-nang-da-mat',
        name: 'UV Protection Essence SPF30 PA++ Curel 50g',
        price: '508.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/uv-protection-essence-spf30-pa-curel-50g_00376.webp',
      },
      {
        id: '19332',
        category: 'chong-nang-da-mat',
        name: 'Intensive Moisture Care Base Milk SPF30 PA+++ Curel 30ml',
        price: '508.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-base-milk-spf30-pa-curel-30ml_00173.webp',
      },
      {
        id: '19331',
        category: 'chong-nang-da-mat',
        name: 'Intensive Moisture Care Base Cream SPF30 PA+++ Curel 30g',
        price: '508.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-base-cream-spf30-pa-curel-30g_00327.webp',
      },
      {
        id: '19275',
        category: 'chong-nang-da-mat',
        name: 'Kem Chống Nắng Sahemul 50g',
        price: '265.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-chong-nang-sahemul-50g_00818.webp',
      },
      {
        id: '19105',
        category: 'chong-nang-da-mat',
        name: 'Barrier Me Cushion Gentle Essence SPF 50+ PA++++ Biore 60g',
        price: '259.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/barrier-me-cushion-gentle-essence-spf-50-pa-biore-60g_00580.webp',
      },
      {
        id: '19092',
        category: 'chong-nang-da-mat',
        name: 'Perfect Protect Milk Cool SPF 50+ PA+++ Biore 25ml',
        price: '70.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/perfect-protect-milk-cool-spf-50-pa-biore-25ml_00837.webp',
      },
      {
        id: '19091',
        category: 'chong-nang-da-mat',
        name: 'Perfect Protect Milk Moisture SPF 50+ PA+++ Biore 25ml',
        price: '70.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/perfect-protect-milk-moisture-spf-50-pa-biore-25ml_00153.webp',
      },
      {
        id: '19090',
        category: 'chong-nang-da-mat',
        name: 'Perfect Protect Milk Bright SPF 50+ PA+++ Biore 25ml',
        price: '70.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/perfect-protect-milk-bright-spf-50-pa-biore-25ml_00664.webp',
      },
      {
        id: '19089',
        category: 'chong-nang-da-mat',
        name: 'Aqua Rich Watery Gel SPF 50+ PA++++ Biore 90ml',
        price: '249.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aqua-rich-watery-gel-spf-50-pa-biore-90ml_00221.webp',
      },
      {
        id: '19088',
        category: 'chong-nang-da-mat',
        name: 'Aqua Rich Watery Essence SPF 50+ PA++++ Biore 85g',
        price: '279.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aqua-rich-watery-essence-spf-50-pa-biore-85g_00226.webp',
      },
      {
        id: '19087',
        category: 'chong-nang-da-mat',
        name: 'Aqua Rich Watery Essence SPF 50+ PA++++ Biore 50g',
        price: '195.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aqua-rich-watery-essence-spf-50-pa-biore-50g_00652.webp',
      },
      {
        id: '19086',
        category: 'chong-nang-da-mat',
        name: 'Aqua Rich Light Up Essence SPF 50+ PA++++ Biore 70g',
        price: '279.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aqua-rich-light-up-essence-spf-50-pa-biore-70g_00127.webp',
      },
      {
        id: '19084',
        category: 'chong-nang-da-mat',
        name: 'Perfect Milk SPF 50+PA++++ Biore 40ml',
        price: '102.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/perfect-milk-spf-50-pa-biore-40ml_00861.webp',
      },
      {
        id: '19085',
        category: 'chong-nang-da-mat',
        name: 'Kids Pure Milk SPF 50+ PA++++ Biore 70ml',
        price: '249.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kids-pure-milk-spf-50-pa-biore-70ml_00393.webp',
      },
      {
        id: '19083',
        category: 'chong-nang-da-mat',
        name: 'Face Milk SPF 50+ PA++++ Biore 30ml',
        price: '102.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/face-milk-spf-50-pa-biore-30ml_00459.webp',
      },
      {
        id: '19081',
        category: 'chong-nang-da-mat',
        name: 'Bright Milk SPF 50+ PA++++ Biore 30ml',
        price: '102.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bright-milk-spf-50-pa-biore-30ml_00699.webp',
      },
      {
        id: '19082',
        category: 'chong-nang-da-mat',
        name: 'CC Milk SPF 50+ PA++++ Biore 30ml',
        price: '102.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cc-milk-spf-50-pa-biore-30ml_00833.webp',
      },
      {
        id: '18983',
        category: 'chong-nang-da-mat',
        name: 'Xịt chống nắng bơ nghệ SPF50+ PA+++ Cocay Hoala 70ml',
        price: '220.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/spf50-pa-cocay-hoala-70ml_00458.webp',
      },
      {
        id: '18982',
        category: 'chong-nang-da-mat',
        name: 'Kem chống nắng Nghệ Bơ SPF50+ PA+++ Cocay Hoala 30ml',
        price: '250.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/spf50-pa-cocay-hoala-30ml_00155.webp',
      },
    ],
    filters: {
      LOAI_TIN: ['Chống nắng da mặt', 'Dưỡng da', 'Làm sạch'],
      QUY_CACH: ['40ml', '50ml', '100ml', '50g', '75g', '30g', '100g', '25g', '60ml'],
      NHA_SAN_XUAT: ['Uriage', 'Fixderma Indian', 'Aloe Vera of America, Inc.'],
      THUONG_HIEU: ['Uriage', 'Transino', 'Fixderma', 'Forever', 'SK-II', 'Bioderma'],
      XUAT_XU: [
        'Pháp',
        'Việt Nam',
        'Thái lan',
        'Hàn Quốc',
        'Ấn độ',
        'Mỹ',
        'Đức',
        'Nhật Bản',
        'Tây Ban Nha',
      ],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  'duong-da': {
    title: 'Dưỡng da',
    breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt'],
    totalProducts: 543,
    products: [
      {
        id: '22283',
        category: 'duong-da',
        name: 'Krauter-Creme Gegen Unreine Haut Sanct Bernhard 50ml - Kem dưỡng da, ngừa mụn',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/krauter-creme-gegen-unreine-haut-sanct-bernhard-50ml-kem-duong-da-ngua-mun-0.webp',
      },
      {
        id: '23081',
        category: 'duong-da',
        name: 'Biluma Galderma tuýp 15g - Kem dưỡng trắng da',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/biluma-galderma-tuyp-15g-kem-duong-trang-da-0.webp',
      },
      {
        id: '21804',
        category: 'duong-da',
        name: 'Aricamun Face Cream CPC1 Hà Nội lọ 50g - Kem dưỡng ẩm da',
        price: '166.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-face-cream-cpc1-ha-noi-lo-50g-kem-duong-am-da-0.webp',
      },
      {
        id: '21805',
        category: 'duong-da',
        name: 'Aricamun Face Serum CPC1 Hà Nội lọ 30ml - Tinh chất dưỡng da',
        price: '158.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-face-serum-cpc1-ha-noi-lo-30ml-tinh-chat-duong-da-0.webp',
      },
      {
        id: '21808',
        category: 'duong-da',
        name: 'Aricamun Mineral Spray CPC1 Hà Nội 100ml - Xịt khoáng dưỡng da',
        price: '75.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-mineral-spray-cpc1-ha-noi-100ml-xit-khoang-duong-da-0.webp',
      },
      {
        id: '21809',
        category: 'duong-da',
        name: 'Aricamun Moisturizing Cream CPC1 Hà Nội tuýp 100g - Kem dưỡng ẩm',
        price: '176.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-moisturizing-cream-cpc1-ha-noi-tuyp-100g-kem-duong-am-0.webp',
      },
      {
        id: '26295',
        category: 'duong-da',
        name: 'KJINPBNH Clearvin tuýp 25g - Kem dưỡng da',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kjinpbnh-clearvin-tuyp-25g-kem-duong-da-0.webp',
        hasPrescription: true,
      },
      {
        id: '24249',
        category: 'duong-da',
        name: 'White Label Premium Placenta Eye Cream tuýp 30g - Kem mờ thâm mắt',
        price: '600.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/white-label-premium-placenta-eye-cream-tuyp-30g-kem-mo-tham-mat-0.webp',
      },
      {
        id: '22231',
        category: 'duong-da',
        name: 'Whitening Creme Sanct Bernhard 50ml - Kem dưỡng da',
        price: '939.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/whitening-creme-sanct-bernhard-50ml-kem-duong-da-0.webp',
      },
      {
        id: '22239',
        category: 'duong-da',
        name: 'Zitronen-Handcreme Sanct Bernhard tuýp 25ml - Kem dưỡng da (hương chanh)',
        price: '110.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zitronen-handcreme-sanct-bernhard-tuyp-25ml-kem-duong-da-huong-chanh-0.webp',
      },
      {
        id: '22241',
        category: 'duong-da',
        name: 'Collagen Cream Forte Sanct Bernhard 50ml - Kem dưỡng da',
        price: '480.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/collagen-cream-forte-sanct-bernhard-50ml-kem-duong-da-0.webp',
      },
      {
        id: '22243',
        category: 'duong-da',
        name: 'Collagen Cream Forte Sanct Bernhard tuýp 15ml - Kem dưỡng da',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/collagen-cream-forte-sanct-bernhard-tuyp-15ml-kem-duong-da-0.webp',
        hasPrescription: true,
      },
      {
        id: '22251',
        category: 'duong-da',
        name: 'Curcuma Gesichtscreme Sanct Bernhard 100ml - Kem dưỡng da',
        price: '515.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/curcuma-gesichtscreme-sanct-bernhard-100ml-kem-duong-da-0.webp',
      },
      {
        id: '22261',
        category: 'duong-da',
        name: 'Anti-Morgenmuffel Handcreme Sanct Bernhard tuýp 100ml - Kem dưỡng da (hương chanh)',
        price: '310.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/anti-morgenmuffel-handcreme-sanct-bernhard-tuyp-100ml-kem-duong-da-huong-chanh-0.webp',
      },
      {
        id: '21561',
        category: 'duong-da',
        name: 'Kutieskin Mama 125ml - Dầu massage rạn da',
        price: '339.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kutieskin-mama-125ml-dau-massage-ran-da-0.webp',
      },
      {
        id: '21278',
        category: 'duong-da',
        name: 'Expigment 4 Krem Orva 30g - Hỗ trợ nám sạm, dưỡng da',
        price: '290.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/expigment-4-krem-orva-30g-ho-tro-nam-sam-duong-da-0.webp',
      },
      {
        id: '21277',
        category: 'duong-da',
        name: 'Expigment 2 Krem Orva 30g - Hỗ trợ nám sạm, dưỡng da',
        price: '290.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/expigment-2-krem-orva-30g-ho-tro-nam-sam-duong-da-0.webp',
      },
      {
        id: '21250',
        category: 'duong-da',
        name: 'Eczekalm Urgo 50ml - Hỗ trợ viêm da, chứng khô da',
        price: '303.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/eczekalm-urgo-50ml-ho-tro-viem-da-chung-kho-da-0.webp',
      },
      {
        id: '9791',
        category: 'duong-da',
        name: 'Huyết thanh phục hồi siêu tốc MAD Redness Recue 6g',
        price: 'Liên hệ',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mad-redness-rescue.jpg',
        hasPrescription: true,
      },
      {
        id: '14871',
        category: 'duong-da',
        name: 'Lotion dưỡng da FCL Pre+Probiotic Body Lotion 200ml',
        price: '1.240.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lotion-duong-da-fcl-pre-probiotic-body-lotion-200ml-0.webp',
      },
      {
        id: '14844',
        category: 'duong-da',
        name: 'Serum phục hồi làn da Fixderma C Enhance-25 Serum 30ml',
        price: '1.303.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fixderma-c-enhance-25-30ml-serum-tai-tao-da-0.webp',
      },
      {
        id: '21092',
        category: 'duong-da',
        name: 'Serum dưỡng sáng da cho nam FCL Active Radiance Complex For Men 50g',
        price: '1.240.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/serum-duong-sang-da-cho-nam-fcl-active-radiance-complex-for-men-50g-0.webp',
      },
      {
        id: '21091',
        category: 'duong-da',
        name: 'Serum cấp ẩm FCL HA4 Plus Serum 30ml',
        price: '1.870.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/serum-cap-am-fcl-ha4-plus-serum-30ml-0.webp',
      },
      {
        id: '21090',
        category: 'duong-da',
        name: 'Serum FCL C Scape 25 Serum 30ml',
        price: '1.782.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/serum-fcl-c-scape-25-serum-30ml-0.webp',
      },
      {
        id: '21088',
        category: 'duong-da',
        name: 'Mặt nạ FCL De Tan Mask 100g',
        price: '1.058.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mat-na-fcl-de-tan-mask-100g-0.webp',
      },
      {
        id: '21087',
        category: 'duong-da',
        name: 'Kem dưỡng Fixderma Nigrilite Cream 100g',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kem-duong-fixderma-nigrilite-cream-100g-0.webp',
        hasPrescription: true,
      },
      {
        id: '20596',
        category: 'duong-da',
        name: 'Whitening Plus Serum C-Renew Fobelife 30ml',
        price: '368.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/whitening-plus-serum-c-renew-fobelife-30ml-0.webp',
      },
      {
        id: '20597',
        category: 'duong-da',
        name: 'Serum Phục Hồi Sensiskin C-Renew 20ml',
        price: '289.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/serum-phuc-hoi-sensiskin-c-renew-20ml-0.webp',
      },
      {
        id: '21279',
        category: 'duong-da',
        name: 'Lumine Khatu 15g - Hỗ trợ dưỡng trắng da, mờ thâm',
        price: '195.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lumine-khatu-15g-ho-tro-duong-trang-da-mo-tham-0.webp',
      },
      {
        id: '19341',
        category: 'duong-da',
        name: 'Intensive Moisture Care Moisture Facial Lotion I Light Curel 150ml (I)',
        price: '610.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-moisture-facial-lotion-i-light-curel-150ml_00319.webp',
      },
    ],
    filters: {
      LOAI_TIN: ['Chăm sóc da vùng mắt', 'Lotion', 'Mặt nạ', 'Serum - Tinh chất', 'Xịt khoáng'],
      QUY_CACH: [
        '10ml',
        '40ml',
        '50ml',
        '75ml',
        '100ml',
        '120ml',
        '200ml',
        '150ml',
        '300ml',
        '130ml',
        '10g',
        '50g',
        '75g',
        '30g',
        '100g',
        '25g',
      ],
      NHA_SAN_XUAT: [
        'Uriage',
        'Fixderma Indian',
        'Aloe Vera of America, Inc.',
        'Hendel LLC',
        'Golden Health PTY Ltd',
        'Star Combo Australia Pty Ltd',
      ],
      THUONG_HIEU: [
        'Uriage',
        'Costar',
        'Lariena',
        'Amax',
        'Golden Health',
        'Shiseido',
        'Mason Natural',
        'Fixderma',
        'Forever',
        'LifeSpring',
        'SK-II',
        'Bioderma',
        'Coverderm',
        'Hadariki',
      ],
      XUAT_XU: ['Pháp', 'Hàn Quốc', 'Italia', 'Nga', 'Ấn độ', 'Mỹ', 'Úc', 'Nhật Bản'],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  'lam-sach': {
    title: 'Làm sạch',
    breadcrumbs: ['Danh mục', 'Chăm sóc & Làm đẹp', 'Chăm sóc da mặt'],
    totalProducts: 295,
    products: [
      {
        id: '21803',
        category: 'lam-sach',
        name: 'Aricamun Gentle Foaming Cleanser CPC1 Hà Nội 175ml - Bọt rửa mặt',
        price: '150.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-gentle-foaming-cleanser-cpc1-ha-noi-175ml-bot-rua-mat-0.webp',
      },
      {
        id: '21806',
        category: 'lam-sach',
        name: 'Aricamun Facial Cleanser CPC1 Hà Nội tuýp 100ml - Sữa rửa mặt',
        price: '75.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-facial-cleanser-cpc1-ha-noi-tuyp-100ml-sua-rua-mat-0.webp',
      },
      {
        id: '21807',
        category: 'lam-sach',
        name: 'Aricamun Micellar Cleansing Water CPC1 Hà Nội 200ml - Nước tẩy trang',
        price: '160.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-micellar-cleansing-water-cpc1-ha-noi-200ml-nuoc-tay-trang-0.webp',
      },
      {
        id: '22263',
        category: 'lam-sach',
        name: 'Aloe Vera Gesichtswaschgel Sanct Bernhard 250ml - Gel rửa mặt',
        price: '470.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aloe-vera-gesichtswaschgel-sanct-bernhard-250ml-gel-rua-mat-0.webp',
      },
      {
        id: '21272',
        category: 'lam-sach',
        name: 'Complex 3 Kingphar 100g - Sữa rửa mặt thảo dược',
        price: '63.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/complex-3-kingphar-100g-sua-rua-mat-thao-duoc-0.jpg',
      },
      {
        id: '21271',
        category: 'lam-sach',
        name: 'Face Wash Kingphar 100g - Sữa rửa mặt',
        price: '50.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/face-wash-kingphar-100g-sua-rua-mat-0.webp',
      },
      {
        id: '14948',
        category: 'lam-sach',
        name: 'Sữa rửa mặt Bảo xuân Nam Dược 100g',
        price: '100.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sua-rua-mat-bao-xuan-nam-duoc-100g_00434.jpg',
      },
      {
        id: '9793',
        category: 'lam-sach',
        name: 'Gel rửa mặt phục hồi giảm kích ứng làm sáng mịn da MAD Delicate Skin Cleansing Gel 10ml',
        price: 'Liên hệ',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/delicate-10ml.jpg',
        hasPrescription: true,
      },
      {
        id: '21241',
        category: 'lam-sach',
        name: 'Freeskin Cleansing Foam Novocare 120ml - Bọt rửa mặt ngừa mụn',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/freeskin-cleansing-foam-novocare-120ml-bot-rua-mat-ngua-mun-0.webp',
        hasPrescription: true,
      },
      {
        id: '21078',
        category: 'lam-sach',
        name: 'Sữa rửa mặt Fixderma Non Drying Cleanser 75g',
        price: '230.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sua-rua-mat-fixderma-non-drying-cleanser-75g-0.webp',
      },
      {
        id: '21089',
        category: 'lam-sach',
        name: 'Bông tẩy FCL Penta Peel Pads 25 miếng',
        price: '1.240.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bong-tay-fcl-penta-peel-pads-25-mieng-0.webp',
      },
      {
        id: '20665',
        category: 'lam-sach',
        name: 'Gel Rửa Mặt Ngừa Mụn AntiI Pollution C-Renew 100ml',
        price: '118.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gel-rua-mat-ngua-mun-antii-pollution-c-renew-100ml-845-0.webp',
      },
      {
        id: '20661',
        category: 'lam-sach',
        name: 'Gel Rửa Mặt Protection Oil Balancing C-Renew 50ml',
        price: '66.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gel-rua-mat-protection-oil-balancing-c-renew-50ml-529-0.webp',
      },
      {
        id: '19329',
        category: 'lam-sach',
        name: 'Intensive Moisture Care Makeup Cleansing Gel Curel 130g',
        price: '339.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-makeup-cleansing-gel-curel-130g_00421.webp',
      },
      {
        id: '19330',
        category: 'lam-sach',
        name: 'Intensive Moisture Care Makeup Cleansing Oil Curel 150ml',
        price: '415.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-makeup-cleansing-oil-curel-150ml_00638.webp',
      },
      {
        id: '14470',
        category: 'lam-sach',
        name: 'Dokudami Natural Skin Lotion 500ml - Nước hoa hồng Diếp cá',
        price: '179.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dokudami-natural-skin-lotion-500ml-nuoc-hoa-hong-diep-ca_00245.jpg',
      },
      {
        id: '20017',
        category: 'lam-sach',
        name: 'Transino Clear Cleansing EX 110g',
        price: '500.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/transino-clear-cleansing-ex-110g_00322.webp',
      },
      {
        id: '20015',
        category: 'lam-sach',
        name: 'Transino Clear Wash EX 100g',
        price: '500.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/transino-clear-wash-ex-100g_00522.webp',
      },
      {
        id: '19524',
        category: 'lam-sach',
        name: 'Cetaphil Bright Healthy Radiance Brightness Reveal Creamy Cleanser 100g',
        price: '295.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cetaphil-bright-healthy-radiance-brightness-reveal-creamy-cleanser-100g_00798.webp',
      },
      {
        id: '19522',
        category: 'lam-sach',
        name: 'Cetaphil Bright Healthy Radiance Toner 150ml',
        price: '359.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cetaphil-bright-healthy-radiance-toner-150ml_00149.webp',
      },
      {
        id: '19519',
        category: 'lam-sach',
        name: 'Cetaphil Hydrating Foaming Cream Cleanser 473ml',
        price: '540.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cetaphil-hydrating-foaming-cream-cleanser-473ml_00891.webp',
      },
      {
        id: '19327',
        category: 'lam-sach',
        name: 'Intensive Moisture Care Foaming Wash Curel 150ml',
        price: '407.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/intensive-moisture-care-foaming-wash-curel-150ml_00903.webp',
      },
      {
        id: '19322',
        category: 'lam-sach',
        name: 'Marshmallow Whip Rich Moisture Biore 150ml',
        price: '184.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/marshmallow-whip-rich-moisture-biore-150ml_00557.webp',
      },
      {
        id: '19321',
        category: 'lam-sach',
        name: 'Marshmallow Whip Oil Control Biore 150ml',
        price: '184.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/marshmallow-whip-oil-control-biore-150ml_00161.webp',
      },
      {
        id: '19148',
        category: 'lam-sach',
        name: 'Oil Buster Bamboo Charcoal Bright Action Biore 100g',
        price: '65.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/oil-buster-bamboo-charcoal-bright-action-biore-100g_00583.webp',
      },
      {
        id: '19147',
        category: 'lam-sach',
        name: 'Oil Buster Bamboo Charcoal Bright Action Biore 50g',
        price: '40.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/oil-buster-bamboo-charcoal-bright-action-biore-50g_00715.webp',
      },
      {
        id: '19146',
        category: 'lam-sach',
        name: 'Oil Buster White Clay Acne Action Biore 100g',
        price: '65.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/oil-buster-white-clay-acne-action-biore-100g_00566.webp',
      },
      {
        id: '19145',
        category: 'lam-sach',
        name: 'Oil Buster White Clay Acne Action Biore 50g',
        price: '40.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/oil-buster-white-clay-acne-action-biore-50g_00272.webp',
      },
      {
        id: '19144',
        category: 'lam-sach',
        name: 'Foam Oil Clear Biore 100g',
        price: '65.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/foam-oil-clear-biore-100g_00383.webp',
      },
      {
        id: '19142',
        category: 'lam-sach',
        name: 'Foam Deep Action Extra Cool Biore 100g',
        price: '65.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/foam-deep-action-extra-cool-biore-100g_00348.webp',
      },
    ],
    filters: {
      LOAI_TIN: ['Bông tẩy trang', 'Sữa rửa mặt', 'Tẩy tế bào chết', 'Tẩy trang', 'Toner'],
      QUY_CACH: [
        '50ml',
        '100ml',
        '200ml',
        '150ml',
        '250ml',
        '500ml',
        '10g',
        '50g',
        '75g',
        '30g',
        '100g',
      ],
      NHA_SAN_XUAT: ['Uriage', 'Fixderma Indian', 'Aloe Vera of America, Inc.'],
      THUONG_HIEU: ['Uriage', 'Kingphar', 'Transino', 'Biore', 'Bioderma', 'Cetaphil', 'Senka'],
      XUAT_XU: [
        'Pháp',
        'Việt Nam',
        'Anh',
        'Thái lan',
        'Hàn Quốc',
        'Italia',
        'Ấn độ',
        'Canada',
        'Mỹ',
        'Đức',
        'Úc',
        'Nhật Bản',
        'Tây Ban Nha',
        'Philippine',
      ],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  multivitamin: {
    title: 'Multivitamin',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Vitamin theo tuổi'],
    totalProducts: 271,
    products: [
      {
        id: '23833',
        category: 'thuc-pham-chuc-nang',
        name: 'Lacta+ DoppelHerz 3 vỉ x 10 viên – Viên uống hỗ trợ sau sinh',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lacta-doppelherz-3-vi-x-10-vien-vien-uong-ho-tro-sau-sinh-0.webp',
        hasPrescription: true,
      },
      {
        id: '22173',
        category: 'thuc-pham-chuc-nang',
        name: 'Feroglobin Fizz Vitabiotics tuýp 20 viên - Viên sủi bổ sung sắt',
        price: '343.000 đ',
        subPrice: '17,150 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/feroglobin-fizz-vitabiotics-tuyp-20-vien-vien-sui-bo-sung-sat-0.webp',
      },
      {
        id: '21951',
        category: 'thuc-pham-chuc-nang',
        name: 'Vitamin 3B Vita 10 vỉ x 10 viên - Bổ sung một số vitamin nhóm B',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vitamin-3b-vita-10-vi-x-10-vien-bo-sung-mot-so-vitamin-nhom-b-0.webp',
        hasPrescription: true,
      },
      {
        id: '21481',
        category: 'thuc-pham-chuc-nang',
        name: 'Buonavit Baby Buona 20ml - Bổ sung Vitamin cho bé',
        price: '243.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/energia-oro-buona-10-lo-x-10ml-ho-tro-bieng-an-cho-tre-0.webp',
      },
      {
        id: '21640',
        category: 'thuc-pham-chuc-nang',
        name: 'C Multi Ích Nhân 16 viên - Hỗ trợ tăng cường sức khỏe (hương cam)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/c-multi-ich-nhan-16-vien-ho-tro-tang-cuong-suc-khoe-huong-cam-0.webp',
        hasPrescription: true,
      },
      {
        id: '21643',
        category: 'thuc-pham-chuc-nang',
        name: 'C Multi Ích Nhân 16 viên – Hỗ trợ tăng cường sức khỏe (hương chanh)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/c-multi-ich-nhan-16-vien-ho-tro-tang-cuong-suc-khoe-huong-chanh-0.webp',
        hasPrescription: true,
      },
      {
        id: '21414',
        category: 'thuc-pham-chuc-nang',
        name: 'Multi Vitamins MediUSA 30 viên - Bổ sung Vitamin, khoáng chất cho cơ thể',
        price: '360.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/multi-vitamins-mediusa-30-vien-bo-sung-vitamin-khoang-chat-cho-co-the-0.webp',
      },
      {
        id: '21413',
        category: 'thuc-pham-chuc-nang',
        name: 'Multi Vitamins Drop Fizz MediUSA 20 viên - Bổ sung Vitamin, khoáng chất cho cơ thể',
        price: '119.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/multi-vitamins-drop-fizz-mediusa-20-vien-bo-sung-vitamin-khoang-chat-cho-co-the-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Multivitamin cho bé',
        'Multivitamin cho mẹ bầu',
        'Multivitamin cho nam',
        'Multivitamin cho nữ',
        'Multivitamin cho nam 50+',
        'Multivitamin cho nữ 50+',
      ],
      QUY_CACH: [
        '240 viên',
        '100 viên',
        '10 viên',
        '12 viên',
        '30 viên',
        '50 viên',
        '60 viên',
        '90 viên',
        '150 viên',
        '220 viên',
        '300 viên',
        '365 viên',
        '100ml',
        '120ml',
        '200ml',
        '250ml',
      ],
      NHA_SAN_XUAT: [
        'Church & Dwight Co., Inc.,',
        'GMP Products Inc',
        'Pharmekal Health Products, LLC',
        'Pfizer',
      ],
      THUONG_HIEU: [
        'Pediakid',
        'Blackmores',
        'USV Pharma',
        'Pfizer',
        'Bayer',
        'Pharmekal',
        'Penta-vite',
        'Mega We care',
      ],
      XUAT_XU: [
        'Pháp',
        'Việt Nam',
        'Anh',
        'Thái lan',
        'Hàn Quốc',
        'Italia',
        'Malaysia',
        'Mỹ',
        'Đức',
        'Úc',
        'New Zealand',
        'Indonesia',
      ],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  'bo-nao': {
    title: 'Bổ não',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Bổ não'],
    totalProducts: 309,
    products: [
      {
        id: '22959',
        category: 'thuc-pham-chuc-nang',
        name: 'Bacopa Extra 500mg USA Pharma 3 vỉ x 10 viên - Hỗ trợ tuần hoàn máu não',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bacopa-extra-500mg-usa-pharma-3-vi-x-10-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
        hasPrescription: true,
      },
      {
        id: '22215',
        category: 'thuc-pham-chuc-nang',
        name: 'Gedachtnis Kapseln Sanct Bernhard 30 viên - Hỗ trợ tuần hoàn máu não',
        price: '320.000 đ',
        subPrice: '10,667 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gedachtnis-kapseln-sanct-bernhard-30-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
      },
      {
        id: '23755',
        category: 'thuc-pham-chuc-nang',
        name: 'Genius Brains DHA Lifestream 30 viên - Viên bổ não DHA cho trẻ em',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/genius-brains-dha-lifestream-30-vien-vien-bo-nao-dha-cho-tre-em-0.webp',
        hasPrescription: true,
      },
      {
        id: '23271',
        category: 'thuc-pham-chuc-nang',
        name: 'New Neuro 2000 10 vỉ x 10 viên - Hỗ trợ tuần hoàn máu não',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/new-neuro-2000-10-vi-x-10-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
        hasPrescription: true,
      },
      {
        id: '21865',
        category: 'thuc-pham-chuc-nang',
        name: 'Fine Ginkgo Plus Fine Japan 400 viên - Hỗ trợ tuần hoàn máu não',
        price: '972.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fine-ginkgo-plus-fine-japan-400-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
      },
      {
        id: '21636',
        category: 'thuc-pham-chuc-nang',
        name: 'Hoạt Huyết Thông Mạch Ích Nhân 3 vỉ x 10 viên - Hỗ trợ hoạt huyết',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hoat-huyet-thong-mach-ich-nhan-3-vi-x-10-vien-ho-tro-hoat-huyet-0.webp',
        hasPrescription: true,
      },
      {
        id: '21651',
        category: 'thuc-pham-chuc-nang',
        name: 'Hoạt Huyết Thông Mạch Traphaco 3 vỉ x 10 viên - Hỗ trợ hoạt huyết, thông mạch',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hoat-huyet-thong-mach-traphaco-3-vi-x-10-vien-ho-tro-hoat-huyet-thong-mach-0.webp',
        hasPrescription: true,
      },
      {
        id: '21460',
        category: 'thuc-pham-chuc-nang',
        name: 'GinkoNato Coenzym Q10 Anphar 10 vỉ x 10 viên - Hỗ trợ tuần hoàn máu não',
        price: '98.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ginkonato-coenzym-q10-anphar-10-vi-x-10-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
      },
      {
        id: '21392',
        category: 'thuc-pham-chuc-nang',
        name: 'Brain Focus MediUSA 30 viên - Hỗ trợ cải thiện trí nhớ',
        price: '309.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/brain-focus-mediusa-30-vien-ho-tro-cai-thien-tri-nho-0.webp',
      },
      {
        id: '21350',
        category: 'thuc-pham-chuc-nang',
        name: 'Brain Care MediUSA 30 viên - Hỗ trợ tuần hoàn máu não',
        price: '309.000 đ',
        subPrice: '10,300 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/brain-care-mediusa-30-vien-ho-tro-tuan-hoan-mau-nao-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Fish oil - Omega',
        'An thần',
        'Bổ phổi - Hô hấp',
        'Lợi khuẩn - Tiêu hóa',
        'Ung Thư',
        'Tuyến giáp',
        'Vitamin theo từ',
        'Khoáng chất',
        'Thực phẩm bổ sung',
        'Multivitamin',
        'Làm đẹp',
        'Thảo dược bổ sung',
        'Dành cho bé',
        'Dành cho mẹ bầu',
        'Bổ mắt',
        'Bổ não',
        'Bổ gan',
        'Bổ thận',
        'Thực phẩm giảm cân',
        'Giãn tĩnh mạch - Trĩ',
        'Tiểu đường',
        'Cai rượu',
        'Bổ xương khớp, gout',
        'Tim mạch, huyết áp',
        'Ngủ ngon',
        'Thính giác',
        'Tăng sức đề kháng',
      ],
      QUY_CACH: [
        '240 viên',
        '100 viên',
        '01 viên',
        '12 viên',
        '30 viên',
        '50 viên',
        '60 viên',
        '90 viên',
        '120 viên',
        '180 viên',
        '20 viên',
      ],
      NHA_SAN_XUAT: [
        'IMC Quang Minh',
        'Vinaphar',
        'GMP Products Inc',
        'Aloe Vera of America, Inc.',
      ],
      THUONG_HIEU: [
        "Puritan's Pride",
        'USV Pharma',
        'Mason Natural',
        "Nature's Bounty",
        'Swanson',
        'Forever',
        'Healthy Care',
      ],
      XUAT_XU: ['Việt Nam', 'Hàn Quốc', 'Italia', 'Mỹ', 'Úc', 'Nhật Bản', 'New Zealand', 'Hungary'],
      HOAT_CHAT: [
        'Vitamin B3 (Niacinamide)',
        'Uất kim',
        'Thông đất (Thạch tùng răng cưa)',
        'Hồng táo',
      ],
    },
  },
  'cham-soc-lam-dep': {
    title: 'Chăm sóc & Làm đẹp',
    totalProducts: 2599,
    products: [
      {
        id: '22275',
        category: 'cham-soc-lam-dep',
        name: 'Aroma-Bad Maracuja-Magnolie Sanct Bernhard 500ml - Sữa tắm (hoa mộc lan)',
        price: '650.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aroma-bad-maracuja-magnolie-sanct-bernhard-500ml-sua-tam-hoa-moc-lan-0.webp',
      },
      {
        id: '22277',
        category: 'cham-soc-lam-dep',
        name: 'Aroma-Bad Lavendel-Orange Sanct Bernhard 500ml - Sữa tắm (oải hương cam)',
        price: '650.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aroma-bad-lavendel-orange-sanct-bernhard-500ml-sua-tam-oai-huong-cam-0.webp',
      },
      {
        id: '22281',
        category: 'cham-soc-lam-dep',
        name: 'Aroma-Bad Romantische Momente Sanct Bernhard 500ml - Sữa tắm (hương hoa)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aroma-bad-romantische-momente-sanct-bernhard-500ml-sua-tam-huong-hoa-0.webp',
        hasPrescription: true,
      },
      {
        id: '23049',
        category: 'cham-soc-lam-dep',
        name: 'SMC AG+ 250ml - Nước súc miệng',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/smc-ag-250ml-nuoc-suc-mieng-0.webp',
        hasPrescription: true,
      },
      {
        id: '22283',
        category: 'cham-soc-lam-dep',
        name: 'Krauter-Creme Gegen Unreine Haut Sanct Bernhard 50ml - Kem dưỡng da, ngừa mụn',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/krauter-creme-gegen-unreine-haut-sanct-bernhard-50ml-kem-duong-da-ngua-mun-0.webp',
      },
      {
        id: '22285',
        category: 'cham-soc-lam-dep',
        name: 'Ringelblumen Lippen-Pflegestift Sanct Bernhard thỏi 8.5ml - Son dưỡng (cúc vạn thọ)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ringelblumen-lippen-pflegestift-sanct-bernhard-thoi-85ml-son-duong-cuc-van-tho-0.webp',
        hasPrescription: true,
      },
      {
        id: '21777',
        category: 'cham-soc-lam-dep',
        name: 'Mogarna Cream CPC1 Hà Nội tuýp 15g - Kem bôi giảm đau trĩ',
        price: '95.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mogarna-cream-cpc1-ha-noi-tuyp-15g-kem-boi-giam-dau-tri-0.webp',
      },
      {
        id: '22549',
        category: 'cham-soc-lam-dep',
        name: 'Derma Forte Advanced Alcom tuýp 15g - Gel ngừa mụn trứng cá',
        price: '98.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/derma-forte-advanced-alcom-tuyp-15g-gel-ngua-mun-trung-ca-0.webp',
      },
      {
        id: '23081',
        category: 'cham-soc-lam-dep',
        name: 'Biluma Galderma tuýp 15g - Kem dưỡng trắng da',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/biluma-galderma-tuyp-15g-kem-duong-trang-da-0.webp',
      },
      {
        id: '21803',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Gentle Foaming Cleanser CPC1 Hà Nội 175ml - Bọt rửa mặt',
        price: '150.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-gentle-foaming-cleanser-cpc1-ha-noi-175ml-bot-rua-mat-0.webp',
      },
      {
        id: '24107',
        category: 'cham-soc-lam-dep',
        name: 'Mydugyno Nature Pharma 180ml - Dung dịch vệ sinh phụ nữ',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mydugyno-nature-pharma-180ml-dung-dich-ve-sinh-phu-nu-0.webp',
        hasPrescription: true,
      },
      {
        id: '21804',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Face Cream CPC1 Hà Nội lọ 50g - Kem dưỡng ẩm da',
        price: '166.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-face-cream-cpc1-ha-noi-lo-50g-kem-duong-am-da-0.webp',
      },
      {
        id: '21805',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Face Serum CPC1 Hà Nội lọ 30ml - Tinh chất dưỡng da',
        price: '158.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-face-serum-cpc1-ha-noi-lo-30ml-tinh-chat-duong-da-0.webp',
      },
      {
        id: '21806',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Facial Cleanser CPC1 Hà Nội tuýp 100ml - Sữa rửa mặt',
        price: '75.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-facial-cleanser-cpc1-ha-noi-tuyp-100ml-sua-rua-mat-0.webp',
      },
      {
        id: '21807',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Micellar Cleansing Water CPC1 Hà Nội 200ml - Nước tẩy trang',
        price: '160.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-micellar-cleansing-water-cpc1-ha-noi-200ml-nuoc-tay-trang-0.webp',
      },
      {
        id: '21808',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Mineral Spray CPC1 Hà Nội 100ml - Xịt khoáng dưỡng da',
        price: '75.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-mineral-spray-cpc1-ha-noi-100ml-xit-khoang-duong-da-0.webp',
      },
      {
        id: '21809',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Moisturizing Cream CPC1 Hà Nội tuýp 100g - Kem dưỡng ẩm',
        price: '176.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-moisturizing-cream-cpc1-ha-noi-tuyp-100g-kem-duong-am-0.webp',
      },
      {
        id: '21810',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Suncream CPC1 Hà Nội tuýp 50g - Kem chống nắng',
        price: '185.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-suncream-cpc1-ha-noi-tuyp-50g-kem-chong-nang-0.webp',
      },
      {
        id: '21811',
        category: 'cham-soc-lam-dep',
        name: 'Aricamun Toner CPC1 Hà Nội 145ml - Nước cân bằng da',
        price: '149.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricamun-toner-cpc1-ha-noi-145ml-nuoc-can-bang-da-0.webp',
      },
      {
        id: '21819',
        category: 'cham-soc-lam-dep',
        name: 'Conadin Conditioner CPC1 Hà Nội hũ 300g - Kem xả tóc',
        price: '120.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/conadin-conditioner-cpc1-ha-noi-hu-300g-kem-xa-toc-0.webp',
      },
      {
        id: '21820',
        category: 'cham-soc-lam-dep',
        name: 'Conadin Shampoo CPC1 Hà Nội 285ml - Dầu gội đầu',
        price: '96.800 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/conadin-shampoo-cpc1-ha-noi-285ml-dau-goi-dau-0.webp',
      },
      {
        id: '21822',
        category: 'cham-soc-lam-dep',
        name: 'Conadin Roll-On Fresh Clean CPC1 Hà Nội lọ 15ml - Lăn khử mùi',
        price: '149.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/conadin-roll-on-fresh-clean-cpc1-ha-noi-lo-15ml-lan-khu-mui-0.webp',
      },
      {
        id: '21823',
        category: 'cham-soc-lam-dep',
        name: 'Conadin Roll-On Strong CPC1 Hà Nội lọ 15ml - Lăn khử mùi',
        price: '174.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/conadin-roll-on-strong-cpc1-ha-noi-lo-15ml-lan-khu-mui-0.webp',
      },
      {
        id: '21824',
        category: 'cham-soc-lam-dep',
        name: 'Zentokid CPC1 Hà Nội 250ml - Sữa tắm gội cho bé',
        price: '89.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zentokid-cpc1-ha-noi-250ml-sua-tam-goi-cho-be-0.webp',
      },
      {
        id: '21845',
        category: 'cham-soc-lam-dep',
        name: 'pH.Balance Bio Intimate Gel CPC1 Hà Nội 200ml - Gel bọt (nhạy cảm)',
        price: '98.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/phbalance-bio-intimate-gel-cpc1-ha-noi-200ml-gel-bot-dung-dich-ve-sinh-phu-nu-0.webp',
      },
      {
        id: '26453',
        category: 'cham-soc-lam-dep',
        name: 'Lactacyd Ever Fresh 500g - Sữa tắm',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lactacyd-ever-fresh-500g-sua-tam-0.webp',
        hasPrescription: true,
      },
      {
        id: '21846',
        category: 'cham-soc-lam-dep',
        name: 'pH.Balance Bio Intimate Gel CPC1 Hà Nội 200ml – Gel bọt (tươi mát)',
        price: '98.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/phbalance-bio-intimate-gel-cpc1-ha-noi-200ml-gel-bot-tuoi-mat-0.webp',
      },
      {
        id: '21847',
        category: 'cham-soc-lam-dep',
        name: 'pH.Balance Protect Intimate Gel CPC1 Hà Nội 200ml – Gel bọt (bảo vệ)',
        price: '139.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/phbalance-protect-intimate-gel-cpc1-ha-noi-200ml-gel-bot-bao-ve-1.webp',
      },
      {
        id: '26455',
        category: 'cham-soc-lam-dep',
        name: 'Lactacyd Healthy Bright 500g - Sữa tắm',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lactacyd-healthy-bright-500g-sua-tam-0.webp',
        hasPrescription: true,
      },
      {
        id: '26457',
        category: 'cham-soc-lam-dep',
        name: 'Lactacyd Soft Silky 150ml - Dung dịch vệ sinh phụ nữ',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lactacyd-soft-silky-150ml-dung-dich-ve-sinh-phu-nu-0.webp',
        hasPrescription: true,
      },
    ],
    filters: {
      LOAI_TIN: ['Chăm sóc da mặt', 'Chăm sóc cơ thể', 'Chăm sóc tóc', 'Trang điểm'],
      QUY_CACH: [
        '10ml',
        '15ml',
        '40ml',
        '50ml',
        '75ml',
        '100ml',
        '150ml',
        '300ml',
        '130ml',
        '355ml',
        '385ml',
        '50g',
      ],
      NHA_SAN_XUAT: [
        'Uriage',
        'Fixderma Indian',
        'Aloe Vera of America, Inc.',
        'Hendel LLC',
        'Golden Health PTY Ltd',
        'Star Combo Australia Pty Ltd',
      ],
      THUONG_HIEU: [
        'Uriage',
        'Costar',
        'Golden Health',
        'Shiseido',
        'Summer’s Eve',
        'Fixderma',
        'Forever',
      ],
      XUAT_XU: [
        'Pháp',
        'Việt Nam',
        'Thái lan',
        'Hàn Quốc',
        'Ba Lan',
        'Nga',
        'Ấn độ',
        'Mỹ',
        'Úc',
        'Nhật Bản',
        'Nam Phi',
        'EU',
      ],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  thuoc: {
    title: 'Thuốc',
    totalProducts: 10299,
    products: [
      {
        id: '21760',
        category: 'thuoc',
        name: 'Nebusal 6 CPC1 Hà Nội 1 vỉ x 5 ống x 5ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-6-cpc1-ha-noi-1-vi-x-5-ong-x-5ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '21761',
        category: 'thuoc',
        name: 'Zencombi CPC1 Hà Nội 10 lọ x 2.5ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zencombi-cpc1-ha-noi-10-lo-x-25ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '23041',
        category: 'thuoc',
        name: 'Thalide 100 United Biotech 3 vỉ x 10 viên',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thalide-100-united-biotech-3-vi-x-10-vien-0.webp',
        hasPrescription: true,
      },
      {
        id: '23297',
        category: 'thuoc',
        name: 'Prorid 5mg Yoo Young 10 vỉ x 10 viên (Finasteride)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/prorid-5mg-yoo-young-10-vi-x-10-vien-finasteride-0.webp',
        hasPrescription: true,
      },
      {
        id: '23553',
        category: 'thuoc',
        name: 'Aricept Evess 10mg Eisai 2 vỉ x 14 viên (Donepezil)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricept-evess-10mg-eisai-2-vi-x-14-vien-donepezil-0.webp',
        hasPrescription: true,
      },
      {
        id: '25345',
        category: 'thuoc',
        name: 'Redstomz 20 Baniphar 2 vỉ x 10 viên (Esomeprazole)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/redstomz-20-baniphar-2-vi-x-10-vien-esomeprazole-0.webp',
        hasPrescription: true,
      },
      {
        id: '21762',
        category: 'thuoc',
        name: 'Pamol 120 CPC1 Hà Nội 20 ống x 5ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/pamol-120-cpc1-ha-noi-20-ong-x-5ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '21763',
        category: 'thuoc',
        name: 'Pamol 250 CPC1 Hà Nội 20 ống x 5ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/pamol-250-cpc1-ha-noi-20-ong-x-5ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '23043',
        category: 'thuoc',
        name: 'Propranolol 40mg TV.Pharm 10 vỉ x 10 viên',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/propranolol-40mg-tvpharm-10-vi-x-10-vien-0.webp',
        hasPrescription: true,
      },
      {
        id: '23555',
        category: 'thuoc',
        name: 'Aricept Evess 5mg Eisai 2 vỉ x 14 viên (Donepezil)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/aricept-evess-5mg-eisai-2-vi-x-14-vien-donepezil-0.webp',
        hasPrescription: true,
      },
      {
        id: '23811',
        category: 'thuoc',
        name: 'Savi Acarbose 25 Savipharm 10 vỉ x 10 viên (Acarbose)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/savi-acarbose-25-savipharm-10-vi-x-10-vien-acarbose-0.webp',
        hasPrescription: true,
      },
      {
        id: '24579',
        category: 'thuoc',
        name: 'Teaves Vian 25 gói x 1.5g',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/teaves-vian-25-goi-x-15g-0.webp',
        hasPrescription: true,
      },
      {
        id: '24835',
        category: 'thuoc',
        name: 'Cefurovid 250 Vidipha 10 vỉ x 10 viên (Cefuroxim)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cefurovid-250-vidipha-10-vi-x-10-vien-cefuroxim-0.webp',
        hasPrescription: true,
      },
      {
        id: '25347',
        category: 'thuoc',
        name: 'Tahero 325 Phương Đông 30 ống x 5ml (Paracetamol)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tahero-325-phuong-dong-30-ong-x-5ml-paracetamol-0.webp',
        hasPrescription: true,
      },
      {
        id: '25603',
        category: 'thuoc',
        name: 'Gon Sa Ezeti-10 Davipharm 6 vỉ x 10 viên (Ezetimibe)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gon-sa-ezeti-10-davipharm-6-vi-x-10-vien-ezetimibe-0.webp',
        hasPrescription: true,
      },
      {
        id: '25859',
        category: 'thuoc',
        name: 'Shakes 30mg Davipharm 4 vỉ x 7 viên (Mirtazapine)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/shakes-30mg-davipharm-4-vi-x-7-vien-mirtazapine-0.webp',
        hasPrescription: true,
      },
      {
        id: '26627',
        category: 'thuoc',
        name: 'Vacoros 10 Vacopharm 10 vỉ x 10 viên (Rosuvastatin)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vacoros-10-vacopharm-10-vi-x-10-vien-rosuvastatin-0.webp',
        hasPrescription: true,
      },
      {
        id: '27139',
        category: 'thuoc',
        name: 'Zy-10 Forte Indchemie 3 vỉ x 10 viên (Coenzyme Q10)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zy-10-forte-indchemie-3-vi-x-10-vien-coenzyme-q10-0.webp',
        hasPrescription: true,
      },
      {
        id: '21765',
        category: 'thuoc',
        name: 'Nước Cất Ống Nhựa CPC1 Hà Nội 50 ống x 5ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nuoc-cat-ong-nhua-cpc1-ha-noi-50-ong-x-5ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '22533',
        category: 'thuoc',
        name: 'S-Profen 400 Stellapharm 10 vỉ x 10 viên',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/s-profen-400-stellapharm-10-vi-x-10-vien-0.webp',
        hasPrescription: true,
      },
      {
        id: '22789',
        category: 'thuoc',
        name: 'Hezepril 10 Medisun 6 vỉ x 10 viên',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hezepril-10-medisun-6-vi-x-10-vien-2.webp',
        hasPrescription: true,
      },
      {
        id: '23045',
        category: 'thuoc',
        name: 'Gorsyta 5mg Krka 8 vỉ x 7 viên (Olanzapine)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gorsyta-5mg-krka-8-vi-x-7-vien-olanzapine-0.webp',
        hasPrescription: true,
      },
      {
        id: '23301',
        category: 'thuoc',
        name: 'Seroplex 15mg Lundbeck 2 vỉ x 14 viên (Escitalopram)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/seroplex-15mg-lundbeck-2-vi-x-14-vien-escitalopram-2.webp',
        hasPrescription: true,
      },
      {
        id: '23557',
        category: 'thuoc',
        name: 'Nadyestin 20 Nadyphar 6 vỉ x 10 viên (Ebastin)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nadyestin-20-nadyphar-6-vi-x-10-vien-ebastin-0.webp',
        hasPrescription: true,
      },
      {
        id: '23813',
        category: 'thuoc',
        name: 'Savi Acarbose 100 Savipharm 10 vỉ x 10 viên (Acarbose)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/savi-acarbose-100-savipharm-10-vi-x-10-vien-acarbose-0.webp',
        hasPrescription: true,
      },
      {
        id: '23047',
        category: 'thuoc',
        name: 'Febuday 40 MSN 3 vỉ x 10 viên (Febuxostat)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/febuday-40-msn-3-vi-x-10-vien-febuxostat-0.webp',
        hasPrescription: true,
      },
      {
        id: '24327',
        category: 'thuoc',
        name: 'Xaravix 10 DHG Pharma 1 vỉ x 14 viên (Rivaroxaban)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/xaravix-10-dhg-pharma-1-vi-x-14-vien-rivaroxaban-0.webp',
        hasPrescription: true,
      },
      {
        id: '25351',
        category: 'thuoc',
        name: 'Tahero 500 Phương Đông 20 ống x 10ml (Paracetamol)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tahero-500-phuong-dong-20-ong-x-10ml-paracetamol-0.webp',
        hasPrescription: true,
      },
      {
        id: '26631',
        category: 'thuoc',
        name: 'Vacoros 20 Vacopharm 10 vỉ x 10 viên (Rosuvastatin)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vacoros-20-vacopharm-10-vi-x-10-vien-rosuvastatin-0.webp',
        hasPrescription: true,
      },
      {
        id: '26887',
        category: 'thuoc',
        name: 'Atirlic An Thiên 20 gói x 15g (Nhôm hydroxyd + Magnesi hydroxyd)',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/atirlic-an-thien-20-goi-x-15g-nhom-hydroxyd-magnesi-hydroxyd-0.webp',
        hasPrescription: true,
      },
    ],
    filters: {
      LOAI_TIN: [
        'Thuốc kháng sinh, Kháng nấm',
        'Thuốc tim mạch & Huyết áp',
        'Thuốc tiểu đường',
        'Thuốc hướng thần & Cai nghiện',
        'Thuốc chống dị ứng ( kháng histamin)',
        'Thuốc dùng ngoài',
        'Thuốc Hô Hấp',
        'Thuốc kháng viêm, giảm đau & hạ sốt',
        'Thuốc cường dương',
        'Thuốc Tiêu Hóa, gan mật',
        'Thuốc trị ung thư, u bướu',
        'Thuốc giãn mạch',
      ],
      QUY_CACH: [
        '01 viên',
        '02 viên',
        '360 viên',
        '50ml',
        '250ml',
        '500ml',
        '20 viên',
        '25g',
        '20ml',
        '60ml',
        '16 gói',
      ],
      NHA_SAN_XUAT: [
        'Merck Sharp & Dohme Corp.,',
        'Glenmark Pharmaceuticals',
        'Phil Inter Pharma',
        'Dược phẩm OPV',
        'Hendel LLC',
        'SANOFI',
        'Pfizer',
      ],
      THUONG_HIEU: [
        'Hisamitsu',
        'Pfizer',
        'Bayer',
        'Synmedic',
        'Glenmark',
        'Stella',
        'B. Braun',
        'Otsuka OPV',
      ],
      XUAT_XU: [
        'Đài loan',
        'Pháp',
        'Việt Nam',
        'Thái lan',
        'Hàn Quốc',
        'Nga',
        'Ấn độ',
        'Slovenia',
        'Thụy Sĩ',
        'Thụy Điển',
        'Mỹ',
        'Đức',
      ],
      HOAT_CHAT: [
        'Cefotaxim',
        'Clarithromycin',
        'Tadalafil',
        'Pioglitazone',
        'Glimepiride',
        'Metformin',
        'Lactulose',
        'Sorbitol',
        'Vitamin B3 (Niacinamide)',
        'Glycin',
      ],
    },
  },
  'thuc-pham-chuc-nang': {
    title: 'Thực phẩm chức năng',
    totalProducts: 5718,
    products: [
      {
        id: '25089',
        category: 'thuc-pham-chuc-nang',
        name: 'Vital E Eurovit 3 vỉ x 10 viên - Hỗ trợ lão hoá da',
        price: '99.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vital-e-eurovit-3-vi-x-10-vien-ho-tro-lao-hoa-da-0.webp',
      },
      {
        id: '26113',
        category: 'thuc-pham-chuc-nang',
        name: 'Heposal CVI Pharma 45 viên - Hỗ trợ giải độc gan',
        price: '450.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/heposal-cvi-pharma-45-vien-ho-tro-giai-doc-gan-0.webp',
      },
      {
        id: '25091',
        category: 'thuc-pham-chuc-nang',
        name: 'Vilamin E400 Eurovit 3 vỉ x 10 viên - Bổ sung vitamin E cho cơ thể',
        price: '155.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vilamin-e400-eurovit-3-vi-x-10-vien-bo-sung-vitamin-e-cho-co-the-0.webp',
      },
      {
        id: '26115',
        category: 'thuc-pham-chuc-nang',
        name: 'CumarGold Beauty CVI Pharma 30 viên - Viên uống đẹp da',
        price: '315.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cumargold-beauty-cvi-pharma-30-vien-vien-uong-dep-da-0.webp',
      },
      {
        id: '25093',
        category: 'thuc-pham-chuc-nang',
        name: 'Collagen Peptis Eurovit 30 viên - Viên uống sáng da',
        price: '365.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/collagen-peptis-eurovit-30-vien-vien-uong-sang-da-0.webp',
      },
      {
        id: '21766',
        category: 'thuc-pham-chuc-nang',
        name: 'Zentokid D3 K2 CPC1 Hà Nội lọ 5ml - Hỗ trợ bổ sung Calci cho bé',
        price: '99.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zentokid-d3-k2-cpc1-ha-noi-lo-5ml-ho-tro-bo-sung-calci-cho-be-0.webp',
      },
      {
        id: '21767',
        category: 'thuc-pham-chuc-nang',
        name: 'Cjel Calci D3 K2 CPC1 Hà Nội 20 gói x 10g - Bổ sung Calci, Vitamin D3',
        price: '120.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cjel-calci-d3-k2-cpc1-ha-noi-20-goi-x-10g-bo-sung-calci-vitamin-d3-0.webp',
      },
      {
        id: '22791',
        category: 'thuc-pham-chuc-nang',
        name: 'Kudos Probiotics 30 viên - Bổ sung lợi khuẩn đường ruột',
        price: '381.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kudos-probiotics-30-vien-bo-sung-loi-khuan-duong-ruot-0.webp',
      },
      {
        id: '24583',
        category: 'thuc-pham-chuc-nang',
        name: 'Star Immune Lozenge Orange OPV 5 vỉ x 4 viên - Viên ngậm',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/star-immune-lozenge-orange-opv-5-vi-x-4-vien-vien-ngam-0.webp',
        hasPrescription: true,
      },
      {
        id: '25095',
        category: 'thuc-pham-chuc-nang',
        name: 'Skins L-Cystine Eurovit 3 vỉ x 10 viên - Hỗ trợ tóc, móng chắc khỏe',
        price: '160.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/skins-l-cystine-eurovit-3-vi-x-10-vien-ho-tro-toc-mong-chac-khoe-0.webp',
      },
      {
        id: '22793',
        category: 'thuc-pham-chuc-nang',
        name: 'Gastric Alva 20 gói x 15ml - Hỗ trợ giảm viêm loét dạ dày, tá tràng',
        price: '135.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gastric-alva-20-goi-x-15ml-ho-tro-giam-viem-loet-da-day-ta-trang-0.webp',
      },
      {
        id: '21770',
        category: 'thuc-pham-chuc-nang',
        name: 'Zentokid Vegelax CPC1 Hà Nội 20 ống x 5ml - Hỗ trợ giảm táo bón',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zentokid-vegelax-cpc1-ha-noi-20-ong-x-5ml-ho-tro-giam-tao-bon-0.webp',
        hasPrescription: true,
      },
      {
        id: '25099',
        category: 'thuc-pham-chuc-nang',
        name: 'Kinh Phụ Khang Eurovit 30 viên - Giúp bổ khí huyết',
        price: '99.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kinh-phu-khang-eurovit-30-vien-giup-bo-khi-huyet-0.webp',
      },
      {
        id: '21773',
        category: 'thuc-pham-chuc-nang',
        name: 'Finelus DC CPC1 Hà Nội 10 lọ x 10ml - Hỗ trợ giảm rối loạn tiêu hóa',
        price: '230.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/finelus-dc-cpc1-ha-noi-10-lo-x-10ml-ho-tro-giam-roi-loan-tieu-hoa-0.webp',
      },
      {
        id: '25103',
        category: 'thuc-pham-chuc-nang',
        name: 'Hemavital Eurovit 3 vỉ x 10 viên - Bổ sung sắt, acid folic cho cơ thể',
        price: '150.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hemavital-eurovit-3-vi-x-10-vien-bo-sung-sat-acid-folic-cho-co-the-0.webp',
      },
      {
        id: '25105',
        category: 'thuc-pham-chuc-nang',
        name: 'Huyết Long Tán Eurovit 3 vỉ x 10 viên - Hỗ trợ lưu thông khí huyết',
        price: '99.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/huyet-long-tan-eurovit-3-vi-x-10-vien-ho-tro-luu-thong-khi-huyet-0.webp',
      },
      {
        id: '23827',
        category: 'thuc-pham-chuc-nang',
        name: 'Active Breath Doppelherz 3 vỉ x 10 viên - Hỗ trợ sức khỏe của phổi',
        price: '535.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/active-breath-doppelherz-3-vi-x-10-vien-ho-tro-suc-khoe-cua-phoi-0.webp',
      },
      {
        id: '25107',
        category: 'thuc-pham-chuc-nang',
        name: 'Hàu Biển Plus Eurovit 30 viên - Hỗ trợ tăng cường sinh lý nam',
        price: '295.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hau-bien-plus-eurovit-30-vien-ho-tro-tang-cuong-sinh-ly-nam-0.webp',
      },
      {
        id: '23573',
        category: 'thuc-pham-chuc-nang',
        name: 'Eyefine Fujina lọ 30 viên - Viên uống bảo vệ mắt',
        price: '480.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/eyefine-fujina-lo-30-vien-vien-uong-bao-ve-mat-0.webp',
      },
      {
        id: '23831',
        category: 'thuc-pham-chuc-nang',
        name: 'B-Complex Doppelherz 2 vỉ x 15 viên - Hỗ trợ tăng cường sức khỏe',
        price: '392.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/b-complex-doppelherz-2-vi-x-15-vien-ho-tro-tang-cuong-suc-khoe-0.webp',
      },
      {
        id: '25111',
        category: 'thuc-pham-chuc-nang',
        name: 'Hepa Vital Eurovit 10 vỉ x 5 viên - Hỗ trợ bổ gan, bảo vệ gan',
        price: '175.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hepa-vital-eurovit-10-vi-x-5-vien-ho-tro-bo-gan-bao-ve-gan-0.webp',
      },
      {
        id: '21784',
        category: 'thuc-pham-chuc-nang',
        name: 'Zodiac Jelly CPC1 Hà Nội túi 12 gói - Bổ sung vitamin nhóm B',
        price: '24.640 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zodiac-jelly-cpc1-ha-noi-tui-12-goi-bo-sung-vitamin-nhom-b-0.webp',
      },
      {
        id: '23833',
        category: 'thuc-pham-chuc-nang',
        name: 'Lacta+ DoppelHerz 3 vỉ x 10 viên – Viên uống hỗ trợ sau sinh',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lacta-doppelherz-3-vi-x-10-vien-vien-uong-ho-tro-sau-sinh-0.webp',
        hasPrescription: true,
      },
      {
        id: '25113',
        category: 'thuc-pham-chuc-nang',
        name: 'Dầu Gấc Omega 3-6-9 Eurovit 30 viên - Hỗ trợ giảm cholesterol trong máu',
        price: '160.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-gac-omega-3-6-9-eurovit-30-vien-ho-tro-giam-cholesterol-trong-mau-0.webp',
      },
      {
        id: '21786',
        category: 'thuc-pham-chuc-nang',
        name: 'Smartkid CPC1 Hà Nội chai 150ml - Hỗ trợ tăng cường sức đề kháng',
        price: '88.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/smartkid-cpc1-ha-noi-chai-150ml-ho-tro-tang-cuong-suc-de-khang-0.webp',
      },
      {
        id: '21787',
        category: 'thuc-pham-chuc-nang',
        name: 'Cjel Filatos CPC1 Hà Nội 20 gói x 15g - Hỗ trợ tăng cường sức đề kháng',
        price: '68.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cjel-filatos-cpc1-ha-noi-20-goi-x-15g-ho-tro-tang-cuong-suc-de-khang-0.webp',
      },
      {
        id: '23835',
        category: 'thuc-pham-chuc-nang',
        name: 'Kinder Visio Doppelherz lọ 60 viên - Hỗ trợ thị lực cho bé',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kinder-visio-doppelherz-lo-60-vien-ho-tro-thi-luc-cho-be-0.webp',
        hasPrescription: true,
      },
      {
        id: '25115',
        category: 'thuc-pham-chuc-nang',
        name: 'Trinh Nữ Khang Eurovit 50 viên - Hỗ trợ giảm tiền liệt tuyến',
        price: '175.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/trinh-nu-khang-eurovit-50-vien-ho-tro-giam-tien-liet-tuyen-0.webp',
      },
      {
        id: '21788',
        category: 'thuc-pham-chuc-nang',
        name: 'Zentokid Zinc CPC1 Hà Nội 20 ống x 5ml - Bổ sung kẽm, vitamin C',
        price: '110.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zentokid-zinc-cpc1-ha-noi-20-ong-x-5ml-bo-sung-kem-vitamin-c-0.webp',
      },
      {
        id: '21789',
        category: 'thuc-pham-chuc-nang',
        name: 'Zentokid CPC1 Hà Nội 10 ống x 10ml - Giúp bồi bổ cơ thể',
        price: '180.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/zentokid-cpc1-ha-noi-10-ong-x-10ml-giup-boi-bo-co-the-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Fish oil - Omega',
        'An thần',
        'Bổ phổi - Hô hấp',
        'Lợi khuẩn - Tiêu hóa',
        'Ung Thư',
        'Tuyến giáp',
        'Vitamin theo từ',
        'Khoáng chất',
        'Thực phẩm bổ sung',
        'Multivitamin',
        'Làm đẹp',
        'Thảo dược bổ sung',
      ],
      QUY_CACH: [
        '240 viên',
        '100 viên',
        '30 viên',
        '60 viên',
        '90 viên',
        '120 viên',
        '180 viên',
        '200 viên',
        '300 viên',
        '375 viên',
        '365 viên',
        '250 viên',
      ],
      NHA_SAN_XUAT: [
        'Bio Island',
        'Vinaphar',
        'Nam Lạng JSC',
        'Kobayashi Pharmaceutical Co., Ltd.',
        'DIC Life Tech Co., Ltd',
        "Nature's Bounty",
        'Pediakid',
        "Puritan's Pride",
        'SANOFI',
        'Dược Bảo Kỳ Nam',
        'Golden Health PTY Ltd',
        'Dược phẩm NIC Pharma',
      ],
      THUONG_HIEU: [
        'Pediakid',
        'Costar',
        "Puritan's Pride",
        'Sakura',
        'Rebirth',
        'Golden Health',
        'Blackmores',
        'Dr. Select',
        'Shiseido',
        'Kobayashi',
        'Eveline',
        'Mason Natural',
      ],
      XUAT_XU: ['Pháp', 'Việt Nam', 'Ba Lan', 'Mỹ', 'Úc', 'Nhật Bản', 'Philippine'],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
  'bo-gan': {
    title: 'Bổ gan',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng'],
    totalProducts: 132,
    products: [
      {
        id: '2331',
        category: 'thuc-pham-chuc-nang',
        name: 'Boganic Forte Traphaco 5 vỉ x 10 viên - Thuốc bổ gan',
        price: '115.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/boganic-forte-traphaco-5-vi-x-10-vien-thuoc-bo-gan-0.webp',
      },
      {
        id: '12462',
        category: 'thuc-pham-chuc-nang',
        name: 'Bổ gan Earth’s Creation Futusa 60 viên - Hỗ trợ giải độc gan',
        price: '300.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bo-gan-earths-creation-futusa-60-vien-0.webp',
      },
      {
        id: '10935',
        category: 'thuc-pham-chuc-nang',
        name: 'Isopharco Syliver 60 viên - Hỗ trợ thanh nhiệt, giải độc gan',
        price: '115.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tpbvsk-bo-gan-isopharco-syliver-hop-60-vien-0.webp',
      },
      {
        id: '10706',
        category: 'thuc-pham-chuc-nang',
        name: 'Arginine 800mg Plus 60 viên - Hỗ trợ tăng cường chức năng gan',
        price: '115.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tpbvsk-giai-doc-gan-arginine-800mg-plus-hop-60-vien-0.webp',
      },
      {
        id: '9699',
        category: 'thuc-pham-chuc-nang',
        name: 'Legalon 140mg 60 viên - Hỗ trợ bảo vệ tế bào gan',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-bo-gan-legalon-140mg-60-vien-0.webp',
        hasPrescription: true,
      },
      {
        id: '9696',
        category: 'thuc-pham-chuc-nang',
        name: 'Vitraplus Livpro 30 viên - Hỗ trợ bảo vệ tế bào gan',
        price: '253.575 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-bo-gan-vitraplus-livpro-30-vien-0.webp',
      },
      {
        id: '2625',
        category: 'thuc-pham-chuc-nang',
        name: 'Kahagan Khải Hà 100 viên - Thuốc bổ gan',
        price: '46.501 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuoc-bo-gan-kahagan-khai-ha-0.webp',
      },
      {
        id: '6932',
        category: 'thuc-pham-chuc-nang',
        name: 'Giải độc gan Tuệ Linh 60 viên - Cà gai leo, mật nhân',
        price: 'Liên hệ',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/giai-doc-gan-tue-linh-0.webp',
        hasPrescription: true,
      },
    ],
    filters: {
      LOAI_TIN: ['Bổ gan', 'Giải độc gan', 'Mát gan', 'Hỗ trợ men gan', 'Bảo vệ tế bào gan'],
      QUY_CACH: ['30 viên', '50 viên', '60 viên', '100 viên', '90ml'],
      NHA_SAN_XUAT: ['Traphaco', 'Tuệ Linh', 'Khải Hà', 'Earth’s Creation', 'Vitraplus'],
      THUONG_HIEU: ['Boganic', 'Earth’s Creation', 'Tuệ Linh', 'Kahagan', 'Isopharco'],
      XUAT_XU: ['Việt Nam', 'Mỹ', 'Đức'],
      HOAT_CHAT: ['Actiso', 'Cà gai leo', 'Diệp hạ châu', 'Milk Thistle', 'L-Arginine'],
    },
  },
  'ho-tro-giam-can': {
    title: 'Thuốc giảm cân',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Thực phẩm giảm cân'],
    totalProducts: 243,
    products: [
      {
        id: '21801',
        category: 'thuc-pham-chuc-nang',
        name: 'Cjel Befit CPC1 Hà Nội 20 gói x 15g - Hỗ trợ giảm béo',
        price: '180.000 đ',
        subPrice: '9,000 đ/Gói',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cjel-befit-cpc1-ha-noi-20-goi-x-15g-ho-tro-giam-beo-0.webp',
      },
      {
        id: '23933',
        category: 'thuc-pham-chuc-nang',
        name: 'Maisugar Light Nutifine 50 gói x 1g - Đường bắp',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/maisugar-light-nutifine-50-goi-x-1g-duong-bap-0.webp',
        hasPrescription: true,
      },
      {
        id: '24255',
        category: 'thuc-pham-chuc-nang',
        name: 'Perfect Slim 30 viên - Hỗ trợ cải thiện béo phì',
        price: '860.000 đ',
        subPrice: '28,667 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/perfect-slim-30-vien-ho-tro-cai-thien-beo-phi-0.webp',
      },
      {
        id: '21599',
        category: 'thuoc',
        name: 'Odistad 60 Stellapharm 2 vỉ x 21 viên',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/odistad-60-stellapharm-2-vi-x-21-vien-0.webp',
        hasPrescription: true,
      },
      {
        id: '21423',
        category: 'thuc-pham-chuc-nang',
        name: 'Slim 9 Lose Weight Healthy MediUSA 60 viên - Hỗ trợ giảm cân, giảm mỡ máu',
        price: '600.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/slim-9-lose-weight-healthy-mediusa-60-vien-ho-tro-giam-can-giam-mo-mau-0.webp',
      },
      {
        id: '21325',
        category: 'thuc-pham-chuc-nang',
        name: 'Tek Ultra Bella 30 viên - Hỗ trợ giảm cân',
        price: '690.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tek-ultra-bella-30-vien-ho-tro-giam-can-0.webp',
      },
      {
        id: '21324',
        category: 'thuc-pham-chuc-nang',
        name: 'Slim Fat Detox 30 viên - Hỗ trợ giảm cân',
        price: '750.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/slim-fat-detox-30-vien-ho-tro-giam-can-0.webp',
      },
      {
        id: '21294',
        category: 'thuc-pham-chuc-nang',
        name: 'Apple Cider Vinegar Gummy Unichi 60 viên - Hỗ trợ giảm cân',
        price: '810.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/apple-cider-vinegar-gummy-unichi-60-vien-ho-tro-giam-can-0.webp',
      },
      {
        id: '21076',
        category: 'thuc-pham-chuc-nang',
        name: 'Nước uống Nucos Detox Enzyme 10 chai x 30ml',
        price: '1.190.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nuoc-uong-nucos-detox-enzyme-10-chai-x-30ml-0.webp',
      },
      {
        id: '18595',
        category: 'thuc-pham-chuc-nang',
        name: 'Gừng đen Salacia Orihiro 30 viên - Viên uống giảm mỡ bụng',
        price: '510.000 đ',
        subPrice: '17,000 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gung-den-salacia-orihiro-30-vien-vien-uong-giam-mo-bung-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: ['Hỗ trợ giảm cân', 'Trà giảm cân', 'Kem tan mỡ'],
      QUY_CACH: [
        '12 viên',
        '30 viên',
        '42 viên',
        '60 viên',
        '90 viên',
        '120 viên',
        '10 gói',
        '36 viên',
        '250ml',
        '20 viên',
        '20 gói',
        '40 viên',
        '100g',
        '60 gói',
      ],
      NHA_SAN_XUAT: [
        'Kobayashi Pharmaceutical Co., Ltd.',
        'Aloe Vera of America, Inc.',
        'Hendel LLC',
      ],
      THUONG_HIEU: ['Kobayashi', 'Eveline', 'Best Group', 'Forever', 'Orihiro'],
      XUAT_XU: ['Việt Nam', 'Thái lan', 'Ba Lan', 'Nga', 'Ấn độ', 'Mỹ', 'Đức', 'Nhật Bản'],
      HOAT_CHAT: [
        'Vitamin B3 (Niacinamide)',
        'Hoa hồng',
        'Giấm táo',
        'Cúc chân vịt (Sphaeranthus Indicus)',
      ],
    },
  },
  'bo-xuong-khop-gout': {
    title: 'Bổ xương khớp, gout',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng', 'Bổ xương khớp'],
    totalProducts: 738,
    products: [
      {
        id: '21767',
        category: 'thuc-pham-chuc-nang',
        name: 'Cjel Calci D3 K2 CPC1 Hà Nội 20 gói x 10g - Bổ sung Calci, Vitamin D3',
        price: '120.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cjel-calci-d3-k2-cpc1-ha-noi-20-goi-x-10g-bo-sung-calci-vitamin-d3-0.webp',
      },
      {
        id: '22571',
        category: 'thuc-pham-chuc-nang',
        name: 'Tendoactive Bioiberica 2 vỉ x 15 viên - Hỗ trợ phục hồi tổn thương gân',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tendoactive-bioiberica-2-vi-x-15-vien-ho-tro-phuc-hoi-ton-thuong-gan-0.webp',
        hasPrescription: true,
      },
      {
        id: '23879',
        category: 'thuc-pham-chuc-nang',
        name: 'Canxi D3-K2 Kingphar 20 ống x 5ml - Bổ sung canxi, vitamin D3',
        price: '77.000 đ',
        subPrice: '3,850 đ/Ống',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/canxi-d3-k2-kingphar-20-ong-x-5ml-bo-sung-canxi-vitamin-d3-0.webp',
      },
      {
        id: '23881',
        category: 'thuc-pham-chuc-nang',
        name: 'Phụ Linh - Cường Cốt Kingphar 40 viên - Hỗ trợ mạnh gân cốt',
        price: '118.000 đ',
        subPrice: '2,950 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/phu-linh-cuong-cot-kingphar-40-vien-ho-tro-manh-gan-cot-0.webp',
      },
      {
        id: '23883',
        category: 'thuc-pham-chuc-nang',
        name: 'Canxi Nano D3-K2 Kingphar 3 vỉ x 10 viên - Hỗ trợ bổ sung canxi, vitamin D3',
        price: '68.000 đ',
        subPrice: '2,267 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/canxi-nano-d3-k2-kingphar-3-vi-x-10-vien-ho-tro-bo-sung-canxi-vitamin-d3-0.webp',
      },
      {
        id: '23885',
        category: 'thuc-pham-chuc-nang',
        name: 'Gazcot Kingphar 40 viên - Hỗ trợ thoái hóa khớp, khô khớp',
        price: '133.000 đ',
        subPrice: '3,325 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gazcot-kingphar-40-vien-ho-tro-thoai-hoa-khop-kho-khop-0.webp',
      },
      {
        id: '23695',
        category: 'thiet-bi-y-te',
        name: 'Salonpas Hisamitsu 24 gói x 10 miếng - Cao dán',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/salonpas-hisamitsu-24-goi-x-10-mieng-cao-dan-0.webp',
        hasPrescription: true,
      },
      {
        id: '21677',
        category: 'thuc-pham-chuc-nang',
        name: 'Cjel Bone CPC1 Hà Nội 20 gói x 15g - Hỗ trợ giảm loãng xương',
        price: '140.000 đ',
        subPrice: '7,000 đ/Gói',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cjel-bone-cpc1-ha-noi-20-goi-x-15g-ho-tro-giam-loang-xuong-0.webp',
      },
      {
        id: '21680',
        category: 'thuc-pham-chuc-nang',
        name: 'Gluco-Agi Agimexpharm 30 viên - Giúp giảm thoái hóa khớp',
        price: '180.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gluco-agi-agimexpharm-30-vien-giup-giam-thoai-hoa-khop-0.webp',
      },
      {
        id: '22205',
        category: 'thuc-pham-chuc-nang',
        name: 'Calcium+Vitamin-D3 Sanct Bernhard 90 viên - Bổ sung Canxi Vitamin D3',
        price: '300.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/calciumvitamin-d3-sanct-bernhard-90-vien-bo-sung-canxi-vitamin-d3-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Bổ xương khớp',
        'Loãng xương',
        'Bệnh Gout',
        'Calcium',
        'Cao dán',
        'Dầu xoa bóp',
        'Collagen Type II',
        'Dầu xoa bóp, dầu gió',
        'Glucosamine',
        'Glucosamine Hydrochloride',
        'Glucosamine Sulfate',
        'Shark Cartilage',
        'Vitamin D3',
      ],
      QUY_CACH: [
        '240 viên',
        '100 viên',
        '30 viên',
        '50 viên',
        '60 viên',
        '90 viên',
        '120 viên',
        '180 viên',
        '200 viên',
        '300 viên',
        '100ml',
        '1000ml',
        '20 gói',
        '480ml',
      ],
      NHA_SAN_XUAT: ['CPC1 Hà Nội', 'Kingphar', 'Sanct Bernhard', 'Agimexpharm', 'Hisamitsu'],
      THUONG_HIEU: ['Kingphar', 'Sanct Bernhard', 'CPC1', 'Salonpas', 'Eurovit'],
      XUAT_XU: ['Việt Nam', 'Đức', 'Nhật Bản', 'Tây Ban Nha'],
      HOAT_CHAT: ['Calcium', 'Vitamin D3', 'Vitamin K2', 'Glucosamine', 'Collagen Type II'],
    },
  },
  'tim-mach-huyet-ap': {
    title: 'Tim mạch, huyết áp',
    breadcrumbs: ['Danh mục', 'Thực phẩm chức năng'],
    totalProducts: 261,
    products: [
      {
        id: '22197',
        category: 'thuc-pham-chuc-nang',
        name: 'Coenin Q10 Plus Sanct Bernhard 30 viên - Hỗ trợ tốt tim mạch',
        price: '389.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/coenin-q10-plus-sanct-bernhard-30-vien-ho-tro-tot-tim-mach-0.webp',
      },
      {
        id: '21696',
        category: 'thuc-pham-chuc-nang',
        name: 'Rosimet Softcap CPC1 Hà Nội 60 viên - Hỗ trợ giảm đường huyết',
        price: '198.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/rosimet-softcap-cpc1-ha-noi-60-vien-ho-tro-giam-duong-huyet-0.webp',
      },
      {
        id: '21446',
        category: 'thuc-pham-chuc-nang',
        name: 'Omega 3+ Bcomplex MediUSA 60 viên - Hỗ trợ tim mạch, thị lực',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/omega-3-bcomplex-mediusa-60-vien-ho-tro-tim-mach-thi-luc-0.webp',
        hasPrescription: true,
      },
      {
        id: '21408',
        category: 'thuc-pham-chuc-nang',
        name: 'Reishi Mushroom Gold MediUSA 30 viên - Hỗ trợ huyết áp, đường huyết',
        price: '309.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/reishi-mushroom-gold-mediusa-30-vien-ho-tro-huyet-ap-duong-huyet-0.webp',
      },
      {
        id: '21404',
        category: 'thuc-pham-chuc-nang',
        name: 'Probiotic Enzyme MediUSA 3 vỉ x 10 viên - Hỗ trợ giúp giảm Cholesterol',
        price: '399.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/probiotic-enzyme-mediusa-3-vi-x-10-vien-ho-tro-giup-giam-cholesterol-0.webp',
      },
      {
        id: '21374-2',
        category: 'thuc-pham-chuc-nang',
        name: 'Blood Sugar Support MediUSA 30 viên - Hỗ trợ tim mạch khỏe mạnh',
        price: '298.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/blood-sugar-support-mediusa-30-vien-ho-tro-tim-mach-khoe-manh-0.webp',
      },
      {
        id: '21349',
        category: 'thuc-pham-chuc-nang',
        name: 'Cholest Care MediUSA 30 viên - Hỗ trợ giảm cholesterol',
        price: '309.000 đ',
        subPrice: '10,300 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cholest-care-mediusa-30-vien-ho-tro-giam-cholesterol-0.webp',
      },
      {
        id: '21285',
        category: 'thuc-pham-chuc-nang',
        name: 'CX8 Xtend Life 90 viên - Hỗ trợ tim mạch',
        price: '3.150.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cx8-xtend-life-90-vien-ho-tro-tim-mach-0.webp',
      },
      {
        id: '6288',
        category: 'thuc-pham-chuc-nang',
        name: 'Nattokinase Jintan Nhật Bản 60 gói - Chống đột quỵ tai biến',
        price: '1.370.880 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/chong-dot-quy-tai-bien-nattokinase-jintan-nhat-ban-60-goi-0.webp',
      },
      {
        id: '21068',
        category: 'thuc-pham-chuc-nang',
        name: 'SpringLeaf Garlic Oil 3000mg 360 viên',
        price: '525.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-springleaf-garlic-oil-3000mg-360-vien-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Fish oil - Omega',
        'An thần',
        'Bổ phổi - Hô hấp',
        'Lợi khuẩn - Tiêu hóa',
        'Thực phẩm bổ sung',
        'Multivitamin',
        'Bổ mắt',
        'Bổ não',
        'Bổ gan',
        'Tiểu đường',
        'Tim mạch, huyết áp',
      ],
      QUY_CACH: [
        '240 viên',
        '100 viên',
        '30 viên',
        '50 viên',
        '60 viên',
        '90 viên',
        '120 viên',
        '180 viên',
        '300 viên',
        '500 viên',
        '130 viên',
        '250 viên',
        '20 viên',
        '40 viên',
        '60 gói',
      ],
      NHA_SAN_XUAT: [
        'IMC Quang Minh',
        'Hồng Bàng',
        'Baxco Pharmaceutical',
        'Nature Made',
        'Thái Minh',
        'Pharmekal Health Products, LLC',
        'MediUSA',
        'Tuệ Linh',
      ],
      THUONG_HIEU: [
        "Puritan's Pride",
        'Golden Health',
        'Blackmores',
        'Nature Made',
        'Pharmekal',
        "Doctor's Best",
        'Trunature',
        'Swanson',
        'Forever',
        'Healthy Care',
      ],
      XUAT_XU: [
        'Pháp',
        'Việt Nam',
        'Anh',
        'Canada',
        'Mỹ',
        'Đức',
        'Úc',
        'Nhật Bản',
        'New Zealand',
        'Indonesia',
      ],
      HOAT_CHAT: [
        'Bồ hoàng (Typha angustata)',
        'Xuyên tiêu (Zanthoxylum sp.)',
        'Hoàng đằng',
        'Đỏ ngọn (Thành Ngạnh)',
        'Coenzym Q10',
        'Omega 3',
        'Nattokinase',
      ],
    },
  },
  'thiet-bi-y-te': {
    title: 'Thiết bị y tế',
    breadcrumbs: ['Danh mục'],
    totalProducts: 963,
    products: [
      {
        id: '21764',
        category: 'thiet-bi-y-te',
        name: 'Lexadol CPC1 Hà Nội 1 gói x 5 miếng - Miếng dán hạ sốt',
        price: '27.500 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lexadol-cpc1-ha-noi-1-goi-x-5-mieng-mieng-dan-ha-sot-0.webp',
      },
      {
        id: '21776',
        category: 'thiet-bi-y-te',
        name: 'Mogarna Spray CPC1 Hà Nội lọ 30ml - Dung dịch xịt trĩ',
        price: '210.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mogarna-spray-cpc1-ha-noi-lo-30ml-dung-dich-xit-tri-0.webp',
      },
      {
        id: '21778',
        category: 'thiet-bi-y-te',
        name: 'Excibe Dot Rib 3 cái - Bao cao su',
        price: '25.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/excibe-dot-rib-3-cai-bao-cao-su-0.webp',
      },
      {
        id: '21779',
        category: 'thiet-bi-y-te',
        name: 'Excibe Original 3 cái - Bao cao su',
        price: '22.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/excibe-original-3-cai-bao-cao-su-0.webp',
      },
      {
        id: '21780',
        category: 'thiet-bi-y-te',
        name: 'Excibe Longlast 3 cái - Bao cao su',
        price: '30.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/excibe-longlast-3-cai-bao-cao-su-0.webp',
      },
      {
        id: '21781',
        category: 'thiet-bi-y-te',
        name: 'Excibe Invisible 3 cái - Bao cao su',
        price: '28.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/excibe-invisible-3-cai-bao-cao-su-0.webp',
      },
      {
        id: '21782',
        category: 'thiet-bi-y-te',
        name: 'Excibe Snugfit 3 cái - Bao cao su',
        price: '23.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/excibe-snugfit-3-cai-bao-cao-su-0.webp',
      },
      {
        id: '22303',
        category: 'thiet-bi-y-te',
        name: 'Q.TICK Chân Tâm Pharma 1 que - Que thử thai',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/qtick-chan-tam-pharma-1-que-que-thu-thai-0.webp',
        hasPrescription: true,
      },
      {
        id: '25631',
        category: 'thiet-bi-y-te',
        name: 'Omnican 1ml/100IU B. Braun 100 cái (Màu cam) – Bơm tiêm tiểu đường',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/omnican-1ml100iu-b-braun-100-cai-mau-cam-bom-tiem-tieu-duong-0.webp',
        hasPrescription: true,
      },
      {
        id: '21797',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Coleus Spray Baby CPC1 Hà Nội lọ 50ml - Dung dịch xịt mũi',
        price: '73.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-coleus-spray-baby-cpc1-ha-noi-lo-50ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '21798',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Spray Baby 1.9 CPC1 Hà Nội lọ 50ml - Dung dịch xịt mũi',
        price: '68.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-spray-baby-19-cpc1-ha-noi-lo-50ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '24615',
        category: 'thiet-bi-y-te',
        name: 'Lovestick Pregnancy HCG Test 1 que - Que thử thai',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lovestick-pregnancy-hcg-test-1-que-que-thu-thai-0.webp',
        hasPrescription: true,
      },
      {
        id: '23599',
        category: 'thiet-bi-y-te',
        name: 'Bình Rửa Mũi Ion Muối Fujiwa 240ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/binh-rua-mui-ion-muoi-fujiwa-240ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '21878',
        category: 'thiet-bi-y-te',
        name: 'MD H2O 500ml - Nước uống tăng năng lượng',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/md-h2o-500ml-nuoc-uong-tang-nang-luong-0.webp',
        hasPrescription: true,
      },
      {
        id: '21879',
        category: 'thiet-bi-y-te',
        name: 'Glow Ultra Purified Water MD H2O 100ml - Nước siêu tinh khiết',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/glow-ultra-purified-water-md-h2o-100ml-nuoc-sieu-tinh-khiet-0.webp',
        hasPrescription: true,
      },
      {
        id: '27065',
        category: 'thiet-bi-y-te',
        name: 'Miếng Dán Giảm Ho Coleucin 6 miếng',
        price: '56.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mieng-dan-giam-ho-coleucin-6-mieng-0.webp',
      },
      {
        id: '22719',
        category: 'thiet-bi-y-te',
        name: 'Cồn 90 Độ VP 500ml',
        price: 'Liên hệ',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/con-90-do-vp-500ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '27079',
        category: 'thiet-bi-y-te',
        name: 'Ống Hít Star Danapha 1 ống x 1.5g',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ong-hit-star-danapha-1-ong-x-15g-0.webp',
        hasPrescription: true,
      },
      {
        id: '21711',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Spray CPC1 Hà Nội 50ml - Dung dịch xịt mũi',
        price: '68.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-spray-cpc1-ha-noi-50ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '26847',
        category: 'thiet-bi-y-te',
        name: 'Omron HEM-7124 - Máy đo huyết áp bắp tay',
        price: '920.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/omron-hem-7124-may-do-huyet-ap-bap-tay-0.webp',
      },
      {
        id: '21739',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Drops 3 CPC1 Hà Nội lọ 10ml - Dung dịch xịt tai',
        price: '21.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-drops-3-cpc1-ha-noi-lo-10ml-dung-dich-xit-tai-0.webp',
      },
      {
        id: '21740',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Spray 0.65 CPC1 Hà Nội lọ 50ml - Dung dịch xịt mũi',
        price: '68.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-spray-065-cpc1-ha-noi-lo-50ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '21741',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Spray 0.9 CPC1 Hà Nội lọ 50ml - Dung dịch xịt mũi',
        price: '68.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-spray-09-cpc1-ha-noi-lo-50ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '25075',
        category: 'thiet-bi-y-te',
        name: 'Xịt Mũi Eurovit 30ml - Dung dịch xịt mũi',
        price: '70.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/xit-mui-eurovit-30ml-dung-dich-xit-mui-0.webp',
      },
      {
        id: '21758',
        category: 'thiet-bi-y-te',
        name: 'Nebusal 3 CPC1 Hà Nội 1 vỉ x 5 ống x 5ml - Dung dịch khí dung',
        price: '42.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-3-cpc1-ha-noi-1-vi-x-5-ong-x-5ml-dung-dich-khi-dung-0.webp',
      },
      {
        id: '21591',
        category: 'thiet-bi-y-te',
        name: 'Sato Super Nhất Nhất 3 cái - Bao cao su',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sato-super-nhat-nhat-3-cai-bao-cao-su-0.webp',
        hasPrescription: true,
      },
      {
        id: '21738',
        category: 'thiet-bi-y-te',
        name: 'Nebusal Ear Spray CPC1 Hà Nội lọ 50ml – Dung dịch xịt tai',
        price: '126.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nebusal-ear-spray-cpc1-ha-noi-lo-50ml-0.webp',
      },
      {
        id: '21664',
        category: 'thiet-bi-y-te',
        name: 'Pregnancy HCG Test Nam Hà 1 que - Que thử thai',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/pregnancy-hcg-test-nam-ha-1-que-que-thu-thai-0.webp',
        hasPrescription: true,
      },
      {
        id: '21646',
        category: 'thiet-bi-y-te',
        name: 'Xịt Giảm Đau Traphaco 100ml - Dung dịch xịt giảm đau',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/xit-giam-dau-traphaco-100ml-dung-dich-xit-giam-dau-0.webp',
        hasPrescription: true,
      },
      {
        id: '21559',
        category: 'thiet-bi-y-te',
        name: 'Kutieskin 30 gói x 1 gạc - Gạc răng miệng',
        price: '98.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kutieskin-30-goi-x-1-gac-gac-rang-mieng-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: [
        'Bông băng gạc',
        'Khẩu trang y tế',
        'Cồn',
        'Nhiệt kế - Ẩm kế',
        'Bao cao su',
        'Que thử thai - que thử rụng trứng',
        'Dụng cụ theo dõi',
        'Dụng cụ y tế',
        'Nước muối, dung dịch sát khuẩn',
      ],
      QUY_CACH: [],
      NHA_SAN_XUAT: [],
      THUONG_HIEU: ['Seirin', 'Omron', 'Microlife'],
      XUAT_XU: ['Italia', 'Thụy Sĩ', 'Mỹ', 'Đức', 'Nhật Bản'],
      HOAT_CHAT: [],
    },
  },
  'sua-thuc-pham-cao-cap': {
    title: 'Sữa & Thực phẩm cao cấp',
    totalProducts: 787,
    products: [
      {
        id: '21611',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Mint Fisherman Friend 25g - Kẹo con tàu (vị bạc hà không đường)',
        price: '25.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mint-fisherman-friend-25g-keo-con-tau-vi-bac-ha-khong-duong-0.webp',
      },
      {
        id: '27029',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Citracal Gummies + D3 60 viên - Kẹo dẻo bổ sung canxi',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/citracal-gummies-d3-60-vien-keo-deo-bo-sung-canxi-0.webp',
        hasPrescription: true,
      },
      {
        id: '21486',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Fucosure Gold Fucoidan 800g - Sữa hỗ trợ tim mạch, miễn dịch',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fucosure-gold-fucoidan-800g-sua-ho-tro-tim-mach-mien-dich-0.webp',
        hasPrescription: true,
      },
      {
        id: '21610',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Spearmint Fisherman Friend 25g - Kẹo con tàu (vị bạc hà)',
        price: '25.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/spearmint-fisherman-friend-25g-keo-con-tau-vi-bac-ha-0.webp',
      },
      {
        id: '21609',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Citrus Fisherman Friend 25g - Kẹo con tàu (vị cam chanh)',
        price: '25.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/citrus-fisherman-friend-25g-keo-con-tau-vi-cam-chanh-0.webp',
      },
      {
        id: '21661',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Yến Sào Tổ Yến Chưng Đường Phèn 21 Fobelife 4 lọ x 70ml',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/yen-sao-to-yen-chung-duong-phen-21-fobelife-4-lo-x-70ml-0.webp',
        hasPrescription: true,
      },
      {
        id: '21608',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Blackcurrant Fisherman Friend 25g - Kẹo con tàu (lý chua đen)',
        price: '25.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/blackcurrant-fisherman-friend-25g-keo-con-tau-ly-chua-den-429-0.webp',
      },
      {
        id: '21456',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Camel Agedcare Formula Royal AUSNZ 900g - Sữa cho người trên 40 tuổi',
        price: '690.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/camel-agedcare-formula-royal-ausnz-900g-sua-cho-nguoi-tren-40-tuoi-0.webp',
      },
      {
        id: '21455',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Ladycare Formula Milk Powder Royal AUSNZ 400g - Sữa bổ sung collagen cho phụ nữ',
        price: '880.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ladycare-formula-milk-powder-royal-ausnz-400g-sua-bo-sung-collagen-cho-phu-nu-0.webp',
      },
      {
        id: '21454',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Cancare Royal Ausnz 480g – Sữa cho người bệnh ung thư',
        price: '960.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cancare-royal-ausnz-480g-sua-cho-nguoi-benh-ung-thu-0.webp',
      },
      {
        id: '21453',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Camel Grow Up Milk Powder Royal AUSNZ 900g – Sữa tăng chiều cao cho bé từ 3-14 tuổi',
        price: '1.180.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/camel-grow-up-milk-powder-royal-ausnz-900g-sua-tang-chieu-cao-cho-be-tu-3-14-tuoi-0.webp',
      },
      {
        id: '21452',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Goat Agedcare Formula Royal AUSNZ 800g - Sữa dành cho người trên 40 tuổi',
        price: '890.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/goat-agedcare-formula-royal-ausnz-800g-sua-danh-cho-nguoi-tren-40-tuoi-0.webp',
      },
      {
        id: '21451',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Grow Up Milk Powder For Children Royal AUSNZ 10 gói x 25g - Sữa công thức cho trẻ',
        price: '450.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/grow-up-milk-powder-for-children-royal-ausnz-10-goi-x-25g-sua-cong-thuc-cho-tre-0.webp',
      },
      {
        id: '21450',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Diabetic Formula Milk Powder Royal AUSNZ 20 gói x 25g – Sữa cho người tiểu đường',
        price: '890.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/diabetic-formula-milk-powder-royal-ausnz-20-goi-x-25g-sua-cho-nguoi-tieu-duong-0.webp',
      },
      {
        id: '23877',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Fobe Milk Canxi Fobemilk 900g - Sữa bổ sung canxi',
        price: '479.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fobe-milk-canxi-fobemilk-900g-sua-bo-sung-canxi-0.webp',
      },
      {
        id: '21287',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Manuka Honey UMF 10+ Deep Blue Health 6 viên - Kẹo ngậm mật ong',
        price: '110.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/manuka-honey-umf-10-deep-blue-health-6-vien-keo-ngam-mat-ong-0.webp',
      },
      {
        id: '21275',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Kẹo Gừng Nopan Kingphar 200 viên - Hỗ trợ giảm ho, đau họng',
        price: '100.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/keo-gung-nopan-kingphar-200-vien-ho-tro-giam-ho-dau-hong-0.webp',
      },
      {
        id: '21263-2',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Enzym Gold Anlamil 400g - Sữa dành cho trẻ biếng ăn',
        price: '235.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/enzym-gold-anlamil-400g-sua-danh-cho-tre-bieng-an-0.webp',
      },
      {
        id: '21261-2',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Colos Gain Anlamil 400g - Sữa dành cho trẻ nhẹ cân, biếng ăn',
        price: '235.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/colos-gain-anlamil-400g-sua-danh-cho-tre-nhe-can-bieng-an-0.webp',
      },
      {
        id: '21260-2',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Baby Care 2 Anlamil 400g - Sữa dành cho trẻ từ 3-36 tháng tuổi',
        price: '235.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/baby-care-2-anlamil-400g-sua-danh-cho-tre-tu-3-36-thang-tuoi-0.webp',
      },
      {
        id: '21259-2',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Baby Care 1 Anlamil 400g - Sữa dành cho trẻ từ 0-12 tháng tuổi',
        price: '235.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/baby-care-1-anlamil-400g-sua-danh-cho-tre-tu-0-12-thang-tuoi-0.webp',
      },
      {
        id: '21286',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Milk Colostrum Powder NZPureHealth 450g – Bột sữa non',
        price: '1.620.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/milk-colostrum-powder-nzpurehealth-450g-bot-sua-non-0.jpg',
      },
      {
        id: '21157',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Kẹo Dẻo Canxi Heviho Thái Minh 30g - Bổ sung Canxi cho bé',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/keo-deo-canxi-heviho-thai-minh-30g-bo-sung-canxi-cho-be-0.webp',
        hasPrescription: true,
      },
      {
        id: '21125',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Colustrum Tablet 125mg Vitatree 100 viên - Viên nhai sữa non',
        price: '360.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-nhai-sua-non-colustrum-tablet-125mg-vitatree-100-vien-0.webp',
      },
      {
        id: '21047',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Viên uống SpringLeaf Pure Squalene 1000mg 90 viên',
        price: '690.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-springleaf-pure-squalene-1000mg-90-vien-0.webp',
      },
      {
        id: '21030',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Mật ong SpringLeaf Manuka Honey MGO 250+ 250g',
        price: '945.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mat-ong-springleaf-manuka-honey-mgo-250-250g-0.webp',
      },
      {
        id: '21039',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Viên nhai SpringLeaf Super Colostrum 820mg 200 viên',
        price: '745.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-nhai-springleaf-super-colostrum-820mg-200-vien-0.webp',
      },
      {
        id: '21032',
        category: 'sua-thuc-pham-cao-cap',
        name: 'SpringLeaf Probiotic Lactoferrin Milk Powder 40g',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/springleaf-probiotic-lactoferrin-milk-powder-40g-0.webp',
        hasPrescription: true,
      },
      {
        id: '21031',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Mật ong SpringLeaf Manuka Honey MGO 550+ 250g',
        price: '1.450.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mat-ong-springleaf-manuka-honey-mgo-550-250g-0.webp',
      },
      {
        id: '21029',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Mật ong SpringLeaf Manuka Honey MGO 20+ 500g',
        price: '750.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mat-ong-springleaf-manuka-honey-mgo-20-500g-0.webp',
      },
    ],
    filters: {
      LOAI_TIN: ['Sữa Pha Sẵn', 'Sữa Bột', 'Thực phẩm tăng cân', 'Hạt'],
      QUY_CACH: ['100 viên', '300 viên', '36 viên', '50ml', '20 viên', '200g', '400g'],
      NHA_SAN_XUAT: ['Star Combo Australia Pty Ltd', 'Eco - Farms'],
      THUONG_HIEU: ['Costar'],
      XUAT_XU: [
        'Việt Nam',
        'Hàn Quốc',
        'Thụy Sĩ',
        'Mỹ',
        'Đức',
        'Úc',
        'Nhật Bản',
        'New Zealand',
        'Mexico',
      ],
      HOAT_CHAT: ['Vitamin B3 (Niacinamide)'],
    },
  },
};

export const brands: Brand[] = [
  {
    name: 'SPECIAL KID',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/special-kid-92-img.webp',
    slug: 'special-kid',
  },
  {
    name: 'VITABIOTICS',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/vitabiotics-20-img.webp',
    slug: 'vitabiotics',
  },
  {
    name: 'NZPUREHEALTH',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/nzpurehealth-18-img.webp',
    slug: 'nzpurehealth',
  },
  {
    name: 'BOTANIA',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/botania-1-img.webp',
    slug: 'botania',
  },
  {
    name: 'DRLIFE',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/drlife-72-img.webp',
    slug: 'drlife',
  },
  {
    name: 'SAO THÁI DƯƠNG',
    logo: 'https://cdn.famitaa.net/storage/uploads/option/sao-thai-duong-79-img.png',
    slug: 'sao-thai-duong',
  },
];

export interface BrandPageData {
  description: string;
  totalProducts: number;
  products: Product[];
}

export const BRAND_PAGE_DATA: Record<string, BrandPageData> = {
  'special-kid': {
    description:
      'Các sản phẩm Special Kid hỗ trợ bổ sung vitamin, khoáng chất và dưỡng chất cho trẻ em.',
    totalProducts: 39,
    products: [
      {
        id: '17015',
        category: 'thuc-pham-chuc-nang',
        name: 'Special Kid Omega 30 viên – Bổ sung DHA cho trẻ em',
        price: '359.000 đ',
        subPrice: '11,967 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/special-kid-omega-30-vien-bo-sung-dha-cho-tre-em-0.webp',
      },
      {
        id: '15551',
        category: 'thuc-pham-chuc-nang',
        name: 'Calcium Vitamine D Special Kid 125ml - Siro tăng chiều cao, răng chắc khỏe',
        price: '259.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/calcium-vitamine-d-special-kid-125ml-siro-tang-chieu-cao-rang-chac-khoe-0.webp',
      },
      {
        id: '15547',
        category: 'thuc-pham-chuc-nang',
        name: 'Fer & Vitamines Special Kid 125ml - Siro bổ sung sắt và các vitamin',
        price: '259.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fer-vitamines-special-kid-125ml-siro-bo-sung-sat-va-cac-vitamin-0.webp',
      },
      {
        id: '15550',
        category: 'thuc-pham-chuc-nang',
        name: 'Multivitamines Special Kid 125ml - Siro bổ sung vitamin và khoáng chất cho trẻ',
        price: '259.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/multivitamines-special-kid-125ml-siro-bo-sung-vitamin-va-khoang-chat-cho-tre-0.webp',
      },
    ],
  },
  vitabiotics: {
    description:
      'Vitabiotics cung cấp các dòng vitamin, khoáng chất và sản phẩm chăm sóc sức khỏe theo từng nhu cầu.',
    totalProducts: 88,
    products: [
      {
        id: '22173',
        category: 'thuc-pham-chuc-nang',
        name: 'Feroglobin Fizz Vitabiotics tuýp 20 viên - Viên sủi bổ sung sắt',
        price: '343.000 đ',
        subPrice: '17,150 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/feroglobin-fizz-vitabiotics-tuyp-20-vien-vien-sui-bo-sung-sat-0.webp',
      },
      {
        id: '20989',
        category: 'thuc-pham-chuc-nang',
        name: 'Visionace Original Vitabiotics 2 vỉ x 15 viên',
        price: '432.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/visionace-original-vitabiotics-2-vi-x-15-vien-0.webp',
      },
      {
        id: '23833',
        category: 'thuc-pham-chuc-nang',
        name: 'Lacta+ DoppelHerz 3 vỉ x 10 viên – Viên uống hỗ trợ sau sinh',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/lacta-doppelherz-3-vi-x-10-vien-vien-uong-ho-tro-sau-sinh-0.webp',
        hasPrescription: true,
      },
    ],
  },
  nzpurehealth: {
    description:
      'NZPureHealth nổi bật với nhóm sản phẩm sữa non, keo ong, dầu cá, bổ não và hỗ trợ sức khỏe từ New Zealand.',
    totalProducts: 18,
    products: [
      {
        id: '21286',
        category: 'sua-thuc-pham-cao-cap',
        name: 'Milk Colostrum Powder NZPureHealth 450g – Bột sữa non',
        price: '1.620.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/milk-colostrum-powder-nzpurehealth-450g-bot-sua-non-0.webp',
      },
      {
        id: '21290',
        category: 'thuc-pham-chuc-nang',
        name: 'QT Encore NZPurehealth 60 viên - Hỗ trợ da móng, tóc',
        price: '2.700.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/qt-encore-nzpurehealth-60-vien-ho-tro-da-mong-toc-0.webp',
      },
      {
        id: '16745',
        category: 'thuc-pham-chuc-nang',
        name: 'Viên Uống Keo Ong Tăng Đề Kháng Propolis NzPureHealth 100 Viên',
        price: '970.000 đ',
        subPrice: '9,700 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-keo-ong-tang-de-khang-propolis-nzpurehealth-100-vien-0.webp',
      },
      {
        id: '14819',
        category: 'thuc-pham-chuc-nang',
        name: 'Fish Oil Junior NZPurehealth 60 viên - Viên uống dầu cá',
        price: '685.000 đ',
        subPrice: '11,417 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/fish-oil-junior-nzpurehealth-60-vien-vien-uong-dau-ca-0.webp',
      },
      {
        id: '19602',
        category: 'thuc-pham-chuc-nang',
        name: 'Bổ sung vitamin khoáng chất Nz-Multi Vit Everyday Health 30 viên',
        price: '350.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bo-sung-vitamin-khoang-chat-nz-multi-vit-everyday-health-30-vien-0.webp',
      },
      {
        id: '21659',
        category: 'thuc-pham-chuc-nang',
        name: 'NZ – Queen Everyday Health 30 viên - Hỗ trợ sức khỏe phụ nữ',
        price: 'Liên hệ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nz-queen-everyday-health-30-vien-ho-tro-suc-khoe-phu-nu-0.webp',
        hasPrescription: true,
      },
      {
        id: '16890',
        category: 'thuc-pham-chuc-nang',
        name: 'Ginkgo Biloba NZPurehealth 30 viên – Hỗ trợ tuần hoàn máu',
        price: '330.000 đ',
        subPrice: '11,000 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/ginkgo-biloba-nzpurehealth-new-zealand-30-vien-0.webp',
      },
      {
        id: '17161',
        category: 'thuc-pham-chuc-nang',
        name: 'Deer Velvet NZPurehealth 30 viên - Hỗ trợ tăng sức đề kháng',
        price: 'Liên hệ',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nzpure-deer-velvet-0.webp',
        hasPrescription: true,
      },
      {
        id: '4692',
        category: 'thuc-pham-chuc-nang',
        name: 'Royal Jelly NZPurehealth 30 viên – Viên uống sữa ong chúa',
        price: '560.000 đ',
        subPrice: '18,667 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/royal-jelly-nzpurehealth-30-vien-vien-uong-sua-ong-chua-0.webp',
      },
    ],
  },
  botania: {
    description: 'Botania tập trung vào các sản phẩm hỗ trợ xương khớp và sức khỏe tổng thể.',
    totalProducts: 9,
    products: [
      {
        id: '8584',
        category: 'thuc-pham-chuc-nang',
        name: 'Thực phẩm bảo vệ sức khỏe Botania BoniStar, Hộp 30 viên',
        price: '253.000 đ',
        subPrice: '8,433 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-bao-ve-suc-khoe-botania-bonistar-hop-30-vien-0.webp',
      },
      {
        id: '8591',
        category: 'thuc-pham-chuc-nang',
        name: 'Botania Shark Cartilage 750mg 60 viên - Hỗ trợ xương khớp',
        price: '260.000 đ',
        subPrice: '4,333 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-bao-ve-suc-khoe-botania-shark-cartilage-750mg-hop-60-vien-0.webp',
      },
    ],
  },
  drlife: {
    description: 'Drlife gồm các sản phẩm hỗ trợ sức khỏe trẻ em, xương khớp và miễn dịch.',
    totalProducts: 72,
    products: [
      {
        id: '24807',
        category: 'thuc-pham-chuc-nang',
        name: 'Immune Booster Syrup Drlife 150ml - Tăng cường sức đề kháng cho bé',
        price: '275.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/immune-booster-syrup-drlife-150ml-tang-cuong-suc-de-khang-cho-be-0.webp',
      },
      {
        id: '24813',
        category: 'thuc-pham-chuc-nang',
        name: 'Strong Bone Drlife 60 viên - Bổ sung canxi, giảm loãng xương',
        price: '245.000 đ',
        subPrice: '4,083 đ/Viên',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/strong-bone-drlife-60-vien-bo-sung-canxi-giam-loang-xuong-0.webp',
      },
    ],
  },
  'sao-thai-duong': {
    description:
      'Sao Thái Dương có nhiều sản phẩm chăm sóc sức khỏe, thảo dược và chăm sóc cá nhân.',
    totalProducts: 79,
    products: [
      {
        id: '21099',
        category: 'thuc-pham-chuc-nang',
        name: 'Soki ZinC 20ml - Bổ sung kẽm',
        price: '155.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/soki-zinc-20ml-bo-sung-kem-0.webp',
      },
      {
        id: '21040',
        category: 'thuc-pham-chuc-nang',
        name: 'Viên uống bổ mắt SprinLeaf EyeMax 5 in 1 60 viên',
        price: '750.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/vien-uong-bo-mat-sprinleaf-eyemax-5-in-1-60-vien-0.webp',
      },
      {
        id: '20947',
        category: 'thuc-pham-chuc-nang',
        name: 'G-Teen Kenko 30 gói x 15g',
        price: '1.650.000 đ',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/g-teen-kenko-30-goi-x-15g-0.webp',
      },
    ],
  },
};

export const news: NewsItem[] = [
  {
    id: 1,
    title: 'Giải đáp thắc mắc đau thần kinh tọa có chữa khỏi không?',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-than-kinh-toa-co-chua-khoi-khong-0.jpg',
    date: '15/01/2023',
    slug: 'dau-than-kinh-toa-co-chua-khoi-khong',
    category: 'Xương khớp',
  },
  {
    id: 2,
    title: 'Giải Đáp: Viêm Đại Tràng Co Thắt Có Nguy Hiểm Không?',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/viem-dai-trang-co-that-co-nguy-hiem-khong.jpg',
    date: '10/01/2023',
    slug: 'viem-dai-trang-co-that-co-nguy-hiem-khong',
    category: 'Sức khỏe tổng hợp',
  },
  {
    id: 3,
    title: 'Những Điều Nam Giới Cần Biết Về Yếu Sinh Lý',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nhung-dieu-nam-gioi-can-biet-ve-yeu-sinh-ly-0.jpg',
    date: '05/01/2023',
    slug: 'nhung-dieu-nam-gioi-can-biet-ve-yeu-sinh-ly',
    category: 'Sinh lý',
  },
  {
    id: 4,
    title: 'Yếu Sinh Lý Nữ Nên Ăn Gì?',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mach-ban-an-gi-de-tang-cuong-sinh-ly-nu-954.jpg',
    date: '03/01/2023',
    slug: 'yeu-sinh-ly-nu-nen-an-gi',
    category: 'Sinh lý',
  },
  {
    id: 5,
    title: 'Trẻ Bị Sổ Mũi Lâu Ngày Không Khỏi',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tre-bi-so-mui-lau-ngay-khong-khoi-0.jpg',
    date: '02/01/2023',
    slug: 'tre-bi-so-mui-lau-ngay-khong-khoi',
    category: 'Sức khỏe tổng hợp',
  },
  {
    id: 6,
    title: 'Bệnh Viêm Họng Hạt Nên Kiêng Gì?',
    image:
      'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-viem-hong-hat-nen-kieng-gi-0.jpg',
    date: '01/01/2023',
    slug: 'benh-viem-hong-hat-nen-kieng-gi',
    category: 'Sức khỏe tổng hợp',
  },
  {
    id: 7,
    title: 'Tìm Kiếm Đối Tác Hợp Tác Kinh Doanh',
    image: 'https://longchaupharma.com/storage/uploads/config/default-6.png',
    date: '28/12/2022',
    slug: 'tim-kiem-doi-tac-hop-tac-kinh-doanh',
    category: 'Tin tức',
  },
];

export interface ContentCard {
  title: string;
  href: string;
  image: string;
  category?: string;
}

export interface NewsPageSection {
  title: string;
  href: string;
  items: ContentCard[];
}

export const DISEASE_PAGE_DATA: ContentCard[] = [
  {
    title: 'Sốt xuất huyết',
    href: 'https://longchaupharma.com/sot-xuat-huyet',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sot-xuat-huyet-0.jpg',
  },
  {
    title: 'Suy tuyến yên',
    href: 'https://longchaupharma.com/suy-tuyen-yen',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/suy-tuyen-yen-0.jpg',
  },
  {
    title: 'Hội chứng Down',
    href: 'https://longchaupharma.com/hoi-chung-down',
    image: 'https://longchaupharma.com/storage/uploads/config/default-6.png',
  },
  {
    title: 'Sốc phản vệ',
    href: 'https://longchaupharma.com/soc-phan-ve',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/soc-phan-ve-0.jpg',
  },
  {
    title: 'Bệnh Tay chân miệng',
    href: 'https://longchaupharma.com/benh-tay-chan-mieng',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/-61-960.jpg',
  },
  {
    title: 'Sốt ở trẻ',
    href: 'https://longchaupharma.com/sot-o-tre',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sot-o-tre-0.jpg',
  },
  {
    title: 'Dị ứng thực phẩm',
    href: 'https://longchaupharma.com/di-ung-thuc-pham',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/di-ung-thuc-pham-0.jpg',
  },
  {
    title: 'Suy thượng thận',
    href: 'https://longchaupharma.com/suy-thuong-than',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/suy-thuong-than-0.jpg',
  },
  {
    title: 'Bệnh tuyến giáp',
    href: 'https://longchaupharma.com/benh-tuyen-giap',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-tuyen-giap-0.png',
  },
  {
    title: 'Đái tháo đường',
    href: 'https://longchaupharma.com/dai-thao-duong',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dái-tháo-duòng-0.jpg',
  },
  {
    title: 'Rối loạn mỡ máu',
    href: 'https://longchaupharma.com/roi-loan-mo-mau',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/roi-loan-mo-mau-0.jpg',
  },
  {
    title: 'Gout',
    href: 'https://longchaupharma.com/gout',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gout-0.jpg',
  },
  {
    title: 'Rối loạn thái dương hàm',
    href: 'https://longchaupharma.com/roi-loan-thai-duong-ham',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/roi-loan-thai-duong-ham-0.jpg',
  },
  {
    title: 'Sâu răng',
    href: 'https://longchaupharma.com/sau-rang',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sau-rang-0.jpg',
  },
  {
    title: 'Hôi miệng',
    href: 'https://longchaupharma.com/hoi-mieng',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hoi-mieng-0.jpg',
  },
  {
    title: 'Bệnh nướu và nha chu',
    href: 'https://longchaupharma.com/benh-nuou-va-nha-chu',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-nuou-va-nha-chu-0.jpg',
  },
  {
    title: 'Bệnh nghiến răng',
    href: 'https://longchaupharma.com/benh-nghien-rang',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-nghien-rang-0.jpg',
  },
  {
    title: 'Viêm loét miệng',
    href: 'https://longchaupharma.com/viem-loet-mieng',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/viem-loet-mieng-0.jpg',
  },
  {
    title: 'Thiếu máu',
    href: 'https://longchaupharma.com/thieu-mau',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thiéu-máu-0.jpg',
  },
  {
    title: 'Thiếu vitamin',
    href: 'https://longchaupharma.com/thieu-vitamin',
    image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thieu-vitamin-0.jpg',
  },
];

export const NEWS_PAGE_SECTIONS: NewsPageSection[] = [
  {
    title: 'Làm đẹp',
    href: 'https://longchaupharma.com/lam-dep/',
    items: [
      {
        title: 'Top 3 Cách Đắp Mặt Nạ Bằng Lá Tía Tô Dưỡng Da Siêu Mịn',
        href: 'https://longchaupharma.com/cach-dap-mat-na-bang-la-tia-to',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/https://chosithuoc.com/uploads/noidung/thumb/dap-mat-na-bang-la-tia-to.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Chia Sẻ: Bí Quyết Chống Rạn Da Cho Bà Bầu Bằng Dầu Dừa',
        href: 'https://longchaupharma.com/chong-ran-da-cho-ba-bau-bang-dau-dua',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/chong-ran-da-cho-ba-bau-bang-dau-dua.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Top 3 Cách Trị Mụn Nội Tiết Bằng Thuốc Nam Hiệu Quả Bất Ngờ',
        href: 'https://longchaupharma.com/tri-mun-noi-tiet-bang-thuoc-nam',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tri-mun-noi-tiet-bang-thuoc-nam.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Top 5 cách hết mụn nhanh nhất và hiệu quả bất ngờ',
        href: 'https://longchaupharma.com/cach-het-mun-nhanh-nhat-va-hieu-qua',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cach-het-mun-nhanh-nhat-va-hieu-qua-775.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Góc Chia Sẻ: Uống Vitamin E Có Trị Mụn Không?',
        href: 'https://longchaupharma.com/uong-vitamin-e-co-tri-mun-khong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/uong-vitamin-e-co-tri-mun-khong-479.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Có bầu uống vitamin E được không và những điều chú ý khi sử dụng?',
        href: 'https://longchaupharma.com/co-bau-uong-vitamin-e-duoc-khong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/co-bau-uong-vitamin-e-duoc-khong-533.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Nên uống vitamin e vào thời gian nào trong ngày là tốt nhất?',
        href: 'https://longchaupharma.com/uong-vitamin-e-vao-thoi-gian-nao-trong-ngay',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/uong-vitamin-e-vao-thoi-gian-nao-trong-ngay-0.jpg',
        category: 'Làm đẹp',
      },
      {
        title: '3 cách làm mặt nạ vitamin E cho da nhờn siêu đơn giản',
        href: 'https://longchaupharma.com/mat-na-vitamin-e-cho-da-nhon',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mat-na-vitamin-e-cho-da-nhon-0.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Giải Đáp: Da dầu có nên bôi vitamin e không?',
        href: 'https://longchaupharma.com/da-dau-co-nen-boi-vitamin-e',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/da-dau-co-nen-boi-vitamin-e-0.jpg',
        category: 'Làm đẹp',
      },
      {
        title: 'Bật Mí: 3 cách làm đẹp từ vitamin e cho da sáng đẹp mịn màng',
        href: 'https://longchaupharma.com/cach-lam-dep-tu-vitamin-e',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cach-lam-dep-tu-vitamin-e-476.jpg',
        category: 'Làm đẹp',
      },
    ],
  },
  {
    title: 'Giảm cân',
    href: 'https://longchaupharma.com/giam-can/',
    items: [
      {
        title: 'Top 4 thực phẩm giàu protein ít calo tốt cho việc giảm cân',
        href: 'https://longchaupharma.com/thuc-pham-giau-protein-it-calo',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-giau-protein-it-calo.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Top 4 cách làm tan mỡ bụng bằng gừng hiệu quả không ngờ',
        href: 'https://longchaupharma.com/cach-lam-tan-mo-bung-bang-gung',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cach-lam-tan-mo-bung-bang-gung-955.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Bỏ túi chế độ ăn giảm mỡ bụng cho nam hiệu quả',
        href: 'https://longchaupharma.com/che-do-an-giam-mo-bung-cho-nam',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/che-do-an-giam-mo-bung-cho-nam-0.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Bật mí câu hỏi uống nước gì để giảm mỡ bụng?',
        href: 'https://longchaupharma.com/uong-nuoc-gi-de-giam-mo-bung',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/uong-nuoc-gi-de-giam-mo-bung-0.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Thảo dược giảm cân Nấm (HÀNG CHÍNH HÃNG-GIÁ TỐT)',
        href: 'https://longchaupharma.com/thao-duoc-giam-can-nam',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thao-duoc-giam-can-nam-644.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Không cần ăn kiêng vẫn giữ được dáng',
        href: 'https://longchaupharma.com/thuc-don-giam-can-cho-dan-van-phong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-don-giam-can-cho-dan-van-phong-825.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Khám phá 6 động lực cho nàng giảm cân hiệu quả',
        href: 'https://longchaupharma.com/kham-pha-6-dong-luc-cho-nang-giam-can-hieu-qua',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/kham-pha-6-dong-luc-cho-nang-giam-can-hieu-qua-698.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Bật mí cách giảm cân khoa học',
        href: 'https://longchaupharma.com/bat-mi-cach-giam-can-khoa-hoc',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bat-mi-cach-giam-can-khoa-hoc-612.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Bí quyết giảm cân phù hợp với từng độ tuổi',
        href: 'https://longchaupharma.com/bi-quyet-giam-can-phu-hop-voi-tung-do-tuoi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bi-quyet-giam-can-phu-hop-voi-tung-do-tuoi-0.jpg',
        category: 'Giảm cân',
      },
      {
        title: 'Siêu giảm cân cùng nha đam',
        href: 'https://longchaupharma.com/sieu-giam-can-cung-nha-dam',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/sieu-giam-can-cung-nha-dam-0.jpg',
        category: 'Giảm cân',
      },
    ],
  },
  {
    title: 'Xương khớp',
    href: 'https://longchaupharma.com/xuong-khop/',
    items: [
      {
        title: 'Lời Khuyên Chuyên Gia: Bệnh Gút Nên Kiêng Cữ Những Gì?',
        href: 'https://longchaupharma.com/benh-gut-nen-kieng-cu-nhung-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-gut-nen-kieng-cu-nhung-gi.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Chia Sẻ: 10 Bài tập yoga chữa đau thắt lưng tại nhà',
        href: 'https://longchaupharma.com/bai-tap-yoga-chua-dau-that-lung',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bai-tap-yoga-chua-dau-that-lung-936.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Giải Đáp: Đau thắt lưng ở nam giới là triệu chứng bệnh gì?',
        href: 'https://longchaupharma.com/dau-that-lung-o-nam-gioi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-that-lung-o-nam-gioi-350.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Nhức mỏi toàn thân kèm đau họng nguyên nhân do đâu?',
        href: 'https://longchaupharma.com/nhuc-moi-toan-than-kem-dau-hong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nhuc-moi-toan-than-kem-dau-hong-748.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Nguyên nhân và triệu chứng đau lưng trên bên phải',
        href: 'https://longchaupharma.com/dau-lung-tren-ben-phai',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-lung-tren-ben-phai-644.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Giải đáp: Bệnh đau thắt lưng ở phụ nữ nguyên nhân do đâu?',
        href: 'https://longchaupharma.com/benh-dau-that-lung-o-phu-nu',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-dau-that-lung-o-phu-nu-217.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Cách chữa giãn dây chằng lưng nhanh chóng hiệu quả',
        href: 'https://longchaupharma.com/cach-chua-gian-day-chang-lung',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/cach-chua-gian-day-chang-lung-709.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Giải đáp: Đau xương sống vùng thắt lưng là do đâu?',
        href: 'https://longchaupharma.com/dau-xuong-song-vung-that-lung',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-xuong-song-vung-that-lung-551.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Giải Đáp thắc mắc: đau ngang thắt lưng là bệnh gì?',
        href: 'https://longchaupharma.com/dau-ngang-that-lung-la-benh-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/dau-ngang-that-lung-la-benh-gi-0.jpg',
        category: 'Xương khớp',
      },
      {
        title: 'Giải Đáp: Bị đau vùng thắt lưng là bệnh gì?',
        href: 'https://longchaupharma.com/bi-dau-vung-that-lung-la-benh-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/bi-dau-vung-that-lung-la-benh-gi-0.jpg',
        category: 'Xương khớp',
      },
    ],
  },
  {
    title: 'Sinh lý',
    href: 'https://longchaupharma.com/sinh-ly/',
    items: [
      {
        title: 'Những loại thảo dược tăng cường sinh lực đàn ông tự nhiên',
        href: 'https://longchaupharma.com/thao-duoc-tang-cuong-sinh-luc-dan-ong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thao-duoc-tang-cuong-sinh-luc-dan-ong-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Những biến đổi tâm lý tuổi dậy thì ở nữ giới',
        href: 'https://longchaupharma.com/tam-ly-tuoi-day-thi-o-nu',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tam-ly-tuoi-day-thi-o-nu-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Trả lời thắc mắc tinh trùng yếu không nên ăn gì?',
        href: 'https://longchaupharma.com/tinh-trung-yeu-khong-nen-an-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tra-loi-thac-mac-tinh-trung-yeu-khong-nen-an-gi-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Tiết lộ tác dụng của hành tây với nam giới',
        href: 'https://longchaupharma.com/tiet-lo-tac-dung-cua-hanh-tay-voi-nam-gioi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tiet-lo-tac-dung-cua-hanh-tay-voi-nam-gioi-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Giải đáp câu hỏi triệu chứng tiền mãn kinh kéo dài bao lâu?',
        href: 'https://longchaupharma.com/trieu-chung-tien-man-kinh-keo-dai-bao-lau',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/trieu-chung-tien-man-kinh-keo-dai-bao-lau-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Bật mí thực phẩm bổ thận tráng dương tăng cường sinh lực cho phái mạnh',
        href: 'https://longchaupharma.com/thuc-pham-bo-than-trang-duong-tang-cuong-sinh-luc',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-bo-than-trang-duong-tang-cuong-sinh-luc-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Mách bạn các loại thực phẩm tốt cho tinh trùng yếu',
        href: 'https://longchaupharma.com/thuc-pham-tot-cho-tinh-trung-yeu',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-tot-cho-tinh-trung-yeu-0.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Bật mí các loại thực phẩm chứa nhiều estrogen nhất',
        href: 'https://longchaupharma.com/thuc-pham-chua-nhieu-estrogen-nhat',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/thuc-pham-chua-nhieu-estrogen-nhat-397.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Tiết lộ nhu cầu sinh lý của phụ nữ theo độ tuổi',
        href: 'https://longchaupharma.com/nhu-cau-sinh-ly-cua-phu-nu-theo-do-tuoi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/nhu-cau-sinh-ly-cua-phu-nu-theo-do-tuoi-689.jpg',
        category: 'Sinh lý',
      },
      {
        title: 'Mách bạn ăn gì để tăng cường sinh lý nữ',
        href: 'https://longchaupharma.com/an-gi-de-tang-cuong-sinh-ly-nu',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/mach-ban-an-gi-de-tang-cuong-sinh-ly-nu-954.jpg',
        category: 'Sinh lý',
      },
    ],
  },
  {
    title: 'Sức khỏe tổng hợp',
    href: 'https://longchaupharma.com/suc-khoe-tong-hop/',
    items: [
      {
        title:
          'Tăng cholesterol máu cảnh báo mắc các bệnh gì: Bác sĩ BV Bạch Mai chỉ ra những căn bệnh quen thuộc, nhưng rất nguy hiểm cho sức khỏe',
        href: 'https://longchaupharma.com/tang-cholesterol-mau-canh-bao-mac-cac-benh-gi-bac-si-bv-bach-mai-chi-ra-nhung-can-benh-quen',
        image: 'https://longchaupharma.com/storage/uploads/config/default-6.png',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'HIV: Nguyên nhân, triệu chứng, chẩn đoán và điều trị',
        href: 'https://longchaupharma.com/hiv-nguyen-nhan-trieu-chung-chan-doan-va-dieu-tri',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/hiv-nguyen-nhan-trieu-chung-chan-doan-va-dieu-tri-0-486.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Giải Đáp Thắc Mắc: Uống Nước Lá Tía Tô Có Tác Dụng Gì?',
        href: 'https://longchaupharma.com/uong-nuoc-la-tia-to-co-tac-dung-gi',
        image: 'https://longchaupharma.com/storage/uploads/config/default-6.png',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Giải Đáp Thắc Mắc: Lá Đinh Lăng Chữa Bệnh Gì?',
        href: 'https://longchaupharma.com/la-dinh-lang-chua-benh-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/la-dinh-lang-chua-benh-gi.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Cảnh Báo: Tim Đập Nhanh Hồi Hộp Khó Ngủ Là Bị Gì?',
        href: 'https://longchaupharma.com/tim-dap-nhanh-hoi-hop-kho-ngu',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/tim-dap-nhanh-hoi-hop-kho-ngu.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Giải Đáp Thắc Mắc: Bệnh Phong Có Nguy Hiểm Không?',
        href: 'https://longchaupharma.com/benh-phong-co-nguy-hiem-khong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-phong-co-nguy-hiem-khong.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Giải Đáp Thắc Mắc: Bệnh Quáng Gà Thiếu Vitamin Gì?',
        href: 'https://longchaupharma.com/benh-quang-ga-thieu-vitamin-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/benh-quang-ga-thieu-vitamin-gi.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Lời Khuyên: Gan Nhiễm Mỡ Nên Ăn Uống Gì?',
        href: 'https://longchaupharma.com/gan-nhiem-mo-nen-an-uong-gi',
        image: 'https://cdn.famitaa.net/storage/uploads/noidung/thumb/gan-nhiem-mo-nen-an-gi.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Giải Đáp: Viêm Đại Tràng Co Thắt Có Nguy Hiểm Không?',
        href: 'https://longchaupharma.com/viem-dai-trang-co-that-co-nguy-hiem-khong',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/viem-dai-trang-co-that-co-nguy-hiem-khong.jpg',
        category: 'Sức khỏe tổng hợp',
      },
      {
        title: 'Tỏi Ngâm Rượu Có Tác Dụng Gì? Cách Ngâm Rượu Tỏi',
        href: 'https://longchaupharma.com/toi-ngam-ruou-co-tac-dung-gi',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/toi-ngam-ruou-co-tac-dung-gi.jpg',
        category: 'Sức khỏe tổng hợp',
      },
    ],
  },
  {
    title: 'Chương trình khuyến mãi',
    href: 'https://longchaupharma.com/chuong-trinh-khuyen-mai-739/',
    items: [
      {
        title: 'Tặng 83 sản phẩm Đông Trùng Hạ Thảo cho 83 phụ nữ trong ngày 8-3',
        href: 'https://longchaupharma.com/tang-83-san-pham-dong-trung-ha-thao-cho-83-phu-nu-trong-ngay-83',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/https://chosithuoc.com/uploads/noidung/thumb/neazi-500mg-mediplantex-1-vi-x-3-vien_00894.jpg',
        category: 'Chương trình khuyến mãi',
      },
    ],
  },
  {
    title: 'Thị trường thuốc',
    href: 'https://longchaupharma.com/thi-truong-thuoc/',
    items: [
      {
        title: 'Hydrocodone là thuốc gì? công dụng và liều dùng?',
        href: 'https://longchaupharma.com/hydrocodone-la-thuoc-gi-cong-dung-va-lieu-dung',
        image: 'https://longchaupharma.com/storage/uploads/config/default-6.png',
        category: 'Thị trường thuốc',
      },
      {
        title: 'PrEP sức mạnh của dự phòng trước phơi nhiễm HIV',
        href: 'https://longchaupharma.com/prep-suc-manh-cua-du-phong-truoc-phoi-nhiem-hiv',
        image:
          'https://cdn.famitaa.net/storage/uploads/noidung/thumb/prep-suc-manh-cua-du-phong-truoc-phoi-nhiem-hiv-0-260.jpg',
        category: 'Thị trường thuốc',
      },
    ],
  },
  {
    title: 'Hướng dẫn',
    href: 'https://longchaupharma.com/ huong-dan/',
    items: [
      {
        title: 'Hướng Dẫn Tra Cứu Thuốc Giả Chính Xác Từ Cục Quản Lý Dược',
        href: 'https://longchaupharma.com/huong-dan-tra-cuu-thuoc-gia-chinh-xac-tu-cuc-quan-ly-duoc',
        image:
          'https://longchaupharma.com/storage/uploads/noidung/thumb/ huong-dan-tra-cuu-thuoc-gia-chinh-xac-tu-cuc-quan-ly-duoc-0.webp',
        category: 'Hướng dẫn',
      },
    ],
  },
];

export const MEGA_MENU_DATA: Record<string, { name: string; sub: string[] }[]> = {
  'CHĂM SÓC & LÀM ĐẸP': [
    {
      name: 'Chăm sóc da mặt',
      sub: ['Chống nắng da mặt', 'Dưỡng da', 'Làm sạch'],
    },
    {
      name: 'Chăm sóc cơ thể',
      sub: [
        'Vệ sinh',
        'Vệ sinh cá nhân',
        'Đặc trị',
        'Kem se khít vùng kín',
        'Làm sạch cơ thể',
        'Ngăn ngừa & Giảm rạn da',
        'Tẩy lông',
        'Chăm sóc sức khỏe',
        'Dưỡng thể',
        'Kem nở ngực',
        'Chăm sóc răng miệng',
      ],
    },
    {
      name: 'Chăm sóc tóc',
      sub: ['Dầu gội', 'Dầu gội đen tóc', 'Dầu xả'],
    },
    {
      name: 'Trang điểm',
      sub: ['Son dưỡng', 'Trang điểm mặt', 'Trang điểm vùng mắt', 'Tẩy trang Mắt - Môi'],
    },
  ],
  THUỐC: [
    {
      name: 'Thuốc dùng ngoài',
      sub: [
        'Dầu nóng, dầu gió',
        'Dung dịch rơ lưỡi',
        'Thuốc xịt mũi',
        'Thuốc nhỏ mắt, tra mắt',
        'Thuốc sát trùng, sát khuẩn',
        'Thuốc nhỏ tai',
        'Nứt nẻ',
        'Oxy già',
        'Muối y tế',
        'Thuốc bôi da - niêm mạc',
      ],
    },
    { name: 'Thuốc kháng sinh, Kháng nấm', sub: [] },
    { name: 'Thuốc tim mạch & Huyết áp', sub: [] },
    { name: 'Thuốc tiểu đường', sub: [] },
    { name: 'Thuốc hướng thần & Cai nghiện', sub: [] },
    { name: 'Thuốc chống dị ứng ( kháng histamin)', sub: [] },
    { name: 'Thuốc Hô Hấp', sub: [] },
    { name: 'Thuốc kháng viêm, giảm đau & hạ sốt', sub: [] },
    { name: 'Thuốc cường dương', sub: [] },
    { name: 'Thuốc Tiêu Hóa, gan mật', sub: [] },
    { name: 'Thuốc trị ung thư, u bướu', sub: [] },
    { name: 'Thuốc giãn mạch', sub: [] },
    { name: 'Thuốc Hocmon, Nội tiết tố', sub: [] },
    { name: 'Thuốc tiêm, dịch truyền', sub: [] },
    { name: 'Thuốc đường tiết niệu', sub: [] },
    { name: 'Thuốc kháng Virus', sub: [] },
    { name: 'Thuốc bổ - Vitamin - Khoáng chất', sub: [] },
    { name: 'Thuốc cấp cứu và giải độc', sub: [] },
    { name: 'Thuốc trĩ', sub: [] },
    { name: 'Thuốc cầm máu', sub: [] },
    { name: 'Thuốc ngừa thai', sub: [] },
    { name: 'Thuốc đông y', sub: [] },
    { name: 'Thuốc gout, cơ, xương khớp', sub: [] },
    { name: 'Thuốc tác dụng đối với máu', sub: [] },
    { name: 'Thuốc chống say xe', sub: [] },
    { name: 'Thuốc chống thải ghép', sub: [] },
    { name: 'Thuốc da liễu', sub: [] },
    { name: 'Thuốc điều hòa miễn dịch', sub: [] },
    { name: 'Thuốc gây mê, gây tê', sub: [] },
    { name: 'Thuốc trị viêm gan B,C & HIV', sub: [] },
    { name: 'Thuốc mọc tóc', sub: [] },
    { name: 'Thuốc phụ khoa', sub: [] },
    { name: 'Thuốc kiểm soát đặc biệt', sub: [] },
  ],
  'THỰC PHẨM CHỨC NĂNG': [
    {
      name: 'Vitamin theo từ',
      sub: [
        'Vitamin A',
        'Vitamin B',
        'Vitamin C',
        'Vitamin D',
        'Vitamin E',
        'Vitamin H (Biotin)',
        'Vitamin K',
      ],
    },
    {
      name: 'Khoáng chất',
      sub: ['Canxi', 'Kẽm', 'Sắt', 'Selenium', 'Magie'],
    },
    {
      name: 'Fish oil - Omega',
      sub: [
        'Dầu gan cá',
        'Dầu hạt lanh',
        'Dầu nhuyễn thể',
        'Tinh dầu hoa anh thảo',
        'Dầu cá',
        'DHA - omega 3',
      ],
    },
    {
      name: 'Multivitamin',
      sub: [
        'Multivitamin cho bé',
        'Multivitamin cho mẹ bầu',
        'Multivitamin cho nam',
        'Multivitamin cho nữ',
        'Multivitamin cho nam 50+',
        'Multivitamin cho nữ 50+',
      ],
    },
    {
      name: 'Thực phẩm bổ sung',
      sub: ['Lutein', 'Taurine', 'Zeaxanthin', 'Coenzyme Q10 (CoQ10)', 'Resveratrol', 'Lecithin'],
    },
    {
      name: 'Thảo dược bổ sung',
      sub: [
        'Kế sữa (Milk Thistle)',
        'Đông trùng hạ thảo (Cordyceps)',
        'Nam việt quất (Cranberry)',
        'Mầm đậu nành (Isoflavone)',
        'Bạch quả (Ginkgo Biloba)',
        'Tinh chất nghệ (Curcumin)',
        'Tảo xoắn Spirulina',
        'Maca',
        'Nhân sâm',
        'Tỏi (Garlic)',
        'Nữ lang (Valeria Fort)',
        'Trà xanh',
        'Tinh Dầu Thông Đỏ',
      ],
    },
    {
      name: 'Thực phẩm giảm cân',
      sub: ['Hỗ trợ giảm cân', 'Trà giảm cân', 'Kem tan mỡ'],
    },
    {
      name: 'Bổ thận',
      sub: [
        'Gel bôi trơn',
        'Sinh lý nữ',
        'Sinh lý nam',
        'Vô sinh, hiếm muộn',
        'Tuyến tiền liệt',
        'Đường tiết niệu',
      ],
    },
    {
      name: 'Bổ xương khớp, gout',
      sub: [
        'Bệnh Gout',
        'Calcium',
        'Vitamin D3',
        'Cao dán',
        'Dầu xoa bóp',
        'Collagen Type II',
        'Glucosamine',
        'Glucosamine Hydrochloride',
        'Glucosamine Sulfate',
        'Shark Cartilage',
        'Bổ xương khớp',
        'Loãng xương',
      ],
    },
    {
      name: 'Dành cho bé',
      sub: [
        'Ăn ngon',
        'Hô hấp',
        'Miễn dịch',
        'Sữa cho bé',
        'Tăng chiều cao',
        'Thông minh',
        'Hăm tã',
      ],
    },
    {
      name: 'Dành cho mẹ bầu',
      sub: ['Bổ bầu', 'Lợi sữa', 'Acid Folic', 'Sữa cho mẹ'],
    },
    {
      name: 'Làm đẹp',
      sub: [
        'Da móng tóc',
        'Chống lão hóa',
        'Ngừa mụn',
        'Collagen',
        'Nhau thai cừu',
        'Sữa ong chúa',
        'Trắng da',
      ],
    },
    {
      name: 'Lợi khuẩn - Tiêu hóa',
      sub: ['Tiêu hóa, dạ dày', 'Lợi khuẩn (Probiotics)'],
    },
    { name: 'An thần', sub: [] },
    { name: 'Bổ phổi - Hô hấp', sub: [] },
    {
      name: 'Ung Thư',
      sub: ['Fucoidan'],
    },
    { name: 'Tuyến giáp', sub: [] },
    { name: 'Bổ mắt', sub: [] },
    { name: 'Bổ não', sub: [] },
    { name: 'Bổ gan', sub: [] },
    { name: 'Giãn tĩnh mạch - Trĩ', sub: [] },
    { name: 'Tiểu đường', sub: [] },
    { name: 'Cai rượu', sub: [] },
    { name: 'Tim mạch, huyết áp', sub: [] },
    { name: 'Ngủ ngon', sub: [] },
    { name: 'Thính giác', sub: [] },
    { name: 'Tăng sức đề kháng', sub: [] },
  ],
  'THIẾT BỊ Y TẾ': [
    {
      name: 'Bông băng gạc',
      sub: [
        'Băng cuộn',
        'Băng dán',
        'Băng keo',
        'Bông y tế',
        'Bông công nghiệp',
        'Gạc',
        'Miếng dán',
        'Tăm bông',
        'Túi chườm',
        'Khăn lau',
        'Tã bỉm',
      ],
    },
    {
      name: 'Nhiệt kế - Ẩm kế',
      sub: ['Nhiệt kế điện tử', 'Nhiệt kế hồng ngoại', 'Nhiệt kế thủy ngân'],
    },
    {
      name: 'Khẩu trang y tế',
      sub: ['Khẩu trang y tế trẻ em', 'Khẩu trang y tế người lớn'],
    },
    {
      name: 'Dụng cụ theo dõi',
      sub: [
        'Máy đo nồng độ oxy',
        'Máy đo huyết áp',
        'Máy đo đường huyết',
        'Cân sức khỏe',
        'Covid Test',
        'Cốc Nguyệt San',
        'Ống nghe',
      ],
    },
    {
      name: 'Dụng cụ y tế',
      sub: [
        'Máy xông khí dung',
        'Máy xung điện',
        'Máy hút mũi',
        'Dụng cụ vệ sinh mũi',
        'Vớ y khoa',
        'Găng tay y tế',
        'Dụng cụ vệ sinh tai',
        'Máy hút sữa',
        'Nẹp gối',
        'Nẹp lưng',
        'Kim tiêm',
      ],
    },
    { name: 'Cồn', sub: [] },
    { name: 'Bao cao su', sub: [] },
    { name: 'Que thử thai - que thử rụng trứng', sub: [] },
    { name: 'Nước muối, dung dịch sát khuẩn', sub: [] },
  ],
  'SỮA & THỰC PHẨM CAO CẤP': [
    {
      name: 'Sữa Bột',
      sub: ['Sữa dinh dưỡng y học', 'Sữa non', 'Sữa dê'],
    },
    { name: 'Sữa Pha Sẵn', sub: [] },
    {
      name: 'Hạt',
      sub: ['Hạt mắc ca', 'Hạt hạnh nhân', 'Quả óc chó', 'Hạt điều', 'Hạt chia'],
    },
    { name: 'Thực phẩm tăng cân', sub: [] },
  ],
  'TÌM HIỂU BỆNH': [
    { name: 'Ung thư', sub: [] },
    { name: 'Da liễu', sub: [] },
    { name: 'Tim mạch', sub: [] },
    { name: 'Thần Kinh', sub: [] },
    { name: 'Hô Hấp', sub: [] },
    { name: 'Cơ, Xương khớp', sub: [] },
    { name: 'Tai, Mũi, Họng', sub: [] },
    { name: 'Tiêu hóa, gan mật, tụy', sub: [] },
    { name: 'Sản phụ', sub: [] },
    { name: 'Thận niệu, nam khoa', sub: [] },
    { name: 'Truyền nhiễm', sub: [] },
    { name: 'Mắt', sub: [] },
    { name: 'Chủng ngừa', sub: [] },
    { name: 'Tâm thần, tâm lý', sub: [] },
    { name: 'Di truyền, miễn dịch, dị ứng', sub: [] },
    { name: 'Nội tiết', sub: [] },
    { name: 'Răng hàm mặt', sub: [] },
    { name: 'Dinh dưỡng', sub: [] },
    { name: 'Huyết học', sub: [] },
    { name: 'Trẻ em', sub: [] },
  ],
  'TIN TỨC': [
    {
      name: 'Tin tức',
      sub: [
        'Làm đẹp',
        'Xương khớp',
        'Sinh lý',
        'Sức khỏe tổng hợp',
        'Chương trình khuyến mãi',
        'Thị trường thuốc',
      ],
    },
  ],
};

export const HEADER_NAV_ITEMS = [
  'CHĂM SÓC & LÀM ĐẸP',
  'THUỐC',
  'THỰC PHẨM CHỨC NĂNG',
  'THIẾT BỊ Y TẾ',
  'SỮA & THỰC PHẨM CAO CẤP',
  'TÌM HIỂU BỆNH',
  'TIN TỨC',
];

export const NAV_ITEM_SLUGS: Record<string, string> = {
  'CHĂM SÓC & LÀM ĐẸP': 'cham-soc-lam-dep',
  THUỐC: 'thuoc',
  'THỰC PHẨM CHỨC NĂNG': 'thuc-pham-chuc-nang',
  'THIẾT BỊ Y TẾ': 'thiet-bi-y-te',
  'SỮA & THỰC PHẨM CAO CẤP': 'sua-thuc-pham-cao-cap',
  'TÌM HIỂU BỆNH': 'tim-hieu-benh',
  'TIN TỨC': 'tin-tuc',
};

export const NAV_SUBITEM_SLUGS: Record<string, string> = {
  'Acid Folic': 'acid-folic',
  'An thần': 'thuoc-an-than',
  'Ăn ngon': 'thuoc-an-ngon',
  'Bạch quả (Ginkgo Biloba)': 'ginkgo-biloba',
  'Bao cao su': 'bao-cao-su-gia-dinh',
  'Băng cuộn': 'bang-cuon',
  'Băng dán': 'bang-dan',
  'Băng keo': 'bang-keo',
  'Bệnh Gout': 'benh-gout',
  'Bổ bầu': 'bo-bau',
  'Bổ gan': 'thuoc-bo-gan',
  'Bổ mắt': 'bo-mat',
  'Bổ não': 'bo-nao',
  'Bổ phổi - Hô hấp': 'tpbvsk-ho-hap-xoang-phoi',
  'Bổ thận': 'thuoc-bo-than',
  'Bổ xương khớp': 'thuoc-bo-khop',
  'Bổ xương khớp, gout': 'thuoc-xuong-khop',
  'Bông băng gạc': 'bong-bang-gac',
  'Bông công nghiệp': 'bong-cong-nghiep',
  'Bông y tế': 'bong-y-te',
  'Cai rượu': 'cai-ruou',
  Calcium: 'calcium',
  Canxi: 'canxi',
  'Cao dán': 'cao-dan',
  'Cân sức khỏe': 'can-suc-khoe',
  'Chăm sóc cơ thể': 'cham-soc-co-the',
  'Chăm sóc da mặt': 'cham-soc-da-mat',
  'Chăm sóc răng miệng': 'cham-soc-rang-mieng',
  'Chăm sóc sức khỏe': 'cham-soc-suc-khoe',
  'Chăm sóc tóc': 'my-pham-cham-soc-toc',
  'Chống lão hóa': 'chong-lao-hoa',
  'Chống nắng da mặt': 'chong-nang-da-mat',
  'Chủng ngừa': 'chung-ngua',
  'Chương trình khuyến mãi': 'chuong-trinh-khuyen-mai-739',
  'Coenzyme Q10 (CoQ10)': 'coenzyme-q10-coq10',
  Collagen: 'collagen',
  'Collagen Type II': 'collagen-type-ii',
  'Covid Test': 'covid-test-52',
  'Cốc Nguyệt San': 'coc-nguyet-san',
  Cồn: 'vat-tu-tieu-hao',
  'Cơ, Xương khớp': 'co-xuong-khop',
  'Da liễu': 'da-lieu',
  'Da móng tóc': 'da-mong-toc',
  'Dành cho bé': 'danh-cho-be',
  'Dành cho mẹ bầu': 'danh-cho-me-bau',
  'Dầu cá': 'dau-ca-701',
  'Dầu gan cá': 'dau-gan-ca',
  'Dầu gội': 'dau-goi',
  'Dầu gội đen tóc': 'dau-goi-den-toc',
  'Dầu hạt lanh': 'dau-hat-lanh',
  'Dầu nhuyễn thể': 'dau-nhuyen-the',
  'Dầu nóng, dầu gió': 'dau-nong-dau-gio',
  'Dầu xả': 'dau-xa',
  'Dầu xoa bóp': 'cao-xoa-bop',
  'DHA - omega 3': 'dha',
  'Di truyền, miễn dịch, dị ứng': 'di-truyen-mien-dich-di-ung',
  'Dinh dưỡng': 'dinh-duong',
  'Dụng cụ theo dõi': 'dung-cu-theo-doi',
  'Dụng cụ vệ sinh mũi': 'dung-cu-ve-sinh-mui',
  'Dụng cụ vệ sinh tai': 'dung-cu-ve-sinh-tai',
  'Dụng cụ y tế': 'dung-cu-y-te',
  'Dung dịch rơ lưỡi': 'dung-dich-ro-luoi',
  'Dưỡng da': 'duong-da',
  'Dưỡng thể': 'duong-the',
  'Đặc trị': 'dac-tri',
  'Đông trùng hạ thảo (Cordyceps)': 'dong-trung-ha-thao-cordyceps',
  'Đường tiết niệu': 'duong-tiet-nieu',
  'Fish oil - Omega': 'omega-3',
  Fucoidan: 'fucoidan',
  Gạc: 'gac',
  'Găng tay y tế': 'gang-tay-y-te',
  'Gel bôi trơn': 'gel-boi-tron',
  'Giãn tĩnh mạch - Trĩ': 'gian-tinh-mach-tri',
  Glucosamine: 'glucosamine',
  'Glucosamine Hydrochloride': 'glucosamine-hydrochloride',
  'Glucosamine Sulfate': 'glucosamine-sulfate',
  Hạt: 'hat',
  'Hạt chia': 'hat-chia',
  'Hạt điều': 'hat-dieu',
  'Hạt hạnh nhân': 'hat-hanh-nhan',
  'Hạt mắc ca': 'hat-mac-ca',
  'Hăm tã': 'ham-ta',
  'Hô hấp': 'ho-hap-651',
  'Hô Hấp': 'ho-hap-651',
  'Hỗ trợ giảm cân': 'thuoc-giam-can',
  'Huyết học': 'huyet-hoc',
  Kẽm: 'kem',
  'Kem nở ngực': 'kem-no-nguc',
  'Kem se khít vùng kín': 'kem-se-khit-vung-kin',
  'Kem tan mỡ': 'kem-tan-mo',
  'Kế sữa (Milk Thistle)': 'ke-sua-milk-thistle',
  'Khăn lau': 'khan-lau',
  'Khẩu trang y tế': 'khau-trang-y-te',
  'Khẩu trang y tế người lớn': 'khau-trang-y-te-nguoi-lon',
  'Khẩu trang y tế trẻ em': 'khau-trang-y-te-tre-em',
  'Khoáng chất': 'khoang-chat',
  'Kim tiêm': 'kim-tiem',
  'Làm đẹp': 'thuoc-lam-dep',
  'Làm sạch': 'lam-sach',
  'Làm sạch cơ thể': 'lam-sach-co-the',
  Lecithin: 'lecithin',
  'Loãng xương': 'dieu-tri-loang-xuong',
  'Lợi khuẩn - Tiêu hóa': 'tpbvsk-da-day-tieu-hoa-than',
  'Lợi khuẩn (Probiotics)': 'loi-khuan-probiotics',
  'Lợi sữa': 'loi-sua',
  Lutein: 'lutein',
  Maca: 'maca',
  Magie: 'magie',
  'Máy đo đường huyết': 'may-do-duong-huyet',
  'Máy đo huyết áp': 'may-do-huyet-ap',
  'Máy đo nồng độ oxy': 'may-do-nong-do-oxy',
  'Máy hút mũi': 'may-hut-dich',
  'Máy hút sữa': 'may-hut-sua',
  'Máy xông khí dung': 'may-xong-hong',
  'Máy xung điện': 'may-massage',
  Mắt: 'mat',
  'Mầm đậu nành (Isoflavone)': 'mam-dau-nanh-isoflavone',
  'Miễn dịch': 'mien-dich',
  'Miếng dán': 'mieng-dan',
  Multivitamin: 'daily-multivitamin',
  'Multivitamin cho bé': 'multivitamin-cho-be',
  'Multivitamin cho mẹ bầu': 'multivitamin-cho-me-bau',
  'Multivitamin cho nam': 'multivitamin-cho-nam',
  'Multivitamin cho nam 50+': 'multivitamin-cho-nam-50',
  'Multivitamin cho nữ': 'multivitamin-cho-nu',
  'Multivitamin cho nữ 50+': 'multivitamin-cho-nu-50',
  'Muối y tế': 'muoi-y-te',
  'Nam việt quất (Cranberry)': 'nam-viet-quat-cranberry',
  'Nẹp gối': 'dai-lung-dau-goi',
  'Nẹp lưng': 'dai-lung',
  'Ngăn ngừa & Giảm rạn da': 'ngan-ngua',
  'Ngủ ngon': 'thuoc-ngu-ngon',
  'Ngừa mụn': 'ngua-mun',
  'Nhau thai cừu': 'nhau-thai-cuu',
  'Nhân sâm': 'nhan-sam',
  'Nhiệt kế - Ẩm kế': 'nhiet-ke-am-ke',
  'Nhiệt kế điện tử': 'nhiet-ke-dien-tu',
  'Nhiệt kế hồng ngoại': 'nhiet-ke-hong-ngoai',
  'Nhiệt kế thủy ngân': 'nhiet-ke-thuy-ngan',
  'Nội tiết': 'noi-tiet',
  'Nữ lang (Valeria Fort)': 'nu-lang-valeria-fort',
  'Nước muối, dung dịch sát khuẩn': 'nuoc-muoi-dung-dich-sat-khuan',
  'Nứt nẻ': 'nut-ne',
  'Oxy già': 'oxy-gia',
  'Ống nghe': 'ong-nghe',
  'Quả óc chó': 'qua-oc-cho',
  'Que thử thai - que thử rụng trứng': '-0',
  'Răng hàm mặt': 'rang-ham-mat',
  Resveratrol: 'resveratrol',
  'Sản phụ': 'san-phu',
  Sắt: 'sat',
  Selenium: 'selenium',
  'Shark Cartilage': 'shark-cartilage',
  'Sinh lý': 'sinh-ly',
  'Sinh lý nam': 'thuoc-sinh-ly-nam',
  'Sinh lý nữ': 'thuoc-sinh-ly-nu',
  'Son dưỡng': 'son-duong',
  'Sữa Bột': 'sua-bot',
  'Sữa cho bé': 'sua-cho-be',
  'Sữa cho mẹ': 'sua-cho-me',
  'Sữa dê': 'sua-de',
  'Sữa dinh dưỡng y học': 'sua-dinh-duong-y-hoc',
  'Sữa non': 'sua-non',
  'Sữa ong chúa': 'sua-ong-chua',
  'Sữa Pha Sẵn': 'sua-pha-san',
  'Sức khỏe tổng hợp': 'suc-khoe-tong-hop',
  'Tã bỉm': 'ta-bim',
  'Tai, Mũi, Họng': 'tai-mui-hong',
  'Tảo xoắn Spirulina': 'spirulina',
  Taurine: 'taurine',
  'Tăm bông': 'tam-bong',
  'Tăng chiều cao': 'thuoc-tang-chieu-cao',
  'Tăng sức đề kháng': 'tang-suc-de-khang',
  'Tâm thần, tâm lý': 'tam-than-tam-ly',
  'Tẩy lông': 'tay-long',
  'Tẩy trang Mắt - Môi': 'tay-trang-mat-moi',
  'Thảo dược bổ sung': 'thao-duoc-bo-sung',
  'Thần Kinh': 'than-kinh',
  'Thận niệu, nam khoa': 'than-nieu-nam-khoa',
  'Thị trường thuốc': 'thi-truong-thuoc',
  'Thính giác': 'thinh-giac',
  'Thông minh': 'thong-minh',
  'Thuốc bổ - Vitamin - Khoáng chất': 'vitamin',
  'Thuốc bôi da - niêm mạc': 'thuoc-boi-da-niem-mac',
  'Thuốc cầm máu': 'thuoc-cam-mau',
  'Thuốc cấp cứu và giải độc': 'thuoc-cap-cuu-va-giai-doc',
  'Thuốc chống dị ứng ( kháng histamin)': 'thuoc-khang-histamin',
  'Thuốc chống say xe': 'thuoc-chong-say-xe',
  'Thuốc chống thải ghép': 'thuoc-chong-thai-ghep',
  'Thuốc cường dương': 'thuoc-cuong-duong',
  'Thuốc da liễu': 'thuoc-da-lieu',
  'Thuốc dùng ngoài': 'thuoc-dung-ngoai',
  'Thuốc điều hòa miễn dịch': 'thuoc-dieu-hoa-mien-dich',
  'Thuốc đông y': 'thuoc-dong-y-viet-nam',
  'Thuốc đường tiết niệu': 'thuoc-soi-than',
  'Thuốc gây mê, gây tê': 'thuoc-gay-me-gay-te',
  'Thuốc giãn mạch': 'thuoc-tri-suy-gian-tinh-mach',
  'Thuốc gout, cơ, xương khớp': '-64',
  'Thuốc Hocmon, Nội tiết tố': 'hocmon-noi-tiet-to',
  'Thuốc Hô Hấp': 'thuoc-ho',
  'Thuốc hướng thần & Cai nghiện': 'thuoc-huong-than',
  'Thuốc kháng sinh, Kháng nấm': 'thuoc-khang-sinh',
  'Thuốc kháng viêm, giảm đau & hạ sốt': 'thuoc-khang-viem',
  'Thuốc kháng Virus': 'thuoc-giam-dau',
  'Thuốc kiểm soát đặc biệt': 'thuoc-kiem-soat-dac-biet',
  'Thuốc mọc tóc': 'thuoc-moc-toc',
  'Thuốc ngừa thai': 'thuoc-tranh-thai',
  'Thuốc nhỏ mắt, tra mắt': 'thuoc-nho-mat-tra-mat',
  'Thuốc nhỏ tai': 'thuoc-nho-tai',
  'Thuốc phụ khoa': 'thuoc-phu-khoa',
  'Thuốc sát trùng, sát khuẩn': 'thuoc-sat-trung-sat-khuan',
  'Thuốc tác dụng đối với máu': 'thuoc-tac-dung-doi-voi-mau',
  'Thuốc tiêm, dịch truyền': 'thuoc-tiem',
  'Thuốc tiểu đường': 'thuoc-tieu-duong',
  'Thuốc Tiêu Hóa, gan mật': 'thuoc-bao-tu-da-day',
  'Thuốc tim mạch & Huyết áp': 'thuoc-tim-mach',
  'Thuốc trĩ': 'thuoc-tri',
  'Thuốc trị ung thư, u bướu': 'thuoc-tri-ung-thu',
  'Thuốc trị viêm gan B,C & HIV': 'thuoc-tri-viem-gan-bc-hiv',
  'Thuốc xịt mũi': 'thuoc-xit-mui',
  'Thực phẩm bổ sung': 'thuc-pham-bo-sung',
  'Thực phẩm giảm cân': 'thuoc-giam-can',
  'Thực phẩm tăng cân': 'thuc-pham-tang-can',
  'Tiểu đường': 'tieu-duong',
  'Tiêu hóa, dạ dày': 'tieu-hoa-da-day',
  'Tiêu hóa, gan mật, tụy': 'tieu-hoa-gan-mat-tuy',
  'Tim mạch': 'tim-mach',
  'Tim mạch, huyết áp': 'thuoc-bo-tim',
  'Tin tức': 'tin-tuc',
  'Tinh chất nghệ (Curcumin)': 'tinh-chat-nghe-curcumin',
  'Tinh dầu hoa anh thảo': 'tinh-dau-hoa-anh-thao',
  'Tinh Dầu Thông Đỏ': 'tinh-dau-thong-do',
  'Tỏi (Garlic)': 'toi-garlic',
  'Trà giảm cân': 'tra-giam-can',
  'Trà xanh': 'tra-xanh',
  'Trang điểm': 'trang-diem',
  'Trang điểm mặt': 'trang-diem-mat',
  'Trang điểm vùng mắt': 'trang-diem-vung-mat',
  'Trắng da': 'trang-da',
  'Trẻ em': 'tre-em',
  'Truyền nhiễm': 'truyen-nhiem',
  'Túi chườm': 'tui-chuom',
  'Tuyến giáp': 'tuyen-giap',
  'Tuyến tiền liệt': 'tuyen-tien-liet',
  'Ung thư': 'tpbvsk-ung-thu',
  'Ung Thư': 'tpbvsk-ung-thu',
  'Vệ sinh': 've-sinh',
  'Vệ sinh cá nhân': 've-sinh-ca-nhan',
  'Vitamin A': 'vitamin-a',
  'Vitamin B': 'vitamin-b',
  'Vitamin C': 'vitamin-c',
  'Vitamin D': 'vitamin-d',
  'Vitamin D3': 'vitamin-d3',
  'Vitamin E': 'vitamin-e',
  'Vitamin H (Biotin)': 'vitamin-h-biotin',
  'Vitamin K': 'vitamin-k',
  'Vitamin theo từ': 'vitamin-996',
  'Vô sinh, hiếm muộn': 'thuoc-vo-sinh',
  'Vớ y khoa': 'vo-y-khoa',
  'Xương khớp': 'xuong-khop',
  Zeaxanthin: 'zeaxanthin',
};

export const FEATURES_DATA = [
  { title: 'Giao hàng tận nơi', subtitle: 'Nhanh chóng & An toàn' },
  { title: 'Chất lượng đảm bảo', subtitle: 'Sản phẩm chính hãng' },
  { title: 'Đổi trả dễ dàng', subtitle: 'Linh hoạt theo chính sách' },
  { title: 'Tư vấn 24/7', subtitle: 'Giải đáp tận tình chu đáo' },
];

export const UI_TEXT = {
  BRAND_NAME: 'Minh Châu Pharma',
  HOTLINE: '1800 6928',
  FIND_PHARMACY: 'Tìm nhà thuốc',
  RECRUITMENT: 'Tuyển dụng',
  PARTNERSHIP: 'Hợp tác',
  ABOUT_US: 'Về chúng tôi',
  SEARCH_PLACEHOLDER: 'Tìm kiếm...',
  POPULAR_KEYWORDS: [
    'dung dịch vệ sinh',
    'men vi sinh',
    'sữa rửa mặt',
    'kẽm',
    'kem chống nắng',
    'D3k2',
    'canxi',
    'Dhc',
  ],
  ACCOUNT: 'Tài khoản',
  CART: 'Giỏ hàng',
  LOGIN: 'Đăng nhập',
  REGISTER: 'Đăng ký',
  LOGIN_TITLE: 'Đăng nhập tài khoản',
  LOGIN_SUBTITLE: 'Nhập Email và Mật Khẩu của bạn',
  USERNAME_LABEL: 'Nhập Email hoặc Số Điện Thoại đăng nhập',
  PASSWORD_LABEL: 'Mật khẩu',
  USERNAME_PLACEHOLDER: 'vd: 09xxxxxxxx | email@gmail.com',
  PASSWORD_PLACEHOLDER: 'Tối thiểu 8 ký tự',
  FORGOT_PASSWORD: 'Quên mật khẩu?',
  FIND_BACK: 'Tìm lại',
  NO_ACCOUNT: 'Chưa có tài khoản?',
  LOGIN_SOCIAL: 'Đăng nhập mạng xã hội',
  LOGIN_WITH_FB: 'Đăng nhập bằng Facebook',
  LOGIN_WITH_GG: 'Đăng nhập bằng Google',
  REQUIRED: '*',
  OR: 'Hoặc',
  SITEMAP: 'Kiểm tra đơn hàng',
  POLICIES: 'CHÍNH SÁCH CHUNG',
  POLICY_RETURN: 'Chính sách đổi trả',
  POLICY_DELIVERY: 'Chính sách giao hàng',
  POLICY_PRIVACY: 'Chính sách bảo mật',
  CSKH_LABEL: 'CSKH:',
  EMAIL_LABEL: 'Email:',
  WEBSITE_LABEL: 'Website:',
  COPYRIGHT: '© Bản quyền thuộc về longchaupharma.com',
  WHY_CHOOSE_US_TITLE: 'TẠI SAO CHỌN CHÚNG TÔI',
  HOME: 'Trang chủ',
  CATEGORY: 'Danh mục',
  HOTLINE_LABEL: 'Hotline',
  ZALO: 'Zalo',
  CLOSE: 'Đóng',
  MEMBER_PAGE_TITLE: 'Trang thành viên',
  LOGIN_MEMBER_TITLE: 'Đăng nhập thành viên',
  LOGIN_MEMBER_SUBTITLE: 'Vui lòng đăng nhập để được hưởng chế độ ưu đãi dành cho thành viên.',
  VIEW_ALL: 'Xem toàn bộ',
  CATEGORY_DETAILS: 'Chi tiết danh mục',
  BANNER_ALT: 'Minh Châu Pharma Banner',
  NAV_DISEASE: 'TÌM HIỂU BỆNH',
  NAV_NEWS: 'TIN TỨC',
  BEST_SELLERS_TITLE: 'BÁN CHẠY',
  NEW_ARRIVALS_TITLE: 'MỚI VỀ',
  NEW_ARRIVALS_SUBTITLE: 'Dòng sản phẩm chăm sóc sức khỏe mới dành riêng cho bạn!',
  SEARCH_GUIDE_TITLE: 'HƯỚNG DẪN TRA CỨU',
  SEARCH_GUIDE_SUBTITLE: 'Thông tin thuốc',
  SEARCH_GUIDE_BTN: 'Tra cứu ngay',
  PROMO_TITLE: 'BỊ THƯƠNG CÓ NGAY URHO',
  ORDER_NOW: 'ĐẶT HÀNG NGAY',
  NEWS_TITLE: 'TIN TỨC',
  SEE_MORE_NEWS: 'Xem thêm Tin tức',
  YOUR_CART: 'GIỎ HÀNG CỦA BẠN',
  TOTAL_AMOUNT: 'Tổng tiền:',
  QUANTITY: 'Số lượng:',
  EMPTY_CART: 'Giỏ hàng của bạn đang trống',
  UPDATE: 'Cập nhật',
  CLEAR_CART: 'Xóa giỏ hàng',
  CHECKOUT_NOW: 'Thanh toán ngay',
  UNIT_PRICE: 'đ',
  SEND_PRESCRIPTION: 'Gửi đơn thuốc',
  SEARCH_BY_CATEGORY: 'TÌM THEO DANH MỤC',
  FEATURED_BRANDS_TITLE: 'THƯƠNG HIỆU NỔI BẬT',
  FEATURED_BRANDS_SUBTITLE: 'Chọn từ các thương hiệu yêu thích nhất',
  CHECKOUT_TITLE: ' ĐẶT HÀNG',
  FULL_NAME_LABEL: 'Họ tên',
  PHONE_LABEL: 'Điện thoại',
  ADDRESS_LABEL: 'Địa chỉ',
  ADDRESS_PLACEHOLDER: 'Số nhà - Tên Đường',
  PROVINCE_LABEL: 'Tỉnh thành',
  PROVINCE_PLACEHOLDER: 'Chọn Tỉnh/Thành Phố',
  DISTRICT_LABEL: 'Quận/huyện',
  DISTRICT_PLACEHOLDER: 'Chọn Quận/Huyện',
  WARD_LABEL: 'Phường / Xã',
  WARD_PLACEHOLDER: 'Chọn Phường/Xã',
  NOTE_LABEL: 'Ghi chú',
  ORDER_SUMMARY: 'THÔNG TIN GIỎ HÀNG',
  SUBTOTAL: 'Tạm tính:',
  GRAND_TOTAL: 'Thành tiền:',
  PAYMENT_METHOD_TITLE: 'Phương thức thanh toán',
  COD_LABEL: 'Thanh toán khi nhận hàng (COD)',
  TRANSFER_LABEL: 'Thanh toán chuyển khoản',
  PRODUCT_INFO_TITLE: 'Thông tin sản phẩm',
  PRODUCT_CONTENT_TITLE: 'Nội dung sản phẩm',
  SEE_MORE_CONTENT: 'Xem thêm nội dung',
  FONT_SIZE_LABEL: 'Kích thước chữ',
  LARGER_LABEL: 'Lớn hơn',
  REVIEWS_COMMENTS_TITLE: 'Đánh Giá - Bình Luận',
  YOUR_COMMENT_TITLE: 'BÌNH LUẬN CỦA BẠN',
  YOUR_RATING_LABEL: 'Đánh giá của bạn:',
  NAME_PLACEHOLDER: 'Vui lòng nhập họ tên...',
  EMAIL_PLACEHOLDER: 'Vui lòng nhập email...',
  PHONE_PLACEHOLDER: 'Vui lòng nhập số điện thoại...',
  COMMENT_PLACEHOLDER: 'Vui lòng nhập bình luận......',
  CAPTCHA_PLACEHOLDER: 'Vui lòng nhập captcha',
  SUBMIT_COMMENT: 'Gửi bình luận',
  RESET: 'nhập lại',
  QUICK_LINKS_TITLE: 'ĐƯỜNG DẪN NHANH',
  PRICE_LABEL: 'Giá bán:',
  CALL_ME_BTN: 'Gọi cho tôi',
  CONSULT_PHONE_PLACEHOLDER: 'Nhập số điện thoại cần tư vấn',
  OTHER_OPTIONS_SAME_BRAND: 'Lựa chọn khác cùng hãng',
  GIAO_NHANH_2H_TITLE: 'Giao nhanh thuốc trong 2H nội thành HCM',
  SEE_DETAILS: 'Xem chi tiết',
  ALT_PRODUCTS_TITLE: 'Tất cả sản phẩm thay thế',
  ALT_PRODUCTS_DISCLAIMER:
    'Chỉ dành cho mục đích thông tin. Tham khảo ý kiến bác sĩ trước khi dùng bất kỳ loại thuốc nào.',
  SEE_ALL_ALT_PRODUCTS: 'Xem tất cả sản phẩm thay thế',
  SAME_ACTIVE_INGREDIENT: 'Cùng hoạt chất',
  SAME_CATEGORY_PRODUCTS: 'Sản phẩm cùng danh mục',
  SAME_BRAND_PRODUCTS: 'Cùng thương hiệu',
  SEE_ALL: 'Xem tất cả',
  SEE_ALL_BRAND_PRODUCTS: 'Xem tất cả sản phẩm',
  ADD_TO_CART: 'Thêm vào giỏ hàng',
  BENEFITS_OF: 'Công dụng của',
  INGREDIENTS: 'Thành phần',
  USAGE_TARGET: 'Đối tượng sử dụng',
  USAGE_GUIDE: 'Hướng dẫn sử dụng',
  STORAGE: 'Bảo quản',
  ORDER_PRESCRIPTION_IN: 'Đặt đơn thuốc trong',
  SEND_PRESCRIPTION_SHORT: 'Gửi đơn',
  FAST_DELIVERY_2H: 'Giao nhanh 2H nội thành HCM',
  FAST_DELIVERY_POLICY: 'Chính sách giao hàng 2H',
  BUY_1_GET_1: 'Mua 1 tặng 1',
  SEE_NOW: 'Xem ngay',
  BUY_COMBO_PRICE: 'Mua Combo giá tốt hơn',
  VISIT_NOW: 'Ghé ngay',
  FREE_SHIPPING_FOR: 'Miễn phí giao hàng cho đơn hàng',
  RETURN_POLICY_6_DAYS: 'Đổi trả trong 6 ngày',
  RETURN_POLICY_LINK: 'Chính sách đổi trả',
  MINUTES: 'phút',
  THUC_PHAM_CHUC_NANG: 'Thực phẩm chức năng',
  BO_XUONG_KHOP_GOUT: 'Bổ xương khớp, gout',
  BO_XUONG_KHOP: 'Bổ xương khớp',
  PRODUCT_IMAGE_NOTICE: 'Hình sản phẩm có thể thay đổi theo thời gian',
  PRODUCT_PRICE_NOTICE: 'Giá sản phẩm có thể thay đổi tuỳ thời điểm',
  RETURN_30_DAYS: '30 ngày trả hàng',
  PACKAGING_SAFETY: 'Các sản phẩm được đóng gói và bảo quản an toàn.',
  CAPTCHA: 'Captcha',
  REGISTRATION_NUMBER: 'Số đăng ký:',
  PACKAGING_SPEC: 'Quy cách đóng gói:',
  BRAND_LABEL: 'Thương hiệu:',
  ORIGIN_LABEL: 'Xuất xứ:',
  DOSAGE_FORM: 'Dạng bào chế:',
  MANUFACTURER: 'Nhà sản xuất:',
  DIRECTIONS_FOR_USE: 'Hướng dẫn sử dụng',
  USAGE_NOTE: 'Lưu ý:',
  STORAGE_INSTRUCTION: 'Bảo quản',
  PRO_TIP_EAT_MORNING: 'Nên ăn vào buổi sáng, ngon hơn khi ăn lạnh',
  CHILDREN_USAGE: 'Trẻ em có thể cắt nhỏ hoặc ăn trực tiếp:',
  AGE_3_6: 'Trẻ 3 – 6 tuổi:',
  AGE_7_12: 'Trẻ 7 – 12 tuổi:',
  AGE_OVER_12: 'Trẻ trên 12 tuổi, người lớn và phụ nữ có thai:',
  DIABETES_SAFE:
    'Sản phẩm không chứa đường sinh năng lượng, có thể dùng cho người là tiểu đường và phụ nữ có thai.',
  NOT_A_MEDICINE: 'Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc chữa bệnh.',
  HYPERSENSITIVITY_WARNING: 'Quá mẫn với bất kỳ thành phần nào của sản phẩm.',
  PER_DAY: '/ngày',
  MORNING: 'vào buổi sáng',
  AFTERNOON: 'vào buổi chiều',
  LUNCH: 'vào buổi trưa',
  OR_DIVIDED: 'hoặc chia 2 lần',
  LOGO_PART1: 'Minh Châu',
  LOGO_PART2: 'Pharma',
  STORAGE_DETAIL: 'Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
  WHY_CHOOSE_US_DATA: [
    {
      title: '8 Triệu +',
      desc: 'Chăm sóc hơn 8 triệu khách hàng Việt Nam.',
    },
    {
      title: '2 Triệu +',
      desc: 'Đã giao hơn 2 triệu đơn hàng đi toàn quốc',
    },
    {
      title: '18.000 +',
      desc: 'Đa dạng thuốc, thực phẩm bổ sung, dược mỹ phẩm.',
    },
    {
      title: '100 +',
      desc: 'Hơn 100 điểm bán và hệ thống liên kết trên toàn quốc',
    },
  ],
  MENU_LABEL: 'Menu',
  PRODUCTS_LABEL_UPPER: 'SẢN PHẨM',
  ITEMS_LABEL_UPPER: 'SẢN PHẨM',
  PRODUCT_UNIT: 'SP',
  // Sorting & Filtering
  SORT_BY: 'Sắp xếp theo',
  SORT_DEFAULT: 'Mặc định',
  SORT_PRICE_LOW_HIGH: 'Giá: Thấp đến cao',
  SORT_PRICE_HIGH_LOW: 'Giá: Cao đến thấp',
  SORT_NAME_A_Z: 'Tên: A-Z',
  SORT_NAME_Z_A: 'Tên: Z-A',
  SORT_NEWEST: 'Mới nhất',
  SORT_BEST_SELLING: 'Bán chạy nhất',
  SORT_PRICE_LOW_TO_HIGH: 'Giá từ thấp đến cao',
  SORT_PRICE_HIGH_TO_LOW: 'Giá từ cao đến thấp',
  FILTER_LABEL: 'Bộ lọc',
  FILTER_BTN: 'Lọc',
  FILTER_CATEGORY: 'LOẠI TIN',
  FILTER_PACKAGING: 'QUY CÁCH ĐÓNG GÓI',
  FILTER_MANUFACTURER: 'NHÀ SẢN XUẤT',
  FILTER_BRAND: 'THƯƠNG HIỆU',
  FILTER_ORIGIN: 'XUẤT XỨ',
  FILTER_ACTIVE_INGREDIENT: 'HOẠT CHẤT',
  EXPAND_COLLAPSE: 'Mở rộng/Ẩn bớt',
  // Product Listing
  ALL_PRODUCTS: 'Tất cả sản phẩm',
  TOTAL_PRODUCTS: 'Tổng sản phẩm:',
  PRODUCTS_COUNT: 'sản phẩm',
  LOAD_MORE: 'Xem thêm',
  PRODUCTS_REMAINING: 'Sản phẩm còn lại',
  BRAND_NOT_FOUND: 'Không tìm thấy thương hiệu',
  // QR Code Page
  QR_CODES_TITLE: 'QR CODES SẢN PHẨM',
  QR_CODES_SUBTITLE: 'Quét mã QR để xem chi tiết sản phẩm',
  QR_PRODUCT_LABEL: 'SẢN PHẨM',
  QR_VIEW_PRODUCT: 'Xem sản phẩm',
  QR_DOWNLOAD: 'Tải xuống',
  QR_PRINT_ALL: 'In tất cả QR Code',
  QR_GUIDE_TITLE: 'Hướng dẫn sử dụng',
  QR_GUIDE_STEP1_TITLE: 'Mở camera điện thoại',
  QR_GUIDE_STEP1_DESC: 'Sử dụng ứng dụng camera hoặc ứng dụng quét QR code',
  QR_GUIDE_STEP2_TITLE: 'Quét mã QR',
  QR_GUIDE_STEP2_DESC: 'Hướng camera vào mã QR để quét',
  QR_GUIDE_STEP3_TITLE: 'Xem chi tiết',
  QR_GUIDE_STEP3_DESC: 'Nhấn vào link để xem thông tin sản phẩm',
  URL_LABEL: 'URL:',
};

export const MOBILE_MENU_ITEMS = [
  {
    id: '1',
    label: 'NHÀ THUỐC Minh CHÂU | NHÀ THUỐC 24/7 | NHÀ THUỐC ONLINE',
    active: true,
  },
  { id: '2', label: 'GIỚI THIỆU' },
  { id: '3', label: 'KHÁCH MUA LẺ' },
  { id: '4', label: 'DANH MỤC KHUYẾN MÃI' },
  { id: '5', label: 'DANH MỤC', hasSub: true },
  { id: '6', label: 'HƯỚNG DẪN MUA HÀNG' },
  { id: '7', label: 'LIÊN HỆ' },
  { id: '8', label: 'VỀ CHÚNG TÔI', hasSub: true },
  { id: '9', label: 'YÊU CẦU BÁO GIÁ' },
  { id: '10', label: 'TƯ VẤN' },
  { id: '11', label: 'THUỐC HEN SUYỄN' },
  { id: '12', label: 'CHÍNH SÁCH CHUNG' },
];

export const LOGO_URL =
  'https://nhathuocminhchau.com/storage/uploads/logo/chosithuoccom-5967-hinh.png';
export const SUB_LOGO_URL =
  'https://nhathuocminhchau.vn/storage/uploads/images/image-20241104105148-1.png';
export const LOGO_ALT = 'Nhà Thuốc Minh Châu';
