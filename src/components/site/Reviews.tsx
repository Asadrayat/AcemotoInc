import { Star, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./Benefits";

const reviews = [
  {
    name: "Khalid Al-Mansouri",
    role: "Track Day Enthusiast · Dubai",
    text: "Ran 4 sessions at Yas Marina in 44°C heat. Temps never broke 95°C. Nothing else holds up like ACE MOTO.",
    initials: "KM",
    color: "oklch(0.86 0.24 145)",
  },
  {
    name: "Priya Sharma",
    role: "Fleet Manager · Sharjah",
    text: "Switched 38 vehicles to ACE MOTO last summer. Zero overheating incidents, longer service intervals. The math is obvious.",
    initials: "PS",
    color: "oklch(0.65 0.26 350)",
  },
  {
    name: "Hassan Reza",
    role: "Performance Tuner · Abu Dhabi",
    text: "Pink edition in my 700hp build — radiator stays clean, no foam, no rust after 18 months. The real deal.",
    initials: "HR",
    color: "oklch(0.82 0.16 85)",
  },
];

export function Reviews() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading kicker="Trusted By Drivers" title="Built On Heat. Backed By Results." />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
          <Metric value="120K+" label="Bottles Sold" />
          <Metric value="4.9 / 5" label="Customer Rating" />
          <Metric value="98%" label="Satisfaction" />
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="glass-card rounded-xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed" style={{ fontFamily: "Exo 2" }}>
                “{r.text}”
              </p>
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="h-11 w-11 rounded-full grid place-items-center font-bold text-background"
                  style={{ background: r.color, fontFamily: "Bebas Neue" }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    {r.name}
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground" style={{ fontFamily: "Exo 2" }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card rounded-lg p-5">
      <div className="text-4xl text-primary text-glow-neon" style={{ fontFamily: "Bebas Neue" }}>{value}</div>
      <div className="text-[11px] mt-1 tracking-[0.25em] uppercase text-muted-foreground" style={{ fontFamily: "Exo 2" }}>{label}</div>
    </div>
  );
}