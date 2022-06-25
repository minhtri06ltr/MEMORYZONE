import { ChipIcon } from "@heroicons/react/outline";
import React from "react";

export default {
  name: "specification",
  title: "Specification",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "content",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (selection) => {
      return {
        title: selection.title,

        media: <ChipIcon />,
      };
    },
  },
};
