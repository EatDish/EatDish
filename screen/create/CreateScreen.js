import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import { DataStore, graphqlOperation, API } from "aws-amplify";
import { createRecipe } from "./../../src/graphql/mutations";
import { rng } from "../../utils/rngData";

const initialState = {
  userName: "Danny",
  dishName: "",
  cuisine: "",
  prepTime: "",
  cookTime: "",
  directions: "",
};

export default function CreateScreen() {
  const { colors } = useTheme();
  const [formState, setFormState] = useState(initialState);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addRecipe() {
    try {
      const recipe = { ...formState };
      setFormState(initialState);
      const result = await API.graphql(
        graphqlOperation(createRecipe, { input: recipe })
      );
      console.log("CreateScreen.js -- result:", result);
      Alert.alert("Recipe Created!", "", [
        { text: "OK", onPress: () => console.log("ok pressed") },
      ]);
    } catch (err) {
      console.log("error creating recipe:", err);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setInput("dishName", val)}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.dishName}
        placeholder="Dish Name"
      />
      <TextInput
        onChangeText={(val) => setInput("cuisine", val)}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.cuisine}
        placeholder="Cuisine"
      />
      <TextInput
        onChangeText={(val) => setInput("prepTime", val)}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.prepTime}
        placeholder="Prep Time"
      />
      <TextInput
        onChangeText={(val) => setInput("cookTime", val)}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.cookTime}
        placeholder="Cook Time"
      />
      <TextInput
        onChangeText={(val) => setInput("directions", val)}
        style={{
          ...styles.input,
          backgroundColor: colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.directions}
        placeholder="Directions"
      />
      <Button title="Create Recipe" onPress={addRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
});
