import Layout from '../components/Layout';

export default function RecruitPage() {
  const positions = [
    {
      id: '1',
      title: '店舗スタッフ',
      location: '新宿店',
      description: '接客業務、商品管理など',
    },
    {
      id: '2',
      title: 'EC担当',
      location: '本社',
      description: 'オンラインショップの運営、商品管理など',
    },
    {
      id: '3',
      title: 'バイヤー',
      location: '本社',
      description: '商品の仕入れ、ブランドとの交渉など',
    },
  ];

  return (
    <Layout>
      <div className="recruit-page">
        <h1 className="recruit-page-title">採用情報</h1>
        <div className="recruit-content">
          <p className="recruit-intro">
            Atelierでは、共に成長できる仲間を募集しています。
          </p>
          <div className="positions-list">
            {positions.map((position) => (
              <div key={position.id} className="position-card">
                <h2 className="position-title">{position.title}</h2>
                <p className="position-location">勤務地: {position.location}</p>
                <p className="position-description">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
