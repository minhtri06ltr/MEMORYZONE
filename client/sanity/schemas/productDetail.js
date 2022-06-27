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
      name: "position",
      title: "Content Position",
      description:
        "Where should we put image in this block?",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "left",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image.image",
      subtitle: "position",
    },
  },
};
