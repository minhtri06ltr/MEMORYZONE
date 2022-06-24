import { CubeIcon } from "@heroicons/react/outline";

export default {
  name: "orderItem",
  title: "Order Item",
  type: "object",
  icon: CubeIcon,
  fields: [
    {
      name: "productName",
      title: "Product Name",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
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
