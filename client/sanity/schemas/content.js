import {
  rightBlock,
  centerBlock,
  leftBlock,
  colorBlock,
  checkBlock,
} from "../components/Block";
import {
  centerTextIcon,
  leftTextIcon,
  rightTextIcon,
  checkIcon,
} from "../components/Icon";

export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
      lists: [
        {
          title: "Numbered",
          value: "number",
        },
        {
          title: "Bullet",
          value: "bullet",
        },
        {
          title: "Check Mark",
          value: "checkMark",
          blockEditor: {
            icon: checkIcon,
            render: (props) => checkBlock(props),
          },
        },
      ],
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
              icon: leftTextIcon,
              render: rightBlock,
            },
          },
          {
            title: "Left text",
            value: "leftText",
            blockEditor: {
              icon: rightTextIcon,
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
      type: "muxVideo",
      icon: () => "🎬",
    },
    {
      type: "blockTitle",
      icon: () => "⛳️",
    },
  ],
};
