import React, { useEffect, useState} from "react";
import { FlatList, SafeAreaView } from "react-native";
import RecipeCard from './RecipeCard';
import { API, graphqlOperation } from 'aws-amplify';
import Amplify from 'aws-amplify';
import config from '../../../aws-exports';
import listQuery from "../../utils/customQueries/listQuery";
Amplify.configure(config);

export default function MyRecipesList({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetchRecipes();
  }, [])

  async function fetchRecipes() {
    try {
      const recipeData = await API.graphql(graphqlOperation(listQuery));
      const recipes = recipeData.data.listRecipes.items;
      setRecipes(recipes);
    } catch (err) { console.log('error fetching recipes:', err) }
  }
  return (
    <SafeAreaView>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <RecipeCard 
              recipeInfo={item}/>
            );
        }}
      />
    </SafeAreaView>
  );
};
