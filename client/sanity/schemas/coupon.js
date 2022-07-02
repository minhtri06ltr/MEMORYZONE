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
    {
      name: "salePercent",
      title: "Sale Percent",
      type: "number",
    },
    {
      name: "endTime",
      title: "End Time",
      type: "datetime",
    },
  ],
  preview: {
    select: {
      title: "couponID",
      subtitle: "couponDescription",
    },
    prepare: (selection) => {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
        media: TicketIcon,
      };
    },
  },
};
