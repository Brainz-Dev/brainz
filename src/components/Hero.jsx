import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import KanbanMock from "./KanbanMock";

const heroStats = [
  { value: "200+",  label: "Teams onboard" },
  { value: "500K+", label: "API calls per day" },
  { value: "50+",   label: "Integrations shipped" },
  { value: "3 wks", label: "Average time to launch" },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial:    { opacity: 0, y: 12 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

const ChevronIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// ── Kanban Pro product shot ───────────────────────────────────
// Breaks out of the content column so the tilted board reads larger.
function ProductShot() {
  return (
    <figure className="relative left-1/2 -translate-x-1/2 w-[calc(100vw-32px)] max-w-[1320px]">
      <div className="hero-stage">
        <Link
          to="/products/kanban-pro"
          className="hero-tilt hero-fade bezel block"
          aria-label="Kanban Pro for Zoho Desk board with tickets grouped into columns by country — view product"
        >
          <div className="window">
            <KanbanMock />
          </div>
        </Link>
      </div>
      <figcaption className="mt-2 font-poppins text-[14px] text-ink-3">
        Kanban Pro for Zoho Desk — built and shipped by Brainz-Dev.{" "}
        <Link to="/products/kanban-pro" className="text-ink-2 hover:text-ink underline underline-offset-4 decoration-line-2">
          See the app
        </Link>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center text-center pt-16 sm:pt-24 pb-16 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Announcement */}
      <motion.div {...fadeUp(0)}>
        <Link
          to="/products/kanban-pro"
          className="group inline-flex items-center gap-2 rounded-full border border-line bg-white pl-3 pr-2.5 py-1 mb-8 font-poppins text-[13px] text-ink-2 shadow-sm hover:border-line-2 transition-colors duration-150"
        >
          <span className="font-medium text-accent">New</span>
          <span className="w-px h-3 bg-line-2" aria-hidden="true" />
          Kanban Pro for Zoho Desk
          <ChevronIcon className="w-3.5 h-3.5 text-ink-3 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

      {/* Headline */}
      <motion.h1
        id="hero-heading"
        {...fadeUp(0.06)}
        className="font-poppins font-semibold text-ink ss:text-[68px] xs:text-[50px] text-[40px] tracking-[-0.045em] leading-[1.02] mb-6 max-w-[820px]"
      >
        Your SaaS stack,
        <br />
        <span className="text-quiet">supercharged.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.12)}
        className="font-poppins text-ink-2 text-[18px] sm:text-[19px] leading-[1.6] max-w-[580px] mb-9"
      >
        We connect, automate, and extend your SaaS tools — building the
        integrations and custom apps that eliminate manual work and
        accelerate every team in your company.
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.18)} className="flex flex-wrap justify-center gap-2.5 mb-16 sm:mb-20">
        <a href="#contact" className="btn-brand font-poppins text-[15px] px-5 py-2.5 rounded-lg">
          Start your project
        </a>
        <a href="#services" className="btn-outline font-poppins text-[15px] px-5 py-2.5 rounded-lg">
          Explore services
        </a>
      </motion.div>

      {/* Product shot */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.24, ease }}
        className="w-full"
      >
        <ProductShot />
      </motion.div>

      {/* Stats */}
      <motion.dl
        {...fadeUp(0.32)}
        className="w-full max-w-[1080px] grid grid-cols-2 md:grid-cols-4 mt-16 sm:mt-20 border-t border-line"
      >
        {heroStats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col-reverse gap-1.5 text-left pt-6 pb-2 md:px-6 md:first:pl-0 ${i > 0 ? "md:border-l border-line" : ""}`}
          >
            <dt className="font-poppins text-[14px] text-ink-2">{s.label}</dt>
            <dd className="font-poppins font-semibold text-[32px] text-ink tracking-[-0.03em] leading-none">{s.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}

export default Hero;
