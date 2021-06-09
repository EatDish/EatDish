import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Favorites from '../screens/home/Favorites';
import MyRecipesList from '../screens/home/MyRecipesList';
import Home from '../screens/home/Home';
import Recipe from '../screens/home/Recipe';
import Register from '../screens/auth/Register';
import Login from '../screens/auth/Login';
import Header from '../components/Header';
import MyRecipe from '../screens/home/MyRecipe';

const HomeStack = createStackNavigator();

export default function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{ header: Header }}>
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MyRecipes" component={MyRecipesList} />
      <HomeStack.Screen name="SavedRecipes" component={Favorites} />
      <HomeStack.Screen name="Recipe" component={Recipe} />
      <HomeStack.Screen name="MyRecipe" component={MyRecipe} />
    </HomeStack.Navigator>
  );
}
