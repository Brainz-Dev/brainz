import { Link } from "react-router-dom";
import TermsAndConditions from "../components/TermsAndConditions";

function TermsPage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Minimal nav */}
      <header className="sticky top-0 z-50 navbar-glass">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo-icon.svg" alt="Brainz-Dev" className="w-9 h-9" />
            <span className="font-poppins font-bold text-[20px] text-white tracking-tight">
              Brainz<span className="text-gradient">-Dev</span>
            </span>
          </Link>

          <Link
            to="/"
            className="font-poppins text-[13px] text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="glass-card rounded-2xl px-6 sm:px-10 py-10">
          <TermsAndConditions />
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-poppins text-[13px] text-slate-600">
          © 2024 Brainz-Dev · All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link to="/privacy" className="font-poppins text-[13px] text-slate-500 hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link to="/terms" className="font-poppins text-[13px] text-violet-400 font-medium">
            Terms &amp; Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default TermsPage;
