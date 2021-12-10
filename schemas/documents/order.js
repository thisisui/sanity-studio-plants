import { MdSchema } from "react-icons/md";

export default {
  name: "order",
  title: "Order",
  icon: MdSchema,
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order name",
      type: "string",
    },
  ],
};
