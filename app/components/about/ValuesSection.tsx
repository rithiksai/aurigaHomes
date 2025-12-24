import { Card } from "../ui/Card";

interface Value {
  id: number;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
  variant?: "light" | "dark";
}

export function ValuesSection({ values, variant = "light" }: ValuesSectionProps) {
  const isDark = variant === "dark";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {values.map((value) => (
        <Card key={value.id} className="p-8 text-center flex flex-col justify-center" variant={variant}>
          <h3 className="text-xl font-display tracking-wide mb-4 text-gold">
            {value.title}
          </h3>
          <p className={`leading-relaxed ${isDark ? "text-cream/80" : "text-charcoal/80"}`}>
            {value.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
