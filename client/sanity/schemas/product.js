import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";
import { CubeIcon } from "@heroicons/react/outline";
import MediaAssetSource from "part:sanity-plugin-media/asset-source";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: CubeIcon,
  initialValue: {
    price: 0,
    countInStock: 0,
    reviews: [],
    sold: 0,
    rating: 0,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      //array of image
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
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
      name: "productBrand",
      title: "Product Brand",
      type: "reference",
      to: [{ type: "brand" }],
    },
    {
      name: "categoryList",
      title: "Category List",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
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
      type: "content",
    },
    {
      name: "description",
      title: "Description",
      type: "content",
    },
    {
      name: "specificationTable",
      title: "Specification Table",
      type: "array",
      of: [{ type: "specification" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "slug.current",
      media: "image.0",
    },
  },
};
