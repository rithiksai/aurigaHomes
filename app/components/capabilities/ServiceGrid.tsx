import { ServiceCard } from "./ServiceCard";
import type { Service } from "@/lib/data/services";

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="border-t border-[rgba(184,150,90,0.25)]">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
