import { Instagram, Facebook, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { AceLogo } from "@/components/shared/AceLogo";
import { FOOTER_LINKS } from "@/constants/navigation";

const SOCIAL_LINKS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Twitter, label: "Twitter / X" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative border-t border-border bg-carbon/50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <AceLogo />
          <p
            className="mt-4 text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "Exo 2" }}
          >
            Premium radiator coolant engineered in Dubai, UAE — built to outlast
            the heat of the most demanding engines on earth.
          </p>
          <div className="mt-5 flex gap-2">
            {SOCIAL_LINKS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-full glass-card hover:text-primary transition"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterLinkColumn title="Products" links={FOOTER_LINKS.products} />
        <FooterLinkColumn title="Company" links={FOOTER_LINKS.company} />

        {/* Contact column */}
        <div>
          <h4
            className="text-sm uppercase tracking-[0.25em] text-foreground"
            style={{ fontFamily: "Exo 2" }}
          >
            Contact
          </h4>
          <ul
            className="mt-5 space-y-3 text-sm text-muted-foreground"
            style={{ fontFamily: "Exo 2" }}
          >
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" /> Ace Moto Inc., Dubai · UAE
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> support@acemoto.ae
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +971 4 000 0000
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div
          className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
          style={{ fontFamily: "Exo 2" }}
        >
          <div>© {new Date().getFullYear()} ACE MOTO Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
            <a href="#" className="hover:text-primary">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// A titled list of links used in Products and Company columns
function FooterLinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4
        className="text-sm uppercase tracking-[0.25em] text-foreground"
        style={{ fontFamily: "Exo 2" }}
      >
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground" style={{ fontFamily: "Exo 2" }}>
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-primary transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
