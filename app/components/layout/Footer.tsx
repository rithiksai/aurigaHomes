"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        background: "#0D0C0B",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "64px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
          className="footer-top-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .footer-top-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 40px !important;
              }
            }
            @media (max-width: 640px) {
              .footer-top-grid {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          {/* Col 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "28px",
                fontWeight: 300,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              Auriga{" "}
              <span style={{ color: "#B8965A", fontStyle: "italic" }}>Homes</span>
            </div>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "240px",
              }}
            >
              Building dreams with precision and grace.
            </p>
          </div>

          {/* Col 2: Navigate */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8965A",
                marginBottom: "20px",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 500,
              }}
            >
              Navigate
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/our-story", label: "Our Story" },
                { href: "/what-we-do", label: "What We Do" },
                { href: "/designs", label: "Designs" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8965A",
                marginBottom: "20px",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 500,
              }}
            >
              Connect
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { href: "https://www.instagram.com/aurigaconstructions/", label: "Instagram" },
                { href: "https://facebook.com", label: "Facebook" },
                { href: "https://linkedin.com", label: "LinkedIn" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.45)",
                      textDecoration: "none",
                      transition: "color 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8965A",
                marginBottom: "20px",
                fontFamily: "var(--font-sans), sans-serif",
                fontWeight: 500,
              }}
            >
              Contact
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li>
                <a
                  href="mailto:hello@aurigahomes.in"
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  hello@aurigahomes.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+918904428450"
                  style={{
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  +91 89044 28450
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.04em",
            }}
          >
            &copy; 2025 Auriga Homes. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#B8965A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
