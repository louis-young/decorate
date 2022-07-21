import classNames from "classnames";
import type { ChangeEvent } from "react";
import type { GradientProps } from "./types";

export const Gradient = ({
  gradient,
  onSelectedGradientChange,
  isSelectedGradient,
}: GradientProps) => {
  const handleSelectedGradientChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value: newSelectedGradient } = event.target;

    onSelectedGradientChange(newSelectedGradient);
  };

  return (
    <label
      className={classNames({
        [gradient]: true,
        "block w-12 h-12 rounded-lg hover:opacity-80 cursor-pointer": true,
        "border-blue-500 border-2": isSelectedGradient,
      })}
      htmlFor={gradient}
    >
      <input
        type="radio"
        name="gradient"
        id={gradient}
        value={gradient}
        checked={isSelectedGradient}
        onChange={handleSelectedGradientChange}
        className="appearance-none"
      />
    </label>
  );
};
