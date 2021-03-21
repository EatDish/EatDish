/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const ingredientsForRecipe = /* GraphQL */ `
  query IngredientsForRecipe($recipeId: ID!, $limit: Int, $nextToken: String) {
    ingredientsForRecipe(
      recipeId: $recipeId
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        recipe {
          id
          userName
          dishName
          cuisine
          prepTime
          cookTime
          directions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      userName
      dishName
      cuisine
      prepTime
      cookTime
      directions
      ingredients {
        items {
          id
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        dishName
        cuisine
        prepTime
        cookTime
        directions
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
      id
      name
      recipe {
        id
        userName
        dishName
        cuisine
        prepTime
        cookTime
        directions
        ingredients {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recipe {
          id
          userName
          dishName
          cuisine
          prepTime
          cookTime
          directions
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
