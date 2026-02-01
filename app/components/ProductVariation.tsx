'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProductColor } from '@/lib/types';

interface ProductVariationProps {
  variations: Array<{
    color: string;
    colorImage: string;
    sizes: Array<{
      size: string;
      inStock: boolean;
      productId: string;
    }>;
  }>;
  productId: string;
  onColorChange?: (color: string) => void;
}

// 色名から色コードへのマッピング
const getColorCode = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    'BLACK': '#000000',
    'BEIGE': '#F5F5DC',
    'BROWN': '#8B4513',
    'STRIPE': '#CCCCCC', // ストライプはグレーで表示
    'WHITE': '#FFFFFF',
    'BLUE': '#4169E1',
  };
  return colorMap[colorName.toUpperCase()] || '#CCCCCC';
};

export default function ProductVariation({
  variations,
  productId,
  onColorChange,
}: ProductVariationProps) {
  const [selectedColor, setSelectedColor] = useState(variations[0]?.color || '');

  useEffect(() => {
    if (onColorChange) {
      onColorChange(selectedColor);
    }
  }, [selectedColor, onColorChange]);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="block-variation">
      <div className="block-variation block-color">
        <h2 className="block-variation--name block-color--name">カラー</h2>
        <div className="block-variation--item-list block-color--item-list">
          {variations.map((variation, index) => (
            <dl
              key={index}
              className={`block-variation--item block-color--item ${
                selectedColor === variation.color ? 'active' : ''
              }`}
              title={variation.color}
              onClick={() => handleColorChange(variation.color)}
              style={{ cursor: 'pointer' }}
            >
              <dt className="block-variation--item-term block-color--item-term">
                <div 
                  className="block-color--item-circle"
                  style={{ backgroundColor: getColorCode(variation.color) }}
                ></div>
              </dt>
            </dl>
          ))}
        </div>
        <div className="block-variation--selected-item">
          選択されたカラー：{selectedColor}
        </div>
      </div>
    </div>
  );
}

