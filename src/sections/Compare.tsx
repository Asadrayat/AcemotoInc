import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { COMPARISON_ROWS } from "@/constants/comparison";

export function Compare() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          kicker="Why Choose Ace Moto"
          title="The Standard vs. The Status Quo"
        />

        <div className="mt-14 rounded-2xl glass-card overflow-hidden">
          {/* Table header */}
          <div
            className="grid grid-cols-[1.5fr_1fr_1fr] text-xs sm:text-sm uppercase tracking-[0.2em]"
            style={{ fontFamily: "Exo 2" }}
          >
            <div className="px-5 py-5 text-muted-foreground">Feature</div>
            <div className="px-5 py-5 text-center bg-primary/10 border-x border-primary/20 text-primary font-semibold">
              ACE MOTO
            </div>
            <div className="px-5 py-5 text-center text-muted-foreground">Ordinary</div>
          </div>

          {/* Table rows */}
          {COMPARISON_ROWS.map((row, index) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1.5fr_1fr_1fr] items-center text-sm border-t border-border/60 ${
                index % 2 === 0 ? "bg-card/40" : ""
              }`}
              style={{ fontFamily: "Exo 2" }}
            >
              <div className="px-5 py-4 text-foreground">{row.feature}</div>
              <div className="px-5 py-4 text-center bg-primary/[0.04] border-x border-primary/10">
                {row.ace ? (
                  <Check className="h-5 w-5 text-primary inline-block drop-shadow-[0_0_8px_oklch(0.86_0.24_145/0.8)]" />
                ) : (
                  <X className="h-5 w-5 text-muted-foreground inline-block" />
                )}
              </div>
              <div className="px-5 py-4 text-center">
                {row.ordinary ? (
                  <Check className="h-5 w-5 text-muted-foreground inline-block" />
                ) : (
                  <X className="h-5 w-5 text-destructive/80 inline-block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
