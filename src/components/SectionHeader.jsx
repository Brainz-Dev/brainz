import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

// Shared section intro: quiet label, two-tone headline, muted description.
function SectionHeader({ id, label, title, quiet, description, align = "left", className = "" }) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease }}
      className={`${centered ? "text-center mx-auto" : ""} max-w-[680px] ${className}`}
    >
      {label && <p className="section-label mb-3">{label}</p>}
      <h2 id={id} className="section-heading font-poppins sm:text-[44px] text-[32px] mb-4">
        {title}
        {quiet && <> <span className="text-quiet">{quiet}</span></>}
      </h2>
      {description && (
        <p className={`font-poppins text-ink-2 text-[17px] leading-[1.6] ${centered ? "mx-auto" : ""} max-w-[560px]`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
