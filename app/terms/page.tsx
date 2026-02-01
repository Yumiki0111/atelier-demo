import Layout from '@/app/components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="terms-page">
        <h1 className="terms-page-title">ご利用規約</h1>
        <div className="terms-content">
          <section>
            <h2>第1条（適用）</h2>
            <p>
              本規約は、Atelier（以下「当社」といいます）が運営するオンラインショップ（以下「本サービス」といいます）の利用条件を定めるものです。
            </p>
          </section>
          <section>
            <h2>第2条（利用登録）</h2>
            <p>
              本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
            </p>
          </section>
          <section>
            <h2>第3条（商品の購入）</h2>
            <p>
              本サービスにおける商品の購入については、本規約のほか、当社が別途定める「購入に関する注意事項」その他の規定を適用します。
            </p>
          </section>
          <section>
            <h2>第4条（個人情報の取扱い）</h2>
            <p>
              当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
