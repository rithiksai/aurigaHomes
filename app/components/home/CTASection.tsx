"use client";

export function CTASection() {
  return (
    <section
      style={{
        background: "#0D0C0B",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Giant watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
          fontSize: "240px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.02)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          letterSpacing: "0.1em",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        AURIGA
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(44px, 5vw, 80px)",
            fontWeight: 300,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Ready to build something{" "}
          <em style={{ fontStyle: "italic", color: "#B8965A" }}>extraordinary?</em>
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            marginBottom: "56px",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Let&apos;s discuss your vision.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              border: "1px solid #FFFFFF",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#FFFFFF";
              el.style.color = "#161412";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#FFFFFF";
            }}
          >
            Start Your Project →
          </a>
          <a
            href="/designs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#B8965A",
              border: "1px solid #B8965A",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#B8965A";
              el.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#B8965A";
            }}
          >
            View Portfolio
          </a>
        </div>

        <a
          href="mailto:hello@aurigahomes.in"
          style={{
            display: "block",
            marginTop: "48px",
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "20px",
            fontStyle: "italic",
            color: "#D4B483",
            textDecoration: "none",
            transition: "color 0.25s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#D4B483";
          }}
        >
          hello@aurigahomes.in
        </a>
      </div>
    </section>
  );
}
