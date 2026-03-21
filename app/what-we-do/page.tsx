import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Do",
};

const services = [
  {
    number: "01",
    title: "Architecture",
    subtitle: "Design that endures",
    description:
      "We draw with intention — every line considered, every proportion deliberate. Our architectural work transforms raw land and raw vision into spaces that feel both inevitable and extraordinary.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=90&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Interior Design",
    subtitle: "Where luxury lives",
    description:
      "Great interiors aren't decorated — they're composed. We select every material, texture, and finish with a curator's eye, creating rooms that feel like they could belong to no other home.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1400&q=90&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Landscape",
    subtitle: "Nature, refined",
    description:
      "The boundary between indoors and outdoors should dissolve. We design landscapes that extend your home's character into the open air — serene, intentional, and deeply connected to the architecture.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=90&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Consultation",
    subtitle: "Clarity before the first brick",
    description:
      "We guide you through every complexity before a single decision is made — site selection, regulatory approvals, budget strategy, material sourcing. The right advice early saves everything later.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Project Management",
    subtitle: "On time. On brief. On budget.",
    description:
      "We are your single point of accountability from groundbreak to handover. Rigorous timelines, transparent reporting, and hands-on quality control at every stage of the build.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=90&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Renovations",
    subtitle: "Reimagined, not replaced",
    description:
      "Existing spaces carry history. Our renovations honor what came before while creating something entirely new — breathing fresh purpose into every room without erasing the soul of the space.",
    image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=1400&q=90&auto=format&fit=crop",
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen" style={{ background: "#F7F4EF" }}>

      {/* ── HERO — Full-bleed image with overlay text ── */}
      <section className="relative w-full" style={{ height: "100vh", minHeight: "600px" }}>
        <Image
          src="/what-we-do-hero.png"
          alt="Auriga Homes — What We Do"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,12,11,0.35) 0%, rgba(13,12,11,0.65) 100%)" }} />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <div className="flex items-center gap-4 mb-8">
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>
              What We Do
            </span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h1
            className="font-display font-light text-white"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0, letterSpacing: "-0.01em" }}
          >
            Our<br />
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>Services</em>
          </h1>
          <p className="font-light text-white mt-8" style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: "480px", lineHeight: 1.8 }}>
            End-to-end creation of exceptional spaces — from the first conversation to the final finish.
          </p>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(184,150,90,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── VALUE PROPOSITION STRIP ── */}
      <section
        style={{
          background: "#161412",
          padding: "80px clamp(32px, 6vw, 96px)",
          borderBottom: "1px solid rgba(184,150,90,0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
            gap: "0",
            alignItems: "center",
          }}
        >
          {[
            { step: "01", text: "Explore multiple design options." },
            { step: "02", text: "Choose what fits your vision." },
            { step: "03", text: "Auriga handles the construction." },
          ].map((item, i) => (
            <React.Fragment key={item.step}>
              <div
                style={{
                  padding: "0 48px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "rgba(184,150,90,0.4)",
                  }}
                >
                  {item.step}
                </span>
                <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
                <p
                  style={{
                    fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    fontWeight: 300,
                    lineHeight: 1.3,
                    color: "white",
                    fontStyle: i === 2 ? "italic" : "normal",
                  }}
                >
                  {i === 2 ? (
                    <>
                      <em style={{ color: "#B8965A" }}>Auriga</em> handles the construction.
                    </>
                  ) : (
                    item.text
                  )}
                </p>
              </div>
              {i < 2 && (
                <div
                  style={{ width: "1px", height: "80px", background: "rgba(184,150,90,0.2)", margin: "0 auto" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ── SERVICES — Alternating rows ── */}
      <section style={{ background: "#F7F4EF" }}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.number}
              style={{ borderBottom: "1px solid rgba(184,150,90,0.2)" }}
            >
              <div
                className="flex flex-col md:flex-row"
                style={{ minHeight: "520px" }}
              >
                {/* Image — left on even, right on odd */}
                <div
                  className={`relative w-full md:w-1/2 ${isEven ? "md:order-1" : "md:order-2"}`}
                  style={{ minHeight: "360px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {/* subtle overlay */}
                  <div className="absolute inset-0" style={{ background: "rgba(13,12,11,0.08)" }} />
                </div>

                {/* Text — right on even, left on odd */}
                <div
                  className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? "md:order-2" : "md:order-1"}`}
                  style={{ padding: "72px clamp(40px, 6vw, 96px)" }}
                >
                  {/* Number */}
                  <div
                    className="font-display font-light select-none mb-4"
                    style={{ fontSize: "80px", lineHeight: 1, color: "rgba(184,150,90,0.18)" }}
                    aria-hidden="true"
                  >
                    {service.number}
                  </div>

                  {/* Subtitle */}
                  <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", marginBottom: "16px" }}>
                    {service.subtitle}
                  </div>

                  {/* Title */}
                  <h2
                    className="font-display font-light"
                    style={{ fontSize: "clamp(36px, 3.5vw, 54px)", lineHeight: 1.05, color: "#161412", marginBottom: "24px" }}
                  >
                    {service.title}
                  </h2>

                  {/* Gold rule */}
                  <div style={{ width: "40px", height: "1px", background: "#B8965A", marginBottom: "24px" }} />

                  {/* Description */}
                  <p
                    className="font-light leading-relaxed"
                    style={{ fontSize: "15px", color: "#4A443C", maxWidth: "420px", lineHeight: 1.85 }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── THE AURIGA DIFFERENCE ── */}
      <section style={{ background: "#F7F4EF", padding: "100px clamp(32px, 6vw, 96px)", borderTop: "1px solid rgba(184,150,90,0.2)" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* Left — Heading */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", fontWeight: 500 }}>
                Why Auriga
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.05,
                color: "#161412",
                marginBottom: "28px",
              }}
            >
              The Auriga
              <br />
              <em style={{ fontStyle: "italic", color: "#B8965A" }}>Difference</em>
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#4A443C", maxWidth: "420px" }}>
              We have built our process around one thing — making the experience of building your home as clear, smooth, and trustworthy as the end result.
            </p>
          </div>

          {/* Right — Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { label: "Transparent BOQ-based pricing", desc: "No surprises. Every cost itemised before work begins." },
              { label: "Structured project management", desc: "Clear milestones, accountability at every stage." },
              { label: "Clear communication and updates", desc: "You always know where your project stands." },
              { label: "Architect + construction coordination", desc: "Design intent preserved all the way through the build." },
              { label: "Single point of responsibility", desc: "One team. One contact. One standard." },
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "24px 1fr",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "28px 0",
                  borderBottom: i < 4 ? "1px solid rgba(184,150,90,0.15)" : "none",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#B8965A",
                    marginTop: "8px",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#161412", marginBottom: "6px", letterSpacing: "0.01em" }}>
                    {point.label}
                  </p>
                  <p style={{ fontSize: "13px", fontWeight: 300, color: "#4A443C", lineHeight: 1.7 }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <section style={{ background: "#161412", padding: "100px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <p
            className="font-display font-light italic"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)", color: "rgba(255,255,255,0.9)", lineHeight: 1.4, marginBottom: "40px" }}
          >
            &ldquo;We don&apos;t just build structures — we create the settings for life&apos;s most meaningful moments.&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8965A" }}>
              Auriga Homes
            </span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0D0C0B", padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Watermark */}
        <div
          className="font-display font-light select-none pointer-events-none"
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "220px", whiteSpace: "nowrap",
            color: "rgba(255,255,255,0.02)", letterSpacing: "0.1em",
          }}
          aria-hidden="true"
        >
          AURIGA
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8965A" }}>
              Start a Project
            </span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h2
            className="font-display font-light"
            style={{ fontSize: "clamp(40px, 5vw, 80px)", color: "white", lineHeight: 1.1, marginBottom: "20px" }}
          >
            Ready to build something{" "}
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>extraordinary?</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "48px", maxWidth: "440px", margin: "0 auto 48px", lineHeight: 1.8 }}>
            Every great space begins with a conversation. Let&apos;s start yours today.
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
              transition: "background 0.3s, color 0.3s",
            }}
            className="hover:bg-white hover:text-[#161412]"
          >
            Begin Your Project →
          </Link>
        </div>
      </section>

    </div>
  );
}
