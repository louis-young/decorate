import type { Size } from "../../types/size";

export interface SizeSwitchProps {
  size: Size;
  onSizeChange: (newSize: Size) => void;
}
