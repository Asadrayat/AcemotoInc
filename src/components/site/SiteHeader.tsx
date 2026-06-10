import { ShoppingCart, Menu, X } from "lucide-react";
import { AceLogo } from "./AceLogo";
import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Performance", href: "#performance" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ fontFamily: "Exo 2" }}>
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors"
            >
              {n.label}
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
          <button
            type="button"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full glass-card"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xl bg-background/90 border-b border-border ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1" style={{ fontFamily: "Exo 2" }}>
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="uppercase tracking-[0.18em] text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/40 last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}