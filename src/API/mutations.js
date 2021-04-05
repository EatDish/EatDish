/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
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
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
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
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
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
export const createInstruction = /* GraphQL */ `
  mutation CreateInstruction(
    $input: CreateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    createInstruction(input: $input, condition: $condition) {
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
export const updateInstruction = /* GraphQL */ `
  mutation UpdateInstruction(
    $input: UpdateInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    updateInstruction(input: $input, condition: $condition) {
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
export const deleteInstruction = /* GraphQL */ `
  mutation DeleteInstruction(
    $input: DeleteInstructionInput!
    $condition: ModelInstructionConditionInput
  ) {
    deleteInstruction(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
