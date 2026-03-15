import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "outline-gold";
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
    primary: "bg-[#161412] text-white hover:bg-[#B8965A] disabled:hover:bg-[#161412]",
    secondary: "border border-[#161412] text-[#161412] hover:bg-[#161412] hover:text-white disabled:hover:bg-transparent",
    ghost: "border border-white text-white hover:bg-white hover:text-[#161412] disabled:hover:bg-transparent",
    "outline-gold": "border border-[#B8965A] text-[#B8965A] hover:bg-[#B8965A] hover:text-white disabled:hover:bg-transparent",
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
