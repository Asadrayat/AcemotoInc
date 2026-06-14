import greenBottleJson from "@/assets/coolant-green-front.asset.json";
import pinkBottleJson from "@/assets/coolant-pink-front.asset.json";
import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "green",
    name: "Green Edition",
    subtitle: "Conventional · IAT Formula",
    imageUrl: greenBottleJson.url,
    accentColor: "oklch(0.86 0.24 145)",
    specs: [
      { label: "Protection", value: "126°C" },
      { label: "Boiling Point", value: "265°F" },
      { label: "Concentration", value: "1:3" },
      { label: "Compatibility", value: "All Models" },
    ],
  },
  {
    id: "pink",
    name: "Pink Edition",
    subtitle: "Extended Life · OAT Formula",
    imageUrl: pinkBottleJson.url,
    accentColor: "oklch(0.65 0.26 350)",
    specs: [
      { label: "Protection", value: "126°C" },
      { label: "Boiling Point", value: "265°F" },
      { label: "Concentration", value: "1:3" },
      { label: "Compatibility", value: "All Models" },
    ],
  },
];
