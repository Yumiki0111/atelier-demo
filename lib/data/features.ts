import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: '1',
    title: 'NEW COLLECTION',
    description: 'モノトーンで彩る新作コレクション',
    image: '/api/placeholder/800/600',
    href: '/features/sale-outer',
  },
  {
    id: '2',
    title: 'NEW ARRIVALS',
    description: '最新入荷アイテム',
    image: '/api/placeholder/800/600',
    href: '/features/new-items',
  },
  {
    id: '3',
    title: 'ACCESSORIES',
    description: 'モノトーンで統一された小物・グッズ',
    image: '/api/placeholder/800/600',
    href: '/features/accessories',
  },
];

export function getAllFeatures(): Feature[] {
  return features;
}

export function getFeatureById(id: string): Feature | undefined {
  return features.find((f) => f.id === id);
}
