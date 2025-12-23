import { TeamMember } from "./TeamMember";
import type { TeamMember as TeamMemberType } from "@/lib/data/team";

interface FoundersSectionProps {
  founders: TeamMemberType[];
}

export function FoundersSection({ founders }: FoundersSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {founders.map((founder) => (
        <TeamMember key={founder.id} member={founder} />
      ))}
    </div>
  );
}
