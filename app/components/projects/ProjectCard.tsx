import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/designs/${project.slug}`} className="group">
      <div className="relative aspect-[4/3] overflow-hidden mb-4">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#0D0C0B]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
          <h3 className="text-white font-display text-2xl md:text-3xl tracking-wide mb-2 text-center">
            {project.title}
          </h3>
          <p className="text-[#B8965A] text-sm uppercase tracking-wider">
            {project.category}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-display tracking-wide mb-2 text-[#161412] group-hover:text-[#B8965A] transition-colors">
          {project.title}
        </h3>
        <p className="text-[#4A443C] text-xs uppercase tracking-wider">
          {project.location} · {project.year}
        </p>
      </div>
    </Link>
  );
}
