import React from "react";

export default {
  name: "reply",
  title: "Reply",
  type: "object",

  fields: [
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
