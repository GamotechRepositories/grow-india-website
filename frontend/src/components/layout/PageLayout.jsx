import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({
  children,
  title = 'GROW India – Govind Raadhaa Organizational Wonders | Business Growth & Systems Partner',
  description = 'GROW India - Premier corporate consulting, governance, risk, compliance, business systems, and digital transformation partner in India.',
  canonicalUrl
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400/30 selection:text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="flex-1 w-full" id="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
