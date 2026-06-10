import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { ProductShowcase } from "./ProductShowcase";
import { Compare } from "./Compare";
import { Performance } from "./Performance";
import { Reviews } from "./Reviews";
import { Faq } from "./Faq";
import { FinalCta } from "./FinalCta";
import { SiteFooter } from "./SiteFooter";

export function AceSite() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <Compare />
        <Performance />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}