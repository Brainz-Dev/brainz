import { motion } from "framer-motion";
import { features } from "../constants";

const tagConfig = {
  Integration: {
    border: "border-l-violet-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(139,92,246,0.28)]",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    ring: "border-violet-400/25",
    numberColor: "text-violet-400/[0.07]",
  },
  Development: {
    border: "border-l-fuchsia-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(217,70,239,0.28)]",
    bg: "bg-fuchsia-500/10",
    text: "text-fuchsia-400",
    ring: "border-fuchsia-400/25",
    numberColor: "text-fuchsia-400/[0.07]",
  },
  Automation: {
    border: "border-l-cyan-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(6,182,212,0.28)]",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    ring: "border-cyan-400/25",
    numberColor: "text-cyan-400/[0.07]",
  },
  API: {
    border: "border-l-indigo-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(99,102,241,0.28)]",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    ring: "border-indigo-400/25",
    numberColor: "text-indigo-400/[0.07]",
  },
  Data: {
    border: "border-l-purple-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(168,85,247,0.28)]",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    ring: "border-purple-400/25",
    numberColor: "text-purple-400/[0.07]",
  },
  Partnership: {
    border: "border-l-emerald-500",
    glow: "group-hover:shadow-[0_8px_40px_rgba(16,185,129,0.28)]",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    ring: "border-emerald-400/25",
    numberColor: "text-emerald-400/[0.07]",
  },
};

const easeOut = [0.22, 1, 0.36, 1];

function FeatureCard({ icon, tag, title, content, index }) {
  const cfg = tagConfig[tag] || tagConfig.Integration;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: easeOut }}
      whileHover={{ y: -8 }}
      className={`glass-card rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden border-l-[3px] ${cfg.border} transition-shadow duration-300 ${cfg.glow} group cursor-default`}
    >
      {/* Faint background number */}
      <span
        className={`absolute top-3 right-4 font-poppins font-black text-[72px] leading-none select-none pointer-events-none ${cfg.numberColor}`}
      >
        {num}
      </span>

      {/* Hover background tint */}
      <div className={`absolute inset-0 ${cfg.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Top row — icon + tag */}
      <div className="flex items-start justify-between gap-4 relative z-10">
        <motion.div
          className={`w-12 h-12 rounded-xl ${cfg.bg} border ${cfg.ring} flex items-center justify-center flex-shrink-0`}
          whileHover={{ scale: 1.12, rotate: 6 }}
          transition={{ type: "spring", stiffness: 320, damping: 16 }}
        >
          <img src={icon} alt={title} className="w-5 h-5 object-contain" />
        </motion.div>
        <span
          className={`font-poppins font-semibold text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.ring}`}
        >
          {tag}
        </span>
      </div>

      {/* Copy */}
      <div className="relative z-10">
        <h4 className="font-poppins font-bold text-white text-[18px] leading-snug mb-2.5">
          {title}
        </h4>
        <p className="font-poppins text-slate-400 text-[14px] leading-[1.8]">
          {content}
        </p>
      </div>

      {/* Arrow link */}
      <div className="mt-auto pt-2 relative z-10">
        <a
          href="#contact"
          className={`inline-flex items-center gap-1.5 font-poppins font-semibold text-[13px] ${cfg.text} group/link`}
        >
          Learn more
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
}

function Business() {
  return (
    <section id="services" className="py-24 sm:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="text-center mb-16"
      >
        <p className="font-poppins font-semibold text-[11px] tracking-[0.2em] uppercase text-violet-400 mb-4">
          What We Build
        </p>
        <h2 className="font-poppins font-black sm:text-[56px] text-[38px] text-white leading-[1.1] mb-5">
          Everything your stack{" "}
          <span className="text-gradient">needs to fly.</span>
        </h2>
        <p className="font-poppins text-slate-400 text-[17px] max-w-[540px] mx-auto leading-relaxed">
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
