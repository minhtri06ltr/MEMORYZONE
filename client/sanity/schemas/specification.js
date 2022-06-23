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
  name: "specification",
  title: "Specification",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "content",
    },
  ],
};
