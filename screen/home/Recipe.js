import React from "react";
import { View, Text } from "react-native";

export default function Recipe({ route, navigation }) {
  const { recipeId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recipe: {recipeId}</Text>
    </View>
  );
}
