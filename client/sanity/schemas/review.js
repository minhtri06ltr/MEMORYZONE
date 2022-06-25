import React from "react";

export default {
  name: "review",
  title: "Review",
  type: "object",
  initialValue: {
    isApprove: false,
  },
  fields: [
    {
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "5 Star", value: 5 },
          { title: "4 Star", value: 4 },
          { title: "3 Star", value: 3 },
          { title: "2 Star", value: 2 },
          { title: "1 Star", value: 1 },
        ],
        layout: "radio",
      },
    },
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "isApprove",
      title: "Approve",
      type: "boolean",
    },
    {
      name: "reply",
      title: "Reply",
      type: "array",
      of: [
        {
          type: "reply",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      //array of image
      type: "array",

      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "createTime",
      title: "Create Time",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "comment",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: (
          <img
            src={`https://ui-avatars.com/api/?rounded=true&size=32&name=${selection.title.replace(
              " ",
              "+",
            )}&font-size=0.42&color=ffffff&background=666&bold=true`}
          />
        ),
      };
    },
  },
};
