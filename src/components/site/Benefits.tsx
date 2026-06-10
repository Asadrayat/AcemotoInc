import { ThermometerSun, ShieldCheck, Beaker, Clock, Flame, Car } from "lucide-react";

const items = [
  { icon: ThermometerSun, title: "Prevents Overheating", desc: "Maintains optimal engine temperature even under extreme load." },
  { icon: ShieldCheck, title: "Protects Radiator", desc: "Anti-foam additives shield aluminum and copper components." },
  { icon: Beaker, title: "Rust & Corrosion Protection", desc: "Advanced corrosion inhibitors protect water pump and channels." },
  { icon: Clock, title: "Long-Life Formula", desc: "Extended-life chemistry — fewer changes, more performance." },
  { icon: Flame, title: "Stable in Extreme Heat", desc: "Boiling point of 265°F. Thermal protection up to 126°C." },
  { icon: Car, title: "Safe for All Vehicles", desc: "Compatible with conventional green and extended-life coolants." },
];

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="Engineered Advantage" title="Built For The Engine That Refuses To Stop" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div
              key={b.title}
              className="group relative p-6 rounded-xl glass-card hover:-translate-y-1 transition duration-500 overflow-hidden"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="h-12 w-12 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl uppercase" style={{ fontFamily: "Bebas Neue" }}>{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: "Exo 2" }}>
                {b.desc}
              </p>
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ kicker, title, align = "center" }: { kicker: string; title: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-primary" style={{ fontFamily: "Exo 2" }}>
        <span className="h-px w-8 bg-primary/60" /> {kicker} <span className="h-px w-8 bg-primary/60" />
      </div>
      <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1]" style={{ fontFamily: "Bebas Neue" }}>
        {title}
      </h2>
    </div>
  );
}