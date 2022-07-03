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
  preview: {
    select: {
      title: "imageAlt",
      media: "image",
      subtitle: "url",
    },
    prepare: (selection) => {
      console.log(selection);
      return {
        title: selection.title
          ? selection.title
          : "Missing Alternative text for image",
        subtitle: selection.subtitle
          ? selection.subtitle
          : "This image don't have url",
        media: selection.media,
      };
    },
  },
};
