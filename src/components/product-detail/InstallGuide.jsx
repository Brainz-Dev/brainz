import SectionHeading from "./SectionHeading";

function StepCard({ step, title, body }) {
  return (
    <div className="card rounded-2xl p-6 flex gap-5">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
        <span className="font-poppins font-bold text-white text-[13px]" aria-hidden="true">
          {step}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-poppins font-semibold text-ink text-[15px]">{title}</h4>
        <p className="font-poppins text-[13px] text-ink-2 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

export default function InstallGuide({ guide }) {
  if (!guide?.length) return null;

  return (
    <section aria-labelledby="install-heading" className="mt-12 flex flex-col gap-5">
      <SectionHeading id="install-heading">Installation Guide</SectionHeading>
      <ol className="grid sm:grid-cols-2 gap-4 list-none">
        {guide.map(({ step, title, body }) => (
          <li key={step}>
            <StepCard step={step} title={title} body={body} />
          </li>
        ))}
      </ol>
    </section>
  );
}
