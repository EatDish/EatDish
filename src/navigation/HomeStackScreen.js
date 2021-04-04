import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../screens/home/Favorites";
import MyRecipesList from "../screens/home/MyRecipesList";
import Home from "../screens/home/Home";
import Recipe from "../screens/home/Recipe";

const HomeStack = createStackNavigator();

export default function HomeStackScreen({ navigation }) {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="MyRecipes" component={MyRecipesList} />
			<HomeStack.Screen name="SavedRecipes" component={Favorites} />
			<HomeStack.Screen name="Recipe" component={Recipe} />
		</HomeStack.Navigator>
	);
}
