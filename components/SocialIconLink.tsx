import styles from "./SocialIconLink.module.css";

type SocialIconLinkProps = {
  href: string;
  label: string;
  variant?: "footer" | "contact";
  iconClassName?: string;
  children: React.ReactNode;
};

export default function SocialIconLink({
  href,
  label,
  variant = "footer",
  iconClassName,
  children,
}: SocialIconLinkProps) {
  const isMailto = href.startsWith("mailto:");

  return (
    <a
      href={href}
      className={`${styles.link} ${styles[variant]} ${iconClassName ?? ""}`}
      aria-label={label}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
