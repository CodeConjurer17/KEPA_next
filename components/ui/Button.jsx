import Link from "next/link";
import "./styles/Button.css";

/**
 * Reusable button/link.
 *
 * <Button variant="primary" to="/shop">Poglej ponudbo</Button>
 * <Button variant="outline" icon={<IconArrowRight />}>Podrobnosti</Button>
 * <Button variant="accent" href="https://instagram.com">Sledi nam</Button>
 *
 * variant: "primary" | "accent" | "outline" | "ghost"
 * size:    "md" | "sm"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  to,
  href,
  className = "",
  ...rest
}) {
  const classes = `kepaBtn kepaBtn--${variant} kepaBtn--${size} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="kepaBtn__icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="kepaBtn__icon">{icon}</span>}
    </>
  );

  // internal route -> Next's Link (client-side navigation)
  if (to) {
    return (
      <Link href={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  // external url -> plain anchor
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}