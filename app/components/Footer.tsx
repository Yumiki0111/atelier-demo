import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pane-footer">
      <div className="container --default-footer">
        <div className="footer-logo">
          <div
            style={{
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '3px',
              color: '#000',
              textAlign: 'center',
            }}
          >
            Atelier
          </div>
        </div>
        <div className="footer-guide">
          <ul className="footer-guide-list">
            <li className="footer-guide-list-item">
              <Link href="/contact" className="footer-guide-list-item-link">
                お問い合わせ
              </Link>
            </li>
            <li className="footer-guide-list-item">
              <Link href="/faq" className="footer-guide-list-item-link">
                よくあるご質問
              </Link>
            </li>
            <li className="footer-guide-list-item">
              <Link href="/terms" className="footer-guide-list-item-link">
                ご利用規約
              </Link>
            </li>
            <li className="footer-guide-list-item">
              <Link href="/legal" className="footer-guide-list-item-link">
                特定商取引法に基づく表記
              </Link>
            </li>
            <li className="footer-guide-list-item">
              <Link href="/privacy" className="footer-guide-list-item-link">
                プライバシーポリシー
              </Link>
            </li>
            <li className="footer-guide-list-item">
              <Link href="/guide" className="footer-guide-list-item-link">
                ショッピングガイド
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-other-link">
          <ul className="footer-other-link-list">
            <li className="footer-other-link-list-item">
              <Link href="/about" className="footer-other-link-list-item-link">
                コーポレートサイト
              </Link>
            </li>
            <li className="footer-other-link-list-item">
              <Link href="/recruit" className="footer-other-link-list-item-link">
                採用サイト
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p className="footer-copyright-p">© Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
