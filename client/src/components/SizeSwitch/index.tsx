import { circle, filledCircle } from "../../assets/icons";
import { ToolbarButton } from "../ToolbarButton";
import type { SizeSwitchProps } from "./types";

export const SizeSwitch = ({ size, onSizeChange }: SizeSwitchProps) => {
  return (
    <ToolbarButton
      onClick={() => onSizeChange(size === "large" ? "small" : "large")}
    >
      <span className="text-gray-600 h-7 w-7 block m-auto">
        {size === "large" ? filledCircle : circle}
      </span>

      <span className="block mt-2">Size</span>
    </ToolbarButton>
  );
};
