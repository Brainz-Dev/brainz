import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);
  if (!faq?.length) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-12 flex flex-col gap-5">
      <SectionHeading id="faq-heading">Frequently Asked Questions</SectionHeading>
      <div className="flex flex-col gap-3">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="card rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors duration-150"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-poppins font-semibold text-ink text-[14px] leading-snug">
                  {item.question}
                </span>
                <svg
                  className={`w-4 h-4 text-ink-3 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 border-t border-slate-100 pt-4">
                  <p className="font-poppins text-[13px] text-ink-2 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
