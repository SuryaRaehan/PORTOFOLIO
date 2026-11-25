import type { CSSProperties } from "react";

export default function stagger(index: number): CSSProperties {
  return { "--d": index } as CSSProperties;
}
