import { Link } from "react-router-dom";
import PrivacyPolicy from "../components/PrivacyPolicy";
import SEOHead from "../components/SEOHead";

const breadcrumbs = [
  { name: "Home",           path: "/" },
  { name: "Privacy Policy", path: "/privacy" },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <SEOHead
        title="Privacy Policy"
        description="Learn how Brainz-Dev collects, uses, and protects your personal data when using our website and software development services."
        canonical="/privacy"
        noindex={false}
        breadcrumbs={breadcrumbs}
      />

      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Minimal nav */}
      <header className="sticky top-0 z-50 navbar-glass" role="banner">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/brainz-logo.png" alt="Brainz-Dev" className="w-9 h-9 object-contain" />
            <span className="font-poppins font-bold text-[20px] text-ink tracking-tight">
              Brainz<span className="text-gradient">-Dev</span>
            </span>
          </Link>

          <Link
            to="/"
            className="font-poppins text-[13px] text-ink-2 hover:text-ink flex items-center gap-1.5 transition-colors duration-200"
            aria-label="Back to home page"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main id="main-content" className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24" role="main">
        <article className="glass-card rounded-2xl px-6 sm:px-10 py-10">
          <PrivacyPolicy />
        </article>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3" role="contentinfo">
        <p className="font-poppins text-[13px] text-ink-3">
          © 2025 Brainz-Dev · All rights reserved.
        </p>
        <nav aria-label="Legal navigation">
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-poppins text-[13px] text-brand font-medium" aria-current="page">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-poppins text-[13px] text-ink-2 hover:text-ink transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default PrivacyPage;
