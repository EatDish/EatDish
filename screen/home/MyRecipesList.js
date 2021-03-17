import React, { useEffect, useState} from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import RecipeCard from './RecipeCard';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';
import listQuery from "../../utils/customQueries/listQuery";
Amplify.configure(config);



export default function MyRecipesList() {
  const [recipes, setRecipes] = useState([]);
  

  useEffect(() => {
    fetchRecipes()
  }, [])

  async function fetchRecipes() {
    try {
      const recipeData = await API.graphql(graphqlOperation(listQuery))
      const recipes = recipeData.data.listRecipes.items
      console.log('MyRecipesList.js -- recipes:', recipes);
      setRecipes(recipes)
    } catch (err) { console.log('error fetching recipes', err) }
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
};
