import { ShoppingCart, Menu, X } from "lucide-react";
import { AceLogo } from "@/components/shared/AceLogo";
import { NAV_LINKS } from "@/constants/navigation";
import { useScrolled } from "@/hooks/use-scroll";
import { useState } from "react";

export function SiteHeader() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 py-5 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <AceLogo />

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm"
          style={{ fontFamily: "Exo 2" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Cart"
            className="relative h-10 w-10 grid place-items-center rounded-full glass-card hover:neon-border transition"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full glass-card"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xl bg-background/90 border-b border-border ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1" style={{ fontFamily: "Exo 2" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/40 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
