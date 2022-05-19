export default {
  name: "review",
  title: "Review",
  type: "object",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "5 Star", value: 5 },
          { title: "4 Star", value: 4 },
          { title: "3 Star", value: 3 },
          { title: "2 Star", value: 2 },
          { title: "1 Star", value: 1 },
        ],
        layout: "radio",
      },
    },
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
