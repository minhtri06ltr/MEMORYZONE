import { UserIcon } from "@heroicons/react/outline";
import React from "react";

export default {
  name: "user",
  title: "User",
  type: "document",
  icon: UserIcon,

  initialValue: {
    isAdmin: false,
  },
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "isAdmin",
      title: "Admin",
      type: "boolean",
    },
    {
      name: "addressList",
      title: "Address List",
      type: "array",
      of: [{ type: "address" }],
    },
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      subtitle: "email",
    },
    prepare: (selection) => {
      return {
        title: `${selection.firstName} ${selection.lastName}`,
        subtitle: selection.subtitle,
        media: (
          <img
            src={`https://api.multiavatar.com/${selection.subtitle}.png?apikey=${process.env.SANITY_STUDIO_MULTIAVATAR_API_KEY}`}
          />
        ),
      };
    },
  },
};
