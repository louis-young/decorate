import type { Reply } from "./reply";

export interface Tweet {
  name: string;
  username: string;
  profileImageUrl: string;
  text: string;
  createdAt: string;
  isVerified: boolean;
  publicMetrics: {
    retweetCount: number;
    replyCount: number;
    likeCount: number;
    quoteCount: number;
  };
  media: string[];
  urls: { url: string; displayUrl: string }[];
  hashtags: string[];
  mentions: string[];
  reply: Reply;
}
