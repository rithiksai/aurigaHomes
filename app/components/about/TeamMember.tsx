import Image from "next/image";
import type { TeamMember as TeamMemberType } from "@/lib/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
  variant?: "light" | "dark";
}

export function TeamMember({ member, variant = "light" }: TeamMemberProps) {
  const isDark = variant === "dark";

  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gold/30">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className={`text-2xl font-display tracking-wide mb-2 group-hover:text-gold transition-colors ${isDark ? "text-cream" : "text-charcoal"}`}>
        {member.name}
      </h3>
      <p className="text-gold text-sm uppercase tracking-wider mb-4">
        {member.role}
      </p>
      <p className={`leading-relaxed ${isDark ? "text-cream/80" : "text-charcoal/80"}`}>{member.bio}</p>
    </div>
  );
}
