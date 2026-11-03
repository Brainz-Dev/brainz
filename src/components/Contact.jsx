import { motion } from "framer-motion";
import FeedBackCard from "./FeedBackCard";
import SectionHeader from "./SectionHeader";

const ease = [0.22, 1, 0.36, 1];

const infoItems = [
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Fast response",
    desc: "We reply to every message within 24 hours — usually much faster.",
  },
  {
    icon: "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
    title: "Confidential",
    desc: "Every conversation is treated with full discretion. NDA available on request.",
  },
  {
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    title: "Tailored solutions",
    desc: "No cookie-cutter answers. We diagnose your exact problem before proposing anything.",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] grid-cols-1 gap-14 items-start">
        {/* Left — intro + reassurance */}
        <div>
          <SectionHeader
            id="contact-heading"
            label="Get in touch"
            title="Let's build something"
            quiet="great together."
            description="Tell us about your project. We respond to every inquiry within 24 hours and move fast."
            className="mb-10"
          />

          <ul className="flex flex-col divide-y divide-line border-y border-line">
            {infoItems.map((item) => (
              <li key={item.title} className="flex gap-4 py-5">
                <svg
                  className="w-5 h-5 text-ink flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
                <div>
                  <p className="font-poppins font-medium text-ink text-[15px] mb-0.5">
                    {item.title}
                  </p>
                  <p className="font-poppins text-ink-2 text-[15px] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="w-full"
        >
          <FeedBackCard />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
