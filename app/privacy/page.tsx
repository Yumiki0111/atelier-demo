import Layout from '@/app/components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="privacy-page">
        <h1 className="privacy-page-title">プライバシーポリシー</h1>
        <div className="privacy-content">
          <section>
            <h2>個人情報の取り扱いについて</h2>
            <p>
              Atelier（以下「当社」）は、お客様の個人情報を適切に保護し、管理することを重要な責務と考えております。
            </p>
          </section>
          <section>
            <h2>個人情報の収集</h2>
            <p>
              当社は、以下の場合に個人情報を収集することがあります。
            </p>
            <ul>
              <li>商品のご注文時</li>
              <li>会員登録時</li>
              <li>お問い合わせ時</li>
              <li>アンケートへのご回答時</li>
            </ul>
          </section>
          <section>
            <h2>個人情報の利用目的</h2>
            <p>当社は、収集した個人情報を以下の目的で利用いたします。</p>
            <ul>
              <li>商品の配送、お支払い処理</li>
              <li>ご注文内容の確認、お問い合わせへの対応</li>
              <li>新商品・サービスに関する情報のご案内</li>
              <li>マーケティング活動、アンケート調査</li>
            </ul>
          </section>
          <section>
            <h2>個人情報の第三者提供</h2>
            <p>
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
