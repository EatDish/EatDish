import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	SafeAreaView,
	StyleSheet,
	TextInput,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import RecipeCard from "../home/RecipeCard";
import { API, graphqlOperation } from "aws-amplify";
import listQuery from "../../API/listQuery";
import Amplify from "aws-amplify";
import config from "../../../aws-exports";
Amplify.configure(config);

export default function ExploreScreen({ navigation }) {
	const { colors } = useTheme();
	const [recipes, setRecipes] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [search, setSearch] = useState("");
	const [focus, setFocus] = useState(false);

	const filterList = (list) => {
		return list.filter(
			(listItem) =>
				listItem.cuisine?.toLowerCase().includes(search?.toLowerCase()) ||
				listItem.dishName.toLowerCase().includes(search.toLowerCase())
		);
	};

	useEffect(() => {
		fetchRecipes();
	}, []);

	useEffect(() => {
		setFiltered(filterList(recipes));
	}, [search]);

	async function fetchRecipes() {
		try {
			const recipeData = await API.graphql(graphqlOperation(listQuery));
			const recipes = recipeData.data.listRecipes.items;
			setRecipes(recipes);
		} catch (err) {
			console.log("error fetching recipes");
		}
	}
	return (
		<SafeAreaView>
			<View
				style={
					focus
						? {
								borderWidth: 1,
								borderColor: "white",
						  }
						: { borderWidth: 1 }
				}
			>
				<TextInput
					onChangeText={(search) => setSearch(search)}
					style={{
						...styles.input,
						backgroundColor: "dimgray",
						color: colors.text,
					}}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					placeholder="Search..."
					placeholderTextColor={colors.text}
				/>
			</View>
			<FlatList
				data={filtered?.length === 0 ? recipes : filtered}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => {
					return (
						<RecipeCard
							onPress={() => navigation.push("Recipe", { recipeId: item.id })}
							recipeInfo={item}
						/>
					);
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// searchBar: {
	//   fontSize: 24,
	//   margin: 10,
	//   width: "90%",
	//   height: 50,
	//   backgroundColor: "white",
	// },
	input: { height: 50, backgroundColor: "#ddd", padding: 8 },
});
