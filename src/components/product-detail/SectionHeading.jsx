export default function SectionHeading({ id, children }) {
  return (
    <h2 id={id} className="font-poppins font-semibold text-ink text-[18px] flex items-center gap-2">
      <span
        className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 inline-block flex-shrink-0"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}
