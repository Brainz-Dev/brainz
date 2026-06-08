import { motion } from "framer-motion";
import FeedBackCard from "./FeedBackCard";

const ease = [0.22, 1, 0.36, 1];

const infoItems = [
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Fast Response",
    desc: "We reply to every message within 24 hours — usually much faster.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Confidential",
    desc: "Every conversation is treated with full discretion. NDA available on request.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Tailored Solutions",
    desc: "No cookie-cutter answers. We diagnose your exact problem before proposing anything.",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-28" aria-labelledby="contact-heading">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease }}
        className="text-center mb-14"
      >
        <p className="section-label mb-4">Get In Touch</p>
        <h2 id="contact-heading" className="font-poppins font-black sm:text-[52px] text-[36px] text-ink leading-[1.1] mb-4">
          Let&apos;s build something{" "}
          <span className="text-gradient">great together.</span>
        </h2>
        <p className="font-poppins text-ink-2 text-[17px] max-w-[460px] mx-auto leading-relaxed">
          Tell us about your project. We respond to every inquiry within
          24 hours and move fast.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex md:flex-row flex-col gap-12 items-start">
        {/* Left — info cards */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="flex flex-col gap-5 md:w-[320px] w-full flex-shrink-0"
        >
          {infoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12 + i * 0.08, ease }}
              className="flex gap-4 bg-white rounded-xl border border-line p-5 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl icon-box flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-poppins font-semibold text-ink text-[15px] mb-1">
                  {item.title}
                </p>
                <p className="font-poppins text-ink-2 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.42 }}
            className="bg-emerald-50 rounded-xl px-5 py-4 flex items-center gap-3 border border-emerald-200"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse flex-shrink-0" aria-hidden="true" />
            <p className="font-poppins text-[13px] text-emerald-800">
              Currently accepting new projects for{" "}
              <span className="font-semibold">Q3 2025</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.12, ease }}
          className="flex-1 w-full"
        >
          <FeedBackCard />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
