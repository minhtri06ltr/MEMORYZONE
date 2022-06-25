import { GlobeIcon } from "@heroicons/react/outline";

export default {
  name: "address",
  title: "User Address",
  type: "object",
  icon: GlobeIcon,
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
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "address",
      title: "Company",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "zipCode",
      title: "Zip Code",
      type: "string",
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      subtitle: "address",
    },
    prepare: (selection) => {
      return {
        title: `${selection.firstName} ${selection.lastName}`,
        subtitle: selection.subtitle,
      };
    },
  },
};
