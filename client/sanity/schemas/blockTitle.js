import {
  rightBlock,
  centerBlock,
  leftBlock,
  colorBlock,
} from "../components/Block";
import {
  centerTextIcon,
  leftTextIcon,
  rightTextIcon,
} from "../components/Icon";

export default {
  name: "blockTitle",
  title: "Block Title",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "content",
    },
  ],
};
