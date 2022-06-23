export default {
  name: "newComment",
  title: "New Comment",
  type: "object",

  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "isApprove",
      title: "Approve",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "createdTime",
      title: "Created Time",
      type: "datetime",
    },
  ],
};
