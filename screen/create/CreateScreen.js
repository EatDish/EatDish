import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { DataStore, graphqlOperation, API } from 'aws-amplify';
import { createRecipe } from './../../src/graphql/mutations';
import { rng } from '../../utils/rngData';

export default function CreateScreen() {

  async function addRecipe() {
    try {
      const recipe = rng();
      const result = await API.graphql(graphqlOperation(createRecipe, {input: recipe}))
      console.log('CreateScreen.js -- result:', result);
    } catch (err) {
      console.log('error creating recipe:', err)
    }
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Create Recipe" onPress={addRecipe} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 }
})