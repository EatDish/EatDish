import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Recipe {
  readonly id: string;
  readonly userName: string;
  readonly dishName: string;
  readonly cuisine?: string;
  readonly prepTime?: number;
  readonly cookTime?: number;
  readonly directions?: string;
  readonly ingredients: (Ingredient | null)[];
  constructor(init: ModelInit<Recipe>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe>) => MutableModel<Recipe> | void): Recipe;
}

export declare class Ingredient {
  readonly id: string;
  readonly name: string;
  readonly recipe: Recipe;
  constructor(init: ModelInit<Ingredient>);
  static copyOf(source: Ingredient, mutator: (draft: MutableModel<Ingredient>) => MutableModel<Ingredient> | void): Ingredient;
}