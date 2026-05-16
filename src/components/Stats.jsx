import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteStats } from "../constants";

const easeOut = [0.22, 1, 0.36, 1];

function Counter({ end, isDecimal, suffix, active }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;

    const duration = 2200;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = end * eased;
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [active, end, isDecimal]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: easeOut }}
        className="relative glass-card rounded-3xl px-8 py-14 overflow-hidden"
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/5 via-transparent to-fuchsia-600/5 pointer-events-none" />
        {/* Top accent */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="grid sm:grid-cols-4 grid-cols-2 gap-y-12 gap-x-4 relative z-10">
          {siteStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: easeOut }}
              className="flex flex-col items-center text-center relative"
            >
              <span className="font-poppins font-black text-[50px] sm:text-[58px] text-gradient-animated leading-none mb-2">
                <Counter
                  end={s.value}
                  isDecimal={s.isDecimal}
                  suffix={s.suffix}
                  active={inView}
                />
              </span>
              <p className="font-poppins font-bold text-white text-[15px] mb-1">
                {s.label}
              </p>
              <p className="font-poppins text-slate-500 text-[12px]">{s.sub}</p>

              {/* Vertical divider */}
              {i < siteStats.length - 1 && (
                <div className="hidden sm:block absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Stats;
