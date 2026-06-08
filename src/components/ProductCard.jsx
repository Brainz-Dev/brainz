import { Link } from "react-router-dom";

const categoryColors = {
  Integration: "text-violet-700 bg-violet-50 border-violet-200",
  Automation:  "text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200",
  API:         "text-indigo-700 bg-indigo-50 border-indigo-200",
  Data:        "text-cyan-700 bg-cyan-50 border-cyan-200",
  Analytics:   "text-emerald-700 bg-emerald-50 border-emerald-200",
};

function IconSlot({ icon, name }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-16 h-16 object-contain rounded-2xl border border-line shadow-sm"
      />
    );
  }
  return (
    <div className="w-16 h-16 rounded-2xl border border-dashed border-line flex items-center justify-center bg-surface">
      <svg
        className="w-7 h-7 text-ink-3"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
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

function ProductCard({ product }) {
  const badgeClass =
    categoryColors[product.category] ?? "text-ink-2 bg-surface border-line";

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group feature-card rounded-2xl p-6 flex flex-col gap-5 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      aria-label={`View details for ${product.name}`}
    >
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between gap-3">
        <IconSlot icon={product.icon} name={product.name} />
        <span
          className={`flex-shrink-0 text-[11px] font-poppins font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${badgeClass}`}
        >
          {product.category}
        </span>
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-poppins font-semibold text-ink text-[17px] leading-snug group-hover:text-brand transition-colors duration-150">
          {product.name}
        </h3>
        <p className="font-poppins text-[13px] text-ink-2 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>
      </div>

      {/* Marketplace badge */}
      <div className="flex items-center gap-2 py-2.5 px-3 rounded-lg bg-surface border border-line">
        <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="font-poppins text-[12px] font-medium text-ink-2">
          Freshdesk Marketplace
        </span>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-1.5 font-poppins text-[13px] font-semibold text-brand group-hover:gap-2.5 transition-all duration-150">
        View Details
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}

export default ProductCard;
