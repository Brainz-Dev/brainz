import { motion } from "framer-motion";
import { processSteps } from "../constants";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

function HowItWorks() {
  return (
    <section id="process" className="py-24 sm:py-32" aria-labelledby="process-heading">
      <SectionHeader
        id="process-heading"
        label="How it works"
        title="From idea to production,"
        quiet="in weeks."
        description="Our battle-tested process eliminates ambiguity, moves fast, and ships solutions that last."
        className="mb-16"
      />

      <ol className="grid md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-12">
        {processSteps.map((step, i) => (
          <motion.li
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            className="border-t border-ink pt-6"
          >
            <span className="block font-mono text-[13px] text-ink-3 mb-6" aria-hidden="true">{step.number}</span>
            <h3 className="font-poppins font-semibold text-ink text-[20px] tracking-[-0.02em] mb-2.5">{step.title}</h3>
            <p className="font-poppins text-ink-2 text-[15px] leading-[1.6]">{step.description}</p>
          </motion.li>
        ))}
      </ol>

      <p className="mt-14 font-poppins text-[15px] text-ink-2">
        Most projects ship their first version in under{" "}
        <span className="text-ink font-medium">21 days</span>.
      </p>
    </section>
  );
}

export default HowItWorks;
