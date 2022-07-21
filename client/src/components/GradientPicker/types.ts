export interface GradientPickerProps {
  gradients: string[];
  selectedGradient: string;
  onSelectedGradientChange: (newSelectedGradient: string) => void;
}
