import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const trustItems = [
  {
    id: "t-1",
    icon: (
      <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: "bg-violet-50 border-violet-200",
    title: "Marketplace Expertise",
    description:
      "Certified on Freshdesk, Freshservice, and Zoho marketplaces. We know the approval process, platform APIs, and submission requirements inside-out — so your app ships without surprises.",
    metric: "3 Marketplaces",
    metricLabel: "Certified",
  },
  {
    id: "t-2",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    iconBg: "bg-emerald-50 border-emerald-200",
    title: "Secure Development",
    description:
      "Every project is built with security-first principles — OAuth 2.0, proper token management, HTTPS-only APIs, and code review before every deployment.",
    metric: "100%",
    metricLabel: "Security-first builds",
  },
  {
    id: "t-3",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: "bg-blue-50 border-blue-200",
    title: "Fast Implementation",
    description:
      "Our battle-tested process delivers working software in weeks, not months. We scope precisely, cut ambiguity early, and ship your first production version fast.",
    metric: "~3 weeks",
    metricLabel: "Avg. delivery time",
  },
  {
    id: "t-4",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
      </svg>
    ),
    iconBg: "bg-purple-50 border-purple-200",
    title: "Long-term Support",
    description:
      "We don't disappear after go-live. Retainer plans, priority bug fixes, version updates for marketplace API changes, and proactive monitoring keep your solution running.",
    metric: "99.9%",
    metricLabel: "Uptime SLA",
  },
];

function TrustSection() {
  return (
    <section className="py-24 sm:py-28 bg-surface" aria-labelledby="trust-heading">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease }}
          className="text-center mb-14"
        >
          <p className="section-label mb-4">Why Businesses Choose Us</p>
          <h2 id="trust-heading" className="font-poppins font-black sm:text-[52px] text-[36px] text-ink leading-[1.1] mb-4">
            Why Businesses Choose{" "}
            <span className="text-gradient">Brainz Dev</span>
          </h2>
          <p className="font-poppins text-ink-2 text-[17px] max-w-[520px] mx-auto leading-relaxed">
            From first prototype to long-term partner — here's what makes us
            the team SaaS companies trust to build business-critical software.
          </p>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="trust-card bg-white p-7 flex flex-col gap-5"
            >
              {/* Icon + metric row */}
              <div className="flex items-start justify-between gap-4">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-poppins font-black text-[22px] text-ink leading-none">{item.metric}</p>
                  <p className="font-poppins text-[11px] text-ink-3 tracking-wide mt-0.5">{item.metricLabel}</p>
                </div>
              </div>

              {/* Copy */}
              <div>
                <h3 className="font-poppins font-bold text-ink text-[18px] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="font-poppins text-ink-2 text-[14px] leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
