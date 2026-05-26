import type { ReactNode } from "react";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 shadow-2xl shadow-orange-500/10 backdrop-blur ${className}`}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-8 h-56 w-56 rounded-full bg-sky-500/5 blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
