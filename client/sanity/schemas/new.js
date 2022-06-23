import {
  rightBlock,
  centerBlock,
  leftBlock,
  colorBlock,
  linkBlock,
  checkBlock,
} from "../components/Block";
import {
  centerTextIcon,
  leftTextIcon,
  checkIcon,
  rightTextIcon,
} from "../components/Icon";

export default {
  name: "new",
  title: "New",
  type: "document",
  fields: [
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", //auto generate unique slug base on product's name
        maxLength: 96,
      },
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "seoImage",
    },
    {
      name: "description",
      title: "Description",
      type: "content",
    },
    {
      name: "comments",
      title: "New Comments",
      type: "array",
      of: [
        {
          type: "newComment",
        },
      ],
    },
  ],
};
