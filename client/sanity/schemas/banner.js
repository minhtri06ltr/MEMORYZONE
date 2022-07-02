import { ColorSwatchIcon } from "@heroicons/react/outline";

export default {
  name: "banner",
  title: "Home Banner",
  type: "document",
  icon: ColorSwatchIcon,
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
