import type { ElementType } from "react";

// A navigation link in the header/footer
export type NavItem = {
  label: string;
  href: string;
};

// A single benefit card in the Benefits section
export type BenefitItem = {
  icon: ElementType;
  title: string;
  description: string;
};

// A spec row inside a product card (e.g. "Protection: 126°C")
export type ProductSpec = {
  label: string;
  value: string;
};

// A coolant product (Green or Pink edition)
export type Product = {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  accentColor: string; // oklch color string used for glow effects
  specs: ProductSpec[];
};

// A row in the comparison table
export type ComparisonRow = {
  feature: string;
  ace: boolean;
  ordinary: boolean;
};

// A customer review card
export type Review = {
  name: string;
  role: string;
  text: string;
  initials: string;
  color: string; // oklch color for the avatar background
};

// A single FAQ item
export type FaqItem = {
  question: string;
  answer: string;
};
