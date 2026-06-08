import { clients } from "../constants";

const marqueeItems = [...clients, ...clients, ...clients, ...clients];

function Clients() {
  return (
    <section className="py-12 border-y border-line overflow-hidden relative bg-surface" aria-label="Trusted by">
      <p className="font-poppins font-semibold text-[11px] text-ink-3 tracking-[0.2em] uppercase text-center mb-7">
        Trusted by forward-thinking teams worldwide
      </p>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" aria-hidden="true" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" aria-hidden="true" />

        {/* Scrolling strip */}
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {marqueeItems.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-12"
            >
              <img
                src={client.logo}
                alt="Partner logo"
                className="client-logo h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
