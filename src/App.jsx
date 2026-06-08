import { Routes, Route } from "react-router-dom";
import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import Clients          from "./components/Clients";
import Business         from "./components/Business";
import Stats            from "./components/Stats";
import TrustSection     from "./components/TrustSection";
import HowItWorks       from "./components/HowItWorks";
import Testimonials     from "./components/Testimonials";
import CTA              from "./components/CTA";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";
import SEOHead          from "./components/SEOHead";
import TermsPage        from "./pages/TermsPage";
import PrivacyPage      from "./pages/PrivacyPage";
import ProductsPage     from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://brainz-dev.com/#webpage",
  "url": "https://brainz-dev.com/",
  "name": "Brainz-Dev | SaaS Integration & Custom App Development",
  "isPartOf": { "@id": "https://brainz-dev.com/#website" },
  "about": { "@id": "https://brainz-dev.com/#organization" },
  "description": "Brainz-Dev builds custom Freshdesk apps, Freshservice apps, Zoho Marketplace apps, SaaS integrations, and React/Node.js solutions. Ship production-ready software in 3 weeks.",
};

function HomePage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <SEOHead canonical="/" jsonLdExtra={homeJsonLd} />

      {/* Subtle dot grid — decorative */}
      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Sticky navbar */}
      <header className="sticky top-0 z-50 navbar-glass" role="banner">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Navbar />
        </div>
      </header>

      <main id="main-content" className="relative z-10" role="main">
        {/* Hero — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Hero />
        </div>

        {/* Clients marquee — full width */}
        <Clients />

        {/* Services — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Business />
        </div>

        {/* Stats — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Stats />
        </div>

        {/* Trust section — full width with its own bg-surface */}
        <TrustSection />

        {/* How It Works — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <HowItWorks />
        </div>

        {/* Testimonials — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Testimonials />
        </div>

        {/* CTA — full width */}
        <CTA />

        {/* Contact form — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Contact />
        </div>
      </main>

      {/* Footer outside <main> per HTML spec */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/"               element={<HomePage />} />
      <Route path="/products"       element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductDetailPage />} />
      <Route path="/terms"          element={<TermsPage />} />
      <Route path="/privacy"        element={<PrivacyPage />} />
    </Routes>
  );
}

export default App;
