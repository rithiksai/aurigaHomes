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
        "border transition-all duration-300",
        variant === "dark"
          ? "bg-black/40 border-gold/20 backdrop-blur-sm hover:border-gold/50"
          : "bg-white border-[rgba(184,150,90,0.25)] hover:border-[#B8965A]/50",
        className
      )}
    >
      {children}
    </div>
  );
}
