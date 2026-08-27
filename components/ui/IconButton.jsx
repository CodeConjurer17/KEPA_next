import "./styles/IconButton.css";

/**
 * Small circular button for a single icon — social links, search, menu toggle.
 *
 * <IconButton as="a" href="https://instagram.com/..." label="Instagram">
 *   <IconInstagram />
 * </IconButton>
 */
export default function IconButton({
  as = "button",
  label,
  children,
  className = "",
  ...rest
}) {
  const Tag = as;
  return (
    <Tag
      className={`icon-btn ${className}`.trim()}
      aria-label={label}
      type={as === "button" ? "button" : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}