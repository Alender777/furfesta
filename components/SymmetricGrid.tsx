import { Children, ReactNode } from "react";
import styles from "./SymmetricGrid.module.css";

type Columns = 2 | 3 | 4;

type SymmetricGridProps = {
  columns: Columns;
  variant?: "info" | "highlight" | "booth";
  children: ReactNode;
};

export default function SymmetricGrid({
  columns,
  variant = "info",
  children,
}: SymmetricGridProps) {
  const items = Children.toArray(children);
  const remainder = items.length % columns;
  const padCount = remainder === 0 ? 0 : columns - remainder;

  return (
    <div
      className={`${styles.grid} ${styles[`cols${columns}`]} ${styles[variant]}`}
    >
      {items}
      {Array.from({ length: padCount }).map((_, i) => (
        <div
          key={`pad-${i}`}
          className={styles.placeholder}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
