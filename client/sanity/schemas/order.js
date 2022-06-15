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
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Wait for confirm", value: "Wait for confirm" },
          { title: "Confirmed", value: "Confirmed" },
          { title: "Wait for pickup", value: "Wait for pickup" },
          { title: "Delivering", value: "Delivering" },
          { title: "Successful delivery", value: "Successful delivery" },
        ],
        layout: "radio",
      },
      initialValue: "Wait for confirm",
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
};
