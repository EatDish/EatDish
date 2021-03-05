import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function RecipeCard({ recipeInfo }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Recipe', { recipeId: recipeInfo.id})}
      >
        <View style={styles.infoRow} >
          {/* //TODO: ICON PLACEHOLDER */}
          <Text style={styles.dishName}>{recipeInfo.dishName}</Text>
          <Text style={styles.cuisine}>{recipeInfo.cuisine}</Text>
        </View>
        <View style={styles.infoRow} >
          <Text style={styles.detail}>{`Prep time: ${recipeInfo.prepTime} mins`}</Text>
          <Text style={styles.detail}>{`Cook time: ${recipeInfo.cookTime} mins`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderBottom: "1px solid #FFF"
  },
  infoRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  },
  dishName: {
    fontWeight: 600,
    fontSize: 18,
    paddingRight: 10,
    textTransform: "capitalize"
  },
  cuisine: {
    fontWeight: 400,
    fontSize: 17,
    fontStyle: "italic",
    flexGrow: "auto",
    textTransform: "capitalize"
  },
  detail: {
    fontWeight: 400,
    fontSize: 14,
    paddingRight: 10
  }
});

