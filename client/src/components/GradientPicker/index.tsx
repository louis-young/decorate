import classNames from "classnames";
import { useState } from "react";
import { Gradient } from "../Gradient";
import type { GradientPickerProps } from "./types";

export const GradientPicker = ({
  gradients,
  selectedGradient,
  onSelectedGradientChange,
}: GradientPickerProps) => {
  const [isGradientPickerOpen, setIsGradientPickerOpen] = useState(false);

  return (
    <div
      onMouseOver={() => setIsGradientPickerOpen(true)}
      onMouseLeave={() => setIsGradientPickerOpen(false)}
      className="relative w-full rounded-xl flex gap-2 justify-center p-4 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
    >
      <div>
        <div
          className={classNames({
            [selectedGradient]: true,
            "w-8 h-8 rounded-full m-auto": true,
          })}
        />

        <span className="block mt-2">Colour</span>
      </div>

      {isGradientPickerOpen && (
        <div className="absolute top-0 left-full pl-2">
          <form className="grid grid-cols-3 gap-2 w-max bg-white border border-1 border-gray-200 rounded-lg p-2">
            {gradients.map((gradient) => (
              <Gradient
                gradient={gradient}
                onSelectedGradientChange={onSelectedGradientChange}
                isSelectedGradient={gradient === selectedGradient}
                key={gradient}
              />
            ))}
          </form>
        </div>
      )}
    </div>
  );
};
