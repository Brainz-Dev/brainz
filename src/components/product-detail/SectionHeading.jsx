export default function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="font-poppins font-semibold text-ink text-[22px] tracking-[-0.02em]">
      {children}
    </h2>
  );
}
