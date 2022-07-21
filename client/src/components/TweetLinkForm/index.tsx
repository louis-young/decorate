import { useState } from "react";
import { getTweetId } from "../../utilities/tweet";
import { isValidTweetUrl } from "./utilities";
import type { FormEvent } from "react";
import type { TweetLinkFormProps } from "./types";

const initialUrl = "";

export const TweetLinkForm = ({ onSubmit, isDisabled }: TweetLinkFormProps) => {
  const [url, setUrl] = useState(initialUrl);

  const [isFocused, setIsFocused] = useState(false);

  const isInvalidTweetUrl = !isValidTweetUrl(url);

  const isFormDisabled = isDisabled || isInvalidTweetUrl;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormDisabled) {
      return;
    }

    const newTweetId = getTweetId(url);

    onSubmit(newTweetId);
  };

  const isHintVisible = (isInvalidTweetUrl || isFocused) && Boolean(url);

  return (
    <form className="flex gap-3 flex-col items-center" onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus
        className="bg-gray-50 text-sm p-4 w-full shadow-xl rounded-lg border border-1 border-gray-200 text-md text-gray-800 placeholder:text-gray-600 placeholder:text-center"
        type="search"
        name="url"
        id="url"
        placeholder="Enter Twitter post link"
        aria-label="Tweet link"
      />

      <span className="text-gray-700 text-xs block h-2 relative z-10">
        {isHintVisible && (
          <span>
            {isInvalidTweetUrl ? "Invalid tweet link" : "Press Enter to search"}
          </span>
        )}
      </span>
    </form>
  );
};
