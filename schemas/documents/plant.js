import { MdEco } from 'react-icons/md';

export default {
  name: "plant",
  title: "Plant",
  icon: MdEco,
  type: "document",
  fields: [
    {
      name: "latingName",
      title: "Latin Name",
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
      title: "name",
      media: "image",
    },
    prepare: ({ title, media }) => ({
      title: title.toUpperCase(),
      media: media
    })
  },
};
