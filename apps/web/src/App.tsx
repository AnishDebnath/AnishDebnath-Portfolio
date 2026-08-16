import React, { useState, useEffect, useCallback } from 'react';
import { MotionConfig } from 'motion/react';
import { PageRoute } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Intro } from './components/common/Intro';
import { ComingSoonPage } from './pages/coming-soon';
import { HomePage } from './pages/home';
import { AboutPage } from './pages/about';
import { ResumePage } from './pages/resume';
import { CaseStudyListPage } from './pages/case-study-list';
import { CaseStudyDetailPage } from './pages/case-study-detail';
import { JournalListPage } from './pages/journal-list';
import { JournalDetailPage } from './pages/journal-detail';
import { ContactPage } from './pages/contact';
import { PrivacyPolicyPage } from './pages/privacy-policy';
import { TermsOfServicePage } from './pages/terms-of-service';
import { NotFoundPage } from './pages/not-found';

interface RouteState {
  route: PageRoute;
  detailId?: string;
}

const parsePath = (pathname: string): RouteState => {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { route: 'coming-soon' };
  }

  switch (segments[0]) {
    case 'home':
      return { route: 'home' };
    case 'about':
      return { route: 'about' };
    case 'resume':
      return { route: 'resume' };
    case 'case-study':
      return segments[1] ? { route: 'case-study-detail', detailId: segments[1] } : { route: 'case-study' };
    case 'journal':
      return segments[1] ? { route: 'journal-detail', detailId: segments[1] } : { route: 'journal' };
    case 'contact':
      return { route: 'contact' };
    case 'privacy-policy':
      return { route: 'privacy-policy' };
    case 'terms-of-service':
      return { route: 'terms-of-service' };
    default:
      return { route: '404' };
  }
};

const buildPath = (route: PageRoute, detailId?: string): string => {
  switch (route) {
    case 'coming-soon':
      return '/';
    case 'home':
      return '/home';
    case 'about':
      return '/about';
    case 'resume':
      return '/resume';
    case 'case-study':
      return '/case-study';
    case 'case-study-detail':
      return detailId ? `/case-study/${detailId}` : '/case-study';
    case 'journal':
      return '/journal';
    case 'journal-detail':
      return detailId ? `/journal/${detailId}` : '/journal';
    case 'contact':
      return '/contact';
    case 'privacy-policy':
      return '/privacy-policy';
    case 'terms-of-service':
      return '/terms-of-service';
    case '404':
      return '/404';
    default:
      return '/';
  }
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => parsePath(window.location.pathname).route);
  const [detailId, setDetailId] = useState<string | undefined>(() => parsePath(window.location.pathname).detailId);
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Play intro only on fresh site open (navigate). Skip on reload so the
    // user lands straight back in their section, and skip on back/forward.
    const navType = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type;
    return navType === undefined || navType === 'navigate';
  });

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

  // Save scroll position before unload, then restore after reload so the
  // user stays on the section they were viewing.
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem('portfolio-scroll', String(window.scrollY));
    };
    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, []);

  useEffect(() => {
    if (showIntro) return;
    const saved = sessionStorage.getItem('portfolio-scroll');
    if (saved) {
      sessionStorage.removeItem('portfolio-scroll');
      requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
    }
  }, [showIntro]);

  // Sync state when user presses browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const { route, detailId: id } = parsePath(window.location.pathname);
      setCurrentRoute(route);
      setDetailId(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((route: PageRoute, id?: string) => {
    const path = buildPath(route, id);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(route);
    setDetailId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    <MotionConfig
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      reducedMotion="user"
    >
      <div className="min-h-screen flex flex-col bg-[#f5f5f5] text-[#0d130d] font-sans antialiased selection:bg-[#e74723] selection:text-white">
      {/* Apple-style Iconic Hello Splash Intro */}
      {showIntro && <Intro onComplete={handleIntroComplete} />}

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
    </MotionConfig>
  );
}