import { TicketIcon } from "@heroicons/react/outline";

export default {
  title: "Coupon",
  name: "coupon",
  type: "document",
  icon: TicketIcon,
  fields: [
    {
      name: "couponID",
      title: "Coupon ID",
      type: "string",
    },
    {
      name: "couponDescription",
      title: "Coupon Description",
      type: "string",
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
  ],
};
