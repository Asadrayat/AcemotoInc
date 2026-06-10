import { createFileRoute } from "@tanstack/react-router";
import { AceSite } from "@/components/site/AceSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACE MOTO — Premium Radiator Coolant | UAE Performance" },
      { name: "description", content: "Premium ACE MOTO radiator coolant. Anti-rust, anti-foam, protects up to 126°C. Engineered in Dubai for high-performance engines." },
      { property: "og:title", content: "ACE MOTO — Premium Radiator Coolant" },
      { property: "og:description", content: "Anti-rust, anti-foam, 1:3 high concentration. Protects up to 126°C. UAE Technology." },
    ],
  }),
  component: Index,
});

function Index() {
  return <AceSite />;
}
