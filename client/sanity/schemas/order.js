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
      name: "shippingAddress",
      title: "Shipping Address",
      type: "shippingAddress",
    },
    {
      name: "orderList",
      title: "Order List",
      type: "array",
      of: [{ type: "orderList" }],
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
    },
    {
      name: "paymentResult",
      title: "Payment Result",
      type: "paymentResult",
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
      name: "isDelivery",
      title: "Delivery",
      type: "boolean",
    },
    {
      name: "paidAt",
      title: "Paid Time",
      type: "string",
    },
    {
      name: "deliveryAt",
      title: "Delivery Time",
      type: "string",
    },
  ],
};
