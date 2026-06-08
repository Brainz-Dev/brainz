import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteStats } from "../constants";

const ease = [0.22, 1, 0.36, 1];

function Counter({ end, isDecimal, suffix, active }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;
    const duration = 2000;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, end, isDecimal]);

  return <>{count}{suffix}</>;
}

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16" aria-label="Company statistics">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="bg-surface rounded-3xl border border-line shadow-sm px-8 py-12 overflow-hidden relative"
      >
        {/* Subtle top accent */}
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-[rgba(124,58,237,0.20)] to-transparent" aria-hidden="true" />

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-10 gap-x-4 relative z-10">
          {siteStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex flex-col items-center text-center relative"
            >
              <span className="font-poppins font-black text-[46px] sm:text-[52px] text-gradient leading-none mb-2">
                <Counter end={s.value} isDecimal={s.isDecimal} suffix={s.suffix} active={inView} />
              </span>
              <p className="font-poppins font-bold text-ink text-[14px] mb-0.5">
                {s.label}
              </p>
              <p className="font-poppins text-ink-3 text-[12px]">{s.sub}</p>

              {/* Vertical divider */}
              {i < siteStats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-[8%] bottom-[8%] w-px bg-line" aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stats;
