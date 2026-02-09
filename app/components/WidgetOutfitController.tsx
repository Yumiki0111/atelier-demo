'use client';

import { useEffect, useRef } from 'react';

interface WidgetOutfitControllerProps {
  productId: string;
  widgetContainerRef: React.RefObject<HTMLDivElement | null>;
}

export default function WidgetOutfitController({ 
  productId, 
  widgetContainerRef 
}: WidgetOutfitControllerProps) {

  useEffect(() => {
    const container = widgetContainerRef.current;
    if (!container) return;
    
    // ウィジェットが既に読み込まれているか確認
    if (container.querySelector('canvas') || container.querySelector('iframe')) {
      return;
    }

    // ウィジェットスクリプトが既に読み込まれているか確認
    if (document.querySelector('script[src*="widget.js"]')) {
      return;
    }

    // ウィジェットスクリプトを読み込む
    const script = document.createElement('script');
    const widgetUrl = (window as any).__atelierWidgetConfig?.widgetUrl || 
                     (process.env.NODE_ENV === 'development' 
                       ? 'http://localhost:3000/widget.js' 
                       : 'https://atelier-rho-red.vercel.app/widget.js');
    script.src = widgetUrl;
    script.defer = true;
    document.head.appendChild(script);
  }, [widgetContainerRef]);

  return null;
}
