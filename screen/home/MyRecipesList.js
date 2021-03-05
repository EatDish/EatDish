import React, { useEffect, useState} from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import RecipeCard from './RecipeCard';
// import rngData from '../../utils/rngData';
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './../../src/graphql/queries';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';
Amplify.configure(config);

// const data = rngData();

const renderItem = ({ item }) => {

  return (
  <RecipeCard recipeInfo={item}/>
  );
}

export default function MyRecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes()
  }, [])

  async function fetchRecipes() {
    try {
      const recipeData = await API.graphql(graphqlOperation(listRecipes))
      const recipes = recipeData.data.listRecipes.items
      setRecipes(recipes)
    } catch (err) { console.log('error fetching recipes') }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};
