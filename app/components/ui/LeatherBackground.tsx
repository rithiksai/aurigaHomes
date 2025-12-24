"use client";

interface LeatherBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function LeatherBackground({ children, className = "" }: LeatherBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Base cream leather texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, #f5f2eb 0%, #ebe6dc 25%, #f5f2eb 50%, #ebe6dc 75%, #f5f2eb 100%)
          `,
        }}
      />

      {/* Leather grain texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diamond quilted stitch pattern - larger spacing */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, rgba(180, 150, 50, 0.25) 49.5%, rgba(180, 150, 50, 0.25) 50.5%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(180, 150, 50, 0.25) 49.5%, rgba(180, 150, 50, 0.25) 50.5%, transparent 51%)
          `,
          backgroundSize: '150px 150px',
        }}
      />

      {/* Subtle vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
