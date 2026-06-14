import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQS } from "@/constants/faqs";

export function Faq() {
  // Track which FAQ item is open by its index (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading kicker="FAQ" title="Everything You Need To Know" />

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className={`w-full text-left rounded-xl glass-card transition ${
                  isOpen ? "neon-border" : ""
                }`}
              >
                {/* Question row */}
                <div className="flex items-center justify-between px-5 py-5">
                  <span
                    className="text-base sm:text-lg font-semibold"
                    style={{ fontFamily: "Exo 2" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`h-8 w-8 rounded-full grid place-items-center ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </div>

                {/* Answer (animates open/close via max-height) */}
                <div
                  className="overflow-hidden transition-all duration-500 px-5"
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    paddingBottom: isOpen ? "1.25rem" : "0",
                  }}
                >
                  <p
                    className="text-muted-foreground leading-relaxed"
                    style={{ fontFamily: "Exo 2" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
