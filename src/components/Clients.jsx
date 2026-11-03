import { clients } from "../constants";

function Clients() {
  return (
    <section className="py-14 border-y border-line" aria-labelledby="platforms-heading">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <p id="platforms-heading" className="font-poppins text-[14px] text-ink-3 text-center mb-8">
          We build on the platforms your team already runs on
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {clients.map((client) => (
            <li key={client.id}>
              <img src={client.logo} alt={client.name} className="client-logo h-7 object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clients;
