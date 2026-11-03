import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);
  if (!faq?.length) return null;

  return (
    <section aria-labelledby="faq-heading" className="mt-16 flex flex-col gap-5">
      <SectionHeading id="faq-heading">Frequently asked questions</SectionHeading>
      <div className="border-y border-line divide-y divide-line">
        {faq.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-poppins font-medium text-ink text-[15px] leading-snug">
                  {item.question}
                </span>
                <svg
                  className={`w-4 h-4 text-ink-3 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
              {isOpen && (
                <p className="font-poppins text-[15px] text-ink-2 leading-[1.65] pb-5 pr-8 max-w-[720px]">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
