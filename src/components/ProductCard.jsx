import { Link } from "react-router-dom";

const categoryColors = {
  Integration: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  Automation:  "text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-500/20",
  API:         "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  Data:        "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
};

function IconSlot({ icon, name }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={name}
        className="w-16 h-16 object-contain rounded-xl"
      />
    );
  }
  return (
    <div className="w-16 h-16 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center bg-white/[0.02]">
      <svg className="w-7 h-7 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M21 12V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75V12" />
      </svg>
    </div>
  );
}

function ProductCard({ product }) {
  const badgeClass = categoryColors[product.category] ?? "text-slate-300 bg-white/5 border-white/10";

  return (
    <Link
      to={`/products/${product.id}`}
      className="group glass-card feature-card rounded-2xl p-6 flex flex-col gap-5 border border-white/[0.06] hover:border-violet-500/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <IconSlot icon={product.icon} name={product.name} />
        <span className={`flex-shrink-0 text-[11px] font-poppins font-medium px-2.5 py-1 rounded-full border ${badgeClass}`}>
          {product.category}
        </span>
      </div>

      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-poppins font-semibold text-white text-[17px] leading-snug group-hover:text-gradient transition-colors">
          {product.name}
        </h3>
        <p className="font-poppins text-[13px] text-slate-400 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>
      </div>

      <div className="flex items-center gap-1.5 font-poppins text-[13px] font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
        View Details
        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </Link>
  );
}

export default ProductCard;
