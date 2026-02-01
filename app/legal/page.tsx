import Layout from '../components/Layout';

export default function LegalPage() {
  return (
    <Layout>
      <div className="legal-page">
        <h1 className="legal-page-title">特定商取引法に基づく表記</h1>
        <div className="legal-content">
          <section>
            <h2>事業者名</h2>
            <p>TOKYO BASE CO.,LTD.</p>
          </section>
          <section>
            <h2>所在地</h2>
            <p>〒150-0001 東京都渋谷区神宮前1-1-1</p>
          </section>
          <section>
            <h2>電話番号</h2>
            <p>03-1234-5678</p>
          </section>
          <section>
            <h2>メールアドレス</h2>
            <p>info@mono.example.com</p>
          </section>
          <section>
            <h2>販売価格</h2>
            <p>各商品ページに表示された価格（税込）</p>
          </section>
          <section>
            <h2>支払い方法</h2>
            <p>クレジットカード、代金引換、銀行振込</p>
          </section>
          <section>
            <h2>配送方法</h2>
            <p>宅配便</p>
          </section>
          <section>
            <h2>返品・交換について</h2>
            <p>
              商品到着後7日以内であれば、未使用・未開封の商品に限り返品・交換が可能です。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
