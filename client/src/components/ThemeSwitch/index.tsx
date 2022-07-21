import { moon, sun } from "../../assets/icons";
import { ToolbarButton } from "../ToolbarButton";
import type { ThemeSwitchProps } from "./types";

export const ThemeSwitch = ({ theme, onThemeChange }: ThemeSwitchProps) => {
  return (
    <ToolbarButton
      onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
    >
      <span className="text-gray-600 h-7 w-7 block m-auto">
        {theme === "dark" ? sun : moon}
      </span>

      <span className="block mt-2">Tweet</span>
    </ToolbarButton>
  );
};
