/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient {
    onCreateIngredient {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient {
    onUpdateIngredient {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient {
    onDeleteIngredient {
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
export const onCreateInstruction = /* GraphQL */ `
  subscription OnCreateInstruction {
    onCreateInstruction {
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
export const onUpdateInstruction = /* GraphQL */ `
  subscription OnUpdateInstruction {
    onUpdateInstruction {
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
export const onDeleteInstruction = /* GraphQL */ `
  subscription OnDeleteInstruction {
    onDeleteInstruction {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
