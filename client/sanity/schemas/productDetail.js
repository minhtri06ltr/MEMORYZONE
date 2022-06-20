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
      of: [{ type: "block" }],
    },
    {
      name: "reverse",
      title: "Reverse",
      type: "boolean",
      initialValue: false,
    },
  ],
};
