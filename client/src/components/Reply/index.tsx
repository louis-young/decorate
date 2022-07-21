import classNames from "classnames";
import { verified } from "../../assets/icons";
import { parseText } from "../Tweet/utilities";
import type { ReplyProps } from "./types";

export const Reply = ({ reply, theme, size }: ReplyProps) => {
  const {
    profileImageUrl,
    name,
    username,
    text,
    isVerified,
    mentions,
    hashtags,
    urls,
    createdAt,
  } = reply;

  const parsedText = parseText({ text, mentions, hashtags, urls });

  const createdAtDate = new Date(createdAt);

  return (
    <article
      className={classNames({
        "font-sm p-4 mt-1 mb-6 rounded-xl border border-1 border-opacity-20":
          true,
        "border-black": theme === "light",
        "border-white": theme === "dark",
      })}
    >
      <ul className="flex align-center items-center gap-2">
        <li>
          <img
            src={profileImageUrl}
            className="rounded-full w-6 h-6"
            alt={name}
          />
        </li>
        <li className="font-semibold">{name}</li>

        {isVerified && (
          <li
            className={classNames({
              "transition-all duration-300": true,
              "w-3 h-3": size === "small",
              "w-4 h-4": size === "large",
            })}
          >
            {verified}
          </li>
        )}

        <li>@{username}</li>
        <li>·</li>
        <li>
          {createdAtDate.toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
          })}
        </li>
      </ul>

      <div
        className="pt-2 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: parsedText }}
      ></div>
    </article>
  );
};
