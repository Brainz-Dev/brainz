import SectionHeading from "./SectionHeading";

export default function AboutSection({ product }) {
  if (!product.description) return null;

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Description — 2/3 */}
      <section aria-labelledby="about-heading" className="lg:col-span-2 flex flex-col gap-4">
        <SectionHeading id="about-heading">About This App</SectionHeading>
        <div className="card rounded-2xl p-7">
          {product.description.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`font-poppins text-[14px] text-ink-2 leading-relaxed ${i > 0 ? "mt-4" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Quick info — 1/3 */}
      <aside aria-labelledby="quickinfo-heading" className="flex flex-col gap-4">
        <SectionHeading id="quickinfo-heading">Quick Info</SectionHeading>
        <div className="card rounded-2xl p-6 flex flex-col gap-4">
          {product.category && (
            <>
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-1">Category</p>
                <p className="font-poppins text-[14px] text-ink font-medium">{product.category}</p>
              </div>
              <div className="h-px bg-slate-100" />
            </>
          )}
          {product.pricing?.[0] && (
            <>
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-1">Pricing</p>
                <p className="font-poppins text-[14px] text-ink font-medium">
                  {product.pricing[0].price ?? "Free"}{" "}
                  <span className="text-ink-3 font-normal text-[12px]">/ {product.pricing[0].period}</span>
                </p>
              </div>
              <div className="h-px bg-slate-100" />
            </>
          )}
          {product.installationGuide?.length > 0 && (
            <>
              <div>
                <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-1">Install Steps</p>
                <p className="font-poppins text-[14px] text-ink font-medium">{product.installationGuide.length} steps</p>
              </div>
              <div className="h-px bg-slate-100" />
            </>
          )}
          <div>
            <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-1">Support</p>
            <a
              href="mailto:support@brainz-dev.com"
              className="font-poppins text-[13px] text-brand hover:text-brand-hover transition-colors underline underline-offset-2"
            >
              Contact support
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
