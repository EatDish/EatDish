import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";

export default function Recipe({ route, navigation }) {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [checked, setChecked] = useState(false);
  const { recipe } = route.params;

  const mappedIngredients = recipe.ingredientList.map((ingredient, index) => (
    <CheckBox
      key={index}
      title={ingredient}
      style={styles.ingredient}
      checked={checked[index]}
      onPress={() => {
        setChecked({ ...checked, [index]: !checked[index] });
      }}
    />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.dishName}>{recipe.dishName}</Text>
            <Text style={styles.cuisine}>{recipe.cuisine}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text
              style={styles.details}
            >{`Prep time: ${recipe.prepTime} mins`}</Text>
            <Text
              style={styles.details}
            >{`Cook time: ${recipe.cookTime} mins`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.details}>{`Stars: ${recipe.stars}`}</Text>
            <Text style={styles.details}>{`Forks: ${recipe.forks}`}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowIngredients(!showIngredients);
            }}
          >
            <View style={styles.headerContainer}>
              {showIngredients ? (
                <AntDesign name="down" size={18} color="black" />
              ) : (
                <AntDesign name="right" size={18} color="black" />
              )}
              <Text style={styles.header}>Ingredients</Text>
            </View>
          </TouchableOpacity>
          {showIngredients && <View>{mappedIngredients}</View>}
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowInstructions(!showInstructions);
            }}
          >
            <View style={styles.headerContainer}>
              {showInstructions ? (
                <AntDesign name="down" size={18} color="black" />
              ) : (
                <AntDesign name="right" size={18} color="black" />
              )}
              <Text style={styles.header}>Instructions</Text>
            </View>
          </TouchableOpacity>
          {showInstructions && (
            <Text style={styles.instructions}>{recipe.instructions}</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
    padding: 10,
  },
  infoRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
  },
  details: {
    fontWeight: "400",
    fontSize: 14,
    paddingRight: 10,
  },
  dishName: {
    fontWeight: "500",
    fontSize: 18,
    paddingRight: 10,
    textTransform: "capitalize",
  },
  cuisine: {
    fontWeight: "400",
    fontSize: 17,
    fontStyle: "italic",
    textTransform: "capitalize",
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    padding: 5,
    fontSize: 18,
    fontWeight: "500",
  },
  ingredient: {
    fontWeight: "400",
    fontSize: 17,
    fontStyle: "italic",
    textTransform: "capitalize",
    padding: 10,
  },
  instructions: {
    fontWeight: "400",
    fontSize: 17,
  },
});
