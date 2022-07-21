export interface Reply {
  name: string;
  username: string;
  text: string;
  createdAt: string;
  authorId: string;
  id: string;
  isVerified: true;
  profileImageUrl: string;
  publicMetrics: {
    retweetCount: number;
    replyCount: number;
    likeCount: number;
    quoteCount: number;
  };
  urls: { url: string; displayUrl: string }[];
  hashtags: string[];
  mentions: string[];
}
