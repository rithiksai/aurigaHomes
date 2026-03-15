import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="border-b border-[rgba(184,150,90,0.25)] py-10 grid grid-cols-[80px_1fr_auto] items-start gap-8 group cursor-default hover:bg-white transition-colors duration-300 px-4">
      {/* Number */}
      <div className="font-display text-5xl font-light text-[rgba(184,150,90,0.3)] group-hover:text-[rgba(184,150,90,0.6)] transition-colors">
        {service.number}
      </div>
      {/* Content */}
      <div>
        <h3 className="font-display text-2xl font-normal text-[#161412] group-hover:text-[#B8965A] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-light text-[#4A443C] leading-relaxed">{service.description}</p>
      </div>
      {/* Arrow */}
      <span className="text-xl text-[#B8965A] opacity-0 group-hover:opacity-100 transition-opacity self-center">
        &#8594;
      </span>
    </div>
  );
}
