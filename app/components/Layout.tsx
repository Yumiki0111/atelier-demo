import Header from './Header';
import NewsBanner from './NewsBanner';
import Footer from './Footer';
import { HEADER_MARGIN_TOP } from '@/lib/constants/styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="wrapper" style={{ marginTop: `${HEADER_MARGIN_TOP}px` }}>
      <Header />
      <NewsBanner />
      <div className="pane-contents">
        <div className="container">
          <main className="pane-main">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
