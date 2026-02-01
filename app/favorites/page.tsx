import Layout from '@/app/components/Layout';
import ProductList from '@/app/components/ProductList';
import { products } from '@/lib/data/products';

export default function FavoritesPage() {
  // お気に入り商品（サンプル）
  const favoriteProducts = products.slice(0, 6);

  return (
    <Layout>
      <div className="favorites-page">
        <h1 className="favorites-page-title">お気に入り</h1>
        {favoriteProducts.length === 0 ? (
          <div className="favorites-empty">
            <p>お気に入りに商品がありません</p>
          </div>
        ) : (
          <div className="favorites-content">
            <ProductList products={favoriteProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
}
