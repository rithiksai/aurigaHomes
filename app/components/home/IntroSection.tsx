export function IntroSection() {
  return (
    <section
      style={{
        background: "var(--color-cream)",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="intro-grid"
      >
        <style>{`
          @media (max-width: 1024px) {
            .intro-grid {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 768px) {
            .intro-pillars-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        {/* Left Column */}
        <div style={{ paddingTop: "8px" }}>
          <div
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "120px",
              fontWeight: 300,
              lineHeight: 1,
              color: "rgba(184,150,90,0.2)",
              letterSpacing: "-0.04em",
              marginBottom: "16px",
            }}
          >
            01
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                display: "inline-block",
                width: "32px",
                height: "1px",
                background: "var(--color-gold)",
                marginRight: "12px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              Who We Are
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(38px, 3.5vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "var(--color-ink)",
              marginBottom: "28px",
            }}
          >
            Spaces crafted for those who refuse to settle for{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>ordinary.</em>
          </h2>

          {/* Gold rule */}
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "rgba(184,150,90,0.25)",
              marginBottom: "28px",
            }}
          />

          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "var(--color-ink-soft)",
              marginBottom: "48px",
              maxWidth: "70ch",
            }}
          >
            At Auriga Homes, we believe a home is more than structure and stone — it is a living
            testament to your aspirations. Our team of architects, designers, and craftsmen work in
            concert to deliver spaces that are at once technically impeccable and deeply personal.
          </p>

          {/* Pillars 2x2 Grid */}
          <div
            className="intro-pillars-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "32px",
            }}
          >
            {[
              {
                label: "Design",
                title: "Architectural Precision",
                desc: "Spatial mastery that balances form with function — where every proportion feels intentional.",
              },
              {
                label: "Build",
                title: "Artisan Craftsmanship",
                desc: "Skilled hands and premium materials brought together by decades of construction expertise.",
              },
              {
                label: "Deliver",
                title: "On Time, Every Time",
                desc: "Transparent timelines and rigorous project management — so your vision lands on schedule.",
              },
              {
                label: "Sustain",
                title: "Built to Last",
                desc: "Structures engineered with longevity in mind — homes that outlast trends and hold their value.",
              },
            ].map((pillar) => (
              <div key={pillar.label}>
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: "10px",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {pillar.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    marginBottom: "8px",
                  }}
                >
                  {pillar.title}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "var(--color-ink-soft)",
                    maxWidth: "none",
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
