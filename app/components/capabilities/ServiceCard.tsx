import { Card } from "../ui/Card";
import type { Service } from "@/lib/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="p-8 md:p-10 group hover:scale-[1.02] transition-transform duration-300">
      <div className="text-6xl md:text-7xl font-display text-gold/20 mb-6 group-hover:text-gold/40 transition-colors">
        {service.number}
      </div>
      <h3 className="text-2xl md:text-3xl font-display tracking-wide mb-4 group-hover:text-gold transition-colors">
        {service.title}
      </h3>
      <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
    </Card>
  );
}
