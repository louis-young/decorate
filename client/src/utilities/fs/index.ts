import toast from "react-hot-toast";

export const save = (blob: string, fileName: string) => {
  const link = document.createElement("a");

  link.href = blob;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  link.remove();

  toast.success("Saved tweet.");
};
