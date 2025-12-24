import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function Card({ children, className, variant = "light" }: CardProps) {
  return (
    <div
      className={cn(
        "border transition-all duration-300 hover:border-gold/50",
        variant === "dark"
          ? "bg-black/40 border-gold/20 backdrop-blur-sm"
          : "bg-cream border-sage/10",
        className
      )}
    >
      {children}
    </div>
  );
}
