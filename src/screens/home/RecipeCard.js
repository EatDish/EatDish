import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";

export default function RecipeCard({ recipeInfo }) {
	const { colors } = useTheme();

	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{
					backgroundColor: colors.card,
					padding: 10,
					margin: 3,
					color: colors.text,
				}}
				onPress={() => navigation.navigate("Recipe", { recipe: recipeInfo })}
			>
				<View style={styles.infoRow}>
					<Text
						style={{
							fontWeight: "500",
							fontSize: 18,
							paddingRight: 10,
							textTransform: "capitalize",
							color: colors.text,
						}}
					>
						{recipeInfo.dishName}
					</Text>
					<Text
						style={{
							fontWeight: "400",
							fontSize: 17,
							fontStyle: "italic",
							textTransform: "capitalize",
							color: colors.text,
						}}
					>
						{recipeInfo.cuisine}
					</Text>
				</View>
				<View style={styles.infoRow}>
					<Text
						style={{
							fontWeight: "400",
							fontSize: 14,
							paddingRight: 10,
							color: colors.text,
						}}
					>{`Prep time: ${recipeInfo.prepTime} mins`}</Text>
					<Text
						style={{
							fontWeight: "400",
							fontSize: 14,
							paddingRight: 10,
							color: colors.text,
						}}
					>{`Cook time: ${recipeInfo.cookTime} mins`}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		paddingHorizontal: 2,
	},
	infoRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignContent: "flex-start",
		alignItems: "center",
		paddingLeft: 10,
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
	detail: {
		fontWeight: "400",
		fontSize: 14,
		paddingRight: 10,
	},
});
