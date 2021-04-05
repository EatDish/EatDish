/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      username
      dishName
      cuisine
      prepTime
      cookTime
      user {
        id
        username
        password
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
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
        username
        dishName
        cuisine
        prepTime
        cookTime
        user {
          id
          username
          password
          createdAt
          updatedAt
        }
        instructions {
          nextToken
        }
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
      measurement
      amount
      recipe {
        id
        username
        dishName
        cuisine
        prepTime
        cookTime
        user {
          id
          username
          password
          createdAt
          updatedAt
        }
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
          username
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
        username
        dishName
        cuisine
        prepTime
        cookTime
        user {
          id
          username
          password
          createdAt
          updatedAt
        }
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
          username
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
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      password
      recipes {
        items {
          id
          username
          dishName
          cuisine
          prepTime
          cookTime
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        password
        recipes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
