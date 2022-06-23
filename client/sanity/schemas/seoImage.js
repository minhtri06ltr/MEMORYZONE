export default {
  name: "seoImage",
  title: "Seo Image",
  type: "object",

  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "imageAlt",
      title: "Image Alternative Text",
      type: "string",
      description:
        "Don't forget to make it SEO friendly!",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },

    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
