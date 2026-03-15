export function MarqueeSection() {
  const items = [
    "Auriga Homes",
    "Crafting Exceptional Spaces",
    "Architecture & Construction",
    "Est. Since 2018",
    "Premium Residential",
    "Bespoke Interiors",
  ];

  const repeated = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      style={{
        background: "#0D0C0B",
        padding: "18px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex;
          animation: marqueeScroll 24s linear infinite;
        }
      `}</style>
      <div className="marquee-track">
        {repeated.map((item, index) => (
          <span key={index}>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(247,244,239,0.8)",
                padding: "0 32px",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "#B8965A",
                padding: "0 8px",
                letterSpacing: 0,
                fontSize: "11px",
              }}
            >
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
