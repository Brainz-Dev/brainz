import { Link, useParams, Navigate } from "react-router-dom";
import products   from "../data/products";
import SEOHead    from "../components/SEOHead";
import brainzLogo from "../assets/brainz-logo.png";

// ── Minimal nav ───────────────────────────────────────────────
function DetailNav() {
  return (
    <header className="sticky top-0 z-50 navbar-glass" role="banner">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={brainzLogo}
            alt="Brainz-Dev"
            className="w-9 h-9 object-contain"
          />
          <span className="font-poppins font-bold text-[20px] text-white tracking-tight">
            Brainz<span className="text-gradient">-Dev</span>
          </span>
        </Link>

        <Link
          to="/products"
          className="font-poppins text-[13px] text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors duration-200"
          aria-label="Back to all products"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          All Products
        </Link>
      </div>
    </header>
  );
}

// ── Category badge ────────────────────────────────────────────
const categoryColors = {
  Integration: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  Automation:  "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20",
  API:         "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  Data:        "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  Analytics:   "text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
};

// ── Icon display ──────────────────────────────────────────────
function ProductIcon({ icon, name }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={`${name} app icon`}
        className="w-44 h-44 sm:w-48 sm:h-48 object-contain rounded-3xl"
      />
    );
  }
  return (
    <div
      className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl border-2 border-dashed border-white/15 flex items-center justify-center bg-white/[0.03]"
      role="img"
      aria-label={`${name} placeholder icon`}
    >
      <svg
        className="w-14 h-14 text-white/20"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 12V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75V12"
        />
      </svg>
    </div>
  );
}

// ── Installation step card ────────────────────────────────────
function StepCard({ step, title, body }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex gap-5 border border-white/[0.06]">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
        <span className="font-poppins font-bold text-white text-[13px]" aria-hidden="true">
          {step}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-poppins font-semibold text-white text-[15px]">
          {title}
        </h4>
        <p className="font-poppins text-[13px] text-slate-400 leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────
function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const badgeClass =
    categoryColors[product.category] ??
    "text-slate-300 bg-white/5 border-white/10";

  const breadcrumbs = [
    { name: "Home",     path: "/" },
    { name: "Products", path: "/products" },
    { name: product.name, path: `/products/${product.slug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.name,
    "description": product.tagline,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": `https://brainz-dev.com/products/${product.slug}`,
    "author": { "@id": "https://brainz-dev.com/#organization" },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
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

      <main id="main-content" className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-14 sm:py-20" role="main">
        {/* ── Hero band ── */}
        <div className="glass-card-strong rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-7 mb-10 border border-white/[0.08]">
          <ProductIcon icon={product.icon} name={product.name} />

          <div className="flex flex-col gap-3">
            <span
              className={`self-start text-[11px] font-poppins font-semibold tracking-widest uppercase px-3 py-1 rounded-full border ${badgeClass}`}
            >
              {product.category}
            </span>
            <h1 className="font-poppins font-bold text-[30px] sm:text-[36px] text-white leading-tight">
              {product.name}
            </h1>
            <p className="font-poppins text-[15px] text-slate-400 leading-relaxed max-w-xl">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Description — takes 2/3 */}
          <section aria-labelledby="about-heading" className="lg:col-span-2 flex flex-col gap-4">
            <h2 id="about-heading" className="font-poppins font-semibold text-white text-[18px] flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block" aria-hidden="true" />
              About This App
            </h2>
            <div className="glass-card rounded-2xl p-7 border border-white/[0.06]">
              {product.description.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className={`font-poppins text-[14px] text-slate-400 leading-relaxed ${i > 0 ? "mt-4" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </section>

          {/* Quick info sidebar — 1/3 */}
          <aside aria-labelledby="quickinfo-heading" className="flex flex-col gap-4">
            <h2 id="quickinfo-heading" className="font-poppins font-semibold text-white text-[18px] flex items-center gap-2">
              <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block" aria-hidden="true" />
              Quick Info
            </h2>
            <div className="glass-card rounded-2xl p-6 border border-white/[0.06] flex flex-col gap-4">
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                  Category
                </p>
                <p className="font-poppins text-[14px] text-white font-medium">
                  {product.category}
                </p>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                  Install Steps
                </p>
                <p className="font-poppins text-[14px] text-white font-medium">
                  {product.installationGuide.length} steps
                </p>
              </div>
              <div className="h-px bg-white/[0.06]" />
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-slate-500 mb-1">
                  Support
                </p>
                <a
                  href="mailto:support@brainz-dev.com"
                  className="font-poppins text-[13px] text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                >
                  Contact support
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* ── Installation Guide ── */}
        <section aria-labelledby="install-heading" className="mt-12 flex flex-col gap-5">
          <h2 id="install-heading" className="font-poppins font-semibold text-white text-[18px] flex items-center gap-2">
            <span className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block" aria-hidden="true" />
            Installation Guide
          </h2>
          <ol className="grid sm:grid-cols-2 gap-4 list-none">
            {product.installationGuide.map(({ step, title, body }) => (
              <li key={step}>
                <StepCard step={step} title={title} body={body} />
              </li>
            ))}
          </ol>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10 py-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3" role="contentinfo">
        <p className="font-poppins text-[13px] text-slate-600">
          © 2024 Brainz-Dev · All rights reserved.
        </p>
        <nav aria-label="Footer navigation">
          <div className="flex items-center gap-4">
            <Link
              to="/products"
              className="font-poppins text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
            >
              All Products
            </Link>
            <Link
              to="/privacy"
              className="font-poppins text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-poppins text-[13px] text-slate-500 hover:text-white transition-colors duration-200"
            >
              Terms
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default ProductDetailPage;
