import * as React from 'react';
import { View } from 'react-native';
import IngredientListItem from '../../components/IngredientListItem';
import RecipeHeader from '../../components/RecipeHeader';
import StepListItem from '../../components/StepListItem';
// Delete and edit each item
const MyRecipe = ({ route, navigation }) => {
  const { recipe } = route.params;
  const { ingredients, instructions } = recipe;
  return (
    <View style={{ flex: 1 }}>
      <RecipeHeader recipe={recipe} />
      <IngredientListItem ingredients={ingredients} />
      <StepListItem steps={instructions} />
    </View>
  );
};
export default MyRecipe;
