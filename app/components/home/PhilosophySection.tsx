import Image from "next/image";

export function PhilosophySection() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "600px",
      }}
      className="philosophy-section"
    >
      <style>{`
        @media (max-width: 1024px) {
          .philosophy-section {
            grid-template-columns: 1fr !important;
          }
          .philosophy-image-panel {
            height: 400px !important;
          }
        }
      `}</style>

      {/* Left: Image */}
      <div
        className="philosophy-image-panel"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85"
          alt="Interior craftsmanship"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="50vw"
        />
      </div>

      {/* Right: Content */}
      <div
        style={{
          padding: "100px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        {/* Section number */}
        <span
          style={{
            display: "block",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            marginBottom: "32px",
            fontFamily: "var(--font-sans), sans-serif",
          }}
        >
          04 — Our Philosophy
        </span>

        {/* Blockquote */}
        <blockquote
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(28px, 2.5vw, 44px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.4,
            color: "var(--color-ink)",
            marginBottom: "40px",
            padding: 0,
            border: "none",
          }}
        >
          <span
            style={{
              fontSize: "1.2em",
              color: "var(--color-gold)",
              fontStyle: "normal",
            }}
          >
            &ldquo;
          </span>
          A home should feel inevitable — as though it could not have been built any other way.
          <span
            style={{
              fontSize: "1.2em",
              color: "var(--color-gold)",
              fontStyle: "normal",
            }}
          >
            &rdquo;
          </span>
        </blockquote>

        {/* Body text */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.85,
            color: "var(--color-ink-soft)",
            marginBottom: "48px",
            maxWidth: "70ch",
          }}
        >
          This belief guides every decision we make — from the first sketch to the final detail.
        </p>

        {/* Signature */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "40px",
              height: "1px",
              background: "var(--color-gold)",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "18px",
                fontStyle: "italic",
                color: "var(--color-ink)",
                marginBottom: "4px",
              }}
            >
              Founder, Auriga Homes
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ink-soft)",
                fontFamily: "var(--font-sans), sans-serif",
              }}
            >
              Architect &amp; Principal
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
