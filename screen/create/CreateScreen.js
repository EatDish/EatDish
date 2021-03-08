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
  ingredients: [],
};

export default function CreateScreen() {
  const { colors } = useTheme();
  const [formState, setFormState] = useState(initialState);
  const [ingredients, setIngredients] = useState([{ value: null }]);
  const [focus, setFocus] = useState(false);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  function ingredientChange(event, i) {
    console.log('CreateScreen.js -- i:', i);
    console.log('CreateScreen.js -- event:', event);
    const values = [... ingredients];
    console.log('CreateScreen.js -- values:', values);
    if (values[i].value === null || values[i].value === '') {
      values[i].value = event;
      setIngredients(values);
      setInput('ingredients', [...ingredients]);
      console.log('CreateScreen.js -- values:', values);
    } else {
      console.log('CreateScreen.js -- event.target.value:', event);
      values[i] = { value: event };
      setIngredients(values);
      setInput('ingredients', [...ingredients]);
      console.log('CreateScreen.js -- values:', values);
    }
  }
  function ingredientAdd() {
    const values = [...ingredients];
    values.push({ value: null })
    setIngredients(values);
  }

  function ingredientDelete(i) {
    const values = [...ingredients];
    values.splice(i, 1);
    setIngredients(values);
    setInput('ingredients', [...ingredients])
  }

  function createUI () {

  }

  async function addRecipe() {
    //validate the ingredients
    // try {
      const recipe = { ...formState };
      console.log('CreateScreen.js -- recipe:', recipe);
      setFormState(initialState);
    //   const result = await API.graphql(
    //     graphqlOperation(createRecipe, { input: recipe })
    //   );
    //   console.log("CreateScreen.js -- result:", result);
    //   Alert.alert("Recipe Created!", "", [
    //     { text: "OK", onPress: () => console.log("ok pressed") },
    //   ]);
    // } catch (err) {
    //   console.log("error creating recipe:", err);
    // }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setInput("dishName", val)}
        style={{
          ...styles.input,
          backgroundColor: focus["dishName"] ? "dimgray" : colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.dishName}
        onFocus={() => setFocus({ ...focus, ["dishName"]: !focus["dishName"] })}
        onBlur={() => setFocus({ ...focus, ["dishName"]: !focus["dishName"] })}
        placeholder="Dish Name"
      />
      <TextInput
        onChangeText={(val) => setInput("cuisine", val)}
        style={{
          ...styles.input,
          backgroundColor: focus["cuisine"] ? "dimgray" : colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.cuisine}
        placeholder="Cuisine"
        onFocus={() => setFocus({ ...focus, ["cuisine"]: !focus["cuisine"] })}
        onBlur={() => setFocus({ ...focus, ["cuisine"]: !focus["cuisine"] })}
      />
      <TextInput
        onChangeText={(val) => setInput("prepTime", val)}
        style={{
          ...styles.input,
          backgroundColor: focus["prepTime"] ? "dimgray" : colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.prepTime}
        placeholder="Prep Time"
        onFocus={() => setFocus({ ...focus, ["prepTime"]: !focus["prepTime"] })}
        onBlur={() => setFocus({ ...focus, ["prepTime"]: !focus["prepTime"] })}
      />
      <TextInput
        onChangeText={(val) => setInput("cookTime", val)}
        style={{
          ...styles.input,
          backgroundColor: focus["cookTime"] ? "dimgray" : colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.cookTime}
        placeholder="Cook Time"
        onFocus={() => setFocus({ ...focus, ["cookTime"]: !focus["cookTime"] })}
        onBlur={() => setFocus({ ...focus, ["cookTime"]: !focus["cookTime"] })}
      />
      <TextInput
        onChangeText={(val) => setInput("directions", val)}
        style={{
          ...styles.input,
          backgroundColor: focus["directions"] ? "dimgray" : colors.card,
          color: colors.text,
        }}
        placeholderTextColor={colors.text}
        value={formState.directions}
        placeholder="Directions"
        onFocus={() =>
          setFocus({ ...focus, ["directions"]: !focus["directions"] })
        }
        onBlur={() =>
          setFocus({ ...focus, ["directions"]: !focus["directions"] })
        }
      />
      <Button title="Add an Ingredient" onPress={ingredientAdd} />
      {ingredients.map((ingredient, i) => {
        return (
          <View key={`${ingredient}-${i}`}>
            <TextInput
              onChangeText={(e) => {
                console.log('in the change', e);
                return ingredientChange(e, i);
              }}
              value={ingredient.value || ''}
              placeholderTextColor={colors.text}
              placeholder="Ingredient"
              style={{
                ...styles.input,
                backgroundColor: focus["ingredient"] ? "dimgray" : colors.card,
                color: colors.text,
              }}
              onFocus={() =>
                setFocus({ ...focus, ["ingredient"]: !focus["ingredient"] })
              }
              onBlur={() =>
                setFocus({ ...focus, ["ingredient"]: !focus["ingredient"] })
              }
            />
            <Button title="Delete an Ingredient" onPress={(i) => ingredientDelete(i)} />
          </View>
          );
        })}
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
