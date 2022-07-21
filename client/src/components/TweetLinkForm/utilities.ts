export const isValidTweetUrl = (url: string) => {
  if (!url) {
    // An empty string is not a constructable URL.
    return;
  }

  const lowerCaseUrl = url.toLowerCase();

  try {
    const { host, pathname } = new URL(lowerCaseUrl);

    const [, username, type, id] = pathname.split("/");

    const isValidHost = host === "twitter.com";

    const isValidUsername = isNaN(Number(username));

    const isValidType = type === "status";

    const isValidId = !isNaN(Number(id));

    const isValidTweetUrl =
      isValidHost && isValidUsername && isValidType && isValidId;

    return isValidTweetUrl;
  } catch {
    return false;
  }
};
