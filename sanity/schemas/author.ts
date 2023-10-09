import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: '작가',
  type: 'document',
  fields: [
    defineField({
      name: 'isMain',
      title: '메인 작가',
      type: 'boolean',
    }),
    defineField({
      name: 'name',
      title: '이름',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: '이메일',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '설명',
      type: 'text',
    }),
    defineField({
      name: 'github',
      title: '깃허브',
      type: 'string',
    }),
  ],
});
