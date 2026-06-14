import { SiteHeader } from "@/sections/SiteHeader";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Compare } from "@/sections/Compare";
import { Performance } from "@/sections/Performance";
import { Reviews } from "@/sections/Reviews";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { SiteFooter } from "@/sections/SiteFooter";

/**
 * The ACE MOTO landing page.
 * Each section is a separate component in src/sections/ for easy navigation.
 */
export function HomePage() {
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
