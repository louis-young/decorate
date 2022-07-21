import { useQuery } from "react-query";
import { getTweetQueryKey } from "../../../utilities/queryKeys";
import { get } from "../../../utilities/http";
import { buildFullUrl } from "../../../utilities/url";
import { placeholderTweet } from "./constants";

export const useTweetQuery = (tweetId: string | undefined) => {
  const url = buildFullUrl(`/tweet/${tweetId}`);

  const queryKey = getTweetQueryKey(tweetId);

  const query = useQuery(queryKey, () => get(url), {
    placeholderData: placeholderTweet,
    enabled: Boolean(tweetId),
  });

  const {
    data: tweet,
    status: tweetQueryStatus,
    isFetching: isTweetQueryFetching,
    ...additionalQueryProperties
  } = query;

  return {
    tweet,
    tweetQueryStatus,
    isTweetQueryFetching,
    ...additionalQueryProperties,
  };
};
