import { MdSchema } from "react-icons/md";

export default {
  name: "genus",
  title: "Genus",
  icon: MdSchema,
  type: "document",
  fields: [
    {
      name: "genus",
      title: "Genus name",
      type: "string",
    },
    {
      name: "genusPL",
      title: "Rodzaj",
      type: "string",
    },
  ],
};
