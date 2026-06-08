import { motion } from "framer-motion";
import { features } from "../constants";

/* Maps each service tag to a colour token */
const tagConfig = {
  Integration: { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200",  icon: "bg-violet-100",  dot: "bg-violet-500"  },
  Development: { bg: "bg-fuchsia-50", text: "text-fuchsia-700", border: "border-fuchsia-200", icon: "bg-fuchsia-100", dot: "bg-fuchsia-500" },
  Automation:  { bg: "bg-cyan-50",    text: "text-cyan-700",    border: "border-cyan-200",    icon: "bg-cyan-100",    dot: "bg-cyan-500"    },
  API:         { bg: "bg-indigo-50",  text: "text-indigo-700",  border: "border-indigo-200",  icon: "bg-indigo-100",  dot: "bg-indigo-500"  },
  Data:        { bg: "bg-purple-50",  text: "text-purple-700",  border: "border-purple-200",  icon: "bg-purple-100",  dot: "bg-purple-500"  },
  Partnership: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", icon: "bg-emerald-100", dot: "bg-emerald-500" },
};

const ease = [0.22, 1, 0.36, 1];

function FeatureCard({ icon, tag, title, content, index }) {
  const cfg = tagConfig[tag] || tagConfig.Integration;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      className="feature-card rounded-2xl p-6 flex flex-col gap-4 cursor-default"
    >
      {/* Top row — icon + tag */}
      <div className="flex items-start justify-between gap-3">
        <div className={`w-11 h-11 rounded-xl ${cfg.icon} flex items-center justify-center flex-shrink-0`}>
          <img src={icon} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
        </div>
        <span className={`font-poppins font-semibold text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
          {tag}
        </span>
      </div>

      {/* Copy */}
      <div>
        <h3 className="font-poppins font-bold text-ink text-[17px] leading-snug mb-2">
          {title}
        </h3>
        <p className="font-poppins text-ink-2 text-[14px] leading-[1.8]">
          {content}
        </p>
      </div>

      {/* CTA link */}
      <div className="mt-auto pt-1">
        <a
          href="#contact"
          className={`inline-flex items-center gap-1.5 font-poppins font-semibold text-[13px] ${cfg.text} transition-all duration-150 group`}
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

function Business() {
  return (
    <section id="services" className="py-24 sm:py-28" aria-labelledby="services-heading">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
        className="text-center mb-14"
      >
        <p className="section-label mb-4">What We Build</p>
        <h2 id="services-heading" className="font-poppins font-black sm:text-[52px] text-[36px] text-ink leading-[1.1] mb-4">
          Everything your stack{" "}
          <span className="text-gradient">needs to fly.</span>
        </h2>
        <p className="font-poppins text-ink-2 text-[17px] max-w-[520px] mx-auto leading-relaxed">
          Six core capabilities that transform fragmented SaaS tools into a
          unified, automated engine for growth.
        </p>
      </motion.div>

      {/* 3×2 card grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {features.map((f, i) => (
          <FeatureCard key={f.id} {...f} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Business;
