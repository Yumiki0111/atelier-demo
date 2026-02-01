'use client';

import { useState } from 'react';

interface ProductActionsProps {
  variations: Array<{
    color: string;
    colorImage: string;
    sizes: Array<{
      size: string;
      inStock: boolean;
      productId: string;
    }>;
  }>;
  selectedColor: string;
}

export default function ProductActions({ variations, selectedColor }: ProductActionsProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const currentVariation = variations.find((v) => v.color === selectedColor);
  const availableSizes = currentVariation?.sizes || [];

  const handleAddToCart = () => {
    setIsPopupOpen(true);
  };

  const handleSizeSelect = (size: string, productId: string) => {
    setSelectedSize(size);
    // カートに追加する処理
    window.location.href = `/cart?goods=${productId}`;
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedSize('');
  };

  return (
    <>
      <div className="product-add-to-cart-button">
        <button
          type="button"
          className="btn btn-primary btn-add-cart-main"
          onClick={handleAddToCart}
        >
          カートに入れる
        </button>
      </div>

      {/* サイズ選択ポップアップ */}
      {isPopupOpen && (
        <div className="size-select-popup-overlay" onClick={handleClosePopup}>
          <div className="size-select-popup" onClick={(e) => e.stopPropagation()}>
            <div className="size-select-popup-header">
              <h3>サイズを選択してください</h3>
              <button
                className="size-select-popup-close"
                onClick={handleClosePopup}
                aria-label="閉じる"
              >
                ×
              </button>
            </div>
            <div className="size-select-popup-body">
              <div className="size-select-list">
                {availableSizes.map((sizeItem, index) => (
                  <button
                    key={index}
                    className={`size-select-item ${
                      !sizeItem.inStock ? 'disabled' : ''
                    } ${selectedSize === sizeItem.size ? 'selected' : ''}`}
                    onClick={() =>
                      sizeItem.inStock && handleSizeSelect(sizeItem.size, sizeItem.productId)
                    }
                    disabled={!sizeItem.inStock}
                  >
                    <span className="size-label">{sizeItem.size}</span>
                    {!sizeItem.inStock && (
                      <span className="out-of-stock-label">在庫なし</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

