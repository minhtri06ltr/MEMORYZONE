import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";

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
  checkIcon,
  rightTextIcon,
} from "../components/Icon";

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
                title: "Check Mark",
                value: "checkMark",
                blockEditor: {
                  icon: checkIcon,
                  render: checkBlock,
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
          type: "blockTitle",
          icon: () => "⛳️",
        },
      ],
    },
    {
      name: "specificationTable",
      title: "Specification Table",
      type: "array",
      of: [{ type: "specification" }],
    },
  ],
};
