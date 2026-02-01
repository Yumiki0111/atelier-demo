'use client';

import { useState } from 'react';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductImageGallery({
  images,
  alt,
}: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
      <div className="block-src-number">
        <div className="block-src-l">
          <figure className="block-src-l-figure">
            <a
              href={images[currentImageIndex]}
              className="js-lightbox-gallery-info"
            >
              {images[currentImageIndex] ? (
                <img src={images[currentImageIndex]} alt={alt} className="product-image-large" />
              ) : (
                <div className="product-placeholder product-placeholder-large">
                  [商品画像]
                </div>
              )}
            </a>
          </figure>
          <div className="pagenumber-icon">
            {images.map((_, index) => (
              <div key={index} className={index === currentImageIndex ? 'active' : ''}>
                <span></span>
              </div>
            ))}
          </div>
          <div className="block-goods-gallery" id="gallery">
            <ul>
              {images.map((image, index) => (
                <li
                  key={index}
                  className={`block-goods-gallery--src-${index} ${
                    index === currentImageIndex ? 'current' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <figure className="img-center">
                    {image ? (
                      <img src={image} alt={`${alt} ${index + 1}`} className="product-image-small" />
                    ) : (
                      <div className="product-placeholder product-placeholder-small">
                        [画像]
                      </div>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
}
