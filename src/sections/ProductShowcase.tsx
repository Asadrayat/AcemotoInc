import { useState } from "react";
import { ArrowRight, ShieldCheck, Flame, Droplet } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PRODUCTS } from "@/constants/products";
import type { Product } from "@/types";

export function ProductShowcase() {
  const [activeId, setActiveId] = useState<string>(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find((p) => p.id === activeId)!;

  return (
    <section id="products" className="relative py-24 lg:py-32 carbon-texture">
      <div className="absolute inset-0 bg-background/85 -z-0" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="The Lineup"
          title="Two Formulas. One Standard Of Excellence."
        />

        {/* Product selector tabs */}
        <div className="mt-10 flex justify-center gap-3">
          {PRODUCTS.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveId(product.id)}
              className={`px-6 py-3 rounded-full text-sm uppercase tracking-[0.2em] transition border ${
                activeId === product.id
                  ? product.id === "green"
                    ? "bg-primary text-primary-foreground border-primary neon-border"
                    : "bg-accent text-accent-foreground border-accent"
                  : "glass-card text-muted-foreground border-transparent hover:text-foreground"
              }`}
              style={{ fontFamily: "Exo 2" }}
            >
              {product.name}
            </button>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center">
          <ProductImage product={activeProduct} />
          <ProductDetails product={activeProduct} />
        </div>
      </div>
    </section>
  );
}

// Renders the bottle image with decorative glow rings
function ProductImage({ product }: { product: Product }) {
  return (
    <div className="relative h-[520px] flex items-center justify-center">
      <div
        className="absolute inset-0 rounded-full blur-3xl scale-75"
        style={{
          background: `radial-gradient(circle, ${product.accentColor} / 0.35, transparent 60%)`,
        }}
      />
      <div
        className="absolute inset-x-10 bottom-10 h-72 rounded-full opacity-30 blur-2xl"
        style={{ background: product.accentColor }}
      />
      {/* Decorative orbit rings */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div
          className="h-[420px] w-[420px] rounded-full border border-dashed opacity-30"
          style={{ borderColor: product.accentColor }}
        />
        <div
          className="absolute h-[320px] w-[320px] rounded-full border opacity-20"
          style={{ borderColor: product.accentColor }}
        />
      </div>
      <img
        key={product.id}
        src={product.imageUrl}
        alt={`ACE MOTO ${product.name}`}
        className="relative z-10 max-h-[520px] w-auto animate-float drop-shadow-2xl"
        loading="lazy"
      />
    </div>
  );
}

// Renders the product name, specs grid, feature pills, and CTAs
function ProductDetails({ product }: { product: Product }) {
  return (
    <div>
      <div
        className="text-xs tracking-[0.35em] uppercase"
        style={{ color: product.accentColor, fontFamily: "Exo 2" }}
      >
        {product.subtitle}
      </div>
      <h3
        className="mt-3 text-5xl lg:text-6xl uppercase"
        style={{ fontFamily: "Bebas Neue" }}
      >
        Premium Ace <br /> Radiator Coolant
      </h3>
      <p className="mt-4 text-muted-foreground max-w-md" style={{ fontFamily: "Exo 2" }}>
        Highly concentrated 1:3 formula. Mix with distilled water. Special
        anti-rust, anti-foam and corrosion inhibitors protect the radiator,
        water pump, and the rest of the cooling system.
      </p>

      {/* Specs grid */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {product.specs.map((spec) => (
          <div key={spec.label} className="p-4 rounded-lg glass-card">
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: "Exo 2" }}
            >
              {spec.label}
            </div>
            <div
              className="mt-1 text-2xl"
              style={{ fontFamily: "Bebas Neue", color: product.accentColor }}
            >
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* Feature pills */}
      <div
        className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground uppercase tracking-wider"
        style={{ fontFamily: "Exo 2" }}
      >
        <FeaturePill icon={ShieldCheck}>Anti Rust</FeaturePill>
        <FeaturePill icon={Droplet}>Anti Foam</FeaturePill>
        <FeaturePill icon={Flame}>Extended Life</FeaturePill>
      </div>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#cta"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-sm uppercase tracking-wider font-semibold"
          style={{
            fontFamily: "Exo 2",
            background: product.accentColor,
            color: "oklch(0.13 0.005 240)",
            boxShadow: `0 0 30px ${product.accentColor} / 0.4`,
          }}
        >
          Add to Cart <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#performance"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md glass-card text-sm uppercase tracking-wider font-semibold"
          style={{ fontFamily: "Exo 2" }}
        >
          Tech Specs
        </a>
      </div>
    </div>
  );
}

// Small icon + label pill used for feature highlights
function FeaturePill({
  icon: Icon,
  children,
}: {
  icon: typeof ShieldCheck;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
      <Icon className="h-3.5 w-3.5 text-primary" />
      {children}
    </span>
  );
}
