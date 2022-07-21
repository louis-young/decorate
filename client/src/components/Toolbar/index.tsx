import type { ToolbarProps } from "./types";

export const Toolbar = ({ children }: ToolbarProps) => {
  return (
    <aside className="fixed left-10 top-1/2 transform -translate-y-1/2 w-34 shadow-xl rounded-lg bg-gray-50 text-sm border border-1 border-gray-200 text-md text-gray-800 p-4 flex flex-col gap-2 items-center">
      {children}
    </aside>
  );
};
