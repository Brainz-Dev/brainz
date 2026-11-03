import { Link, useParams, Navigate } from "react-router-dom";
import products from "../data/products";
import SEOHead from "../components/SEOHead";
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


// ── Product icon placeholder ──────────────────────────────────
function ProductIcon({ icon, name }) {
  if (icon) {
    return (
      <img src={icon} alt={`${name} app icon`} className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-2xl border border-line" />
    );
  }
  return (
    <div
      className="w-20 h-20 rounded-2xl border border-dashed border-line-2 flex items-center justify-center bg-surface"
      role="img"
      aria-label={`${name} placeholder icon`}
    >
      <svg className="w-9 h-9 text-ink-3" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24" aria-hidden="true">
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

  const sections   = product.sections ?? DEFAULT_SECTIONS;
  const marketplaceHref = product.pricing?.find((plan) => plan.ctaHref)?.ctaHref;

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
    url: `https://www.brainz-dev.com/products/${product.slug}`,
    author: { "@id": "https://www.brainz-dev.com/#organization" },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <SEOHead
        title={product.name}
        description={product.tagline}
        canonical={`/products/${product.slug}`}
        image={product.icon ? `https://www.brainz-dev.com${product.icon}` : undefined}
        type="article"
        breadcrumbs={breadcrumbs}
        jsonLdExtra={jsonLd}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 pt-10 sm:pt-14 pb-24 sm:pb-32">
        <Link
          to="/products"
          className="inline-flex items-center gap-1.5 font-poppins text-[13px] text-ink-2 hover:text-ink mb-10 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          All products
        </Link>

        {/* ── Hero band — always rendered ── */}
        <div className="flex flex-col sm:flex-row items-start gap-7 pb-12 mb-4 border-b border-line">
          <ProductIcon icon={product.icon} name={product.name} />
          <div className="flex flex-col gap-3">
            <p className="font-poppins text-[14px] text-ink-3">
              {product.category}
              {product.marketplace && <> · {product.marketplace}</>}
            </p>
            <h1 className="section-heading font-poppins text-[34px] sm:text-[44px]">
              {product.name}
            </h1>
            <p className="font-poppins text-[17px] text-ink-2 leading-[1.6] max-w-[620px]">
              {product.tagline}
            </p>
            {marketplaceHref && (
              <a
                href={marketplaceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand self-start mt-3 font-poppins text-[15px] px-5 py-2.5 rounded-lg"
              >
                Get it on the marketplace
              </a>
            )}
          </div>
        </div>

        {/* ── Dynamic sections ── */}
        {sections.map((key) => {
          const render = SECTION_RENDERERS[key];
          return render ? render(product) : null;
        })}
      </div>
    </>
  );
}

export default ProductDetailPage;
