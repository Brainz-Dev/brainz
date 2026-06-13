import { useState, useEffect, useCallback } from "react";
import SectionHeading from "./SectionHeading";

const GRADIENTS = [
  "from-violet-100 to-fuchsia-100",
  "from-indigo-100 to-violet-100",
  "from-fuchsia-100 to-pink-100",
  "from-cyan-100 to-indigo-100",
  "from-emerald-100 to-cyan-100",
  "from-amber-100 to-orange-100",
  "from-sky-100 to-blue-100",
  "from-rose-100 to-pink-100",
];

function Lightbox({ screenshots, index, onClose, onPrev, onNext }) {
  const s = screenshots[index];

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft")  onPrev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNext, onPrev]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={s.title}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150"
        onClick={onClose}
        aria-label="Close"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev button */}
      {screenshots.length > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous screenshot"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-5xl w-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={s.image}
          alt={s.title}
          className="w-full rounded-2xl shadow-2xl object-contain"
          style={{ maxHeight: "80vh" }}
        />
        <div className="text-center">
          <p className="font-poppins font-semibold text-white text-[15px]">{s.title}</p>
          {s.description && (
            <p className="font-poppins text-[13px] text-white/60 mt-1 max-w-xl">{s.description}</p>
          )}
          {screenshots.length > 1 && (
            <p className="font-poppins text-[12px] text-white/40 mt-2">
              {index + 1} / {screenshots.length}
            </p>
          )}
        </div>
      </div>

      {/* Next button */}
      {screenshots.length > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-150"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next screenshot"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function ScreenshotsSection({ screenshots }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(() => setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length), [screenshots.length]);
  const showNext = useCallback(() => setLightboxIndex((i) => (i + 1) % screenshots.length), [screenshots.length]);

  if (!screenshots?.length) return null;

  const colClass = screenshots.length >= 5
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 sm:grid-cols-2";

  return (
    <>
      <section aria-labelledby="screenshots-heading" className="mt-12 flex flex-col gap-5">
        <SectionHeading id="screenshots-heading">App Views</SectionHeading>
        <div className={`grid ${colClass} gap-5`}>
          {screenshots.map((s, i) => (
            <div
              key={s.title ?? i}
              className="card rounded-2xl overflow-hidden group"
            >
              {s.image ? (
                <button
                  className="w-full text-left relative focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View ${s.title} full size`}
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full object-cover border-b border-slate-100 transition-opacity duration-200 group-hover:opacity-90"
                    style={{ maxHeight: 200 }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-b border-slate-100" style={{ background: "rgba(0,0,0,0.35)" }}>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </button>
              ) : (
                <div className={`h-40 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} flex items-center justify-center border-b border-slate-100`}>
                  <span className="font-poppins font-bold text-violet-200 text-7xl select-none" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
              )}
              <div className="p-5 flex flex-col gap-1.5">
                <h3 className="font-poppins font-semibold text-ink text-[14px]">{s.title}</h3>
                {s.description && (
                  <p className="font-poppins text-[12px] text-ink-2 leading-relaxed">{s.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          screenshots={screenshots.filter((s) => s.image)}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  );
}
