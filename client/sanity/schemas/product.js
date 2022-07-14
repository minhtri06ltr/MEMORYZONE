import { CubeIcon } from "@heroicons/react/outline";
export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: CubeIcon,

  initialValue: {
    price: 0,
    countInStock: 0,
    reviews: [],
    viewCount: 0,
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
      description: `Add tags that describe this product.
        + Use p:["Product name"] for product tag
        + Use c:["Category name"] for category tag
        + Use b:["Brand name"] for brand tag `,
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        isHighlighted: true,
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
      name: "rating",
      title: "Rating",
      type: "number",
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
    {
      title: "View Count",
      name: "viewCount",
      type: "number",
      readOnly: true,
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
