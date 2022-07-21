export const get = async (endpoint: string) => {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw new Error("Unsuccessful request.");
  }

  const data = await response.json();

  return data;
};
