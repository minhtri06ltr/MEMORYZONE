import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";
import MyToolIcon from "../plugins/asset-via-webcam/MyToolIcon";

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
        { type: "block" },
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
