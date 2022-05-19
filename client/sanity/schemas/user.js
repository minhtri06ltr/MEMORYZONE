export default {
  name: "user",
  title: "User",
  type: "document",
  initialValue: {
    isAdmin: false,
  },
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "slug",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "isAdmin",
      title: "Admin",
      type: "boolean",
    },
  ],
};
