import { ServiceCard } from "./ServiceCard";
import type { Service } from "@/lib/data/services";

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className={service.id === 1 ? "md:col-span-2" : ""}
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
