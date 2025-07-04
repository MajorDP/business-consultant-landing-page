import { sectors } from "../../_data/sectors";
import { Section } from "lucide-react";

function Sectors() {
  return (
    <section
      id="sectors"
      aria-label="Sectors and industries served"
      className="bg-bg-secondary text-text-secondary py-32 px-4 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
        <p className="text-accent font-semibold tracking-wide uppercase">
          Industries Served
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">Sectors I Work In</h2>
        <p className="text-text-muted md:text-lg lg:text-xl">
          I collaborate with ambitious companies across diverse sectors-ranging
          from global brands to disruptive startups - to help them scale,
          innovate, and win.
        </p>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-center justify-center text-center">
        {sectors.map((sector) => (
          <li key={sector.name} className="flex flex-col items-center gap-2">
            <img
              src={sector.logo}
              alt={`${sector.name} logo`}
              className="w-52 h-36"
            />

            <p className="text-text-muted">{sector.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sectors;
