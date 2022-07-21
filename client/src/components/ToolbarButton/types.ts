import type { ReactNode } from "react";

export interface ToolbarButtonProps {
  onClick: () => void;
  isFeatured?: boolean;
  children: ReactNode;
}
