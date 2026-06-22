import { defineField, defineType } from 'sanity'

export const team = defineType({
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Lead', value: 'Lead' },
          { title: 'Unity Developer', value: 'Unity Developer' },
          { title: 'Backend Developer', value: 'Backend Developer' },
          { title: 'Graphic Designer', value: 'Graphic Designer' },
          { title: 'UI/UX Designer', value: 'UI/UX Designer' },
          { title: '3D Artist', value: '3D Artist' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})