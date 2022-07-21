import classNames from "classnames";
import type { ToolbarButtonProps } from "./types";

export const ToolbarButton = ({
  onClick,
  isFeatured = false,
  children,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames({
        "w-full py-4 px-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer rounded-xl":
          true,
        "bg-gray-100 hover:bg-gray-200": isFeatured,
      })}
    >
      {children}
    </button>
  );
};
