export default {
  name: "banner",
  title: "Home Banner",
  type: "document",

  fields: [
    {
      name: "main",
      title: "Main Banner",
      type: "array",
      of: [
        {
          type: "seoImage",
        },
      ],

      validation: (Rule) => Rule.max(5),
    },
  ],
};
