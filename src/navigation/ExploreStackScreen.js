import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore/ExploreScreen";
import Recipe from "../screens/home/Recipe";

const ExploreStack = createStackNavigator();

export default function ExploreStackScreen({ navigation }) {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Recipe" component={Recipe} />
    </ExploreStack.Navigator>
  );
}
