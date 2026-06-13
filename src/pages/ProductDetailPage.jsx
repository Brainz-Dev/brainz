import { Link, useParams, Navigate } from "react-router-dom";
import products from "../data/products";
import SEOHead from "../components/SEOHead";
import brainzLogo from "../assets/brainz-logo.png";
import {
  AboutSection,
  FeaturesSection,
  MethodologySection,
  ScreenshotsSection,
  PricingSection,
  InstallGuide,
  FAQSection,
  VideoSection,
} from "../components/product-detail";

// ── Section registry ──────────────────────────────────────────
// Add new section types here as new apps require them.
const SECTION_RENDERERS = {
  about:       (p) => <AboutSection       key="about"       product={p} />,
  features:    (p) => <FeaturesSection    key="features"    features={p.features} />,
  methodology: (p) => <MethodologySection key="methodology" methodology={p.methodology} />,
  screenshots: (p) => <ScreenshotsSection key="screenshots" screenshots={p.screenshots} />,
  pricing:     (p) => <PricingSection     key="pricing"     pricing={p.pricing} />,
  install:     (p) => <InstallGuide       key="install"     guide={p.installationGuide} />,
  faq:         (p) => <FAQSection         key="faq"         faq={p.faq} />,
  video:       (p) => <VideoSection      key="video"       videoId={p.videoId} title={p.videoTitle} />,
};

// Default order used when a product doesn't define its own sections array
const DEFAULT_SECTIONS = ["about", "features", "screenshots", "pricing", "install", "faq"];

// ── Category badge colours ────────────────────────────────────
const CATEGORY_COLORS = {
  Integration: "text-violet-700 bg-violet-50 border-violet-200",
  Automation:  "text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200",
  API:         "text-indigo-700 bg-indigo-50 border-indigo-200",
  Data:        "text-cyan-700 bg-cyan-50 border-cyan-200",
  Analytics:   "text-emerald-700 bg-emerald-50 border-emerald-200",
};

// ── Minimal nav ───────────────────────────────────────────────
function DetailNav() {
  return (
    <header className="sticky top-0 z-50 navbar-glass" role="banner">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={brainzLogo} alt="Brainz-Dev" className="w-9 h-9 object-contain" />
          <span className="font-poppins font-bold text-[20px] text-ink tracking-tight">
            Brainz<span className="text-gradient">-Dev</span>
          </span>
        </Link>
        <Link
          to="/products"
          className="font-poppins text-[13px] text-ink-2 hover:text-ink flex items-center gap-1.5 transition-colors duration-200"
          aria-label="Back to all products"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          All Products
        </Link>
      </div>
    </header>
  );
}

// ── Product icon placeholder ──────────────────────────────────
function ProductIcon({ icon, name }) {
  if (icon) {
    return (
      <img src={icon} alt={`${name} app icon`} className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-2xl" />
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-50"
      role="img"
      aria-label={`${name} placeholder icon`}
    >
      <svg className="w-9 h-9 text-slate-300" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 12V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75V12" />
      </svg>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const badgeClass = CATEGORY_COLORS[product.category] ?? "text-slate-600 bg-slate-50 border-slate-200";
  const sections   = product.sections ?? DEFAULT_SECTIONS;

  const breadcrumbs = [
    { name: "Home",     path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.tagline,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://brainz-dev.com/products/${product.slug}`,
    author: { "@id": "https://brainz-dev.com/#organization" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <SEOHead
        title={product.name}
        description={product.tagline}
        canonical={`/products/${product.slug}`}
        image={product.icon ? `https://brainz-dev.com${product.icon}` : undefined}
        type="article"
        breadcrumbs={breadcrumbs}
        jsonLdExtra={jsonLd}
      />

      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" aria-hidden="true" />

      <DetailNav />

      <main
        id="main-content"
        className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-14 sm:py-20"
        role="main"
      >
        {/* ── Hero band — always rendered ── */}
        <div className="card-md rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-7 mb-10">
          <ProductIcon icon={product.icon} name={product.name} />
          <div className="flex flex-col gap-3">
            <span className={`self-start text-[11px] font-poppins font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${badgeClass}`}>
              {product.category}
            </span>
            <h1 className="font-poppins font-bold text-[28px] sm:text-[34px] text-ink leading-tight">
              {product.name}
            </h1>
            <p className="font-poppins text-[15px] text-ink-2 leading-relaxed max-w-xl">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* ── Dynamic sections ── */}
        {sections.map((key) => {
          const render = SECTION_RENDERERS[key];
          return render ? render(product) : null;
        })}
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3"
        role="contentinfo"
      >
        <p className="font-poppins text-[13px] text-ink-3">
          © 2024 Brainz-Dev · All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-4">
            <Link to="/products" className="font-poppins text-[13px] text-ink-2 hover:text-ink transition-colors duration-200">All Products</Link>
            <Link to="/privacy"  className="font-poppins text-[13px] text-ink-2 hover:text-ink transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms"    className="font-poppins text-[13px] text-ink-2 hover:text-ink transition-colors duration-200">Terms</Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default ProductDetailPage;
