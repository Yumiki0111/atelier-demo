'use client';

import { useEffect, useRef } from 'react';

interface AtelierWidgetProps {
  productId: string;
  publicKey?: string;
  widgetUrl?: string;
  apiUrl?: string;
}

export default function AtelierWidget({
  productId,
  publicKey = process.env.NEXT_PUBLIC_ATELIER_PUBLIC_KEY || 'pub_live_030b64caa84e2995672163c125d600bd',
  widgetUrl,
  apiUrl,
}: AtelierWidgetProps) {
  const scriptLoadedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 開発環境では自動的にローカルURLを使用
  const isDevelopment = process.env.NODE_ENV === 'development';
  const defaultWidgetUrl = isDevelopment
    ? 'http://localhost:3001/widget.js'
    : 'https://atelier-rho-red.vercel.app/widget.js';
  const defaultApiUrl = isDevelopment
    ? 'http://localhost:3001'
    : 'https://atelier-rho-red.vercel.app';

  const finalWidgetUrl = widgetUrl || process.env.NEXT_PUBLIC_ATELIER_WIDGET_URL || defaultWidgetUrl;
  const finalApiUrl = apiUrl || process.env.NEXT_PUBLIC_ATELIER_API_URL || defaultApiUrl;

  useEffect(() => {
    // スクリプトが既に読み込まれている場合は再読み込みしない
    if (scriptLoadedRef.current) {
      return;
    }

    // 既存のスクリプトタグをチェック
    const existingScript = document.querySelector(`script[src="${finalWidgetUrl}"]`);
    if (existingScript) {
      scriptLoadedRef.current = true;
      return;
    }

    // 要素の後にスクリプトを配置（defer属性付き）
    const script = document.createElement('script');
    script.src = finalWidgetUrl;
    script.defer = true;
    script.async = true;

    // コンテナ要素の後にスクリプトを挿入
    if (containerRef.current) {
      containerRef.current.after(script);
    } else {
      // フォールバック: bodyの最後に追加
      document.body.appendChild(script);
    }

    scriptLoadedRef.current = true;

    return () => {
      // クリーンアップは行わない（他のウィジェットで使用される可能性があるため）
    };
  }, [finalWidgetUrl]);

  return (
    <div className="atelier-widget-container" ref={containerRef}>
      <div
        data-atelier-public-key={publicKey}
        data-atelier-external-product-id={productId}
        {...(finalApiUrl && { 'data-atelier-api-url': finalApiUrl })}
      />
    </div>
  );
}
