import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Recipe {
  readonly id: string;
  readonly userName: string;
  readonly dishName: string;
  readonly cuisine?: string;
  readonly prepTime?: number;
  readonly cookTime?: number;
  readonly directions?: string;
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}