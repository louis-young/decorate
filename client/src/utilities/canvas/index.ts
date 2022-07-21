import htmlToCanvas from "html2canvas";

export const getTweetCanvas = async (tweet: HTMLElement) => {
  const canvas = await htmlToCanvas(tweet, { useCORS: true });

  return canvas;
};
