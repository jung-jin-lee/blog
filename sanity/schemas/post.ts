import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: '포스트',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    }),
    defineField({
      name: 'description',
      title: '내용',
      type: 'markdown',
    }),
    defineField({
      name: 'isPublic',
      title: '외부 공개',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
