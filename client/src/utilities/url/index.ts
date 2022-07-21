export const buildFullUrl = (url: string) => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

  const fullUrl = `${apiBaseUrl}${url}`;

  return fullUrl;
};
