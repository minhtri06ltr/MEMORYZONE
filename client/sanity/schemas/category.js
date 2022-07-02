export default {
  name: "category",
  type: "document",
  title: "Category",

  fields: [
    {
      name: "categoryName",
      type: "string",
      title: " Category Name",
    },
  ],
  preview: {
    select: {
      title: "categoryName",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        media: CollectionIcon,
      };
    },
  },
};
