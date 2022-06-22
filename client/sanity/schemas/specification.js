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
      ],
    },
  ],
};
