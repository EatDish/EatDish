import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "./ExploreScreen";
import ExploreRecipe from "./ExploreRecipe";

const ExploreStack = createStackNavigator();

export default function ExploreStackScreen({ navigation }) {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Recipe" component={ExploreRecipe} />
    </ExploreStack.Navigator>
  );
}
