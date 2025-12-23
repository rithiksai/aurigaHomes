import { Card } from "../ui/Card";

interface Value {
  id: number;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {values.map((value) => (
        <Card key={value.id} className="p-8 text-center">
          <h3 className="text-xl font-display tracking-wide mb-4 text-gold">
            {value.title}
          </h3>
          <p className="text-charcoal/80 leading-relaxed">{value.description}</p>
        </Card>
      ))}
    </div>
  );
}
