import SectionHeading from "./SectionHeading";

function CurrencyTable({ currencies }) {
  if (!currencies?.length) return null;
  return (
    <div>
      <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-2">Pricing by currency</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {currencies.map((c) => (
          <div key={c.code} className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="font-poppins text-[11px] font-semibold text-ink-3">{c.code}</span>
            <span className="font-poppins text-[13px] font-bold text-ink">
              {c.symbol}{c.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PricingSection({ pricing }) {
  if (!pricing?.length) return null;

  return (
    <section aria-labelledby="pricing-heading" className="mt-12 flex flex-col gap-5">
      <SectionHeading id="pricing-heading">Pricing</SectionHeading>
      <div className="flex flex-wrap gap-5">
        {pricing.map((plan) => (
          <div
            key={plan.tier}
            className={`card rounded-2xl p-7 flex flex-col gap-5 flex-1 min-w-[280px] ${
              plan.highlighted ? "border-violet-300 shadow-brand" : ""
            }`}
          >
            {/* Tier label */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-poppins font-semibold text-ink text-[15px]">{plan.tier}</span>
              {plan.pricingMethod && (
                <span className="text-[11px] font-poppins font-semibold tracking-wide px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 border border-violet-200">
                  {plan.pricingMethod}
                </span>
              )}
            </div>

            {/* Price */}
            <div>
              <p className="font-poppins font-bold text-[40px] text-ink leading-none">
                {plan.price}
                <span className="font-poppins font-normal text-[14px] text-ink-3 ml-1.5">
                  / {plan.period}
                </span>
              </p>
              {plan.pricingMethodNote && (
                <p className="font-poppins text-[12px] text-ink-3 mt-1.5 flex items-start gap-1.5">
                  <svg className="w-3.5 h-3.5 text-violet-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  {plan.pricingMethodNote}
                </p>
              )}
              {plan.description && (
                <p className="font-poppins text-[13px] text-ink-2 mt-2">{plan.description}</p>
              )}
            </div>

            {/* Feature list */}
            {plan.features?.length > 0 && (
              <ul className="flex flex-col gap-2.5" role="list">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5"
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="font-poppins text-[13px] text-ink-2">{f}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Currency table */}
            <CurrencyTable currencies={plan.currencies} />

            {/* CTA */}
            {plan.cta && (
              <a
                href={plan.ctaHref ?? "https://www.freshworks.com/apps/freshdesk/"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 font-poppins font-semibold text-[13px] text-white transition-all duration-200"
              >
                {plan.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
