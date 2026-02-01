'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul className="block-thumbnail-t">
      {products.map((product) => (
        <li key={product.id}>
          <div className="block-thumbnail-t--goods js-enhanced-ecommerce-item">
            <div className="block-thumbnail-t--goods-image">
              <Link
                href={`/product/${product.id}`}
                title={product.title}
                className="js-enhanced-ecommerce-image"
              >
                <figure className="img-center">
                  {product.image ? (
                    <img src={product.image} alt={product.title} />
                  ) : (
                    <div className="product-placeholder">[商品画像]</div>
                  )}
                </figure>
              </Link>
            </div>
            <div className="block-thumbnail-t--goods-description">
              <div className="block-thumbnail-t--goods-description-inner">
              <Link
                href={`/product/${product.id}`}
                title={product.title}
                className="js-enhanced-ecommerce-goods-name"
              >
                <div className="block-thumbnail-t--goods-name-brand">
                  {product.brand}
                </div>
                <div className="block-thumbnail-t--goods-name">
                  {product.title}
                </div>
                <div className="block-thumbnail-t--price-infos">
                  <div className="block-thumbnail-t--price-items">
                    <div className="block-thumbnail-t--price price js-enhanced-ecommerce-goods-price">
                      {product.price}
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
