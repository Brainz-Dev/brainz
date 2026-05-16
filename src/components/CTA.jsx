import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

const trustBadges = [
  { icon: "⚡", label: "Avg. 3-week delivery" },
  { icon: "🔒", label: "Security-first build" },
  { icon: "↻",  label: "No lock-in guarantee" },
];

function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-primary to-purple-950/50" />
      <div className="absolute top-0 left-0 right-0 cta-border-line" />
      <div className="absolute bottom-0 left-0 right-0 cta-border-line" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-[12%] -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-violet-700/12 blur-[160px] animate-glow-pulse pointer-events-none" />
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-96 h-96 rounded-full bg-fuchsia-700/10 blur-[130px] animate-glow-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: easeOut }}
          className="text-center"
        >
          <p className="font-poppins font-semibold text-[11px] tracking-[0.22em] uppercase text-violet-400 mb-6">
            Ready to start?
          </p>

          <h2 className="font-poppins font-black sm:text-[68px] text-[42px] text-white sm:leading-[1.04] leading-[1.1] mb-7">
            Transform your
            <br />
            <span className="text-gradient-animated">workflow today.</span>
          </h2>

          <p className="font-poppins text-slate-400 text-[18px] max-w-[520px] mx-auto leading-relaxed mb-12">
            Join 200+ companies that trust Brainz-Dev to connect, automate,
            and scale their SaaS operations — without the chaos.
          </p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeOut }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <motion.a
              href="#contact"
              className="relative font-poppins font-bold text-[16px] text-white bg-brand-gradient px-10 py-[1.1rem] rounded-xl overflow-hidden group inline-flex items-center gap-2.5"
              whileHover={{ scale: 1.04, boxShadow: "0 0 70px rgba(124,58,237,0.55)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              <span className="relative z-10">Book a Free Audit</span>
              <motion.span
                className="relative z-10 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-white/[0.12] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.a>
            <motion.a
              href="#services"
              className="btn-outline font-poppins font-semibold text-[16px] px-10 py-[1.1rem] rounded-xl"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
            >
              Explore Services
            </motion.a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28, ease: easeOut }}
            className="flex flex-wrap justify-center gap-3 mb-7"
          >
            {trustBadges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 font-poppins text-[13px] text-slate-300"
              >
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <p className="font-poppins text-slate-600 text-[13px]">
            No commitment required &nbsp;·&nbsp; Response within 24 hours
            &nbsp;·&nbsp; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
