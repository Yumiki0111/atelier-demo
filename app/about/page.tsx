import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="about-page">
        <h1 className="about-page-title">コーポレートサイト</h1>
        <div className="about-content">
          <section>
            <h2>Atelierについて</h2>
            <p>
              Atelierは、モノトーンを基調とした洗練されたアパレルブランドです。
              シンプルでありながら、上質な素材と丁寧な仕上げにこだわります。
            </p>
          </section>
          <section>
            <h2>企業情報</h2>
            <p>会社名: TOKYO BASE CO.,LTD.</p>
            <p>所在地: 東京都渋谷区</p>
            <p>設立: 2000年</p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
