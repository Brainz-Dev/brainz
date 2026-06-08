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

const ease = [0.22, 1, 0.36, 1];

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function Hero() {
  return (
    <section
      id="home"
      className="relative flex md:flex-row flex-col items-center gap-12 py-20 sm:py-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Soft background orbs — very subtle on white */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-0 left-[15%] w-[380px] h-[380px] rounded-full bg-violet-100/80 blur-[120px]" />
        <div className="absolute top-16 right-[5%] w-64 h-64 rounded-full bg-purple-100/70 blur-[100px]" />
        <div className="absolute -top-10 right-[38%] w-48 h-48 rounded-full bg-indigo-100/60 blur-[80px]" />
      </div>

      {/* ── LEFT ─────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col items-start relative z-10">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light border border-[rgba(124,58,237,0.20)] mb-7"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" aria-hidden="true" />
          <span className="font-poppins text-[11px] font-bold text-brand tracking-[0.14em] uppercase">
            SaaS Integration &amp; Custom Development
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="font-poppins font-black ss:text-[72px] text-[44px] text-ink ss:leading-[1.02] leading-[1.1] mb-5"
        >
          Your SaaS Stack,
          <br />
          <span className="text-gradient">Supercharged.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="font-poppins text-ink-2 text-[17px] leading-[1.85] max-w-[480px] mb-9"
        >
          We connect, automate, and extend your SaaS tools — building the
          integrations and custom apps that eliminate manual work and
          accelerate every team in your company.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <a
            href="#contact"
            className="btn-brand font-poppins font-semibold text-[15px] px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all duration-200 hover:shadow-brand"
          >
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="btn-outline font-poppins font-medium text-[15px] px-8 py-3.5 rounded-xl inline-flex items-center gap-2 transition-all duration-150"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.30, ease }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="flex -space-x-2.5" aria-hidden="true">
            {avatarInitials.map((l, i) => (
              <div
                key={i}
                className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i]} border-2 border-white flex items-center justify-center text-white font-poppins font-bold text-[11px] flex-shrink-0`}
              >
                {l}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="font-poppins text-[13px] text-ink-2">
              <span className="text-ink font-semibold">200+</span> teams already onboard
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.38, ease }}
          className="flex flex-wrap gap-8"
        >
          {heroStats.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="font-poppins font-black text-[30px] text-gradient leading-none">
                {s.value}
              </span>
              <span className="font-poppins text-[11px] font-semibold text-ink-3 uppercase tracking-widest">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── RIGHT — clean product frame ───────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="flex-1 flex items-center justify-center relative z-10 w-full"
      >
        <div className="relative w-full max-w-[540px]">
          {/* Soft glow behind mockup */}
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-r from-violet-100/80 via-purple-100/60 to-fuchsia-100/70 blur-3xl" aria-hidden="true" />

          {/* Browser chrome */}
          <div className="relative bg-white rounded-2xl overflow-hidden border border-line shadow-xl">
            {/* Browser toolbar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
              </div>
              <div className="flex-1 mx-4 bg-line rounded-md h-6 flex items-center px-3">
                <span className="font-poppins text-[11px] text-ink-3">
                  app.brainz-dev.com/dashboard
                </span>
              </div>
            </div>
            <img src={saas} alt="Brainz-Dev integration dashboard" className="w-full block" />
          </div>

          {/* Integration Live badge */}
          <div className="absolute -bottom-4 -left-5 bg-white rounded-xl px-4 py-3 flex items-center gap-3 z-20 border border-line shadow-md">
            <div className="w-8 h-8 rounded-full bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-poppins font-semibold text-ink text-[12px]">Integration Live</p>
              <p className="font-poppins text-ink-2 text-[11px]">Salesforce ↔ HubSpot synced</p>
            </div>
          </div>

          {/* Metric card */}
          <div className="absolute -top-4 -right-4 bg-white rounded-xl px-4 py-3 z-20 border border-line shadow-md">
            <p className="font-poppins text-[11px] text-ink-2 mb-0.5">This week</p>
            <p className="font-poppins font-black text-[22px] text-gradient leading-none">12,450</p>
            <p className="font-poppins text-[11px] text-success flex items-center gap-1 mt-0.5">
              <span>↑ 24%</span>
              <span className="text-ink-3">API calls</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
