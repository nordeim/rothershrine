import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-shrine-gold-500 text-shrine-maroon-900 hover:bg-shrine-gold-300 shadow-shrine",
  secondary:
    "bg-shrine-maroon-600 text-shrine-cream hover:bg-shrine-maroon-500",
  ghost: "bg-transparent text-shrine-maroon-600 hover:bg-shrine-maroon-50",
  "outline-light":
    "border border-shrine-cream/70 text-shrine-cream hover:bg-shrine-cream/10",
};

export function Button({ to, href, variant = "primary", children, className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
    variantClasses[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
