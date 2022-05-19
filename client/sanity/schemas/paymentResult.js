export default {
  name: "paymentResult",
  title: "Payment Result",
  type: "document",
  initialValue: {
    status: "Confirm",
  },
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "updateTime",
      title: "Update Time",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
  ],
};
