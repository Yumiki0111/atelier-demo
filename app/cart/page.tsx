import Layout from '@/app/components/Layout';
import Link from 'next/link';

export default function CartPage() {
  const cartItems = [
    {
      id: '1',
      title: 'CLASSIC WOOL COAT',
      brand: 'Atelier',
      price: '￥89,000',
      image: '/api/placeholder/400/600',
      quantity: 1,
    },
  ];

  const subtotal = 89000;
  const tax = Math.floor(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <Layout>
      <div className="cart-page">
        <h1 className="cart-page-title">ショッピングカート</h1>
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>カートに商品がありません</p>
            <Link href="/" className="btn-continue-shopping">
              買い物を続ける
            </Link>
          </div>
        ) : (
          <div className="cart-container">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-content">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-info">
                    <div className="cart-item-brand">{item.brand}</div>
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-price">{item.price}</div>
                    <div className="cart-item-quantity">
                      <label>数量:</label>
                      <input type="number" min="1" defaultValue={item.quantity} />
                      </div>
                    </div>
                  </div>
                  <button className="btn-remove">削除</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="summary-row">
                <span>小計</span>
                <span>￥{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>消費税</span>
                <span>￥{tax.toLocaleString()}</span>
              </div>
              <div className="summary-row total">
                <span>合計</span>
                <span>￥{total.toLocaleString()}</span>
              </div>
              <button className="btn-checkout">レジに進む</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
