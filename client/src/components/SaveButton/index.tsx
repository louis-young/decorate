import { save } from "../../assets/icons";
import { ToolbarButton } from "../ToolbarButton";
import type { SaveButtonProps } from "./types";

export const SaveButton = ({ onClick }: SaveButtonProps) => {
  return (
    <ToolbarButton onClick={onClick} isFeatured>
      <span className="text-gray-600 h-7 w-7 block m-auto">{save}</span>

      <span className="block mt-2">Save</span>
    </ToolbarButton>
  );
};
