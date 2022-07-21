const queryKeys = {
  tweet: "tweet",
};

export const getTweetQueryKey = (tweetId: string | undefined) => {
  return [queryKeys.tweet, tweetId];
};
