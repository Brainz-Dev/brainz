import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "../constants";

const easeOut = [0.22, 1, 0.36, 1];

function StepCard({ number, title, description, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.18, ease: easeOut }}
      className="flex flex-col items-center text-center relative"
    >
      {/* Number badge */}
      <div className="relative mb-8">
        <motion.div
          className="w-16 h-16 rounded-2xl glass-card border border-violet-500/30 flex items-center justify-center z-10 relative"
          whileHover={{ scale: 1.1, rotate: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
        >
          <span className="font-poppins font-black text-[22px] text-gradient">
            {number}
          </span>
        </motion.div>
        <div className="absolute inset-0 rounded-2xl bg-violet-600/20 blur-xl scale-125" />
      </div>

      <h3 className="font-poppins font-bold text-white text-[21px] mb-3 leading-snug">
        {title}
      </h3>
      <p className="font-poppins text-slate-400 text-[15px] leading-[1.8] max-w-[280px]">
        {description}
      </p>
    </motion.div>
  );
}

function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="py-24 sm:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: easeOut }}
        className="text-center mb-16"
      >
        <p className="font-poppins font-semibold text-[11px] tracking-[0.2em] uppercase text-violet-400 mb-4">
          How It Works
        </p>
        <h2 className="font-poppins font-black sm:text-[56px] text-[38px] text-white leading-[1.1] mb-5">
          From idea to{" "}
          <span className="text-gradient">production</span>,
          <br className="sm:block hidden" /> in weeks.
        </h2>
        <p className="font-poppins text-slate-400 text-[17px] max-w-[500px] mx-auto leading-relaxed">
          Our battle-tested process eliminates ambiguity, moves fast, and
          ships solutions that last.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 relative">
        {/* Animated connector line — desktop only */}
        <motion.div
          className="absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] hidden md:block"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: easeOut }}
          style={{ transformOrigin: "left" }}
        >
          <div className="process-connector w-full" />
        </motion.div>

        {processSteps.map((step, i) => (
          <StepCard key={step.id} {...step} index={i} inView={inView} />
        ))}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.75, ease: easeOut }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 border border-white/10">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-poppins text-[13px] text-slate-300">
            Most projects ship their first version in under{" "}
            <span className="text-white font-semibold">21 days</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default HowItWorks;
