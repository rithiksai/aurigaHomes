const stats = [
  { number: "15", sup: "+", label: "Years of Excellence" },
  { number: "150", sup: "+", label: "Projects Completed" },
  { number: "98", sup: "%", label: "Client Satisfaction" },
  { number: "12", sup: "+", label: "Industry Awards" },
];

export function StatsSection() {
  return (
    <section
      style={{
        background: "#0D0C0B",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="stats-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .stats-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
              .stats-grid .stat-item {
                border-right: none !important;
                border-bottom: 1px solid rgba(255,255,255,0.06) !important;
                padding: 48px 40px !important;
              }
            }
            @media (max-width: 640px) {
              .stats-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item"
              style={{
                padding: "40px",
                borderRight: index < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(48px, 4vw, 72px)",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.number}
                <sup
                  style={{
                    fontSize: "0.4em",
                    color: "#B8965A",
                    verticalAlign: "super",
                  }}
                >
                  {stat.sup}
                </sup>
              </div>
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "12px",
                  fontFamily: "var(--font-sans), sans-serif",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  width: "24px",
                  height: "1px",
                  background: "#B8965A",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
