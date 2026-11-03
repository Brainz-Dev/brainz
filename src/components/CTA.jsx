import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const assurances = ["Avg. 3-week delivery", "Security-first build", "No lock-in guarantee"];

function CTA() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 sm:px-10 py-8" aria-labelledby="cta-heading">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="bg-surface border border-line rounded-3xl px-6 sm:px-12 py-16 sm:py-24 text-center"
      >
        <h2 id="cta-heading" className="section-heading font-poppins sm:text-[56px] text-[36px] mb-5">
          Transform your workflow.
          <br />
          <span className="text-quiet">Start today.</span>
        </h2>

        <p className="font-poppins text-ink-2 text-[17px] max-w-[480px] mx-auto leading-[1.6] mb-9">
          Join 200+ companies that trust Brainz-Dev to connect, automate,
          and scale their SaaS operations — without the chaos.
        </p>

        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          <a href="#contact" className="btn-brand font-poppins text-[15px] px-5 py-2.5 rounded-lg">
            Book a free audit
          </a>
          <a href="#services" className="btn-outline font-poppins text-[15px] px-5 py-2.5 rounded-lg">
            Explore services
          </a>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
          {assurances.map((label) => (
            <li key={label} className="inline-flex items-center gap-2 font-poppins text-[14px] text-ink-2">
              <svg className="w-4 h-4 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default CTA;
