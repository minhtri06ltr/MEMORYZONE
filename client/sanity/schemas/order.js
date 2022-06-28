import {
  ClipboardListIcon,
  BadgeCheckIcon,
  TruckIcon,
  GiftIcon,
  CurrencyDollarIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import React from "react";

export default {
  name: "order",
  title: "Order",
  type: "document",
  icon: ClipboardListIcon,
  fields: [
    {
      name: "guestName",
      title: "Guest Name",
      type: "string",
      hidden: ({ value }) => !value,
    },
    {
      name: "guestEmail",
      title: "Guest Email",
      type: "string",
      hidden: ({ value }) => !value,
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      hidden: ({ value }) => !value,
    },

    {
      name: "shippingAddress",
      title: "Shipping Address",
      type: "shippingAddress",
    },
    {
      name: "orderList",
      title: "Order List",
      type: "array",
      of: [{ type: "orderItem" }],
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
      options: {
        list: [
          { title: "Paypal", value: "Paypal" },
          {
            title: "Standard",
            value: "standard",
          },
        ],

        layout: "radio",
      },
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "number",
      options: {
        list: [
          {
            title: "Wait for confirm",
            value: 0,
          },
          {
            title: "Confirmed",
            value: 1,
          },
          {
            title: "Wait for pickup",
            value: 2,
          },
          {
            title: "Delivering",
            value: 3,
          },
          {
            title: "Successful delivery",
            value: 4,
          },
        ],
        layout: "radio",
      },
      initialValue: 0,
    },
    {
      name: "taxPrice",
      title: "Tax Price",
      type: "number",
      initialValue: 0,
    },
    {
      name: "shippingPrice",
      title: "Shipping Price",
      type: "number",
      initialValue: 0,
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "isPaid",
      title: "Paid",
      type: "boolean",
      initialValue: false,
    },

    {
      name: "paidAt",
      title: "Paid Time",
      type: "datetime",
    },

    {
      name: "orderAt",
      title: "Order Time",
      type: "datetime",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Guest", value: "guest" },
          { title: "Account", value: "account" },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      userEmail: "user.email",
      guestEmail: "guestEmail",
      userFirstName: "user.firstName",
      userLastName: "user.lastName",
      guestName: "guestName",
      media: "orderStatus",
    },
    prepare: (selection) => {
      const iconArray = [
        <AnnotationIcon />,
        <BadgeCheckIcon />,
        <GiftIcon />,
        <TruckIcon />,
        <CurrencyDollarIcon />,
      ];

      return {
        title:
          selection.guestName === undefined
            ? `${selection.userFirstName} ${selection.userLastName}`
            : selection.guestName,

        subtitle:
          selection.guestEmail === undefined
            ? selection.userEmail
            : selection.guestEmail,
        media: iconArray[selection.media],
      };
    },
  },
};
