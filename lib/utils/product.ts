import { Product, BreadcrumbItem } from '../types';
import { getCategoryById } from '../data/categories';

// 商品関連のユーティリティ関数

// 商品のパンくずリストを生成
export function generateBreadcrumbs(product: Product): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { label: 'HOME', href: '/' },
  ];

  if (product.categoryId) {
    const category = getCategoryById(product.categoryId);
    if (category) {
      items.push({
        label: category.name,
        href: `/category/${category.slug}`,
      });
    }
  }

  items.push({ label: product.title });

  return items;
}

// 商品のバリエーションを正規化
export function normalizeVariations(product: Product) {
  if (product.colors && product.colors.length > 0) {
    return product.colors.map((color) => ({
      color: color.name,
      colorImage: color.image,
      sizes: color.sizes,
    }));
  }

  // デフォルトバリエーション
  return [
    {
      color: 'DEFAULT',
      colorImage: product.image,
      sizes: [
        { size: 'M', inStock: true, productId: product.id },
        { size: 'L', inStock: true, productId: product.id },
      ],
    },
  ];
}

// 商品の画像リストを取得
export function getProductImages(product: Product): string[] {
  return product.images || [product.image];
}

// 価格を数値に変換（税抜き）
export function parsePrice(priceString: string): number {
  const numericString = priceString.replace(/[￥,]/g, '');
  return parseInt(numericString, 10) || 0;
}

// 価格をフォーマット
export function formatPrice(price: number): string {
  return `￥${price.toLocaleString()}`;
}
