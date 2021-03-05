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
import { useTheme } from "@react-navigation/native";

export default function Recipe({ route, navigation }) {
  const [showIngredients, setShowIngredients] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);
  const [checked, setChecked] = useState(false);
  const { colors } = useTheme();
  const { recipe } = route.params;
  console.log('Recipe.js -- recipe:', recipe);

  const ingredientList = [
    "rice",
    "tofu",
    "soy sauce",
    "salt",
    "pepper",
    "milk",
    "cheese",
  ];
  // const mappedIngredients = recipe.ingredientList.map((ingredient, index) => (
  const mappedIngredients = ingredientList.map((ingredient, index) => (
    <CheckBox
      containerStyle={{ backgroundColor: "transparent" }}
      key={index}
      title={ingredient}
      style={{
        ...styles.ingredient,
        backgroundColor: colors.card,
      }}
      textStyle={{
        color: colors.text,
      }}
      checked={checked[index]}
      onPress={() => {
        setChecked({ ...checked, [index]: !checked[index] });
      }}
    />
  ));

  return (
    <ScrollView>
      <View
        style={{
          ...styles.container,
        }}
      >
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={{ ...styles.dishName, color: colors.text }}>
              {recipe.dishName}
            </Text>
            <Text style={{ ...styles.cuisine, color: colors.text }}>
              {recipe.cuisine}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text
              style={{ ...styles.details, color: colors.text }}
            >{`Prep time: ${recipe.prepTime} mins`}</Text>
            <Text
              style={{ ...styles.details, color: colors.text }}
            >{`Cook time: ${recipe.cookTime} mins`}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text
              style={{ ...styles.details, color: colors.text }}
            >{`Stars: ${recipe.stars}`}</Text>
            <Text
              style={{ ...styles.details, color: colors.text }}
            >{`Forks: ${recipe.forks}`}</Text>
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
                <AntDesign name="down" size={18} color={colors.text} />
              ) : (
                <AntDesign name="right" size={18} color={colors.text} />
              )}
              <Text style={{ ...styles.header, color: colors.text }}>
                Ingredients
              </Text>
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
                <AntDesign name="down" size={18} color={colors.text} />
              ) : (
                <AntDesign name="right" size={18} color={colors.text} />
              )}
              <Text style={{ ...styles.header, color: colors.text }}>
                Instructions
              </Text>
            </View>
          </TouchableOpacity>
          {showInstructions && (
            <Text style={{ ...styles.directions, color: colors.text }}>
              {recipe.directions}
            </Text>
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
