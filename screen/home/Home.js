import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Home({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 15,
          marginBottom: 5,
          backgroundColor: colors.card,
        }}
        onPress={() => navigation.navigate('MyRecipes')}
      >
      <Text
        style={{
          color: colors.text,
          fontSize: 18,
        }}>My Recipes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 15,
          backgroundColor: colors.card,
        }}
        onPress={() => navigation.navigate('SavedRecipes')}
      >
      <Text style={{
          color: colors.text,
          fontSize: 18,
        }}>Saved Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    // backgroundColor: theme.background
  },
  button: {
    alignItems: "center",
    // backgroundColor: colors.primary,
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

