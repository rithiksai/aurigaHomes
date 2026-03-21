import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collaborations — Auriga Homes",
  description: "Meet the architect firms Auriga Homes partners with to deliver exceptional spaces.",
};

const collaborators = [
  {
    id: "studio-spectra",
    name: "Studio Spectra",
    tagline: "Architecture as Art",
    specialty: "Contemporary Residential & Commercial Design",
    description:
      "Studio Spectra is a full-service architecture firm rooted in the belief that every structure should speak. Founded by architects with a decade of practice across residential, hospitality, and cultural projects, they bring a rare synthesis of conceptual rigour and liveable warmth to every design they touch.",
    what_they_bring:
      "Studio Spectra leads the architectural vision on select Auriga projects — from initial site studies and spatial planning through to construction documentation. Their ability to translate a client's lifestyle into form is what drew us to them.",
    founded: "2025",
    projects_together: 4,
    location: "Bengaluru, India",
    website: null, // add URL when available
    specialties: ["Residential Architecture", "Interior Architecture", "Space Planning", "Material Curation"],
  },
];

export default function CollaborationsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F7F4EF" }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "640px",
          background: "#161412",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 32px",
          overflow: "hidden",
        }}
      >
        {/* Subtle texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(184,150,90,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Horizontal rule top */}
        <div
          style={{
            position: "absolute",
            top: "76px",
            left: "clamp(32px, 6vw, 96px)",
            right: "clamp(32px, 6vw, 96px)",
            height: "1px",
            background: "rgba(184,150,90,0.15)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#B8965A",
              fontFamily: "var(--font-sans), sans-serif",
              fontWeight: 500,
            }}
          >
            Creative Alliances
          </span>
          <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(56px, 9vw, 130px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.01em",
            color: "white",
            marginBottom: "32px",
          }}
        >
          Built
          <br />
          <em style={{ fontStyle: "italic", color: "#B8965A" }}>Together</em>
        </h1>

        <p
          style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.45)",
            maxWidth: "480px",
            marginBottom: "0",
          }}
        >
          We are intentional about who we create with. Our collaborators are not vendors —
          they are co-authors of the spaces we deliver.
        </p>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, rgba(184,150,90,0.7), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ── */}
      <section
        style={{
          padding: "100px clamp(32px, 6vw, 96px)",
          borderBottom: "1px solid rgba(184,150,90,0.18)",
          maxWidth: "1440px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B8965A",
                fontWeight: 500,
              }}
            >
              Our Philosophy
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#161412",
            }}
          >
            A curated
            <br />
            <em style={{ fontStyle: "italic", color: "#B8965A" }}>circle</em>
          </h2>
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#4A443C",
              maxWidth: "600px",
              marginBottom: "24px",
            }}
          >
            At Auriga, we believe exceptional homes are never built in isolation. Architecture and
            construction must speak the same language — sharing values around precision, materiality,
            and the human experience of space.
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#4A443C",
              maxWidth: "600px",
            }}
          >
            We collaborate only with firms whose standards match our own. The result is a
            seamless creative process for our clients — from the first sketch to the final finish.
          </p>
        </div>
      </section>

      {/* ── COLLABORATORS ── */}
      <section
        style={{
          padding: "100px clamp(32px, 6vw, 96px)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "72px",
            paddingBottom: "32px",
            borderBottom: "1px solid rgba(184,150,90,0.18)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  fontWeight: 500,
                }}
              >
                Our Partners
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "#161412",
              }}
            >
              The firms we{" "}
              <em style={{ fontStyle: "italic", color: "#B8965A" }}>trust</em>
            </h2>
          </div>
          <span
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: "#4A443C",
            }}
          >
            {collaborators.length} {collaborators.length === 1 ? "collaborator" : "collaborators"}
          </span>
        </div>

        {/* Collaborator Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {collaborators.map((firm, index) => (
            <div
              key={firm.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: index % 2 === 0 ? "#161412" : "#1E1B18",
                overflow: "hidden",
                minHeight: "520px",
              }}
            >
              {/* Left — Identity */}
              <div
                style={{
                  padding: "72px 64px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: "1px solid rgba(184,150,90,0.12)",
                }}
              >
                <div>
                  {/* Index */}
                  <div
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      color: "rgba(184,150,90,0.4)",
                      marginBottom: "40px",
                    }}
                  >
                    0{index + 1}
                  </div>

                  {/* Firm Name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "clamp(42px, 5vw, 72px)",
                      fontWeight: 300,
                      lineHeight: 1.0,
                      color: "white",
                      letterSpacing: "-0.01em",
                      marginBottom: "20px",
                    }}
                  >
                    {firm.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                      fontSize: "18px",
                      fontStyle: "italic",
                      color: "#B8965A",
                      marginBottom: "40px",
                    }}
                  >
                    &ldquo;{firm.tagline}&rdquo;
                  </p>

                  {/* Specialty tag */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      border: "1px solid rgba(184,150,90,0.3)",
                      padding: "10px 20px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "rgba(184,150,90,0.8)",
                      }}
                    >
                      {firm.specialty}
                    </span>
                  </div>
                </div>

                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    gap: "40px",
                    paddingTop: "48px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    marginTop: "48px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: "6px",
                      }}
                    >
                      Founded
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                        fontSize: "20px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {firm.founded}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: "6px",
                      }}
                    >
                      Projects Together
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                        fontSize: "20px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {firm.projects_together}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: "6px",
                      }}
                    >
                      Based In
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                        fontSize: "20px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {firm.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Description */}
              <div
                style={{
                  padding: "72px 64px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "32px",
                    }}
                  >
                    <div style={{ width: "24px", height: "1px", background: "#B8965A" }} />
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#B8965A",
                      }}
                    >
                      About
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 300,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "48px",
                    }}
                  >
                    {firm.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "24px",
                    }}
                  >
                    <div style={{ width: "24px", height: "1px", background: "#B8965A" }} />
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#B8965A",
                      }}
                    >
                      What They Bring
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 300,
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.55)",
                      marginBottom: "40px",
                    }}
                  >
                    {firm.what_they_bring}
                  </p>

                  {/* Specialties */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    {firm.specialties.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.3)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          padding: "7px 14px",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {firm.website && (
                  <div style={{ paddingTop: "48px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "48px" }}>
                    <a
                      href={firm.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#B8965A",
                        border: "1px solid rgba(184,150,90,0.4)",
                        padding: "16px 32px",
                        textDecoration: "none",
                        transition: "all 0.3s",
                      }}
                    >
                      Visit Studio Spectra →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT COLLABORATION MEANS ── */}
      <section
        style={{
          background: "white",
          borderTop: "1px solid rgba(184,150,90,0.18)",
          borderBottom: "1px solid rgba(184,150,90,0.18)",
          padding: "100px clamp(32px, 6vw, 96px)",
        }}
      >
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  fontWeight: 500,
                }}
              >
                For Our Clients
              </span>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#161412",
              }}
            >
              What collaboration{" "}
              <em style={{ fontStyle: "italic", color: "#B8965A" }}>means for you</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              background: "rgba(184,150,90,0.18)",
            }}
          >
            {[
              {
                number: "01",
                title: "Design Excellence",
                body: "You work with architects who have been vetted by us — firms whose eye for space, light, and form is something we trust unconditionally.",
              },
              {
                number: "02",
                title: "Shared Standards",
                body: "No gap between design intent and built reality. Our collaborators understand how we build, and we understand how they design.",
              },
              {
                number: "03",
                title: "Unified Delivery",
                body: "Architecture and construction as one seamless team. Fewer meetings, faster decisions, better outcomes — for you.",
              },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  background: "#F7F4EF",
                  padding: "56px 48px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "rgba(184,150,90,0.5)",
                    marginBottom: "28px",
                  }}
                >
                  {item.number}
                </div>
                <div
                  style={{
                    width: "32px",
                    height: "1px",
                    background: "#B8965A",
                    marginBottom: "24px",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "#161412",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "#4A443C",
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — WORK WITH US ── */}
      <section
        style={{
          background: "#161412",
          padding: "100px clamp(32px, 6vw, 96px)",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  fontWeight: 500,
                }}
              >
                Architect Firms
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "white",
                marginBottom: "24px",
              }}
            >
              Interested in
              <br />
              <em style={{ fontStyle: "italic", color: "#B8965A" }}>working together?</em>
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.4)",
                maxWidth: "420px",
              }}
            >
              We are always open to conversations with architect firms who share our values.
              If you believe your practice would be a good fit, we would love to hear from you.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
            <p
              style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.3)",
                fontStyle: "italic",
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              }}
            >
              &ldquo;We do not just build what architects draw — we build what they dream.&rdquo;
            </p>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(184,150,90,0.2)",
              }}
            />

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "white",
                background: "#B8965A",
                padding: "18px 40px",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
            >
              Start the Conversation →
            </Link>

            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              We review every enquiry personally
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
