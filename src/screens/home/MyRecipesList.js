import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import Amplify, { API, graphqlOperation } from 'aws-amplify';

import { useSelector } from 'react-redux';
import config from '../../../aws-exports';
import RecipeCard from './RecipeCard';
import { selectId } from '../../reducers/userInfoSlice';
import useUserRecipeList from '../../API/useUserRecipeListQuery';

Amplify.configure(config);

export default function MyRecipesList({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const userId = useSelector(selectId);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    try {
      const userRecipeQuery = useUserRecipeList(userId);
      const recipeData = await API.graphql(graphqlOperation(userRecipeQuery));
      const recipeList = recipeData.data.listRecipes.items;
      setRecipes(recipeList);
    } catch (err) {
      console.log('error fetching recipes:', err);
    }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RecipeCard recipeInfo={item} />}
      />
    </SafeAreaView>
  );
}
