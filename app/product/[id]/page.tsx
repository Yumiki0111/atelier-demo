import Header from '../../components/Header';
import NewsBanner from '../../components/NewsBanner';
import Footer from '../../components/Footer';
import { getProductById } from '@/lib/data/products';
import { generateBreadcrumbs, normalizeVariations, getProductImages } from '@/lib/utils/product';
import Breadcrumb from '../../components/Breadcrumb';
import ProductImageGallery from '../../components/ProductImageGallery';
import ProductPageContent from './ProductPageContent';
import ProductTabs from '../../components/ProductTabs';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { HEADER_MARGIN_TOP } from '@/lib/constants/styles';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: '商品が見つかりません | Atelier',
    };
  }

  return {
    title: `${product.title} | ${product.brand} | Atelier`,
    description: product.description
      ? product.description.replace(/<[^>]*>/g, '').substring(0, 160)
      : `${product.title}は、${product.brand}のこだわりが詰まったアイテムです。`,
    openGraph: {
      title: `${product.title} | ${product.brand}`,
      description: product.description
        ? product.description.replace(/<[^>]*>/g, '').substring(0, 160)
        : `${product.title}は、${product.brand}のこだわりが詰まったアイテムです。`,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const breadcrumbItems = generateBreadcrumbs(product);
  const images = getProductImages(product);
  const variations = normalizeVariations(product);

  // Atelier 3D試着ウィジェット設定
  const widgetUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/widget.js'
    : 'https://atelier-console.vercel.app/widget.js';
  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://atelier-console.vercel.app';
  const publicKey = process.env.NEXT_PUBLIC_ATELIER_PUBLIC_KEY || 'pub_live_030b64caa84e2995672163c125d600bd';

  return (
    <>
      {/* グローバル設定とwidget.jsの読み込みを1つのscriptタグで */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__atelierWidgetConfig = { 
              publicKey: '${publicKey}',
              apiUrl: '${apiUrl}'
            };
            (function() {
              const script = document.createElement('script');
              script.src = '${widgetUrl}';
              script.defer = true;
              document.head.appendChild(script);
            })();
          `,
        }}
      />
      
      <div className="wrapper" style={{ marginTop: `${HEADER_MARGIN_TOP}px` }}>
        <Header />
        <NewsBanner />
        <div className="pane-contents">
          <main className="pane-main product-page-main">
            <div className="pane-center">
              <Breadcrumb items={breadcrumbItems} />
              <div className="block-goods-detail">
                <ProductImageGallery images={images} alt={product.title} />
                <ProductPageContent
                  product={{
                    id: product.id,
                    brand: product.brand,
                    title: product.title,
                    price: product.price,
                  }}
                  variations={variations}
                  publicKey={publicKey}
                  apiUrl={apiUrl}
                />
              </div>
              <ProductTabs
                description={
                  product.description ||
                  `${product.title}は、${product.brand}のこだわりが詰まったアイテムです。高品質な素材と丁寧な仕上げで、長く愛用いただけます。`
                }
                sizeTable={product.sizeTable}
                details={product.details}
              />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
