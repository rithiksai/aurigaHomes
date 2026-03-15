import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data/projects";

export const metadata: Metadata = {
  title: "Designs",
};

const categoryLabel: Record<string, string> = {
  architecture: "Architecture",
  interior: "Interior Design",
  landscape: "Landscape",
};

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

export default function DesignsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F7F4EF" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=90&auto=format&fit=crop"
          alt="Auriga Homes — Our Work"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,12,11,0.2) 0%, rgba(13,12,11,0.75) 100%)" }} />

        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#B8965A" }}>Portfolio</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h1
            className="font-display font-light"
            style={{ fontSize: "clamp(56px, 8vw, 120px)", lineHeight: 1.0, color: "white", letterSpacing: "-0.01em" }}
          >
            Our<br />
            <em style={{ color: "#B8965A", fontStyle: "italic" }}>Work</em>
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)", marginTop: "28px", maxWidth: "460px", lineHeight: 1.8, fontWeight: 300 }}>
            A curated selection of projects where vision meets craftsmanship.
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
          <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(184,150,90,0.8), transparent)" }} />
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section style={{ background: "#161412", padding: "80px 0 4px" }}>
        <div style={{ padding: "0 clamp(32px, 4vw, 64px)", marginBottom: "40px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", maxWidth: "1600px", margin: "0 auto 40px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A" }}>Featured</span>
            </div>
            <h2
              className="font-display font-light"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.05, color: "white" }}
            >
              Selected <em style={{ fontStyle: "italic", color: "#B8965A" }}>Projects</em>
            </h2>
          </div>
          <span
            className="font-display font-light italic"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)" }}
          >
            {projects.length} projects
          </span>
        </div>

        {/* Hero grid — 1 large + 2 stacked */}
        <div style={{ padding: "0 clamp(32px, 4vw, 64px)", maxWidth: "1600px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "4px", marginBottom: "4px" }}>

            {/* Main featured */}
            <Link href={`/designs/${featured[0].slug}`} style={{ display: "block", position: "relative", aspectRatio: "4/3", overflow: "hidden", textDecoration: "none" }} className="group">
              <Image src={featured[0].heroImage} alt={featured[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" unoptimized />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,12,11,0.85) 0%, transparent 55%)", transition: "opacity 0.4s" }} />
              <div style={{ position: "absolute", top: "24px", left: "24px" }}>
                <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", background: "rgba(13,12,11,0.6)", padding: "6px 12px", backdropFilter: "blur(8px)" }}>
                  {categoryLabel[featured[0].category]}
                </span>
              </div>
              <div style={{ position: "absolute", bottom: "32px", left: "32px", right: "32px" }}>
                <div style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#B8965A", marginBottom: "8px" }}>{featured[0].location} · {featured[0].year}</div>
                <h3 className="font-display font-light" style={{ fontSize: "clamp(28px, 3vw, 44px)", color: "white", lineHeight: 1.1, marginBottom: "0" }}>{featured[0].title}</h3>
                <p style={{ fontSize: "13px", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginTop: "12px", lineHeight: 1.7, maxHeight: 0, overflow: "hidden", transition: "max-height 0.4s" }} className="group-hover:[max-height:80px]">{featured[0].description}</p>
              </div>
              <div style={{ position: "absolute", top: "24px", right: "24px", opacity: 0, transition: "opacity 0.3s" }} className="group-hover:opacity-100">
                <span style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "white", border: "1px solid rgba(255,255,255,0.4)", padding: "8px 16px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>View →</span>
              </div>
            </Link>

            {/* Two stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {featured.slice(1, 3).map((project) => (
                <Link key={project.slug} href={`/designs/${project.slug}`} style={{ display: "block", position: "relative", flex: 1, overflow: "hidden", textDecoration: "none", minHeight: "260px" }} className="group">
                  <Image src={project.heroImage} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" unoptimized />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,12,11,0.8) 0%, transparent 55%)" }} />
                  <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                    <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", background: "rgba(13,12,11,0.6)", padding: "5px 10px", backdropFilter: "blur(8px)" }}>
                      {categoryLabel[project.category]}
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                    <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8965A", marginBottom: "6px" }}>{project.location}</div>
                    <h3 className="font-display font-light" style={{ fontSize: "28px", color: "white", lineHeight: 1.1 }}>{project.title}</h3>
                  </div>
                  <div style={{ position: "absolute", top: "20px", right: "20px", opacity: 0, transition: "opacity 0.3s" }} className="group-hover:opacity-100">
                    <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "white", border: "1px solid rgba(255,255,255,0.4)", padding: "6px 14px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>View →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL PROJECTS ── */}
      <section style={{ background: "#161412", padding: "4px clamp(32px, 4vw, 64px) 80px" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          {/* Divider label */}
          <div style={{ padding: "40px 0 32px", display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>More Work</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
            {rest.map((project) => (
              <Link key={project.slug} href={`/designs/${project.slug}`} style={{ display: "block", position: "relative", aspectRatio: "4/3", overflow: "hidden", textDecoration: "none" }} className="group">
                <Image src={project.heroImage} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" unoptimized />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,12,11,0.82) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                  <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B8965A", background: "rgba(13,12,11,0.6)", padding: "5px 10px", backdropFilter: "blur(8px)" }}>
                    {categoryLabel[project.category]}
                  </span>
                </div>
                <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                  <div style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8965A", marginBottom: "6px" }}>{project.location} · {project.year}</div>
                  <h3 className="font-display font-light" style={{ fontSize: "26px", color: "white", lineHeight: 1.1 }}>{project.title}</h3>
                </div>
                <div style={{ position: "absolute", top: "20px", right: "20px", opacity: 0, transition: "opacity 0.3s" }} className="group-hover:opacity-100">
                  <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "white", border: "1px solid rgba(255,255,255,0.4)", padding: "6px 14px", backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.08)" }}>View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0D0C0B", padding: "120px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="font-display font-light" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "220px", whiteSpace: "nowrap", color: "rgba(255,255,255,0.02)", letterSpacing: "0.1em", pointerEvents: "none", userSelect: "none" }} aria-hidden="true">AURIGA</div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "32px" }}>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
            <span style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8965A" }}>Your Project</span>
            <div style={{ width: "32px", height: "1px", background: "#B8965A" }} />
          </div>
          <h2 className="font-display font-light" style={{ fontSize: "clamp(40px, 5vw, 80px)", color: "white", lineHeight: 1.1, marginBottom: "20px" }}>
            Ready to add your home<br />to this <em style={{ fontStyle: "italic", color: "#B8965A" }}>collection?</em>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", maxWidth: "440px", margin: "0 auto 48px", lineHeight: 1.8 }}>
            Let&apos;s create something that belongs in these pages.
          </p>
          <Link href="/contact" style={{ display: "inline-block", border: "1px solid white", color: "white", padding: "16px 48px", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none" }} className="hover:bg-white hover:text-[#161412] transition-colors duration-300">
            Begin Your Project →
          </Link>
        </div>
      </section>

    </div>
  );
}
