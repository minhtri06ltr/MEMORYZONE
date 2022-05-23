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
      name: "reply",
      title: "Reply",
      type: "array",
      of: [
        {
          type: "reply",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      //array of image
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "createTime",
      title: "Create Time",
      type: "datetime",
    },
  ],
};
