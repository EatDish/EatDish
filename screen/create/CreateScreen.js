import React, { useState, useEffect } from "react";
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

  function ingredientChange(text, i) {
    const values = [... ingredients];
    values[i].value = text;
    setIngredients(values);
    setInput('ingredients', [...values]);
  }
  function ingredientAdd() {
    const values = [...ingredients];
    values.push({ value: null })
    setIngredients(values);
  }

  function ingredientDelete(i) {
    if(ingredients.length === 1) {
      setIngredients([{value: null}]);
      setInput('ingredients', [{value: null}])
    } else {
      const values = [...ingredients];
      values.splice(i, 1);
      setIngredients(values);
      setInput('ingredients', [...values])
    }
  }

  async function addRecipe() {
    //validate the ingredients
    // try {
      const recipe = { ...formState };
      console.log('CreateScreen.js -- recipe:', recipe);
      // clear form after success
      setFormState(initialState);
      setIngredients([{value: null}]);
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
    return;
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
      <Button title="Add Ingredient" onPress={ingredientAdd} />
      {ingredients.map((ingredient, i) => {
        return (
          <View key={`${ingredient}-${i}`}>
            <TextInput
              onChangeText={(text) => {
                return ingredientChange(text, i);
              }}
              value={ingredients[i].value || ''}
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
            <Button title="Delete an Ingredient" onPress={() => ingredientDelete(i)} />
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
