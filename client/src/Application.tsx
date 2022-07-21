import classNames from "classnames";
import { PuffLoader as LoadingIndicator } from "react-spinners";
import { useRef, useState } from "react";
import { useQueryClient } from "react-query";
import { save } from "./utilities/fs";
import { getTweetQueryKey } from "./utilities/queryKeys";
import { getTweetCanvas } from "./utilities/canvas";
import { copyBlobToClipboard } from "./utilities/clipboard";
import { useTweetQuery } from "./hooks/queries/useTweetQuery";
import { gradients } from "./constants/gradients";
import { TweetLinkForm } from "./components/TweetLinkForm";
import { Tweet } from "./components/Tweet";
import { GradientPicker } from "./components/GradientPicker";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ResponsesSwitch } from "./components/ResponsesSwitch";
import { SizeSwitch } from "./components/SizeSwitch";
import { SaveButton } from "./components/SaveButton";
import { Toolbar } from "./components/Toolbar";
import { CopyButton } from "./components/CopyButton";
import type { Theme } from "./types/theme";
import type { Size } from "./types/size";

const [initialSelectedGradient] = gradients;

export const Application = () => {
  const [tweetId, setTweetId] = useState<string | undefined>();

  const [selectedGradient, setSelectedGradient] = useState(
    initialSelectedGradient
  );

  const [theme, setTheme] = useState<Theme>("light");

  const [size, setSize] = useState<Size>("large");

  const [hasResponses, setHasResponses] = useState(true);

  const tweetRef = useRef<HTMLDivElement | null>(null);

  const { tweet, tweetQueryStatus, isTweetQueryFetching } =
    useTweetQuery(tweetId);

  const queryClient = useQueryClient();

  const isTweetNotFound = !Boolean(tweet?.text);

  const handleTweetLinkFormSubmit = (newTweetId: string) => {
    const queryKey = getTweetQueryKey(tweetId);

    // Refetch the query (if it exists) to support refetching the same tweet and to introduce an error retry mechanism.
    queryClient.refetchQueries(queryKey);

    setTweetId(newTweetId);
  };

  const handleSelectedGradientChange = (newSelectedGradient: string) => {
    setSelectedGradient(newSelectedGradient);
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const handleHasResponsesChange = (newHasResponses: boolean) => {
    setHasResponses(newHasResponses);
  };

  const handleSizeChange = (newSize: Size) => {
    setSize(newSize);
  };

  const saveTweet = async () => {
    const tweetElement = tweetRef.current;

    if (!tweetElement) {
      return;
    }

    const tweetCanvas = await getTweetCanvas(tweetElement);

    if (!tweetCanvas) {
      return;
    }

    const mimeType = "image/png";

    const tweetImage = tweetCanvas.toDataURL(mimeType, 1.0);

    const fileName = "tweet.png";

    save(tweetImage, fileName);
  };

  const copyTweet = async () => {
    const tweetElement = tweetRef.current;

    if (!tweetElement) {
      return;
    }

    const tweetCanvas = await getTweetCanvas(tweetElement);

    // @ts-ignore
    tweetCanvas.toBlob((blob: Blob) => {
      copyBlobToClipboard(blob);
    });
  };

  return (
    <main className="p-10 h-screen relative flex flex-col gap-6 items-center">
      <div className="w-full max-w-lg">
        <TweetLinkForm
          onSubmit={handleTweetLinkFormSubmit}
          isDisabled={isTweetQueryFetching}
        />
      </div>

      <section className="flex-1 flex items-center justify-center">
        {tweetQueryStatus === "error" ? (
          <p
            role="alert"
            className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center text-lg font-medium"
          >
            Something went wrong, please try again.
          </p>
        ) : isTweetQueryFetching ? (
          <LoadingIndicator color="#5351d8" />
        ) : isTweetNotFound ? (
          <p
            role="alert"
            className="bg-gray-100 text-gray-800 p-4 rounded-lg text-center text-lg font-medium"
          >
            We couldn't find this tweet, please check the link and try again.
          </p>
        ) : tweet ? (
          <div
            className={classNames({
              "p-14 max-w-4xl rounded-lg shadow-2xl mb-10": true,
              [selectedGradient]: true,
            })}
            ref={tweetRef}
          >
            <Tweet
              tweet={tweet}
              theme={theme}
              hasResponses={hasResponses}
              size={size}
            />
          </div>
        ) : null}

        {tweet && (
          <Toolbar>
            <GradientPicker
              gradients={gradients}
              selectedGradient={selectedGradient}
              onSelectedGradientChange={handleSelectedGradientChange}
            />

            <ThemeSwitch theme={theme} onThemeChange={handleThemeChange} />

            <ResponsesSwitch
              hasResponses={hasResponses}
              onHasResponsesChange={handleHasResponsesChange}
            />

            <SizeSwitch size={size} onSizeChange={handleSizeChange} />

            <hr className="h-0.5 w-full block bg-gray-300 rounded-lg my-4" />

            <CopyButton onClick={copyTweet} />

            <SaveButton onClick={saveTweet} />
          </Toolbar>
        )}
      </section>
    </main>
  );
};
