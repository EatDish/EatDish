import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Constants from 'expo-constants';
import { graphqlOperation, API } from 'aws-amplify';
import { useSelector } from 'react-redux';
import { createIngredient, createRecipe } from '../../API/mutations';
import { selectId } from '../../reducers/userInfoSlice';

const initialState = {
  username: 'Danny',
  dishName: '',
  cuisine: '',
  prepTime: '',
  cookTime: '',
  recipeUserId: '',
  instructions: [],
  ingredients: []
};

export default function CreateScreen() {
  const { colors } = useTheme();
  const [formState, setFormState] = useState(initialState);
  const [ingredients, setIngredients] = useState([{ name: '', amount: 1 }]);
  const [focus, setFocus] = useState(false);
  const userId = useSelector(selectId);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  function ingredientChange(text) {
    const values = [...ingredients];
    values[values.length - 1].name = text;
    setIngredients(values);
  }

  function ingredientAdd() {
    if (ingredients[ingredients.length - 1].name === '') {
      return;
    }
    const values = [...ingredients];
    setInput('ingredients', [...values]);
    values.push({
      name: '',
      amount: 1
    });
    setIngredients(values);
  }

  function ingredientDelete(i) {
    if (ingredients.length === 1) {
      setIngredients([{ value: '' }]);
      setInput('ingredients', []);
    } else {
      const values = [...ingredients];
      values.splice(i, 1);
      setIngredients(values);
      setInput('ingredients', [...values]);
    }
  }

  const ingredientMutation = (ingredient, recipeConnectionID) => {
    API.graphql(
      graphqlOperation(createIngredient, {
        input: {
          name: ingredient.name,
          measurement: 'TODO measurement value',
          amount: ingredient?.amount || 1,
          ingredientRecipeId: recipeConnectionID
        }
      })
    );
  };

  async function addRecipe() {
    if (ingredients.length === 0) {
      console.log('0 ingredients');
      return;
    }
    try {
      const recipe = { ...formState };

      const result = await API.graphql(
        graphqlOperation(createRecipe, {
          input: {
            userName: recipe.userName,
            dishName: recipe.dishName,
            cuisine: recipe.cuisine,
            recipeUserId: userId,
            prepTime: parseInt(recipe.prepTime, 10),
            cookTime: parseInt(recipe.cookTime, 10)
          }
        })
      );

      const resultRecipe = result.data.createRecipe;
      const savedIngredients = ingredients.slice(0, ingredients.length - 1);
      await Promise.all(savedIngredients.map((e) => ingredientMutation(e, resultRecipe.id)))
        .then(() => console.log('success'))
        .catch((err) => console.log('error', err));

      Alert.alert('Recipe Created!', '', [
        { text: 'OK', onPress: () => console.log('ok pressed') }
      ]);
      // clear form after success
      setFormState(initialState);
      setIngredients([{ value: '' }]);
    } catch (err) {
      console.log('error creating recipe:', err);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => setInput('dishName', val)}
        style={{
          ...styles.input,
          backgroundColor: focus.dishName ? 'dimgray' : colors.card,
          color: colors.text
        }}
        placeholderTextColor={colors.text}
        value={formState.dishName}
        onFocus={() => setFocus({ ...focus, dishName: !focus.dishName })}
        onBlur={() => setFocus({ ...focus, dishName: !focus.dishName })}
        placeholder="Dish Name"
      />
      <TextInput
        onChangeText={(val) => setInput('cuisine', val)}
        style={{
          ...styles.input,
          backgroundColor: focus.cuisine ? 'dimgray' : colors.card,
          color: colors.text
        }}
        placeholderTextColor={colors.text}
        value={formState.cuisine}
        placeholder="Cuisine"
        onFocus={() => setFocus({ ...focus, cuisine: !focus.cuisine })}
        onBlur={() => setFocus({ ...focus, cuisine: !focus.cuisine })}
      />
      <TextInput
        onChangeText={(val) => setInput('prepTime', val)}
        style={{
          ...styles.input,
          backgroundColor: focus.prepTime ? 'dimgray' : colors.card,
          color: colors.text
        }}
        placeholderTextColor={colors.text}
        value={formState.prepTime}
        placeholder="Prep Time"
        onFocus={() => setFocus({ ...focus, prepTime: !focus.prepTime })}
        onBlur={() => setFocus({ ...focus, prepTime: !focus.prepTime })}
      />
      <TextInput
        onChangeText={(val) => setInput('cookTime', val)}
        style={{
          ...styles.input,
          backgroundColor: focus.cookTime ? 'dimgray' : colors.card,
          color: colors.text
        }}
        placeholderTextColor={colors.text}
        value={formState.cookTime}
        placeholder="Cook Time"
        onFocus={() => setFocus({ ...focus, cookTime: !focus.cookTime })}
        onBlur={() => setFocus({ ...focus, cookTime: !focus.cookTime })}
      />
      <TextInput
        onChangeText={(val) => setInput('instructions', [val])}
        style={{
          ...styles.input,
          backgroundColor: focus.instructions ? 'dimgray' : colors.card,
          color: colors.text
        }}
        placeholderTextColor={colors.text}
        value={formState.instructions[0]}
        placeholder="Instructions"
        onFocus={() => setFocus({ ...focus, instructions: !focus.instructions })}
        onBlur={() => setFocus({ ...focus, instructions: !focus.instructions })}
      />
      {ingredients.map((ingredient, i) => {
        if (i === ingredients.length - 1) {
          return;
        }
        return (
          <View key={`${ingredient}-${i}`}>
            <Text
              style={{
                color: colors.text,
                fontSize: 18
              }}>
              {ingredient?.name || ''}
            </Text>
            <Button title="Delete an Ingredient" onPress={() => ingredientDelete(i)} />
          </View>
        );
      })}
      <TextInput
        onChangeText={(text) => ingredientChange(text)}
        value={ingredients[ingredients.length - 1].name || ''}
        placeholderTextColor={colors.text}
        placeholder="Ingredient"
        style={{
          ...styles.input,
          backgroundColor: focus.ingredient ? 'dimgray' : colors.card,
          color: colors.text
        }}
        onFocus={() => setFocus({ ...focus, ingredient: !focus.ingredient })}
        onBlur={() => setFocus({ ...focus, ingredient: !focus.ingredient })}
      />
      <Button title="Add Ingredient" onPress={ingredientAdd} />
      <Button title="Create Recipe" onPress={addRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  todo: { marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 }
});
