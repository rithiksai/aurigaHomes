import { cn } from "@/lib/utils/cn";

interface HeadingProps {
  children: React.ReactNode;
  variant?: "hero" | "h1" | "h2" | "h3";
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}

export function Heading({
  children,
  variant = "h1",
  className,
  as,
}: HeadingProps) {
  const Tag = as || (variant === "hero" ? "h1" : variant);

  const variants = {
    hero: "text-5xl md:text-7xl lg:text-8xl font-display tracking-wide",
    h1: "text-4xl md:text-6xl font-display tracking-wide",
    h2: "text-3xl md:text-5xl font-display tracking-wide",
    h3: "text-2xl md:text-4xl font-display tracking-wide",
  };

  return (
    <Tag className={cn(variants[variant], "leading-tight", className)}>
      {children}
    </Tag>
  );
}
