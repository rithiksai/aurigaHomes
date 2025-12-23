import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-cream border border-sage/10 transition-all duration-300 hover:border-gold/50",
        className
      )}
    >
      {children}
    </div>
  );
}
