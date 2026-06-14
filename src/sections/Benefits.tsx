import { BENEFITS } from "@/constants/benefits";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Benefits() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Engineered Advantage"
          title="Built For The Engine That Refuses To Stop"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative p-6 rounded-xl glass-card hover:-translate-y-1 transition duration-500 overflow-hidden"
            >
              {/* Neon top highlight that appears on hover */}
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="h-12 w-12 rounded-lg grid place-items-center bg-primary/10 border border-primary/30 text-primary">
                <benefit.icon className="h-5 w-5" />
              </div>

              <h3
                className="mt-5 text-2xl uppercase"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {benefit.title}
              </h3>
              <p
                className="mt-2 text-sm text-muted-foreground leading-relaxed"
                style={{ fontFamily: "Exo 2" }}
              >
                {benefit.description}
              </p>

              {/* Soft glow effect that appears on hover */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
