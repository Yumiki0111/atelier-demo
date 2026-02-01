// 型定義の一元管理

export interface Product {
  id: string;
  title: string;
  brand: string;
  price: string;
  image: string;
  href: string;
  isNew?: boolean;
  images?: string[];
  colors?: ProductColor[];
  description?: string;
  sizeTable?: SizeTable;
  details?: ProductDetails;
  categoryId?: string;
  categoryName?: string;
}

export interface ProductColor {
  name: string;
  image: string;
  sizes: ProductSize[];
}

export interface ProductSize {
  size: string;
  inStock: boolean;
  productId: string;
}

export interface SizeTable {
  headers: string[];
  rows: { size: string; measurements: string[] }[];
}

export interface ProductDetails {
  material?: string;
  origin?: string;
  care?: string;
  code?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  subCategories?: Category[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  brand: string;
  price: string;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface Brand {
  id: string;
  name: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}
