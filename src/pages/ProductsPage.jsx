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
    <>
      <SEOHead
        title="Products"
        description="Purpose-built apps and integrations for Freshdesk, Freshservice, and Zoho that supercharge your SaaS stack."
        canonical="/products"
        breadcrumbs={breadcrumbs}
        jsonLdExtra={jsonLd}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        {/* Hero */}
        <section aria-labelledby="products-heading" className="pt-16 sm:pt-24 pb-14 max-w-[680px]">
          <p className="section-label mb-3">Products</p>
          <h1 id="products-heading" className="section-heading font-poppins sm:text-[52px] text-[36px] mb-4">
            Apps we built. <span className="text-quiet">Ready to install.</span>
          </h1>
          <p className="font-poppins text-[17px] text-ink-2 leading-[1.6]">
            Purpose-built apps and integrations that supercharge your SaaS stack.
            Click any product to see full details and installation instructions.
          </p>
        </section>

        {/* Product grid */}
        <section aria-label="Product listings" className="pb-24 sm:pb-32">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-poppins text-ink-3 text-[15px]">No products yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => (
                <article key={product.id}>
                  <ProductCard product={product} />
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default ProductsPage;
