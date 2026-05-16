function Button({ style }) {
  return (
    <a
      href="#contact"
      className={`font-poppins font-semibold text-[15px] text-white bg-brand-gradient px-7 py-3.5 rounded-xl hover:opacity-90 hover:shadow-glow-sm transition-all duration-200 inline-block ${style || ""}`}
    >
      Get Started →
    </a>
  );
}

export default Button;
