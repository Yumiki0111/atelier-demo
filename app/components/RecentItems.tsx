import Link from 'next/link';
import { getAllProducts } from '@/lib/data/products';

export default function RecentItems() {
  // 閲覧履歴（サンプル - 最新4件）
  const allProducts = getAllProducts();
  const recentProducts = allProducts.slice(0, 4);

  return (
    <div id="block_of_itemhistory" className="block-recent-item">
      <div className="header-title">
        <div className="titleline"></div>
        <h2 className="block-recent-item--header">チェックしたアイテム</h2>
      </div>
      <div id="itemHistory" className="block-recent-item--body">
        <div id="itemHistoryDetail" className="block-recent-item--items">
          <ul className="block-thumbnail-h block-thumbnail-h-2">
            {recentProducts.map((product) => (
              <li key={product.id}>
                <dl className="block-thumbnail-h--goods js-enhanced-ecommerce-item">
                  <dt className="block-thumbnail-h--goods-image">
                    <Link
                      href={`/product/${product.id}`}
                      title={product.title}
                      className="js-enhanced-ecommerce-image"
                    >
                      <figure className="img-center">
                        <img
                          alt={product.title}
                          src={product.image}
                        />
                      </figure>
                    </Link>
                  </dt>
                  <dd className="block-thumbnail-h--goods-description">
                    <Link
                      href={`/product/${product.id}`}
                      title={product.title}
                      className="js-enhanced-ecommerce-goods-name"
                    >
                      <div className="block-thumbnail-h--goods-name">
                        {product.brand}
                      </div>
                      <div className="block-thumbnail-h--goods-name">
                        {product.title}
                      </div>
                      <div className="block-thumbnail-h--price-infos">
                        <div className="block-thumbnail-h--price-items">
                          <div className="block-thumbnail-h--price price js-enhanced-ecommerce-goods-price">
                            {product.price}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
