import { Routes, Route } from "react-router-dom";
import Navbar           from "./components/Navbar";
import Hero             from "./components/Hero";
import Clients          from "./components/Clients";
import Business         from "./components/Business";
import Stats            from "./components/Stats";
import HowItWorks       from "./components/HowItWorks";
import Testimonials     from "./components/Testimonials";
import CTA              from "./components/CTA";
import Contact          from "./components/Contact";
import Footer           from "./components/Footer";
import TermsPage        from "./pages/TermsPage";
import PrivacyPage      from "./pages/PrivacyPage";
import ProductsPage     from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function HomePage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      {/* Global grid overlay */}
      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Sticky glass navbar */}
      <header className="sticky top-0 z-50 navbar-glass">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Navbar />
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Hero />
        </div>

        {/* Clients marquee — full width */}
        <Clients />

        {/* Features / services — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Business />
        </div>

        {/* Stats — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Stats />
        </div>

        {/* How It Works — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <HowItWorks />
        </div>

        {/* Testimonials — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Testimonials />
        </div>

        {/* CTA banner — full width */}
        <CTA />

        {/* Contact form — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Contact />
        </div>

        {/* Footer — contained */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/"              element={<HomePage />} />
      <Route path="/products"      element={<ProductsPage />} />
      <Route path="/products/:slug" element={<ProductDetailPage />} />
      <Route path="/terms"         element={<TermsPage />} />
      <Route path="/privacy"       element={<PrivacyPage />} />
    </Routes>
  );
}

export default App;
