import SectionHeading from "./SectionHeading";

export default function VideoSection({ videoId, title }) {
  if (!videoId) return null;

  return (
    <section
      aria-labelledby="video-heading"
      className="mt-12 flex flex-col gap-5"
    >
      <SectionHeading id="video-heading">
        {title ?? "Watch It in Action"}
      </SectionHeading>
      <div className="card rounded-2xl overflow-hidden">
        {/* 16:9 responsive wrapper */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title ?? "Product demo video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
