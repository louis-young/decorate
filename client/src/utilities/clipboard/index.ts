import toast from "react-hot-toast";

export const copyBlobToClipboard = (blob: Blob) => {
  try {
    // @ts-ignore
    navigator.clipboard.write([
      // @ts-ignore
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ]);

    toast.success("Successfully copied tweet.");
  } catch (error) {
    console.error(error);

    toast.error("Failed to copy tweet.");
  }
};
