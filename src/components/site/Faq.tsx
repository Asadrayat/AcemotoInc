import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "./Benefits";

const faqs = [
  { q: "Is ACE MOTO compatible with all vehicles?", a: "Yes. ACE MOTO is engineered as an all-makes, all-models coolant — compatible with conventional green antifreeze and modern extended-life coolants." },
  { q: "How often should the coolant be replaced?", a: "Under normal driving, every 2 years or 40,000 km. In extreme heat or track use, inspect every 12 months." },
  { q: "Can it handle extreme temperatures?", a: "ACE MOTO protects engines up to 126°C with a boiling point of 265°F — ideal for the Middle East climate and performance applications." },
  { q: "Is it pre-mixed?", a: "No — ACE MOTO ships as a 1:3 high-concentration formula. Mix with distilled water for optimal protection and performance." },
  { q: "Does it prevent rust and corrosion?", a: "Yes. Special anti-rust, anti-foam and corrosion inhibitors protect the radiator, water pump, and the entire cooling system." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading kicker="FAQ" title="Everything You Need To Know" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`w-full text-left rounded-xl glass-card transition ${isOpen ? "neon-border" : ""}`}
              >
                <div className="flex items-center justify-between px-5 py-5">
                  <span className="text-base sm:text-lg font-semibold" style={{ fontFamily: "Exo 2" }}>{f.q}</span>
                  <span className={`h-8 w-8 rounded-full grid place-items-center ${isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>
                <div
                  className="overflow-hidden transition-all duration-500 px-5"
                  style={{ maxHeight: isOpen ? "200px" : "0px", paddingBottom: isOpen ? "1.25rem" : "0" }}
                >
                  <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "Exo 2" }}>{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}