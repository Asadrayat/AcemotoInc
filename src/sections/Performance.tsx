import { Activity, Thermometer, Gauge, type LucideIcon } from "lucide-react";
import engineImg from "@/assets/performance-engine.jpg";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Performance() {
  return (
    <section id="performance" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background engine image with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={engineImg}
          alt=""
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
          width={1600}
          height={1000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text content */}
        <div>
          <SectionHeading
            kicker="Performance Architecture"
            title="From Cold Start To Redline — Always Cool."
            align="left"
          />
          <p
            className="mt-6 text-muted-foreground max-w-lg leading-relaxed"
            style={{ fontFamily: "Exo 2" }}
          >
            Engineered for the demands of modern high-output engines. ACE MOTO
            circulates a precision additive package through the cooling system,
            dissipating heat 38% faster than ordinary coolants while preventing
            corrosion at the molecular level.
          </p>

          {/* Key stat cards */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <StatCard label="Heat Reduction" value="38%" />
            <StatCard label="Engine Lifespan" value="+2.4x" />
            <StatCard label="Boiling Margin" value="265°F" />
          </div>
        </div>

        {/* Right: live telemetry display */}
        <div className="relative">
          <div className="glass-card rounded-2xl p-6 space-y-5">
            <TelemetryBar
              icon={Thermometer}
              label="Coolant Temp"
              value="92°C"
              percent={62}
              color="oklch(0.86 0.24 145)"
            />
            <TelemetryBar
              icon={Activity}
              label="Flow Rate"
              value="142 L/min"
              percent={78}
              color="oklch(0.86 0.24 145)"
            />
            <TelemetryBar
              icon={Gauge}
              label="Pressure"
              value="1.4 bar"
              percent={48}
              color="oklch(0.65 0.26 350)"
            />
            <div
              className="pt-3 border-t border-border flex justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground"
              style={{ fontFamily: "Exo 2" }}
            >
              <span>Live Telemetry</span>
              <span className="text-primary">Status: Optimal</span>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-6 -right-4 glass-card rounded-xl px-4 py-3 hidden sm:block">
            <div
              className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground"
              style={{ fontFamily: "Exo 2" }}
            >
              Thermal Shield
            </div>
            <div
              className="text-2xl text-primary text-glow-neon"
              style={{ fontFamily: "Bebas Neue" }}
            >
              ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// A large number + label card used in the stats row
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass-card rounded-lg p-4 text-center">
      <div
        className="text-3xl text-primary text-glow-neon"
        style={{ fontFamily: "Bebas Neue" }}
      >
        {value}
      </div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1"
        style={{ fontFamily: "Exo 2" }}
      >
        {label}
      </div>
    </div>
  );
}

// A single row in the telemetry panel: icon, label, value, and a progress bar
function TelemetryBar({
  icon: Icon,
  label,
  value,
  percent,
  color,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  percent: number;
  color: string;
}) {
  return (
    <div>
      <div
        className="flex items-center justify-between text-sm"
        style={{ fontFamily: "Exo 2" }}
      >
        <span className="inline-flex items-center gap-2 text-muted-foreground uppercase tracking-[0.2em] text-xs">
          <Icon className="h-3.5 w-3.5" style={{ color }} />
          {label}
        </span>
        <span className="font-semibold" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(90deg, ${color}, ${color} 60%, transparent)`,
            boxShadow: `0 0 12px ${color}`,
          }}
        />
      </div>
    </div>
  );
}
