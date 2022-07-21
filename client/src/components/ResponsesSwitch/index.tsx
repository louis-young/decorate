import { filledHeart, heart } from "../../assets/icons";
import { ToolbarButton } from "../ToolbarButton";
import type { ResponsesSwitchProps } from "./types";

export const ResponsesSwitch = ({
  hasResponses,
  onHasResponsesChange,
}: ResponsesSwitchProps) => {
  return (
    <ToolbarButton onClick={() => onHasResponsesChange(!hasResponses)}>
      <span className="text-gray-600 h-7 w-7 block m-auto">
        {hasResponses ? filledHeart : heart}
      </span>

      <span className="block mt-2">Responses</span>
    </ToolbarButton>
  );
};
