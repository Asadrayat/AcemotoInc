import { Star, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { REVIEWS, REVIEW_STATS } from "@/constants/reviews";

export function Reviews() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Trusted By Drivers"
          title="Built On Heat. Backed By Results."
        />

        {/* Summary stat cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
          {REVIEW_STATS.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        {/* Review cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {REVIEWS.map((review) => (
            <div key={review.name} className="glass-card rounded-xl p-6 flex flex-col gap-4">
              {/* 5-star row */}
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed" style={{ fontFamily: "Exo 2" }}>
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="h-11 w-11 rounded-full grid place-items-center font-bold text-background"
                  style={{ background: review.color, fontFamily: "Bebas Neue" }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm">
                    {review.name}
                    <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: "Exo 2" }}
                  >
                    {review.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// A large number + label summary card (e.g. "120K+ Bottles Sold")
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card rounded-lg p-5">
      <div
        className="text-4xl text-primary text-glow-neon"
        style={{ fontFamily: "Bebas Neue" }}
      >
        {value}
      </div>
      <div
        className="text-[11px] mt-1 tracking-[0.25em] uppercase text-muted-foreground"
        style={{ fontFamily: "Exo 2" }}
      >
        {label}
      </div>
    </div>
  );
}
