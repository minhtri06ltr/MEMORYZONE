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
  name: "productDetail",
  title: "Product Detail",
  type: "object",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
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
    {
      name: "reverse",
      title: "Reverse",
      type: "boolean",
      initialValue: false,
    },
  ],
};
