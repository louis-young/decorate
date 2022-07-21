import type { Theme } from "../../types/theme";

export interface ThemeSwitchProps {
  theme: Theme;
  onThemeChange: (newTheme: Theme) => void;
}
