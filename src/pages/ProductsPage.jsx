import Navbar      from "../components/Navbar";
import Footer      from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SEOHead     from "../components/SEOHead";
import products    from "../data/products";

const breadcrumbs = [
  { name: "Home",     path: "/" },
  { name: "Products", path: "/products" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://brainz-dev.com/products/#webpage",
  "url": "https://brainz-dev.com/products",
  "name": "Products | Brainz-Dev",
  "description": "Purpose-built apps and integrations for Freshdesk, Freshservice, and Zoho that supercharge your SaaS stack.",
  "isPartOf": { "@id": "https://brainz-dev.com/#website" },
  "publisher": { "@id": "https://brainz-dev.com/#organization" },
};

function ProductsPage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <SEOHead
        title="Products"
        description="Purpose-built apps and integrations for Freshdesk, Freshservice, and Zoho that supercharge your SaaS stack."
        canonical="/products"
        breadcrumbs={breadcrumbs}
        jsonLdExtra={jsonLd}
      />

      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" aria-hidden="true" />

      <header className="sticky top-0 z-50 navbar-glass" role="banner">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Navbar />
        </div>
      </header>

      <main id="main-content" className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10" role="main">
        {/* Hero */}
        <section aria-labelledby="products-heading" className="py-20 sm:py-28 text-center max-w-2xl mx-auto">
          <span className="inline-block font-poppins text-[12px] font-semibold tracking-widest uppercase text-violet-400 mb-4">
            What We&apos;ve Built
          </span>
          <h1 id="products-heading" className="font-poppins font-bold text-[36px] sm:text-[48px] text-white leading-tight mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="font-poppins text-[16px] text-slate-400 leading-relaxed">
            Purpose-built apps and integrations that supercharge your SaaS stack.
            Click any product to see full details and installation instructions.
          </p>
        </section>

        {/* Product grid */}
        <section aria-label="Product listings" className="pb-24">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-poppins text-slate-500 text-[15px]">No products yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <article key={product.id}>
                  <ProductCard product={product} />
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <Footer />
      </div>
    </div>
  );
}

export default ProductsPage;
