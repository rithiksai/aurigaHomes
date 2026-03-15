"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        minHeight: "700px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "76px",
        overflow: "hidden",
        background: "var(--color-cream)",
      }}
      className="hero-section"
    >
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleX(1); }
          50% { opacity: 0.4; transform: scaleX(0.5); transform-origin: left; }
        }
        .scroll-line-anim {
          animation: scrollPulse 2s ease-in-out infinite;
        }
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            height: auto !important;
          }
          .hero-right-panel {
            display: none !important;
          }
        }
      `}</style>

      {/* Left Side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 64px 80px 48px",
          position: "relative",
        }}
      >
        {/* Vertical rule on right side of left panel */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "15%",
            bottom: "15%",
            width: "1px",
            background: "rgba(184,150,90,0.25)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }}
        >
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
            Luxury Construction &amp; Architecture
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(52px, 5vw, 80px)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--color-ink)",
            marginBottom: "28px",
          }}
        >
          We Build
          <br />
          <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>Dreams</em>
          <br />
          Into Reality
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "var(--color-ink-soft)",
            maxWidth: "400px",
            marginBottom: "48px",
          }}
        >
          Auriga Homes crafts residences that endure — where architectural precision meets
          timeless elegance.
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
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
              color: "var(--color-ink)",
              border: "1px solid var(--color-ink)",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-ink)";
              el.style.color = "var(--color-white)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-ink)";
            }}
          >
            View Our Work <span style={{ fontSize: "14px" }}>→</span>
          </a>
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
              color: "var(--color-gold)",
              border: "1px solid var(--color-gold)",
              padding: "16px 32px",
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--color-gold)";
              el.style.color = "var(--color-white)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-gold)";
            }}
          >
            Begin Your Project
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--color-ink-soft)",
          }}
        >
          <div
            className="scroll-line-anim"
            style={{
              width: "40px",
              height: "1px",
              background: "var(--color-gold)",
            }}
          />
          <span>Scroll</span>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="hero-right-panel"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85&auto=format&fit=crop"
          alt="Luxury home by Auriga Homes"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          sizes="50vw"
        />
        {/* Dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(22,20,18,0.1) 0%, transparent 60%)",
            zIndex: 1,
          }}
        />
        {/* Floating Badge */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            zIndex: 2,
            background: "var(--color-white)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "40px",
              fontWeight: 300,
              lineHeight: 1,
              color: "var(--color-ink)",
            }}
          >
            150
            <sup style={{ fontSize: "0.4em", color: "var(--color-gold)", verticalAlign: "super" }}>
              +
            </sup>
          </span>
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-soft)",
            }}
          >
            Projects Delivered
          </span>
        </div>
      </div>
    </section>
  );
}
