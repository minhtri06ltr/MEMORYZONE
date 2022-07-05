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
    {
      name: "categorySlug",
      type: "slug",
      title: "Category Slug",
      options: {
        source: "categoryName",
        maxLength: 96,
        auto: true,
      },
    },
  ],
  preview: {
    select: {
      title: "categoryName",
      subtitle: "categorySlug",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        media: CollectionIcon,
        subtitle: selection.categorySlug,
      };
    },
  },
};
