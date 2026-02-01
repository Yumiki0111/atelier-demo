import PageContainer from './components/PageContainer';
import ProductList from './components/ProductList';
import { getAllProducts } from '@/lib/data/products';

interface HomeProps {
  searchParams: {
    q?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const allProducts = getAllProducts();
  const query = searchParams.q || '';
  
  const products = query
    ? allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase())
      )
    : allProducts;
  
  const headerText = query ? `「${query}」の検索結果: ${products.length}件` : 'NEW COLLECTION';
  
  return (
    <PageContainer className="category-page">
        <div id="block_of_top_body" className="block-top-body">
          <div className="block-top-event--items">
            <h2 className="block-top-event--header">{headerText}</h2>
            {products.length === 0 && query ? (
              <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                <p>該当する商品が見つかりませんでした</p>
              </div>
            ) : (
              <div className="block-top-event--goods">
                <ProductList products={products} />
              </div>
            )}
          </div>
        </div>
    </PageContainer>
  );
}
