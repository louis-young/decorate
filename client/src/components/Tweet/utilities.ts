import { pipe } from "ramda";
import type { Tweet } from "../../types/tweet";
import type { ParseTextParameters } from "./types";

const highlightMentions = (mentions: Tweet["mentions"]) => (text: string) => {
  return mentions?.reduce((accumulator, mention) => {
    return accumulator.replace(
      `@${mention}`,
      `<a style="color: #1ea0f1;" href="https://twitter.com/${mention}" target="_blank"/>@${mention}</a>`
    );
  }, text);
};

const highlightHashtags = (hashtags: Tweet["hashtags"]) => (text: string) => {
  return hashtags?.reduce((accumulator, mention) => {
    return accumulator.replace(
      `#${mention}`,
      `<a style="color: #1ea0f1;" href="https://twitter.com/search?q=${mention}" target="_blank"/>#${mention}</a>`
    );
  }, text);
};

const highlightUrls = (urls: Tweet["urls"]) => (text: string) => {
  return urls?.reduce((accumulator, { url, displayUrl }) => {
    const isMediaUrl = displayUrl.startsWith("pic.twitter.com");

    const replace = isMediaUrl
      ? ""
      : `<a style="color: #1ea0f1;" href="${url}" target="_blank"/>${displayUrl}</a>`;

    return accumulator.replace(url, replace);
  }, text);
};

export const parseText = ({
  text,
  mentions,
  hashtags,
  urls,
}: ParseTextParameters) => {
  const parsedText = pipe(
    highlightMentions(mentions),
    highlightHashtags(hashtags),
    highlightUrls(urls)
  )(text);

  return parsedText;
};
