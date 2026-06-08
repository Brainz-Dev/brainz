import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "../constants";

const ease = [0.22, 1, 0.36, 1];

function StepCard({ number, title, description, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease }}
      className="flex flex-col items-center text-center relative"
    >
      {/* Number badge */}
      <div className="relative mb-7">
        <div className="w-14 h-14 rounded-2xl bg-brand-light border border-[rgba(124,58,237,0.20)] flex items-center justify-center z-10 relative transition-transform duration-200 hover:scale-105">
          <span className="font-poppins font-black text-[20px] text-gradient" aria-hidden="true">
            {number}
          </span>
        </div>
        {/* Soft glow */}
        <div className="absolute inset-0 rounded-2xl bg-violet-200/40 blur-xl scale-150 -z-10" aria-hidden="true" />
      </div>

      <h3 className="font-poppins font-bold text-ink text-[20px] mb-2.5 leading-snug">
        {title}
      </h3>
      <p className="font-poppins text-ink-2 text-[14px] leading-[1.8] max-w-[270px]">
        {description}
      </p>
    </motion.div>
  );
}

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 sm:py-28" aria-labelledby="process-heading">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease }}
        className="text-center mb-16"
      >
        <p className="section-label mb-4">How It Works</p>
        <h2 id="process-heading" className="font-poppins font-black sm:text-[52px] text-[36px] text-ink leading-[1.1] mb-4">
          From idea to{" "}
          <span className="text-gradient">production</span>,
          <br className="sm:block hidden" /> in weeks.
        </h2>
        <p className="font-poppins text-ink-2 text-[17px] max-w-[480px] mx-auto leading-relaxed">
          Our battle-tested process eliminates ambiguity, moves fast, and
          ships solutions that last.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 relative">
        {/* Animated connector — desktop only */}
        <motion.div
          className="absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] hidden md:block"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.4, ease }}
          style={{ transformOrigin: "left" }}
          aria-hidden="true"
        >
          <div className="process-connector w-full" />
        </motion.div>

        {processSteps.map((step, i) => (
          <StepCard key={step.id} {...step} index={i} inView={inView} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.7, ease }}
        className="mt-14 text-center"
      >
        <div className="inline-flex items-center gap-2.5 bg-surface rounded-full px-5 py-2.5 border border-line">
          <div className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
          <span className="font-poppins text-[13px] text-ink-2">
            Most projects ship their first version in under{" "}
            <span className="text-ink font-semibold">21 days</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default HowItWorks;
