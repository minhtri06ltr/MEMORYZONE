export default {
  name: "orderList",
  title: "Order List",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
  ],
};
