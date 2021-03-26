const listQuery = `query RecipeIngredientListName {
  listRecipes {
    items {
      cookTime
      createdAt
      cuisine
      instructions {
        items {
          stepNumber
          stepInstruction
        }
      }
      dishName
      id
      ingredients {
        items {
          name
          measurement
          amount
        }
      }
    }
  }
}`;

export default listQuery;
