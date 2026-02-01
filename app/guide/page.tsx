import Layout from '@/app/components/Layout';

export default function GuidePage() {
  return (
    <Layout>
      <div className="guide-page">
        <h1 className="guide-page-title">ショッピングガイド</h1>
        <div className="guide-content">
          <section>
            <h2>ご注文について</h2>
            <p>
              商品ページからご希望の商品を選択し、カートに追加してご注文手続きに進んでください。
            </p>
          </section>
          <section>
            <h2>お支払い方法</h2>
            <ul>
              <li>クレジットカード（VISA、Mastercard、JCB、American Express）</li>
              <li>代金引換</li>
              <li>銀行振込</li>
            </ul>
          </section>
          <section>
            <h2>配送について</h2>
            <p>全国送料無料です。通常1-3営業日で発送いたします。</p>
            <p>配送先は日本国内のみとさせていただきます。</p>
          </section>
          <section>
            <h2>返品・交換について</h2>
            <p>
              商品到着後7日以内であれば、未使用・未開封の商品に限り返品・交換が可能です。
            </p>
            <p>
              返品・交換をご希望の場合は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>
          <section>
            <h2>サイズについて</h2>
            <p>
              各商品ページにサイズ表を掲載しております。ご不明な点がございましたらお問い合わせください。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
