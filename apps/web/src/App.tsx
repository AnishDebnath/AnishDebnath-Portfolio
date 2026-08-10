import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppleHelloIntro } from './components/AppleHelloIntro';
import { ComingSoonPage } from './pages/coming-soon';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { CaseStudyListPage } from './pages/CaseStudyListPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { JournalListPage } from './pages/JournalListPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('coming-soon');
  const [detailId, setDetailId] = useState<string | undefined>(undefined);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIntro]);

  const handleNavigate = (route: PageRoute, id?: string) => {
    setCurrentRoute(route);
    setDetailId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'coming-soon':
        return <ComingSoonPage />;
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'resume':
        return <ResumePage onNavigate={handleNavigate} />;
      case 'case-study':
        return <CaseStudyListPage onNavigate={handleNavigate} />;
      case 'case-study-detail':
        return <CaseStudyDetailPage projectId={detailId} onNavigate={handleNavigate} />;
      case 'journal':
        return <JournalListPage onNavigate={handleNavigate} />;
      case 'journal-detail':
        return <JournalDetailPage articleId={detailId} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-of-service':
        return <TermsOfServicePage onNavigate={handleNavigate} />;
      case '404':
        return <NotFoundPage onNavigate={handleNavigate} />;
      default:
        return <ComingSoonPage />;
    }
  };

  const isComingSoon = currentRoute === 'coming-soon';

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5] text-[#0d130d] font-sans antialiased selection:bg-[#e74723] selection:text-white">
      {/* Apple-style Iconic Hello Splash Intro */}
      {showIntro && <AppleHelloIntro onComplete={handleIntroComplete} />}

      {/* Site content mounts only AFTER intro finishes, so the page's initial
          entrance animations play fresh instead of finishing behind the overlay */}
      {!showIntro && (
        <>
          {/* Top Header - sticky across standard views */}
          {!isComingSoon && <Header activeRoute={currentRoute} onNavigate={handleNavigate} />}

          {/* Main Content Area */}
          <main className="flex-grow">
            {renderCurrentPage()}
          </main>

          {/* Footer - render across standard views */}
          {!isComingSoon && <Footer activeRoute={currentRoute} onNavigate={handleNavigate} />}
        </>
      )}
    </div>
  );
}
