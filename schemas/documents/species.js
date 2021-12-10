import { MdEco } from "react-icons/md";

export default {
  name: "species",
  title: "Species",
  icon: MdEco,
  type: "document",
  fields: [
    {
      name: "kingdom",
      title: "Kingdom",
      type: "reference",
      to: [{ type: "kingdom" }],
    },
    {
      name: "clade",
      title: "Clade",
      type: "reference",
      to: [{ type: "clade" }],
    },
    {
      name: "division",
      title: "Division",
      type: "reference",
      to: [{ type: "division" }],
    },
    {
      name: "class",
      title: "Class",
      type: "reference",
      to: [{ type: "class" }],
    },
    {
      name: "order",
      title: "Order",
      type: "reference",
      to: [{ type: "order" }],
    },
    {
      name: "family",
      title: "Family",
      type: "reference",
      to: [{ type: "family" }],
    },
    {
      name: "genus",
      title: "Genus",
      type: "reference",
      to: [{ type: "genus" }],
    },
    {
      name: "species",
      title: "Latin Name",
      type: "string",
    },
    {
      name: "name",
      title: "Names in different languages",
      type: "namelang",
    },
    {
      name: "height",
      title: "Height",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  preview: {
    select: {
      species: "species",
      name: "name",
      image: "image",
    },
    prepare({ species, name, image }) {
      return {
        title: species,
        subtitle: name?.pl,
        media: image,
      };
    },
  },
};
