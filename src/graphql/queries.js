/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      userName
      dishName
      cuisine
      prepTime
      cookTime
      instructions {
        items {
          id
          stepNumber
          stepInstruction
          createdAt
          updatedAt
        }
        nextToken
      }
      ingredients {
        items {
          id
          name
          measurement
          amount
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
<<<<<<< HEAD
        stars
        forks
        directions
=======
        instructions {
          nextToken
        }
        ingredients {
          nextToken
        }
>>>>>>> cf2e9c5 (new schema with instructions/ingredient additions)
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
      measurement
      amount
      recipe {
        id
        userName
        dishName
        cuisine
        prepTime
        cookTime
        instructions {
          nextToken
        }
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
        measurement
        amount
        recipe {
          id
          userName
          dishName
          cuisine
          prepTime
          cookTime
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
export const getInstruction = /* GraphQL */ `
  query GetInstruction($id: ID!) {
    getInstruction(id: $id) {
      id
      stepNumber
      stepInstruction
      recipe {
        id
        userName
        dishName
        cuisine
        prepTime
        cookTime
        instructions {
          nextToken
        }
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
export const listInstructions = /* GraphQL */ `
  query ListInstructions(
    $filter: ModelInstructionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stepNumber
        stepInstruction
        recipe {
          id
          userName
          dishName
          cuisine
          prepTime
          cookTime
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
