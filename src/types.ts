export interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  subPrice?: string;
  image: string;
  hasPrescription?: boolean;
  quantity?: number;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  slug: string;
}

export interface Brand {
  name: string;
  logo: string;
  slug: string;
}

export interface NewsItem {
  id: number;
  title: string;
  image: string;
  date: string;
  slug?: string;
  category?: string;
}

export type ArticleBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'heading';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    }
  | {
      type: 'image';
      src: string;
      alt: string;
      caption?: string;
    };

export interface ArticleDetail {
  slug: string;
  title: string;
  category: string;
  intro: string;
  image: string;
  quickLinks: string[];
  blocks: ArticleBlock[];
  views?: number;
}
