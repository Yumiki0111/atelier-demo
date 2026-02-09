'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getAllProducts } from '@/lib/data/products';

interface OutfitChangeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentProductId: string;
}

interface CategoryProduct {
  id: string;
  title: string;
  image: string;
  categoryName: string;
}

export default function OutfitChangeModal({
  isOpen,
  onClose,
  currentProductId,
}: OutfitChangeModalProps) {
  const [categories, setCategories] = useState<{ [key: string]: CategoryProduct[] }>({});
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef<number>(0);
  const dragCurrentY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const modalTransform = useRef<number>(0);
  
  // クライアントサイドでのみマウント
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  

  useEffect(() => {
    if (isOpen) {
      // 商品データを取得してカテゴリ別に分類
      const allProducts = getAllProducts();
      const categorized: { [key: string]: CategoryProduct[] } = {};

      allProducts.forEach((product) => {
        if (product.id !== currentProductId) {
          const category = product.categoryName || 'その他';
          if (!categorized[category]) {
            categorized[category] = [];
          }
          categorized[category].push({
            id: product.id,
            title: product.title,
            image: product.image || '/placeholder.jpg',
            categoryName: category,
          });
        }
      });

      setCategories(categorized);
    }
  }, [isOpen, currentProductId]);


  // スワイプで閉じる機能
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const modalBody = modal.querySelector('.outfit-change-modal-body') as HTMLElement;

    const handleStart = (clientY: number) => {
      dragStartY.current = clientY;
      dragCurrentY.current = clientY;
      isDragging.current = true;
      modalTransform.current = 0;
      modal.style.transition = 'none';
    };

    const handleMove = (clientY: number) => {
      if (!isDragging.current) return;
      
      dragCurrentY.current = clientY;
      const deltaY = dragCurrentY.current - dragStartY.current;
      
      // 下方向のスワイプのみ許可
      if (deltaY > 0) {
        modalTransform.current = deltaY;
        modal.style.transform = `translateY(${deltaY}px)`;
      }
    };

    const handleEnd = () => {
      if (!isDragging.current) return;
      
      const deltaY = dragCurrentY.current - dragStartY.current;
      const threshold = 100; // 閉じるための閾値（px）
      
      modal.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      
      if (deltaY > threshold) {
        // 閉じる
        modal.style.transform = 'translateY(100%)';
        setTimeout(() => {
          onClose();
        }, 300);
      } else {
        // 元に戻す
        modal.style.transform = 'translateY(0)';
      }
      
      isDragging.current = false;
      modalTransform.current = 0;
    };

    const handleTouchStart = (e: TouchEvent) => {
      // モーダル本体またはヘッダー部分でのみスワイプを有効化
      const target = e.target as HTMLElement;
      if (modalBody && modalBody.contains(target) && modalBody.scrollTop > 0) {
        // スクロール可能な場合はスワイプを無効化
        return;
      }
      handleStart(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      // モーダル本体がスクロール可能な場合はスワイプを無効化
      if (modalBody && modalBody.scrollTop > 0) {
        return;
      }
      e.preventDefault();
      handleMove(e.touches[0].clientY);
    };

    const handleTouchEnd = () => {
      handleEnd();
    };

    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (modalBody && modalBody.contains(target) && modalBody.scrollTop > 0) {
        return;
      }
      handleStart(e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      if (modalBody && modalBody.scrollTop > 0) {
        return;
      }
      e.preventDefault();
      handleMove(e.clientY);
    };

    const handleMouseUp = () => {
      handleEnd();
    };

    // タッチイベント
    modal.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    // マウスイベント
    modal.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    // スクロールを無効化
    document.body.style.overflow = 'hidden';

    return () => {
      modal.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      modal.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.overflow = '';
      if (modal) {
        modal.style.transition = '';
        modal.style.transform = '';
      }
    };
  }, [isOpen, onClose]);

  // ESCキーで閉じる
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleProductClick = (productId: string) => {
    // 商品をクリックしたときの処理（ウィジェットに通知など）
    window.location.href = `/product/${productId}`;
  };


  // Portalを使ってdocument.bodyに直接レンダリング
  if (!mounted || !isOpen) {
    return null;
  }

  const modalContent = (
    <>
      {/* オーバーレイ */}
      <div
        className={`outfit-change-overlay ${isOpen ? 'is-open' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />

      {/* モーダル */}
      <div
        ref={modalRef}
        className={`outfit-change-modal ${isOpen ? 'is-open' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ドラッグハンドル */}
        <div className="outfit-change-modal-handle" />

        {/* 商品リストエリア */}
        <div className="outfit-change-modal-body">
          {Object.entries(categories).map(([categoryName, products]) => (
            <div key={categoryName} className="outfit-change-category">
              <h4 className="outfit-change-category-title">{categoryName}</h4>
              <div className="outfit-change-product-list">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="outfit-change-product-item"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="outfit-change-product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="outfit-change-product-title">{product.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // document.bodyにPortalでレンダリング
  return createPortal(modalContent, document.body);
}
