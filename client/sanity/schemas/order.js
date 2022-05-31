export default {
  name: "order",
  title: "Order",
  type: "document",
  initialValue: {
    taxPrice: 0.0,
  },
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      weak: true,
      to: [{ type: "user" }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Guest", value: "guest" },
          { title: "Account", value: "account" },
        ],
        layout: "radio",
      },
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
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [{ title: "Paypal", value: "paypal" }],
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
          initialValue: new Date().toISOString(),
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
    },
    {
      name: "shippingPrice",
      title: "Shipping Price",
      type: "number",
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
  ],
};
