// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recipe, Ingredient } = initSchema(schema);

export {
  Recipe,
  Ingredient
};