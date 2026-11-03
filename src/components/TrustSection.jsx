import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const trustItems = [
  {
    id: "t-1",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Marketplace expertise",
    description:
      "Certified on Freshdesk, Freshservice, and Zoho marketplaces. We know the approval process, platform APIs, and submission requirements inside-out — so your app ships without surprises.",
    metric: "3",
    metricLabel: "Marketplaces certified",
  },
  {
    id: "t-2",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Secure development",
    description:
      "Every project is built with security-first principles — OAuth 2.0, proper token management, HTTPS-only APIs, and code review before every deployment.",
    metric: "100%",
    metricLabel: "Security-first builds",
  },
  {
    id: "t-3",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Fast implementation",
    description:
      "Our battle-tested process delivers working software in weeks, not months. We scope precisely, cut ambiguity early, and ship your first production version fast.",
    metric: "~3 wks",
    metricLabel: "Average delivery time",
  },
  {
    id: "t-4",
    icon: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13",
    title: "Long-term support",
    description:
      "We don't disappear after go-live. Retainer plans, priority bug fixes, version updates for marketplace API changes, and proactive monitoring keep your solution running.",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
  },
];

function TrustSection() {
  return (
    <section className="py-24 sm:py-32 bg-surface border-y border-line" aria-labelledby="trust-heading">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <SectionHeader
          id="trust-heading"
          label="Why Brainz-Dev"
          title="The team SaaS companies trust"
          quiet="with business-critical software."
          description="From first prototype to long-term partner — here's what working with us looks like."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="flex flex-col"
            >
              <svg className="w-5 h-5 text-ink mb-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <h3 className="font-poppins font-semibold text-ink text-[16px] mb-2">{item.title}</h3>
              <p className="font-poppins text-ink-2 text-[15px] leading-[1.6] mb-6">{item.description}</p>
              <div className="mt-auto pt-5 border-t border-line-2">
                <p className="font-poppins font-semibold text-[28px] text-ink tracking-[-0.03em] leading-none mb-1.5">{item.metric}</p>
                <p className="font-poppins text-[13px] text-ink-3">{item.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
