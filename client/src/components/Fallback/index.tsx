import type { FallbackProps } from "react-error-boundary";

export const Fallback = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="p-10 h-screen flex items-center justify-center">
      <article role="alert" className="bg-gray-100 p-6 rounded-lg text-center">
        <h2 className="text-gray-800 text-lg font-medium">
          Something went wrong, please try again.
        </h2>

        <button
          onClick={resetErrorBoundary}
          className="py-3 px-6 bg-gray-700 text-white rounded mt-4"
        >
          Try again
        </button>
      </article>
    </div>
  );
};
