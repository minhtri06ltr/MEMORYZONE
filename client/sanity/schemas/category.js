import { CollectionIcon } from "@heroicons/react/outline";

export default {
  name: "category",
  type: "document",
  title: "Category",
  icon: CollectionIcon,
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
