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
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            decorators: [
              {
                title: "Strong",
                value: "strong",
              },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              {
                title: "Underline",
                value: "underline",
              },
              {
                title: "Strike",
                value: "strike-through",
              },

              {
                title: "Center text",
                value: "centerText",
                blockEditor: {
                  icon: centerTextIcon,
                  render: centerBlock,
                },
              },
              {
                title: "Right text",
                value: "rightText",
                blockEditor: {
                  icon: rightTextIcon,
                  render: rightBlock,
                },
              },
              {
                title: "Left text",
                value: "leftText",
                blockEditor: {
                  icon: leftTextIcon,
                  render: leftBlock,
                },
              },
            ],
            annotations: [
              {
                title: "Color",
                name: "color",
                type: "color",
                blockEditor: {
                  icon: () => "🎨",
                  render: colorBlock,
                },
              },
              {
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "youtube",
          icon: () => "💻",
        },
        {
          type: "seoImage",
          icon: () => "🗻",
        },
        {
          type: "productDetail",
          icon: () => "📘",
        },
        {
          type: "table",
          icon: () => "📰",
        },
        {
          type: "blockTitle",
          icon: () => "⛳️",
        },
      ],
    },
  ],
};
