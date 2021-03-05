import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import ExploreRecipeCard from "./ExploreRecipeCard";
import rngData from "../../utils/rngData";

const data = rngData();

const renderItem = ({ item }) => {
  return <ExploreRecipeCard recipeInfo={item} />;
};

export default function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
