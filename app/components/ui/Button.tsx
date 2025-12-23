import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-300 font-sans disabled:opacity-50 disabled:cursor-not-allowed";
  const variantStyles = {
    primary: "bg-gold text-forest hover:bg-gold-dark disabled:hover:bg-gold",
    secondary:
      "border border-gold text-gold hover:bg-gold hover:text-forest disabled:hover:bg-transparent",
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={combinedClassName}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
