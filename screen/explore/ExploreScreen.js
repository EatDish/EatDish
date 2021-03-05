import React, { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";
import ExploreRecipeCard from "./ExploreRecipeCard";
import { API, graphqlOperation } from 'aws-amplify';
import { listRecipes } from './../../src/graphql/queries';
import Amplify from 'aws-amplify';
import config from '../../aws-exports';
Amplify.configure(config);

const renderItem = ({ item }) => {
  return <ExploreRecipeCard recipeInfo={item} />;
};

export default function ExploreScreen({ navigation }) {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([])
  const [search, setSearch] = useState('');

  const filterList = (list) => {
    return list.filter(
      (listItem) =>
        listItem.cuisine
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        listItem.dishName
          .toLowerCase()
          .includes(search.toLowerCase()),
    );
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  useEffect(() => {
    setFiltered(filterList(recipes))
  }, [search]);

  async function fetchRecipes() {
    try {
      const recipeData = await API.graphql(graphqlOperation(listRecipes))
      const recipes = recipeData.data.listRecipes.items
      setRecipes(recipes)
    } catch (err) { console.log('error fetching recipes') }
  }
  return (
    <SafeAreaView>
       <TextInput
          onChangeText={(search) => setSearch(search)}
          style={styles.searchBar}
        />
        <FlatList
          data={filtered?.length === 0 ? recipes : filtered}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    fontSize: 24,
    margin: 10,
    width: '90%',
    height: 50,
    backgroundColor: 'white',
  },
});
