import { Routes, Route } from "react-router-dom";
import SiteLayout       from "./components/SiteLayout";
import Hero             from "./components/Hero";
import Clients          from "./components/Clients";
import Business         from "./components/Business";
import TrustSection     from "./components/TrustSection";
import HowItWorks       from "./components/HowItWorks";
import Testimonials     from "./components/Testimonials";
import CTA              from "./components/CTA";
import Contact          from "./components/Contact";
import SEOHead          from "./components/SEOHead";
import TermsPage        from "./pages/TermsPage";
import PrivacyPage      from "./pages/PrivacyPage";
import ProductsPage     from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.brainz-dev.com/#webpage",
  "url": "https://www.brainz-dev.com/",
  "name": "Brainz-Dev | SaaS Integration & Custom App Development",
  "isPartOf": { "@id": "https://www.brainz-dev.com/#website" },
  "about": { "@id": "https://www.brainz-dev.com/#organization" },
  "description": "Brainz-Dev builds custom Freshdesk apps, Freshservice apps, Zoho Marketplace apps, SaaS integrations, and React/Node.js solutions. Ship production-ready software in 3 weeks.",
};

function HomePage() {
  return (
    <>
      <SEOHead canonical="/" jsonLdExtra={homeJsonLd} />

      {/* Hero — contained */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Hero />
      </div>

      {/* Platforms — full width */}
      <Clients />

      {/* Services — contained */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Business />
      </div>

      {/* Why us — full width with its own bg-surface */}
      <TrustSection />

      {/* How It Works — contained */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <HowItWorks />
      </div>

      {/* Testimonials — contained */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Testimonials />
      </div>

      {/* CTA — contained card */}
      <CTA />

      {/* Contact form — contained */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Contact />
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/"               element={<HomePage />} />
        <Route path="/products"       element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/terms"          element={<TermsPage />} />
        <Route path="/privacy"        element={<PrivacyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
