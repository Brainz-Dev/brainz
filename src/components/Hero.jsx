import { motion } from "framer-motion";
import { saas } from "../assets";

const heroStats = [
  { value: "500K+", label: "API calls / day" },
  { value: "50+",   label: "Integrations built" },
  { value: "3 wk",  label: "Avg. ship time" },
];

const avatarColors = [
  "from-violet-500 to-purple-600",
  "from-fuchsia-500 to-pink-600",
  "from-indigo-500 to-violet-600",
  "from-purple-500 to-fuchsia-600",
  "from-violet-600 to-indigo-500",
];
const avatarInitials = ["S", "M", "P", "J", "R"];

const easeOut = [0.22, 1, 0.36, 1];

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function Hero() {
  return (
    <section
      id="home"
      className="relative flex md:flex-row flex-col items-center gap-14 py-24 sm:py-36 overflow-hidden"
    >
      {/* Aurora orbs */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] pointer-events-none z-0">
        <div className="absolute top-0 left-[15%] w-[440px] h-[440px] rounded-full bg-violet-700/25 blur-[140px] animate-glow-pulse" />
        <div className="absolute top-20 right-[5%] w-80 h-80 rounded-full bg-fuchsia-700/20 blur-[110px] animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute -top-10 right-[40%] w-60 h-60 rounded-full bg-indigo-700/20 blur-[90px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* ── LEFT ── */}
      <div className="flex-1 flex flex-col items-start relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse inline-block" />
          <span className="font-poppins text-[12px] font-semibold text-violet-300 tracking-[0.12em] uppercase">
            SaaS Integration &amp; Custom Development
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="font-poppins font-black ss:text-[78px] text-[50px] text-white ss:leading-[1.01] leading-[1.08] mb-6"
        >
          Your SaaS Stack,
          <br />
          <span className="text-gradient-animated">Supercharged.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
          className="font-poppins text-slate-400 text-[17px] leading-[1.85] max-w-[500px] mb-10"
        >
          We connect, automate, and extend your SaaS tools — building the
          integrations and custom apps that eliminate manual work and
          accelerate every team in your company.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26, ease: easeOut }}
          className="flex flex-wrap gap-4 mb-9"
        >
          <motion.a
            href="#contact"
            className="relative font-poppins font-semibold text-[15px] text-white bg-brand-gradient px-8 py-4 rounded-xl overflow-hidden group inline-flex items-center gap-2"
            whileHover={{ scale: 1.04, boxShadow: "0 0 60px rgba(124,58,237,0.55)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            <span className="relative z-10">Start Your Project</span>
            <motion.span
              className="relative z-10 inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
            <span className="absolute inset-0 bg-white/[0.12] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.a>
          <motion.a
            href="#services"
            className="btn-outline font-poppins font-medium text-[15px] px-8 py-4 rounded-xl"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 22 }}
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34, ease: easeOut }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="flex -space-x-2.5">
            {avatarInitials.map((l, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i]} border-2 border-primary flex items-center justify-center text-white font-poppins font-bold text-[11px] flex-shrink-0`}
              >
                {l}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="font-poppins text-[13px] text-slate-400">
              <span className="text-white font-semibold">200+</span> teams already onboard
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42, ease: easeOut }}
          className="flex flex-wrap gap-10"
        >
          {heroStats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-poppins font-black text-[34px] text-gradient leading-none">
                {s.value}
              </span>
              <span className="font-poppins text-[12px] font-medium text-slate-500 uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — browser mockup ── */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: easeOut }}
        className="flex-1 flex items-center justify-center relative z-10 w-full"
      >
        <div className="relative w-full max-w-[560px]">
          {/* Glow behind mockup */}
          <div className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-violet-600/30 via-purple-600/25 to-fuchsia-600/25 blur-3xl" />

          {/* Browser chrome */}
          <div className="relative glass-card rounded-2xl overflow-hidden border border-white/[0.1] animate-float shadow-card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4 bg-white/[0.06] rounded-md h-6 flex items-center justify-center">
                <span className="font-poppins text-[11px] text-white/30">
                  app.brainz-dev.io/dashboard
                </span>
              </div>
            </div>
            <img src={saas} alt="Brainz-Dev Dashboard" className="w-full block" />
          </div>

          {/* Floating notification card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-5 -left-6 glass-card-strong rounded-xl px-4 py-3 flex items-center gap-3 z-20 border border-white/[0.12] shadow-card"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-poppins font-semibold text-white text-[12px]">Integration Live</p>
              <p className="font-poppins text-slate-400 text-[11px]">Salesforce ↔ HubSpot synced</p>
            </div>
          </motion.div>

          {/* Floating metric card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -top-5 -right-4 glass-card-strong rounded-xl px-4 py-3 z-20 border border-white/[0.12] shadow-card"
          >
            <p className="font-poppins text-[11px] text-slate-400 mb-0.5">This week</p>
            <p className="font-poppins font-black text-[20px] text-gradient leading-none">12,450</p>
            <p className="font-poppins text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5">
              <span>↑ 24%</span>
              <span className="text-slate-500">API calls</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
