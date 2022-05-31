export default {
  name: "orderItem",
  title: "Order Item",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
  ],
};
