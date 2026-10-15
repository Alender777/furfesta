import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  alt?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  eyebrow,
  alt = false,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section ${alt ? "section-alt" : ""} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
