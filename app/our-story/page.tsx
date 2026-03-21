import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
};

const founders = [
  {
    name: "Manoj Cherukuri",
    role: "Founder",
    quote: "Architecture is the art of making the inevitable feel effortless.",
    bio: "With over 5 years of hands-on construction experience, Manoj founded Auriga Homes on a single conviction: that the homes people live in should be as carefully considered as the lives they live inside them. His minimalist philosophy runs through every project — not as a style, but as a discipline.",
  },
  {
    name: "Raunak Baid",
    role: "Co-Founder",
    quote: "Every space should feel like it was made for exactly one person — its owner.",
    bio: "Raunak's eye for detail and deep passion for considered design have shaped Auriga's interior language from the very beginning. He believes every room should tell a story — and his job is to make sure it's the right one. His interiors feel personal, never generic.",
  },
];

const values = [
  {
    number: "01",
    title: "Minimal Aesthetic",
    description: "We believe less is more. Every element earns its place — nothing is decorative for its own sake.",
  },
  {
    number: "02",
    title: "Bold Vision",
    description: "We push boundaries while honoring timeless principles. Great design is both daring and disciplined.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    description: "Quality is non-negotiable. We work only with the finest materials and the most skilled artisans.",
  },
];

export default function OurStoryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F7F4EF" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=2000&q=90&auto=format&fit=crop"
          alt="Auriga Homes — Our Story"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,12,11,0.3) 0%, rgba(13,12,11,0.7) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>Our Story</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h1
            className="font-display font-light"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0, color: "white", letterSpacing: "-0.01em" }}
          >
            Who<br />
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>We Are</em>
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginTop: "28px", maxWidth: "460px", lineHeight: 1.8, fontWeight: 300 }}>
            A small team with a singular obsession — creating homes that are worth living in.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(184,150,90,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section style={{ background: "#F7F4EF", padding: "120px 0", borderBottom: "1px solid rgba(184,150,90,0.2)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(32px, 6vw, 96px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>

          {/* Left: Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Est. 2024</span>
            </div>
            <h2
              className="font-display font-light"
              style={{ fontSize: "clamp(36px, 4vw, 60px)", lineHeight: 1.1, color: "#161412", marginBottom: "32px" }}
            >
              Built on a belief,<br />
              not a <em style={{ fontStyle: "italic", color: "#B8965A" }}>blueprint</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#4A443C" }}>
                Auriga Homes was founded in 2024 on a simple but demanding belief — that architecture should be both minimal and bold, timeless yet thoroughly contemporary.
              </p>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#4A443C" }}>
                We started small, on purpose. A tightly focused team means every project gets the full weight of our attention. There are no junior handoffs, no template solutions — just two founders and a shared obsession with getting it right.
              </p>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#4A443C" }}>
                Every project we take on is a collaboration — a chance to push what&apos;s possible while staying deeply true to the vision of the person who will call it home.
              </p>
            </div>
          </div>

          {/* Right: Image with accent */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden", border: "1px solid rgba(184,150,90,0.3)" }}>
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=90&auto=format&fit=crop"
                alt="Auriga Homes — Our work"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            {/* Gold accent block */}
            <div style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              background: "#B8965A",
              padding: "28px 32px",
              zIndex: 10,
            }}>
              <div
                className="font-display font-light"
                style={{ fontSize: "48px", color: "white", lineHeight: 1 }}
              >
                2024
              </div>
              <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>
                Founded
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section style={{ background: "#F7F4EF" }}>
        {/* Section header */}
        <div style={{ padding: "80px clamp(32px, 6vw, 96px) 0", maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>The People</span>
          </div>
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(40px, 5vw, 72px)", lineHeight: 1.05, color: "#161412" }}
          >
            Meet the <em style={{ fontStyle: "italic", color: "#B8965A" }}>Founders</em>
          </h2>
        </div>

        {/* Single shared photo + two bios side by side */}
        <div
          style={{
            borderTop: "1px solid rgba(184,150,90,0.2)",
            marginTop: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "600px",
          }}
        >
          {/* Left — shared photo */}
          <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
            <Image
              src="/founders.jpg"
              alt="Manoj Cherukuri and Raunak Baid — Founders of Auriga Homes"
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(13,12,11,0.5), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                left: "32px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div style={{ width: "20px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
                The Founders
              </span>
            </div>
          </div>

          {/* Right — two bios stacked */}
          <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid rgba(184,150,90,0.2)" }}>
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                style={{
                  flex: 1,
                  padding: "56px clamp(40px, 5vw, 72px)",
                  borderBottom: i === 0 ? "1px solid rgba(184,150,90,0.2)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", marginBottom: "14px" }}>
                  {founder.role}
                </div>
                <h3
                  className="font-display font-light"
                  style={{ fontSize: "clamp(28px, 2.5vw, 40px)", lineHeight: 1.1, color: "#161412", marginBottom: "18px" }}
                >
                  {founder.name}
                </h3>
                <div style={{ width: "32px", height: "1px", background: "#B8965A", marginBottom: "18px" }} />
                <p
                  className="font-display font-light italic"
                  style={{ fontSize: "17px", color: "#4A443C", lineHeight: 1.6, marginBottom: "18px" }}
                >
                  &ldquo;{founder.quote}&rdquo;
                </p>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.9, color: "#4A443C", maxWidth: "420px" }}>
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ background: "#161412", padding: "120px clamp(32px, 6vw, 96px)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "72px", paddingBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>What We Stand For</span>
              </div>
              <h2
                className="font-display font-light"
                style={{ fontSize: "clamp(40px, 5vw, 68px)", lineHeight: 1.05, color: "white" }}
              >
                Our <em style={{ fontStyle: "italic", color: "#B8965A" }}>Values</em>
              </h2>
            </div>
          </div>

          {/* Values grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
            {values.map((value, index) => (
              <div
                key={value.number}
                style={{
                  padding: "48px 40px",
                  borderRight: index < values.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  className="font-display font-light"
                  style={{ fontSize: "72px", lineHeight: 1, color: "rgba(184,150,90,0.2)", marginBottom: "24px" }}
                >
                  {value.number}
                </div>
                <h3
                  className="font-display font-light"
                  style={{ fontSize: "26px", color: "white", marginBottom: "16px", lineHeight: 1.2 }}
                >
                  {value.title}
                </h3>
                <div style={{ width: "32px", height: "1px", background: "#B8965A", marginBottom: "16px" }} />
                <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.5)" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0D0C0B", padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div
          className="font-display font-light"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "220px", whiteSpace: "nowrap",
            color: "rgba(255,255,255,0.02)", letterSpacing: "0.1em",
            pointerEvents: "none", userSelect: "none",
          }}
          aria-hidden="true"
        >
          AURIGA
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8965A" }}>Work With Us</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(40px, 5vw, 80px)", color: "white", lineHeight: 1.1, marginBottom: "20px" }}
          >
            Let&apos;s create<br />
            your <em style={{ fontStyle: "italic", color: "#B8965A" }}>story</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", maxWidth: "440px", margin: "0 auto 48px", lineHeight: 1.8 }}>
            We&apos;d love to hear about your vision. Every great home begins with a conversation.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              border: "1px solid white",
              color: "white",
              padding: "16px 48px",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
            className="hover:bg-white hover:text-[#161412] transition-colors duration-300"
          >
            Start a Conversation →
          </Link>
        </div>
      </section>

    </div>
  );
}
