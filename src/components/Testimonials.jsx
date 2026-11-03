import { motion } from "framer-motion";
import { testimonials } from "../constants";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

function TestimonialCard({ quote, name, role, initial, index }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="testimonial-card p-7 flex flex-col"
    >
      <blockquote className="font-poppins text-ink text-[16px] leading-[1.65] flex-1 mb-8">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3">
        <span
          className="w-9 h-9 rounded-full bg-surface border border-line flex items-center justify-center text-ink-2 font-poppins font-medium text-[13px] flex-shrink-0"
          aria-hidden="true"
        >
          {initial}
        </span>
        <span>
          <span className="block font-poppins font-medium text-ink text-[14px]">{name}</span>
          <span className="block font-poppins text-ink-3 text-[13px]">{role}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32" aria-labelledby="testimonials-heading">
      <div className="flex md:flex-row flex-col md:items-end justify-between gap-6 mb-14">
        <SectionHeader
          id="testimonials-heading"
          label="Client stories"
          title="Trusted by teams"
          quiet="shipping faster."
          description="Real results from teams who stopped wrestling with their tools and started focusing on what matters."
        />
        <p className="font-poppins text-[14px] text-ink-2 md:text-right flex-shrink-0">
          <span className="text-ink font-semibold">5.0</span> average rating
          <br className="md:block hidden" />
          <span className="md:hidden"> </span>from 30+ client reviews
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.id} {...t} index={i} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
