// アプリケーション全体の定数

export const SITE_NAME = 'Atelier';
export const SITE_DESCRIPTION = 'モノトーンを基調とした洗練されたアパレルブランド';

export const CONTACT_EMAIL = 'info@atelier.example.com';
export const CONTACT_PHONE = '03-1234-5678';

export const COMPANY_NAME = 'Atelier CO.,LTD.';
export const COMPANY_ADDRESS = '〒150-0001 東京都渋谷区神宮前1-1-1';

// ページタイトル
export const PAGE_TITLES = {
  HOME: 'Atelier - メンズモノトーンアパレル',
  PRODUCTS: '商品一覧',
  PRODUCT_DETAIL: '商品詳細',
  CATEGORY: 'カテゴリー',
  BRANDS: 'ブランド一覧',
  CART: 'ショッピングカート',
  FAVORITES: 'お気に入り',
  CONTACT: 'お問い合わせ',
  ABOUT: 'Atelierについて',
} as const;

// ナビゲーション
export const NAV_ITEMS = [
  { label: 'アイテム', href: '/category/all' },
  { label: 'ブランド', href: '/brands' },
  { label: '特集', href: '/features' },
  { label: '店舗', href: '/stores' },
] as const;
