import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import RecipeCard from './RecipeCard';
import rngData from '../../utils/rngData';

const data = rngData();

const renderItem = ({ item }) => {
  console.log('MyRecipesList.js -- item:', item);
  return (
  <RecipeCard recipeInfo={item}/>
  );
}

export default function MyRecipesList({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}
