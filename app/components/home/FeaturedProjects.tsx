"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "The Modern Villa",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=85",
    main: true,
  },
  {
    id: 2,
    title: "Urban Loft",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85",
    main: false,
  },
  {
    id: 3,
    title: "Coastal Retreat",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=85",
    main: false,
  },
];

function ProjectCard({
  project,
  isMain,
}: {
  project: (typeof projects)[0];
  isMain: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: isMain ? "4/5" : "5/4",
        gridRow: isMain ? "1 / 3" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.7s ease",
          transform: hovered ? "scale(1.04)" : "scale(1)",
        }}
        sizes={isMain ? "58vw" : "42vw"}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(14,13,11,0.85) 0%, rgba(14,13,11,0.1) 60%)"
            : "linear-gradient(to top, rgba(14,13,11,0.7) 0%, transparent 50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "32px",
          transition: "background 0.4s",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#D4B483",
            marginBottom: "8px",
            fontFamily: "var(--font-sans), sans-serif",
          }}
        >
          {project.location}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
            fontSize: "28px",
            fontWeight: 300,
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </div>
      </div>

      {/* View Project Pill */}
      <Link
        href={`/designs/${project.id}`}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          fontSize: "10px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          padding: "8px 16px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          textDecoration: "none",
          zIndex: 2,
        }}
      >
        View Project →
      </Link>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section style={{ padding: "0 0 120px", background: "var(--color-cream)" }}>
      {/* Section Header */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 48px 64px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(184,150,90,0.25)",
          marginBottom: "0",
        }}
      >
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "11px",
              color: "var(--color-gold)",
              letterSpacing: "0.12em",
              marginBottom: "12px",
            }}
          >
            03 — Featured Work
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(36px, 3vw, 52px)",
              fontWeight: 300,
              lineHeight: 1.15,
              color: "var(--color-ink)",
            }}
          >
            Selected{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-gold)" }}>projects</em>
          </h2>
        </div>
        <Link
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
            flexShrink: 0,
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
          View All Designs
        </Link>
      </div>

      {/* Projects Grid */}
      <div style={{ padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "7fr 5fr",
            gridTemplateRows: "auto auto",
            gap: "2px",
          }}
          className="projects-asymmetric-grid"
        >
          <style>{`
            @media (max-width: 1024px) {
              .projects-asymmetric-grid {
                grid-template-columns: 1fr !important;
              }
              .projects-asymmetric-grid > div:first-child {
                grid-row: auto !important;
                aspect-ratio: 16/9 !important;
              }
            }
          `}</style>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isMain={project.main} />
          ))}
        </div>
      </div>
    </section>
  );
}
