import { Store } from '../types';

export const stores: Store[] = [
  {
    id: '1',
    name: 'Atelier 新宿店',
    address: '東京都新宿区新宿3-38-1',
    phone: '03-1234-5678',
    hours: '11:00 - 21:00',
  },
  {
    id: '2',
    name: 'Atelier 渋谷店',
    address: '東京都渋谷区渋谷1-1-1',
    phone: '03-2345-6789',
    hours: '11:00 - 21:00',
  },
  {
    id: '3',
    name: 'Atelier 表参道店',
    address: '東京都渋谷区神宮前4-1-1',
    phone: '03-3456-7890',
    hours: '11:00 - 21:00',
  },
];

export function getAllStores(): Store[] {
  return stores;
}

export function getStoreById(id: string): Store | undefined {
  return stores.find((s) => s.id === id);
}
