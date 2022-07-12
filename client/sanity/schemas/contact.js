import {
  BadgeCheckIcon,
  ClockIcon,
  ExclamationIcon,
  NewspaperIcon,
} from "@heroicons/react/outline";
import React from "react";

export default {
  title: "Newsletter",
  name: "newsLetter",
  type: "document",
  icon: NewspaperIcon,

  fields: [
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Subscribe Time",
      name: "subscribeTime",
      type: "datetime",
    },
    {
      title: "Status",
      name: "status",
      type: "number",

      options: {
        list: [
          {
            title: "UnConfirm",
            value: 0,
          },
          {
            title: "Subscribed",
            value: 1,
          },
          {
            title: "UnSubscribe",
            value: 2,
          },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "status",
      media: "status",
    },
    prepare: (selection) => {
      const iconArray = [
        <ClockIcon />,
        <BadgeCheckIcon />,
        <ExclamationIcon />,
      ];
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: iconArray[selection.media],
      };
    },
  },
};
