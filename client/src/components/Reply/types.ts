import type { Theme } from "../../types/theme";
import type { Reply } from "../../types/reply";
import type { Size } from "../../types/size";

export interface ReplyProps {
  reply: Reply;
  theme: Theme;
  size: Size;
}
