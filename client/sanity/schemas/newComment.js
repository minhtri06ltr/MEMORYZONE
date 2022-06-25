import React from "react";

export default {
  name: "newComment",
  title: "New Comment",
  type: "object",

  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
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
      initialValue: false,
    },
    {
      name: "createdTime",
      title: "Created Time",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "comment",
      fullName: "fullName",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: (
          <img
            src={`https://api.multiavatar.com/${selection.fullName}.png?apikey=${process.env.SANITY_STUDIO_MULTIAVATAR_API_KEY}`}
          />
        ),
      };
    },
  },
};
