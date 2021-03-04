import React from "react";
import { View, Text } from "react-native";

export default function RecipeCard({ navigation, recipeInfo }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>RecipeCard: {recipeInfo.userName}</Text>
    </View>
  );
}
