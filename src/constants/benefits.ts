import { ThermometerSun, ShieldCheck, Beaker, Clock, Flame, Car } from "lucide-react";
import type { BenefitItem } from "@/types";

export const BENEFITS: BenefitItem[] = [
  {
    icon: ThermometerSun,
    title: "Prevents Overheating",
    description: "Maintains optimal engine temperature even under extreme load.",
  },
  {
    icon: ShieldCheck,
    title: "Protects Radiator",
    description: "Anti-foam additives shield aluminum and copper components.",
  },
  {
    icon: Beaker,
    title: "Rust & Corrosion Protection",
    description: "Advanced corrosion inhibitors protect water pump and channels.",
  },
  {
    icon: Clock,
    title: "Long-Life Formula",
    description: "Extended-life chemistry — fewer changes, more performance.",
  },
  {
    icon: Flame,
    title: "Stable in Extreme Heat",
    description: "Boiling point of 265°F. Thermal protection up to 126°C.",
  },
  {
    icon: Car,
    title: "Safe for All Vehicles",
    description: "Compatible with conventional green and extended-life coolants.",
  },
];
