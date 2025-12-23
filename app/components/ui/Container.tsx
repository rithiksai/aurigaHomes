import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "base" | "wide";
}

export function Container({
  children,
  className,
  size = "base",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 md:px-8",
        {
          "max-w-4xl": size === "narrow",
          "max-w-7xl": size === "base",
          "max-w-screen-2xl": size === "wide",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
