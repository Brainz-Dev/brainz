import { motion } from "framer-motion";
import FeedBackCard from "./FeedBackCard";

const easeOut = [0.22, 1, 0.36, 1];

const infoItems = [
  {
    icon: "⚡",
    title: "Fast Response",
    desc: "We reply to every message within 24 hours — usually much faster.",
  },
  {
    icon: "🔒",
    title: "Confidential",
    desc: "Every conversation is treated with full discretion and NDA if needed.",
  },
  {
    icon: "🎯",
    title: "Tailored Solutions",
    desc: "No cookie-cutter answers. We diagnose your exact problem before proposing anything.",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.65, ease: easeOut }}
        className="text-center mb-14"
      >
        <p className="font-poppins font-semibold text-[11px] tracking-[0.2em] uppercase text-violet-400 mb-4">
          Get In Touch
        </p>
        <h2 className="font-poppins font-black sm:text-[56px] text-[38px] text-white leading-[1.1] mb-5">
          Let&apos;s build something{" "}
          <span className="text-gradient">great together.</span>
        </h2>
        <p className="font-poppins text-slate-400 text-[17px] max-w-[480px] mx-auto leading-relaxed">
          Tell us about your project. We respond to every inquiry within
          24 hours and move fast.
        </p>
      </motion.div>

      {/* Two-column layout: info + form */}
      <div className="flex md:flex-row flex-col gap-12 items-start">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
          className="flex flex-col gap-8 md:w-[340px] w-full flex-shrink-0"
        >
          {infoItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: easeOut }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl icon-box flex items-center justify-center text-[18px] flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-poppins font-semibold text-white text-[15px] mb-1">
                  {item.title}
                </p>
                <p className="font-poppins text-slate-400 text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="glass-card rounded-xl px-5 py-4 flex items-center gap-3 border border-emerald-500/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <p className="font-poppins text-[13px] text-slate-300">
              Currently accepting new projects for{" "}
              <span className="text-white font-semibold">Q3 2025</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
          className="flex-1 w-full"
        >
          <FeedBackCard />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
