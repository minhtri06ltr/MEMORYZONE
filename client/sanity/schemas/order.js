export default {
  name: "order",
  title: "Order",
  type: "document",

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
          { title: "Paypal", value: "paypal" },
          { title: "Standard", value: "standard" },
        ],

        layout: "radio",
      },
    },
    {
      name: "paymentProcess",
      title: "Payment Process",
      type: "object",
      fields: [
        {
          title: "Confirm",
          name: "confirm",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Confirm Time",
          name: "confirmTime",
          type: "datetime",
        },
        {
          title: "Prepare",
          name: "prepare",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Prepare Time",
          name: "prepareTime",
          type: "datetime",
        },
        {
          title: "Pickup",
          name: "pickup",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Pickup Time",
          name: "pickupTime",
          type: "datetime",
        },
        {
          title: "Delivery",
          name: "delivery",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Delivery Time",
          name: "deliveryTime",
          type: "datetime",
        },
        {
          title: "Successful",
          name: "successful",
          type: "boolean",
          initialValue: false,
        },
        {
          title: "Successful Time",
          name: "successfulTime",
          type: "datetime",
        },
      ],
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
};
