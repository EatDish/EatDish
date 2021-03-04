import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";

export default function ExploreScreen() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Explore</Text>
    </View>
  );
}
