import { useState } from "react";
import { SectionHeading } from "./Benefits";
import { ArrowRight, ShieldCheck, Flame, Droplet } from "lucide-react";
import greenBottle from "@/assets/coolant-green-front.asset.json";
import pinkBottle from "@/assets/coolant-pink-front.asset.json";

const products = [
  {
    id: "green",
    name: "Green Edition",
    sub: "Conventional · IAT Formula",
    color: "primary",
    image: greenBottle.url,
    accent: "oklch(0.86 0.24 145)",
    specs: [
      { k: "Protection", v: "126°C" },
      { k: "Boiling Point", v: "265°F" },
      { k: "Concentration", v: "1:3" },
      { k: "Compatibility", v: "All Models" },
    ],
  },
  {
    id: "pink",
    name: "Pink Edition",
    sub: "Extended Life · OAT Formula",
    color: "accent",
    image: pinkBottle.url,
    accent: "oklch(0.65 0.26 350)",
    specs: [
      { k: "Protection", v: "126°C" },
      { k: "Boiling Point", v: "265°F" },
      { k: "Concentration", v: "1:3" },
      { k: "Compatibility", v: "All Models" },
    ],
  },
];

export function ProductShowcase() {
  const [active, setActive] = useState<"green" | "pink">("green");
  const p = products.find((x) => x.id === active)!;

  return (
    <section id="products" className="relative py-24 lg:py-32 carbon-texture">
      <div className="absolute inset-0 bg-background/85 -z-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="The Lineup" title="Two Formulas. One Standard Of Excellence." />

        {/* Tabs */}
        <div className="mt-10 flex justify-center gap-3">
          {products.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setActive(prod.id as "green" | "pink")}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] transition border ${
                active === prod.id
                  ? prod.id === "green"
                    ? "bg-primary text-primary-foreground border-primary neon-border"
                    : "bg-accent text-accent-foreground border-accent"
                  : "glass-card text-muted-foreground border-transparent hover:text-foreground"
              }`}
              style={{ fontFamily: "Exo 2" }}
            >
              {prod.name}
            </button>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[520px] flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full blur-3xl scale-75"
              style={{ background: `radial-gradient(circle, ${p.accent} / 0.35, transparent 60%)` }}
            />
            <div
              className="absolute inset-x-10 bottom-10 h-72 rounded-full opacity-30 blur-2xl"
              style={{ background: p.accent }}
            />
            {/* Orbit ring */}
            <div className="absolute inset-0 grid place-items-center pointer-events-none">
              <div
                className="h-[420px] w-[420px] rounded-full border border-dashed opacity-30"
                style={{ borderColor: p.accent }}
              />
              <div
                className="absolute h-[320px] w-[320px] rounded-full border opacity-20"
                style={{ borderColor: p.accent }}
              />
            </div>
            <img
              key={p.id}
              src={p.image}
              alt={`ACE MOTO ${p.name}`}
              className="relative z-10 max-h-[520px] w-auto animate-float drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          {/* Details */}
          <div>
            <div
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: p.accent, fontFamily: "Exo 2" }}
            >
              {p.sub}
            </div>
            <h3 className="mt-3 text-5xl lg:text-6xl uppercase" style={{ fontFamily: "Bebas Neue" }}>
              Premium Ace <br /> Radiator Coolant
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md" style={{ fontFamily: "Exo 2" }}>
              Highly concentrated 1:3 formula. Mix with distilled water. Special
              anti-rust, anti-foam and corrosion inhibitors protect the radiator,
              water pump, and the rest of the cooling system.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {p.specs.map((s) => (
                <div key={s.k} className="p-4 rounded-lg glass-card">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "Exo 2" }}>{s.k}</div>
                  <div className="mt-1 text-2xl" style={{ fontFamily: "Bebas Neue", color: p.accent }}>{s.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground uppercase tracking-wider" style={{ fontFamily: "Exo 2" }}>
              <Pill icon={ShieldCheck}>Anti Rust</Pill>
              <Pill icon={Droplet}>Anti Foam</Pill>
              <Pill icon={Flame}>Extended Life</Pill>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm uppercase tracking-wider font-semibold"
                style={{
                  fontFamily: "Exo 2",
                  background: p.accent,
                  color: "oklch(0.13 0.005 240)",
                  boxShadow: `0 0 30px ${p.accent} / 0.4`,
                }}
              >
                Add to Cart <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#performance" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md glass-card text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: "Exo 2" }}>
                Tech Specs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, children }: { icon: typeof ShieldCheck; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
      <Icon className="h-3.5 w-3.5 text-primary" /> {children}
    </span>
  );
}