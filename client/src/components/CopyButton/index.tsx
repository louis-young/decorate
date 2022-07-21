import { copy } from "../../assets/icons";
import { ToolbarButton } from "../ToolbarButton";
import type { CopyButtonProps } from "./types";

export const CopyButton = ({ onClick }: CopyButtonProps) => {
  return (
    <ToolbarButton onClick={onClick} isFeatured>
      <span className="text-gray-600 h-7 w-7 block m-auto">{copy}</span>

      <span className="block mt-2">Copy</span>
    </ToolbarButton>
  );
};
