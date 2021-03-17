const listQuery = `query RecipeIngredientListName {
  listRecipes {
    items {
      cookTime
      createdAt
      cuisine
      directions
      dishName
      id
      ingredients {
        items {
          name
        }
      }
    }
  }
}`;

export default listQuery;
