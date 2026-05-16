import Navbar      from "../components/Navbar";
import Footer      from "../components/Footer";
import ProductCard from "../components/ProductCard";
import products    from "../data/products";

function ProductsPage() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden relative">
      <div className="hero-grid-bg fixed inset-0 pointer-events-none z-0" />

      {/* Navbar */}
      <header className="sticky top-0 z-50 navbar-glass">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
          <Navbar />
        </div>
      </header>

      <main className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Hero */}
        <section className="py-20 sm:py-28 text-center max-w-2xl mx-auto">
          <span className="inline-block font-poppins text-[12px] font-semibold tracking-widest uppercase text-violet-400 mb-4">
            What We've Built
          </span>
          <h1 className="font-poppins font-bold text-[36px] sm:text-[48px] text-white leading-tight mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="font-poppins text-[16px] text-slate-400 leading-relaxed">
            Purpose-built apps and integrations that supercharge your SaaS stack.
            Click any product to see full details and installation instructions.
          </p>
        </section>

        {/* Product grid */}
        <section className="pb-24">
          {products.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-poppins text-slate-500 text-[15px]">No products yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
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
