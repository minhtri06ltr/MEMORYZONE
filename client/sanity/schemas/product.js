import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";
import MyToolIcon from "../plugins/asset-via-webcam/MyToolIcon";
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
  name: "product",
  title: "Product",
  type: "document",
  initialValue: {
    price: 0,
    countInStock: 0,
    reviews: [],
    sold: 0,
    rating: 0,
    description: [],
  },
  fields: [
    {
      name: "image",
      title: "Image",
      //array of image
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
        sources: [Webcam],
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "productTag",
      title: "Product Tag",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", //auto generate unique slug base on product's name
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "countInStock",
      title: "Count InStock",
      type: "number",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "review",
        },
      ],
    },
    {
      name: "sold",
      title: "Sold",
      type: "number",
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
        { type: "youtube", icon: MyToolIcon },
        { type: "seoImage", icon: MyToolIcon },
        {
          type: "productDetail",
          icon: MyToolIcon,
        },
      ],
    },
  ],
};
