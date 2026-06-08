import { motion } from "framer-motion";
import { testimonials } from "../constants";

const ease = [0.22, 1, 0.36, 1];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function TestimonialCard({ quote, name, role, company, initial, color, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.10, ease }}
      className="testimonial-card p-7 flex flex-col gap-5"
      aria-label={`Testimonial from ${name}, ${role} at ${company}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label="5 stars">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Quote mark */}
      <div
        className="font-black text-[56px] leading-none text-violet-200 -mt-2 -mb-5 select-none"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        aria-hidden="true"
      >
        "
      </div>

      {/* Quote text */}
      <blockquote className="font-poppins text-ink-2 text-[15px] leading-[1.85] flex-1">
        {quote}
      </blockquote>

      {/* Divider */}
      <div className="h-px bg-line" aria-hidden="true" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-poppins font-bold text-[14px] flex-shrink-0 ring-2 ring-white ring-offset-1`}
          aria-hidden="true"
        >
          {initial}
        </div>
        <div>
          <p className="font-poppins font-semibold text-ink text-[14px]">{name}</p>
          <p className="font-poppins text-ink-3 text-[12px]">
            {role} · <span className="text-ink-2">{company}</span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-28" aria-labelledby="testimonials-heading">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
        className="text-center mb-14"
      >
        <p className="section-label mb-4">Client Stories</p>
        <h2 id="testimonials-heading" className="font-poppins font-black sm:text-[52px] text-[36px] text-ink leading-[1.1] mb-4">
          Trusted by teams{" "}
          <span className="text-gradient">shipping faster.</span>
        </h2>
        <p className="font-poppins text-ink-2 text-[17px] max-w-[460px] mx-auto leading-relaxed">
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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25, ease }}
        className="mt-12 flex justify-center"
      >
        <div className="bg-surface rounded-full px-5 py-3 flex items-center gap-3 border border-line" aria-label="Overall rating: 5.0 from 30+ client reviews">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
          <span className="font-poppins font-bold text-ink text-[14px]">5.0</span>
          <span className="font-poppins text-ink-2 text-[13px]">
            from 30+ client reviews
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
