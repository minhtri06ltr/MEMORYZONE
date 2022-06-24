import { ColorSwatchIcon } from "@heroicons/react/outline";
import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";

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
          type: "image",
        },
      ],
      options: {
        hotspot: true,
        sources: [Webcam],
      },
      validation: (Rule) => Rule.max(5),
    },
  ],
};
