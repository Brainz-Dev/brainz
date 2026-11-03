import { Link } from "react-router-dom";

function IconSlot({ icon, name }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-14 h-14 object-contain rounded-xl border border-line"
      />
    );
  }
  return (
    <div className="w-14 h-14 rounded-xl border border-dashed border-line-2 flex items-center justify-center bg-surface">
      <svg className="w-6 h-6 text-ink-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
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
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group feature-card rounded-2xl p-6 flex flex-col gap-5 h-full"
      aria-label={`View details for ${product.name}`}
    >
      <IconSlot icon={product.icon} name={product.name} />

      <div className="flex flex-col gap-1.5 flex-1">
        <p className="font-poppins text-[13px] text-ink-3">
          {product.category} · {product.marketplace ?? "Freshdesk Marketplace"}
        </p>
        <h3 className="font-poppins font-semibold text-ink text-[17px] tracking-[-0.01em]">
          {product.name}
        </h3>
        <p className="font-poppins text-[15px] text-ink-2 leading-[1.55] line-clamp-2">
          {product.tagline}
        </p>
      </div>

      <span className="inline-flex items-center gap-1 font-poppins text-[14px] font-medium text-ink">
        View details
        <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  );
}

export default ProductCard;
