export const getTweetId = (url: string) => {
  const delimiter = "/";

  const segments = url.split(delimiter);

  const tweetId = segments[segments.length - 1];

  return tweetId;
};
