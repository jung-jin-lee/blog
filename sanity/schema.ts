import { type SchemaTypeDefinition } from 'sanity';
import author from './schemas/author';
import post from './schemas/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, post],
};
