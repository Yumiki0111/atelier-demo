import Header from './Header';
import NewsBanner from './NewsBanner';
import Footer from './Footer';
import { HEADER_MARGIN_TOP } from '@/lib/constants/styles';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({ children, className = '' }: PageContainerProps) {
  return (
    <div className={`wrapper ${className}`} style={{ marginTop: `${HEADER_MARGIN_TOP}px` }}>
      <Header />
      <NewsBanner />
      <div className="pane-contents">
        {children}
      </div>
      <Footer />
    </div>
  );
}
