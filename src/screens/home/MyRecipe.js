import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph, Divider, List } from 'react-native-paper';
import RecipeHeader from '../../components/RecipeHeader';
// Delete and edit myRecipe
const MyRecipe = ({ route, navigation }) => {
  const { recipe } = route.params;
  return <RecipeHeader recipe={recipe} />;
};
export default MyRecipe;
