import { motion } from "framer-motion";
import { testimonials } from "../constants";

const easeOut = [0.22, 1, 0.36, 1];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function TestimonialCard({ quote, name, role, company, initial, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.13, ease: easeOut }}
      whileHover={{ y: -7 }}
      className="glass-card rounded-2xl p-7 flex flex-col gap-5 relative overflow-hidden group transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(124,58,237,0.2)]"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Stars */}
      <div className="flex gap-1 pt-1">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Big quote mark */}
      <div
        className="font-poppins font-black text-[80px] leading-none text-violet-500/18 -mt-4 -mb-7 select-none"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        "
      </div>

      {/* Quote */}
      <blockquote className="font-poppins text-slate-300 text-[15px] leading-[1.85] flex-1">
        {quote}
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-white/[0.07]" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-poppins font-bold text-[14px] flex-shrink-0 ring-2 ring-white/10 ring-offset-1 ring-offset-transparent`}
        >
          {initial}
        </div>
        <div>
          <p className="font-poppins font-semibold text-white text-[14px]">{name}</p>
          <p className="font-poppins text-slate-500 text-[12px]">
            {role} · <span className="text-slate-400">{company}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="text-center mb-16"
      >
        <p className="font-poppins font-semibold text-[11px] tracking-[0.2em] uppercase text-violet-400 mb-4">
          Client Stories
        </p>
        <h2 className="font-poppins font-black sm:text-[56px] text-[38px] text-white leading-[1.1] mb-5">
          Trusted by teams{" "}
          <span className="text-gradient">shipping faster.</span>
        </h2>
        <p className="font-poppins text-slate-400 text-[17px] max-w-[480px] mx-auto leading-relaxed">
          Real results from real teams who stopped wrestling with their tools
          and started focusing on what matters.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.id} {...t} index={i} />
        ))}
      </div>

      {/* Rating summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        className="mt-12 flex justify-center"
      >
        <div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 border border-white/10">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <span className="font-poppins font-semibold text-white text-[14px]">5.0</span>
          <span className="font-poppins text-slate-400 text-[13px]">
            from 30+ client reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
