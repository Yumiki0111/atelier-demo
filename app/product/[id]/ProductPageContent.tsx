'use client';

import { useState } from 'react';
import ProductInfo from '../../components/ProductInfo';
import ProductVariation from '../../components/ProductVariation';
import ProductActions from '../../components/ProductActions';
import AtelierWidget from '../../components/AtelierWidget';

interface ProductPageContentProps {
  product: {
    id: string;
    brand: string;
    title: string;
    price: string;
  };
  variations: Array<{
    color: string;
    colorImage: string;
    sizes: Array<{
      size: string;
      inStock: boolean;
      productId: string;
    }>;
  }>;
}

export default function ProductPageContent({ product, variations }: ProductPageContentProps) {
  const [selectedColor, setSelectedColor] = useState(variations[0]?.color || '');

  return (
    <div className="pane-goods-right-side">
      <form name="frm" method="POST" action="/api/cart">
        <ProductInfo
          brand={product.brand}
          title={product.title}
          price={product.price}
        />

        {/* Atelier 3D試着ウィジェット */}
        <div style={{ margin: '20px 0', padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
          <AtelierWidget productId={product.id} />
        </div>

        <ProductVariation
          variations={variations}
          productId={product.id}
          onColorChange={setSelectedColor}
        />

        <ProductActions
          variations={variations}
          selectedColor={selectedColor}
        />
      </form>
    </div>
  );
}
