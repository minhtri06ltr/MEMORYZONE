export default {
  name: "product",
  title: "Product",
  type: "document",
  initialValue: {
    price: 0,
    countInStock: 0,
    numberReview: 0,
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
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "numberReview",
      title: "Number Review",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "reivews",
      title: "Reviews",
      type: "array",
      of: [
        {
          type: "review",
        },
      ],
    },
  ],
};
