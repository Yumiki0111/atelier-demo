import { Category } from '../types';

// カテゴリデータの一元管理
export const categories: Category[] = [
  {
    id: 'outer',
    name: 'アウター',
    slug: 'outer',
    subCategories: [
      { id: 'jacket', name: 'ジャケット', slug: 'jacket', parentId: 'outer' },
      { id: 'blouson', name: 'ブルゾン', slug: 'blouson', parentId: 'outer' },
      { id: 'down', name: 'ダウンジャケット/中綿', slug: 'down', parentId: 'outer' },
      { id: 'vest', name: 'ベスト', slug: 'vest', parentId: 'outer' },
      { id: 'coat', name: 'コート', slug: 'coat', parentId: 'outer' },
    ],
  },
  {
    id: 'tops',
    name: 'トップス',
    slug: 'tops',
    subCategories: [
      { id: 'shirt-short', name: 'シャツ(半袖)', slug: 'shirt-short', parentId: 'tops' },
      { id: 'tshirt-short', name: 'Tシャツ/カットソー(半袖)', slug: 'tshirt-short', parentId: 'tops' },
      { id: 'sweat', name: 'スウェット', slug: 'sweat', parentId: 'tops' },
      { id: 'knit', name: 'ニット/セーター', slug: 'knit', parentId: 'tops' },
      { id: 'shirt-long', name: 'シャツ(長袖)', slug: 'shirt-long', parentId: 'tops' },
      { id: 'tshirt-long', name: 'Tシャツ/カットソー(長袖)', slug: 'tshirt-long', parentId: 'tops' },
      { id: 'hoodie', name: 'パーカー', slug: 'hoodie', parentId: 'tops' },
    ],
  },
  {
    id: 'pants',
    name: 'パンツ',
    slug: 'pants',
    subCategories: [
      { id: 'denim', name: 'デニムパンツ', slug: 'denim', parentId: 'pants' },
      { id: 'slacks', name: 'スラックス', slug: 'slacks', parentId: 'pants' },
      { id: 'shorts', name: 'ショートパンツ', slug: 'shorts', parentId: 'pants' },
      { id: 'pants-other', name: 'その他パンツ', slug: 'pants-other', parentId: 'pants' },
      { id: 'cargo', name: 'カーゴパンツ', slug: 'cargo', parentId: 'pants' },
      { id: 'sweat-pants', name: 'スウェットパンツ', slug: 'sweat-pants', parentId: 'pants' },
    ],
  },
  {
    id: 'bag',
    name: 'バッグ',
    slug: 'bag',
  },
  {
    id: 'shoes',
    name: 'シューズ',
    slug: 'shoes',
    subCategories: [
      { id: 'leather', name: 'レザーシューズ', slug: 'leather', parentId: 'shoes' },
      { id: 'sneakers', name: 'スニーカー', slug: 'sneakers', parentId: 'shoes' },
      { id: 'sandals', name: 'サンダル', slug: 'sandals', parentId: 'shoes' },
      { id: 'boots', name: 'ブーツ', slug: 'boots', parentId: 'shoes' },
    ],
  },
  {
    id: 'goods',
    name: 'グッズ',
    slug: 'goods',
    subCategories: [
      { id: 'necklace', name: 'ネックレス', slug: 'necklace', parentId: 'goods' },
      { id: 'bracelet', name: 'ブレスレット', slug: 'bracelet', parentId: 'goods' },
      { id: 'ring', name: 'リング', slug: 'ring', parentId: 'goods' },
      { id: 'hat', name: '帽子', slug: 'hat', parentId: 'goods' },
      { id: 'scarf', name: 'マフラー/ストール', slug: 'scarf', parentId: 'goods' },
      { id: 'wallet', name: '財布/カードケース', slug: 'wallet', parentId: 'goods' },
      { id: 'belt', name: 'ベルト', slug: 'belt', parentId: 'goods' },
      { id: 'goods-other', name: 'その他グッズ', slug: 'goods-other', parentId: 'goods' },
      { id: 'earring', name: 'ピアス', slug: 'earring', parentId: 'goods' },
      { id: 'glasses', name: 'メガネ/サングラス', slug: 'glasses', parentId: 'goods' },
    ],
  },
];

// カテゴリをIDで検索
export function getCategoryById(id: string): Category | undefined {
  for (const category of categories) {
    if (category.id === id) return category;
    if (category.subCategories) {
      const sub = category.subCategories.find((c) => c.id === id);
      if (sub) return sub;
    }
  }
  return undefined;
}

// カテゴリをスラッグで検索
export function getCategoryBySlug(slug: string): Category | undefined {
  for (const category of categories) {
    if (category.slug === slug) return category;
    if (category.subCategories) {
      const sub = category.subCategories.find((c) => c.slug === slug);
      if (sub) return sub;
    }
  }
  return undefined;
}

// カテゴリのURLを生成
export function getCategoryUrl(category: Category): string {
  return `/category/${category.slug}`;
}
