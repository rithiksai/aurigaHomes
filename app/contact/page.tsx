import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get in Touch",
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F7F4EF" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&q=90&auto=format&fit=crop"
          alt="Auriga Homes — Get in Touch"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,12,11,0.25) 0%, rgba(13,12,11,0.72) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>Get in Touch</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h1
            className="font-display font-light"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0, color: "white", letterSpacing: "-0.01em" }}
          >
            Let&apos;s<br />
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>Connect</em>
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginTop: "28px", maxWidth: "460px", lineHeight: 1.8, fontWeight: 300 }}>
            Every exceptional home begins with a single conversation.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(184,150,90,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: "700px" }}>

        {/* LEFT — Dark info panel */}
        <div style={{ background: "#0D0C0B", flex: "0 0 42%", padding: "80px clamp(40px, 5vw, 80px)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "48px" }}>

          {/* Quote */}
          <p
            className="font-display font-light italic"
            style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}
          >
            &ldquo;Every great home starts with a conversation — and great conversations start here.&rdquo;
          </p>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div>
              <div style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A", marginBottom: "14px" }}>
                Reach Us
              </div>
              <a
                href="mailto:hello@aurigahomes.in"
                style={{ display: "block", fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.65)", textDecoration: "none", marginBottom: "8px", transition: "color 0.2s" }}
                className="hover:text-white"
              >
                hello@aurigahomes.in
              </a>
              <a
                href="tel:+918904428450"
                style={{ display: "block", fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
                className="hover:text-white"
              >
                +91 89044 28450
              </a>
            </div>

            <div>
              <div style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A", marginBottom: "14px" }}>
                Office Hours
              </div>
              <p style={{ fontSize: "14px", fontWeight: 300, color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
                Monday — Saturday<br />
                9:00 AM – 7:00 PM IST
              </p>
            </div>

            <div>
              <div style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A", marginBottom: "14px" }}>
                Follow Along
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { label: "Instagram", href: "https://www.instagram.com/aurigaconstructions/" },
                  { label: "Facebook", href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.45)", textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", transition: "color 0.2s" }}
                    className="hover:text-white"
                  >
                    <span style={{ width: "20px", height: "1px", background: "#B8965A", display: "inline-block", flexShrink: 0 }} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom gold rule + tagline */}
          <div style={{ borderTop: "1px solid rgba(184,150,90,0.2)", paddingTop: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 300, color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>
              © {new Date().getFullYear()} Auriga Homes. All rights reserved.
            </p>
          </div>
        </div>

        {/* RIGHT — Form panel */}
        <div style={{ flex: 1, background: "#FFFFFF", padding: "80px clamp(40px, 5vw, 96px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>

          {/* Header */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>
                Send a Message
              </span>
            </div>
            <h2
              className="font-display font-light"
              style={{ fontSize: "clamp(32px, 3.5vw, 52px)", lineHeight: 1.1, color: "#161412", marginBottom: "16px" }}
            >
              Tell us about<br />
              your <em style={{ fontStyle: "italic", color: "#B8965A" }}>project</em>
            </h2>
            <p style={{ fontSize: "13px", fontWeight: 300, color: "#4A443C", lineHeight: 1.8, maxWidth: "400px" }}>
              Whether you have a detailed brief or just an idea — we want to hear it. We&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <div style={{ maxWidth: "520px" }}>
            <ContactForm />
          </div>
        </div>

      </div>

      {/* ── VISIT / MAP STRIP ── */}
      <section style={{ background: "#F7F4EF", borderTop: "1px solid rgba(184,150,90,0.2)", padding: "80px clamp(32px, 6vw, 96px)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "64px" }}>
          {[
            {
              label: "Email",
              value: "hello@aurigahomes.in",
              href: "mailto:hello@aurigahomes.in",
            },
            {
              label: "Phone",
              value: "+91 89044 28450",
              href: "tel:+918904428450",
            },
            {
              label: "Hours",
              value: "Mon – Sat, 9 AM – 7 PM IST",
              href: null,
            },
          ].map((item) => (
            <div key={item.label} style={{ borderLeft: "1px solid rgba(184,150,90,0.3)", paddingLeft: "32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A", marginBottom: "12px" }}>
                {item.label}
              </div>
              {item.href ? (
                <a
                  href={item.href}
                  style={{ fontSize: "16px", fontWeight: 300, color: "#161412", textDecoration: "none" }}
                  className="hover:text-[#B8965A] transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p style={{ fontSize: "16px", fontWeight: 300, color: "#161412" }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
