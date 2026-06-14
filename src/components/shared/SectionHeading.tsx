type SectionHeadingProps = {
  kicker: string; // small all-caps label above the main title
  title: string;
  align?: "center" | "left";
};

/**
 * Reusable section header used across all landing page sections.
 * Shows a decorative kicker line and a large display-font title.
 */
export function SectionHeading({ kicker, title, align = "center" }: SectionHeadingProps) {
  const wrapperClass =
    align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl";

  return (
    <div className={wrapperClass}>
      <div
        className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-primary"
        style={{ fontFamily: "Exo 2" }}
      >
        <span className="h-px w-8 bg-primary/60" />
        {kicker}
        <span className="h-px w-8 bg-primary/60" />
      </div>
      <h2
        className="mt-4 text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1]"
        style={{ fontFamily: "Bebas Neue" }}
      >
        {title}
      </h2>
    </div>
  );
}
