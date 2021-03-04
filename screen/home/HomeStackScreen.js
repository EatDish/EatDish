import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SavedRecipesList from "./SavedRecipesList";
import MyRecipesList from './MyRecipesList';
import Home from './Home';

const HomeStack = createStackNavigator();

export default function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='MyRecipes' component={MyRecipesList} />
      <HomeStack.Screen name='SavedRecipes' component={SavedRecipesList}/>
    </HomeStack.Navigator>
  );
}
