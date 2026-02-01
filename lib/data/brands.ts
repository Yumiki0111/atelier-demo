import { Brand } from '../types';

export const brands: Brand[] = [
  { id: '1', name: 'Atelier', href: '/brands/atelier' },
  { id: '2', name: 'Atelier ESSENTIALS', href: '/brands/atelier-essentials' },
  { id: '3', name: 'Atelier LIMITED', href: '/brands/atelier-limited' },
];

export function getAllBrands(): Brand[] {
  return brands;
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}
