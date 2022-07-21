import classNames from "classnames";
import { twitter, verified } from "../../assets/icons";
import { parseText } from "./utilities";
import { Reply } from "../Reply";
import type { TweetProps } from "./types";

export const Tweet = ({ tweet, theme, hasResponses, size }: TweetProps) => {
  const {
    profileImageUrl,
    name,
    username,
    text,
    publicMetrics,
    createdAt,
    reply,
    isVerified,
    urls,
    mentions,
    hashtags,
    media,
  } = tweet;

  const parsedText = parseText({ text, mentions, hashtags, urls });

  const hasMedia = Boolean(media?.length);

  const createdAtDate = new Date(createdAt);

  const { retweetCount, replyCount, likeCount } = publicMetrics;

  return (
    <article
      className={classNames({
        "rounded-lg relative transition-all duration-300 pointer-events-none":
          true,
        "bg-white bg-opacity-60 text-black": theme === "light",
        "bg-black bg-opacity-70 text-white": theme === "dark",
        "p-8": size === "small",
        "p-10": size === "large",
      })}
    >
      <figure className="flex items-center gap-3">
        <img
          src={profileImageUrl}
          className={classNames({
            "rounded-full transition-all duration-300": true,
            "w-10 h-10": size === "small",
            "w-12 h-12": size === "large",
          })}
          alt={name}
        />

        <figcaption>
          <div className="flex items-center gap-2">
            <h2 className="font-semibold">{name}</h2>

            {isVerified && (
              <div
                className={classNames({
                  "transition-all duration-300": true,
                  "w-4 h-4": size === "small",
                  "w-5 h-5": size === "large",
                })}
              >
                {verified}
              </div>
            )}
          </div>

          <div className="opacity-60 text-sm">@{username}</div>
        </figcaption>
      </figure>

      <p
        className={classNames({
          "whitespace-pre-wrap py-6 opacity-90": true,
          "text-xl": size === "small",
          "text-2xl": size === "large",
        })}
        dangerouslySetInnerHTML={{ __html: parsedText }}
      ></p>

      {hasMedia &&
        media.map((url) => (
          <img
            src={url}
            alt={name}
            className="w-full max-h-96 object-cover rounded-lg"
            key={url}
          />
        ))}

      {hasMedia && <hr className="h-6" />}

      {reply && <Reply reply={reply} theme={theme} size={size} />}

      <time
        dateTime={createdAt}
        className={classNames({
          "opacity-60 block": true,
          "text-sm": size === "small",
          "text-md": size === "large",
        })}
      >
        <span className="uppercase">
          {createdAtDate.toLocaleString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>{" "}
        ·{" "}
        {createdAtDate.toLocaleString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </time>

      {hasResponses && (
        <ul
          className={classNames({
            "flex gap-4 pt-2 opacity-90": true,
            "text-sm": size === "small",
            "text-md": size === "large",
          })}
        >
          <li>
            <span>{replyCount}</span> replies
          </li>
          <li>
            <span>{retweetCount}</span> shares
          </li>
          <li>
            <span>{likeCount}</span> likes
          </li>
        </ul>
      )}

      <div
        className={classNames({
          "absolute top-6 right-6 transition-all duration-300": true,
          "w-7 h-7": size === "small",
          "w-8 h-8": size === "large",
        })}
        style={{
          color: "#1ea0f1",
        }}
      >
        {twitter}
      </div>
    </article>
  );
};
