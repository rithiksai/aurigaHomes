import Image from "next/image";
import type { TeamMember as TeamMemberType } from "@/lib/data/team";

interface FoundersSectionProps {
  founders: TeamMemberType[];
  variant?: "light" | "dark";
}

export function FoundersSection({ founders }: FoundersSectionProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        minHeight: "560px",
        border: "1px solid rgba(184,150,90,0.18)",
      }}
    >
      {/* Left — Shared photo */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "480px",
          borderRight: "1px solid rgba(184,150,90,0.18)",
        }}
      >
        <Image
          src="/founders.jpg"
          alt="Manoj Cherukuri and Raunak Baid — Founders of Auriga Homes"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="50vw"
        />
        {/* Subtle gradient at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, rgba(22,20,18,0.45), transparent)",
          }}
        />
        {/* Label at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            left: "28px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ width: "20px", height: "1px", background: "#B8965A" }} />
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            The Founders
          </span>
        </div>
      </div>

      {/* Right — Two bios stacked */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {founders.map((founder, i) => (
          <div
            key={founder.id}
            style={{
              flex: 1,
              padding: "48px 52px",
              borderBottom: i === 0 ? "1px solid rgba(184,150,90,0.18)" : "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Role eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "20px", height: "1px", background: "#B8965A" }} />
              <span
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#B8965A",
                  fontWeight: 500,
                }}
              >
                {founder.role}
              </span>
            </div>

            {/* Name */}
            <h3
              style={{
                fontFamily: "var(--font-display), 'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(26px, 2.5vw, 36px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "#161412",
                marginBottom: "20px",
              }}
            >
              {founder.name}
            </h3>

            {/* Bio */}
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "#4A443C",
                maxWidth: "380px",
              }}
            >
              {founder.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
