const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin by listening — understanding your vision, lifestyle, and the legacy you want to build.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Our architects translate your vision into detailed plans — iterating until every space feels perfect.",
  },
  {
    num: "03",
    title: "Construction",
    desc: "Precision-built by our expert teams with complete transparency and on-site quality assurance.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Your keys, your space — delivered on time with a comprehensive walkthrough and aftercare support.",
  },
];

export function ProcessSection() {
  return (
    <section
      style={{
        background: "#F7F4EF",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
            paddingBottom: "32px",
            borderBottom: "1px solid rgba(184,150,90,0.25)",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "11px",
                color: "var(--color-gold)",
                letterSpacing: "0.12em",
                marginBottom: "12px",
              }}
            >
              05 — How We Work
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 3vw, 52px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "var(--color-ink)",
              }}
            >
              Our process, refined{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>over decades.</em>
            </h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
          className="process-steps-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .process-steps-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
              .process-step-item {
                border-right: none !important;
                border-bottom: 1px solid rgba(184,150,90,0.25) !important;
              }
            }
            @media (max-width: 640px) {
              .process-steps-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="process-step-item"
              style={{
                padding: "40px 32px 40px 0",
                borderRight:
                  index < steps.length - 1 ? "1px solid rgba(184,150,90,0.25)" : "none",
                paddingLeft: index > 0 ? "32px" : "0",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  fontSize: "64px",
                  fontWeight: 300,
                  color: "rgba(184,150,90,0.2)",
                  lineHeight: 1,
                  marginBottom: "20px",
                }}
              >
                {step.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "var(--color-ink-soft)",
                  maxWidth: "none",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
