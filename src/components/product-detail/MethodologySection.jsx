import SectionHeading from "./SectionHeading";

const VERDICT_COLORS = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  blue:    "bg-blue-50 text-blue-700 border-blue-200",
  amber:   "bg-amber-50 text-amber-700 border-amber-200",
  red:     "bg-red-50 text-red-700 border-red-200",
};

function FactorBar({ max, tiers }) {
  return (
    <div className="flex flex-col gap-1.5 mt-2">
      {tiers.map((t) => (
        <div key={t.condition} className="flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
              style={{ width: `${(t.points / max) * 100}%` }}
            />
          </div>
          <span className="font-poppins text-[11px] text-ink-3 w-7 text-right flex-shrink-0">
            {t.points}pt
          </span>
          <span className="font-poppins text-[11px] text-ink-2 w-44 flex-shrink-0">
            {t.condition}
          </span>
        </div>
      ))}
    </div>
  );
}

function RiskScoreCard({ riskScore }) {
  return (
    <div className="card rounded-2xl p-6 flex flex-col gap-5">
      <div>
        <h3 className="font-poppins font-bold text-ink text-[16px]">{riskScore.title}</h3>
        <p className="font-poppins text-[13px] text-ink-2 mt-1 leading-relaxed">{riskScore.summary}</p>
      </div>

      <div className="flex flex-col gap-4">
        {riskScore.factors.map((f) => (
          <div key={f.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="font-poppins font-semibold text-ink text-[13px]">{f.name}</span>
              <span className="font-poppins text-[11px] font-semibold text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">
                max {f.max} pts
              </span>
            </div>
            {f.description && (
              <p className="font-poppins text-[11px] text-ink-3 mb-1">{f.description}</p>
            )}
            <FactorBar max={f.max} tiers={f.tiers} />
          </div>
        ))}
      </div>

      <div>
        <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-2">Score → Verdict</p>
        <div className="grid grid-cols-2 gap-2">
          {riskScore.verdicts.map((v) => (
            <div key={v.label} className={`rounded-xl px-3 py-2 border ${VERDICT_COLORS[v.color] ?? ""}`}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-poppins font-bold text-[13px]">{v.label}</span>
                <span className="font-poppins text-[11px] font-semibold opacity-70">{v.range}</span>
              </div>
              <p className="font-poppins text-[11px] opacity-80 leading-snug">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResolutionTimeCard({ resolutionTime }) {
  return (
    <div className="card rounded-2xl p-6 flex flex-col gap-5">
      <div>
        <h3 className="font-poppins font-bold text-ink text-[16px]">{resolutionTime.title}</h3>
        <p className="font-poppins text-[13px] text-ink-2 mt-1 leading-relaxed">{resolutionTime.summary}</p>
      </div>

      <div className="flex flex-col gap-4">
        {resolutionTime.howMeasured.map((m) => (
          <div key={m.metric} className="border-l-2 border-violet-200 pl-4">
            <p className="font-poppins font-semibold text-ink text-[13px]">{m.metric}</p>
            <p className="font-poppins text-[12px] text-brand mt-0.5 font-medium">{m.formula}</p>
            <p className="font-poppins text-[11px] text-ink-3 mt-0.5 leading-relaxed">{m.note}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="font-poppins text-[11px] uppercase tracking-widest text-ink-3 mb-2">SLA Thresholds</p>
        <div className="grid grid-cols-2 gap-2">
          {resolutionTime.slaThresholds.map((s) => (
            <div
              key={s.priority}
              className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 border border-slate-200"
            >
              <span className="font-poppins text-[13px] font-semibold text-ink">{s.priority}</span>
              <span className="font-poppins text-[12px] text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                {s.threshold}
              </span>
            </div>
          ))}
        </div>
        <p className="font-poppins text-[11px] text-ink-3 mt-3 leading-relaxed">
          SLA bar turns{" "}
          <span className="text-emerald-600 font-semibold">green</span> at ≥ 90% compliance,{" "}
          <span className="text-amber-600 font-semibold">amber</span> at ≥ 70%, and{" "}
          <span className="text-red-600 font-semibold">red</span> below 70%.
        </p>
      </div>
    </div>
  );
}

export default function MethodologySection({ methodology }) {
  if (!methodology) return null;
  const { riskScore, resolutionTime } = methodology;

  return (
    <section aria-labelledby="methodology-heading" className="mt-12 flex flex-col gap-5">
      <SectionHeading id="methodology-heading">How Metrics Are Calculated</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-6">
        {riskScore && <RiskScoreCard riskScore={riskScore} />}
        {resolutionTime && <ResolutionTimeCard resolutionTime={resolutionTime} />}
      </div>
    </section>
  );
}
