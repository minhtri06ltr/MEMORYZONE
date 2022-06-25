export default {
  name: "seoImage",
  title: "Seo Image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "url",
      title: "Link URL",
      type: "url",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: "blank",
      title: "Open in new tab",
      type: "boolean",
    },
  ],
};
