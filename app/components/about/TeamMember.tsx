import Image from "next/image";
import type { TeamMember as TeamMemberType } from "@/lib/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-6 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-2xl font-display tracking-wide mb-2 group-hover:text-gold transition-colors">
        {member.name}
      </h3>
      <p className="text-gold text-sm uppercase tracking-wider mb-4">
        {member.role}
      </p>
      <p className="text-charcoal/80 leading-relaxed">{member.bio}</p>
    </div>
  );
}
