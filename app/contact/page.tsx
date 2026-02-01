import Layout from '@/app/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <div className="contact-page">
        <h1 className="contact-page-title">お問い合わせ</h1>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">お名前 *</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">メールアドレス *</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">件名 *</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">お問い合わせ内容 *</label>
              <textarea
                id="message"
                name="message"
                rows={10}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              送信
            </button>
          </form>
          <div className="contact-info">
            <h2>お問い合わせ先</h2>
            <p>電話: 03-1234-5678</p>
            <p>受付時間: 平日 10:00 - 18:00</p>
            <p>メール: info@mono.example.com</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
