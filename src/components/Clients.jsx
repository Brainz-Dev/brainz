import { clients } from "../constants";

// Duplicate the list enough for a seamless infinite marquee
const marqueeItems = [...clients, ...clients, ...clients, ...clients];

function Clients() {
  return (
    <section className="py-14 border-y border-white/[0.05] overflow-hidden relative">
      <p className="font-poppins font-semibold text-[11px] text-slate-500 tracking-[0.2em] uppercase text-center mb-8">
        Trusted by forward-thinking teams worldwide
      </p>

      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Scrolling strip */}
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((client, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-14"
            >
              <img
                src={client.logo}
                alt="partner logo"
                className="client-logo h-9 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
