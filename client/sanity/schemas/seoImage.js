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
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
  ],
};
