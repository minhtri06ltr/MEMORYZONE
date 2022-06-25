import React from "react";

export default {
  name: "blockTitle",
  title: "Block Title",
  type: "object",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "content",
    },
  ],
  preview: {
    select: { title: "title", media: "⛳️" },
  },
};
