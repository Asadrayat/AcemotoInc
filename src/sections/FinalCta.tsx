import { ArrowRight, Phone, Mail } from "lucide-react";
import greenBottleJson from "@/assets/coolant-green-front.asset.json";
import pinkBottleJson from "@/assets/coolant-pink-front.asset.json";

export function FinalCta() {
  return (
    <section id="cta" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.04_145/0.4),transparent_60%)]" />

      {/* Decorative floating bottles */}
      <div className="absolute -left-0 bottom-0 w-72 lg:w-96 opacity-60 pointer-events-none">
        <div className="absolute inset-0 blur-3xl bg-primary/30 rounded-full" />
        <img src={greenBottleJson.url} alt="" className="relative animate-float" />
      </div>
      <div className="absolute -right-0 bottom-0 w-72 lg:w-96 opacity-60 pointer-events-none">
        <div className="absolute inset-0 blur-3xl bg-accent/30 rounded-full" />
        <img src={pinkBottleJson.url} alt="" className="relative animate-float-rev" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-4xl text-center px-5 lg:px-8">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs tracking-[0.3em] uppercase text-primary"
          style={{ fontFamily: "Exo 2" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Limited UAE Stock
        </div>

        <h2
          className="mt-6 text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95]"
          style={{ fontFamily: "Bebas Neue" }}
        >
          Protect Your Engine With <br />
          <span className="text-primary text-glow-neon">Premium Cooling</span> Technology
        </h2>

        <p
          className="mt-6 text-muted-foreground max-w-xl mx-auto"
          style={{ fontFamily: "Exo 2" }}
        >
          Join thousands of drivers, fleets, and tuners who trust ACE MOTO to
          keep their engines alive in the harshest conditions.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded-md neon-border hover:-translate-y-0.5 transition"
            style={{ fontFamily: "Exo 2" }}
          >
            Buy Now{" "}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-4 glass-card text-foreground font-semibold uppercase tracking-wider text-sm rounded-md"
            style={{ fontFamily: "Exo 2" }}
          >
            <Phone className="h-4 w-4" /> Dealer Inquiry
          </a>
          <a
            href="mailto:support@acemoto.ae"
            className="inline-flex items-center gap-2 px-7 py-4 glass-card text-foreground font-semibold uppercase tracking-wider text-sm rounded-md"
            style={{ fontFamily: "Exo 2" }}
          >
            <Mail className="h-4 w-4" /> Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
