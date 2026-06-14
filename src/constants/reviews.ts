import type { Review } from "@/types";

export const REVIEWS: Review[] = [
  {
    name: "Khalid Al-Mansouri",
    role: "Track Day Enthusiast · Dubai",
    text: "Ran 4 sessions at Yas Marina in 44°C heat. Temps never broke 95°C. Nothing else holds up like ACE MOTO.",
    initials: "KM",
    color: "oklch(0.86 0.24 145)",
  },
  {
    name: "Priya Sharma",
    role: "Fleet Manager · Sharjah",
    text: "Switched 38 vehicles to ACE MOTO last summer. Zero overheating incidents, longer service intervals. The math is obvious.",
    initials: "PS",
    color: "oklch(0.65 0.26 350)",
  },
  {
    name: "Hassan Reza",
    role: "Performance Tuner · Abu Dhabi",
    text: "Pink edition in my 700hp build — radiator stays clean, no foam, no rust after 18 months. The real deal.",
    initials: "HR",
    color: "oklch(0.82 0.16 85)",
  },
];

export const REVIEW_STATS = [
  { value: "120K+", label: "Bottles Sold" },
  { value: "4.9 / 5", label: "Customer Rating" },
  { value: "98%", label: "Satisfaction" },
];
