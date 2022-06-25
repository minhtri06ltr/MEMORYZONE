export default {
  name: "productDetail",
  title: "Product Detail",
  type: "object",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "seoImage",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "content",
    },
    {
      name: "reverse",
      title: "Reverse",
      type: "boolean",
      initialValue: false,
    },
  ],
};
