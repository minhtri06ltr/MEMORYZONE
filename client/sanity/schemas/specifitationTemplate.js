export default {
  name: "specificationTemplate",
  title: "Specification Template",
  type: "document",
  fields: [
    {
      name: "specificationName",
      title: "Specification Name",
      type: "string",
      initialValue: "Laptop",
    },
    {
      name: "specificationArray",
      title: "Specification Array",
      type: "array",
      of: [
        {
          name: "CPU",
          type: "object",
          fields: [
            {
              name: "specificationCPU",
              title: "Specification CPU",
              type: "string",
              initialValue: "CPU",
            },
            {
              name: "specificationCPUValue",
              title: "Specification CPU Value",
              type: "content",
            },
          ],
        },
        {
          type: "object",
          name: "VGA",
          fields: [
            {
              name: "specificationVGA",
              title: "Specification VGA",
              type: "string",
              initialValue: "VGA",
            },
            {
              name: "specificationVGAValue",
              title: "Specification VGA Value",
              type: "content",
            },
          ],
        },
      ],
    },
  ],
};
