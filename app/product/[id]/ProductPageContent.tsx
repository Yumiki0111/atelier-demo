'use client';

import { useState } from 'react';
import ProductInfo from '../../components/ProductInfo';
import ProductVariation from '../../components/ProductVariation';
import ProductActions from '../../components/ProductActions';

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
  publicKey: string;
  apiUrl: string;
}

export default function ProductPageContent({ product, variations, publicKey, apiUrl }: ProductPageContentProps) {
  const [selectedColor, setSelectedColor] = useState(variations[0]?.color || '');

  return (
    <div className="pane-goods-right-side">
      <form name="frm" method="POST" action="/api/cart">
        <ProductInfo
          brand={product.brand}
          title={product.title}
          price={product.price}
        />

        <ProductVariation
          variations={variations}
          productId={product.id}
          onColorChange={setSelectedColor}
        />

        {/* 3D試着ウィジェット */}
        <div
          className="atelier-widget-container"
          data-atelier-public-key={publicKey}
          data-atelier-external-product-id={product.id}
          data-atelier-api-url={apiUrl}
          suppressHydrationWarning
        />

        <ProductActions
          variations={variations}
          selectedColor={selectedColor}
        />
      </form>
    </div>
  );
}
