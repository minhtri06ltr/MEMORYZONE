import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";
import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const highlightIcon = () => (
  <span style={{ fontWeight: "bold" }}>H</span>
);
const highlightRender = (props) => {
  return (
    <span style={{ color: "#008744" }}>
      {props.children}
    </span>
  );
};
const centerBlock = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
    </div>
  );
};
const leftBlock = (props) => {
  return (
    <div style={{ textAlign: "left" }}>
      {props.children}
    </div>
  );
};
const rightBlock = (props) => {
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
      name: "specifications",
      title: "Specifications",
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
                title: "Check Mark",
                value: "checkMark",
                blockEditor: {
                  icon: () => (
                    <CheckCircleIcon
                      color="#008744"
                      height={22}
                      width={22}
                    />
                  ),
                  render: ({ children }) => {
                    return (
                      <span>
                        <CheckCircleIcon
                          color="#008744"
                          height={22}
                          style={{
                            marginRight: "0.5rem",
                          }}
                          width={22}
                        />
                        {children}
                      </span>
                    );
                  },
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
                  icon: () => (
                    <div>
                      <img src="https://img.icons8.com/material-outlined/18/undefined/align-center.png" />
                    </div>
                  ),
                  render: centerBlock,
                },
              },
              {
                title: "Right text",
                value: "rightText",
                blockEditor: {
                  icon: () => (
                    <div>
                      <img src="https://img.icons8.com/material-outlined/18/undefined/align-right.png" />
                    </div>
                  ),
                  render: rightBlock,
                },
              },
              {
                title: "Left text",
                value: "leftText",
                blockEditor: {
                  icon: () => (
                    <div>
                      <img src="https://img.icons8.com/material-outlined/18/undefined/align-left.png" />
                    </div>
                  ),
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
        {
          type: "youtube",
          icon: () => (
            <div>
              <img src="https://img.icons8.com/ios-filled/18/undefined/youtube-play.png" />
            </div>
          ),
        },
        {
          type: "seoImage",
          icon: () => (
            <div>
              <img src="https://img.icons8.com/ios-glyphs/18/undefined/picture.png" />
            </div>
          ),
        },
        {
          type: "productDetail",
          icon: () => (
            <div>
              <img src="https://img.icons8.com/external-glyph-wichaiwi/18/undefined/external-detail-e-commerce-website-glyph-wichaiwi.png" />
            </div>
          ),
        },
      ],
    },
  ],
};
