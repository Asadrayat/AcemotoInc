import { ArrowRight, ShieldCheck, Flame, Droplet, Wrench, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-atmosphere.jpg";
import splashGreen from "@/assets/splash-green.png";
import splashPink from "@/assets/splash-pink.png";
import greenBottleJson from "@/assets/coolant-green-front.asset.json";
import pinkBottleJson from "@/assets/coolant-pink-front.asset.json";

// Small trust badges shown below the CTA buttons
const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Anti Rust" },
  { icon: Droplet, label: "Anti Foam" },
  { icon: Flame, label: "126°C Protection" },
  { icon: Wrench, label: "Extended Engine Life" },
  { icon: MapPin, label: "UAE Technology" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 lg:pt-32 pb-24 overflow-hidden">
      {/* Background image with gradient fade */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover opacity-50"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        {/* Animated racing light streaks */}
        <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-streak" />
        <div
          className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 animate-streak"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column: headline, description, CTAs */}
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs tracking-[0.25em] uppercase text-primary"
            style={{ fontFamily: "Exo 2" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Premium Cooling Technology
          </div>

          <h1
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Engineered to <br />
            <span className="text-glow-neon text-primary">Outlast</span> the{" "}
            <span className="text-glow-magenta text-accent">Heat</span>
          </h1>

          <p
            className="mt-6 max-w-lg text-muted-foreground text-base leading-relaxed"
            style={{ fontFamily: "Exo 2" }}
          >
            ACE MOTO Premium Radiator Coolant — 1:3 high-concentration formula
            with anti-rust and anti-foam additives. Protects every engine, every
            make, every model, up to{" "}
            <span className="text-foreground font-semibold">126°C</span>.
          </p>

          {/* Spec chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <SpecChip label="Protects" value="126°C" />
            <SpecChip label="Boiling" value="265°F" />
            <SpecChip label="Concentration" value="1:3" />
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm rounded-md neon-border transition-transform hover:-translate-y-0.5"
              style={{ fontFamily: "Exo 2" }}
            >
              Buy Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-7 py-4 glass-card text-foreground font-semibold tracking-wider uppercase text-sm rounded-md hover:border-primary/40 transition"
              style={{ fontFamily: "Exo 2" }}
            >
              Explore Product
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider"
                style={{ fontFamily: "Exo 2" }}
              >
                <badge.icon className="h-3.5 w-3.5 text-primary" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right column: floating product bottles */}
        <div className="relative h-[520px] lg:h-[640px]">
          {/* Radial color glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.86_0.24_145/0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,oklch(0.65_0.26_350/0.18),transparent_55%)]" />

          {/* Splash overlays (decorative) */}
          <img
            src={splashGreen}
            alt=""
            aria-hidden="true"
            className="absolute -left-10 top-10 w-[420px] opacity-60 mix-blend-screen pointer-events-none animate-pulse-glow"
          />
          <img
            src={splashPink}
            alt=""
            aria-hidden="true"
            className="absolute -right-12 bottom-4 w-[440px] opacity-55 mix-blend-screen pointer-events-none animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Green bottle */}
          <div className="absolute left-2 sm:left-6 top-4 lg:top-10 w-[58%] animate-float">
            <div className="absolute inset-0 -z-10 blur-3xl bg-primary/30 rounded-full scale-90" />
            <img
              src={greenBottleJson.url}
              alt="ACE MOTO Premium Green Radiator Coolant"
              className="w-full h-auto drop-shadow-[0_30px_60px_oklch(0.86_0.24_145/0.35)]"
              width={800}
              height={1200}
            />
          </div>

          {/* Pink bottle */}
          <div
            className="absolute right-0 sm:right-4 bottom-0 w-[55%] animate-float-rev"
            style={{ animationDelay: "1s" }}
          >
            <div className="absolute inset-0 -z-10 blur-3xl bg-accent/30 rounded-full scale-90" />
            <img
              src={pinkBottleJson.url}
              alt="ACE MOTO Premium Pink Radiator Coolant"
              className="w-full h-auto drop-shadow-[0_30px_60px_oklch(0.65_0.26_350/0.35)]"
              width={800}
              height={1200}
            />
          </div>

          {/* Floating spec cards (hidden on small screens) */}
          <div className="hidden sm:flex absolute right-2 top-6 glass-card rounded-lg px-4 py-3 flex-col gap-1 text-right">
            <div
              className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
              style={{ fontFamily: "Exo 2" }}
            >
              Boiling Point
            </div>
            <div
              className="text-2xl text-primary text-glow-neon"
              style={{ fontFamily: "Bebas Neue" }}
            >
              265°F
            </div>
          </div>
          <div className="hidden sm:flex absolute left-2 bottom-6 glass-card rounded-lg px-4 py-3 flex-col gap-1">
            <div
              className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
              style={{ fontFamily: "Exo 2" }}
            >
              Concentration
            </div>
            <div
              className="text-2xl text-accent text-glow-magenta"
              style={{ fontFamily: "Bebas Neue" }}
            >
              1 : 3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Small display chip showing a spec label/value pair (e.g. "Protects | 126°C")
function SpecChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 py-2 rounded-md glass-card" style={{ fontFamily: "Exo 2" }}>
      <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mr-2">
        {label}
      </span>
      <span className="text-sm font-bold text-foreground">{value}</span>
    </div>
  );
}
