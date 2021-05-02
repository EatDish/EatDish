export default function useUserRecipeList(userId) {
	const userQuery = `query getRecipeByUserId{
    listRecipes(filter: {
      recipeUserId: {
        contains: "${userId}"
      }
    }) {
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
	return userQuery;
}
