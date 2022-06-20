import React from "react";

const highlightIcon = () => (
  <span style={{ fontWeight: "bold" }}>H</span>
);
const highlightRender = (props) => {
  console.log(props);
  return (
    <span style={{ color: "#008744" }}>
      {props.children}
    </span>
  );
};
const centerBlock = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
    </div>
  );
};
const leftBlock = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "left" }}>
      {props.children}
    </div>
  );
};
const rightBlock = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "right" }}>
      {props.children}
    </div>
  );
};

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
                title: "Highlight",
                value: "highlight",
                blockEditor: {
                  icon: highlightIcon,
                  render: highlightRender,
                },
              },
              {
                title: "Center text",
                value: "centerText",
                blockEditor: {
                  icon: highlightIcon,
                  render: centerBlock,
                },
              },
              {
                title: "Right text",
                value: "rightText",
                blockEditor: {
                  icon: highlightIcon,
                  render: rightBlock,
                },
              },
              {
                title: "Left text",
                value: "leftText",
                blockEditor: {
                  icon: highlightIcon,
                  render: leftBlock,
                },
              },
            ],
            annotations: [
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
                blockEditor: {
                  render: ({ children }) => (
                    <span
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      {children}
                    </span>
                  ),
                },
              },
            ],
          },
        },
      ],
    },
    {
      name: "reverse",
      title: "Reverse",
      type: "boolean",
      initialValue: false,
    },
  ],
};
