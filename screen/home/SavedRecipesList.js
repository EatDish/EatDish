import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import RecipeCard from "./RecipeCard";
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './../../src/graphql/queries';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';
Amplify.configure(config);

export default function SavedRecipesList() {
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
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <RecipeCard 
              onPress={() => navigation.push('Recipe', { recipeId: item.id })}
              recipeInfo={item}/>
          );
        }}
      />
    </SafeAreaView>
  );
}
