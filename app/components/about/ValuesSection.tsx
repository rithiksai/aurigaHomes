interface Value {
  id: number;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
  variant?: "light" | "dark";
}

export function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <div className="border-t border-[rgba(184,150,90,0.25)]">
      {values.map((value, index) => (
        <div
          key={value.id}
          className="border-b border-[rgba(184,150,90,0.25)] py-8 flex items-start gap-8"
        >
          <span className="font-display text-5xl font-light text-[rgba(184,150,90,0.3)] w-16 flex-shrink-0">
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-display text-xl font-normal text-[#161412] mb-2">
              {value.title}
            </h3>
            <p className="text-sm font-light text-[#4A443C] leading-relaxed">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
