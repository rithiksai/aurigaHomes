import Image from "next/image";
import type { TeamMember as TeamMemberType } from "@/lib/data/team";

interface TeamMemberProps {
  member: TeamMemberType;
  variant?: "light" | "dark";
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="group flex gap-8 items-start">
      {/* Image */}
      <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden border border-[rgba(184,150,90,0.3)] grayscale hover:grayscale-0 transition-all duration-500">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <h3 className="font-display text-2xl font-normal text-[#161412] mb-1 group-hover:text-[#B8965A] transition-colors">
          {member.name}
        </h3>
        <p className="text-[10px] uppercase tracking-widest text-[#B8965A] mb-4">
          {member.role}
        </p>
        <div className="w-8 h-px bg-[#B8965A] mb-4" />
        <p className="text-sm font-light leading-relaxed text-[#4A443C]">{member.bio}</p>
      </div>
    </div>
  );
}
