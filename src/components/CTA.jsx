import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const trustBadges = [
  { label: "Avg. 3-week delivery" },
  { label: "Security-first build" },
  { label: "No lock-in guarantee" },
];

function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-surface" aria-labelledby="cta-heading">
      {/* Top / bottom rule */}
      <div className="absolute top-0 left-0 right-0 cta-border-line" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 cta-border-line" aria-hidden="true" />

      {/* Soft background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/60 via-transparent to-purple-50/40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="section-label mb-6">Ready to start?</p>

          <h2 id="cta-heading" className="font-poppins font-black sm:text-[62px] text-[40px] text-ink sm:leading-[1.06] leading-[1.12] mb-6">
            Transform your
            <br />
            <span className="text-gradient">workflow today.</span>
          </h2>

          <p className="font-poppins text-ink-2 text-[17px] max-w-[500px] mx-auto leading-relaxed mb-10">
            Join 200+ companies that trust Brainz-Dev to connect, automate,
            and scale their SaaS operations — without the chaos.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-9">
            <a
              href="#contact"
              className="btn-brand font-poppins font-bold text-[15px] px-10 py-4 rounded-xl inline-flex items-center gap-2.5 transition-all duration-200 hover:shadow-brand"
            >
              Book a Free Audit
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="btn-outline font-poppins font-semibold text-[15px] px-10 py-4 rounded-xl inline-flex items-center gap-2 transition-all duration-150"
            >
              Explore Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-7">
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.06, ease }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-line shadow-sm font-poppins text-[13px] text-ink-2"
              >
                <svg className="w-4 h-4 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {b.label}
              </motion.div>
            ))}
          </div>

          <p className="font-poppins text-ink-3 text-[13px]">
            No commitment required &nbsp;·&nbsp; Response within 24 hours
            &nbsp;·&nbsp; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
