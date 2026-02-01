import Layout from '@/app/components/Layout';

export default function FAQPage() {
  const faqs = [
    {
      id: '1',
      question: '配送について',
      answer: '全国送料無料です。通常1-3営業日で発送いたします。',
    },
    {
      id: '2',
      question: '返品・交換について',
      answer: '商品到着後7日以内であれば、未使用・未開封の商品に限り返品・交換が可能です。',
    },
    {
      id: '3',
      question: '支払い方法について',
      answer: 'クレジットカード、代金引換、銀行振込がご利用いただけます。',
    },
    {
      id: '4',
      question: 'サイズについて',
      answer: '各商品ページにサイズ表を掲載しております。ご不明な点がございましたらお問い合わせください。',
    },
  ];

  return (
    <Layout>
      <div className="faq-page">
        <h1 className="faq-page-title">よくあるご質問</h1>
        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
