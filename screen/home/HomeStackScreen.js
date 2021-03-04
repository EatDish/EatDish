import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SavedRecipesList from "./SavedRecipesList";
import MyRecipesList from './MyRecipesList';
import Home from './Home';
import Recipe from './Recipe';

const HomeStack = createStackNavigator();

export default function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='MyRecipes' component={MyRecipesList} />
      <HomeStack.Screen name='SavedRecipes' component={SavedRecipesList}/>
      <HomeStack.Screen name='Recipe' component={Recipe} />
    </HomeStack.Navigator>
  );
}
