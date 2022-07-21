import type { Size } from "../../types/size";
import type { Theme } from "../../types/theme";
import type { Tweet } from "../../types/tweet";

export interface TweetProps {
  tweet: Tweet;
  theme: Theme;
  hasResponses: boolean;
  size: Size;
}

export interface ParseTextParameters {
  text: Tweet["text"];
  mentions: Tweet["mentions"];
  hashtags: Tweet["hashtags"];
  urls: Tweet["urls"];
}
