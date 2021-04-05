import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function Account({ navigation }) {
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<View>
				<Image></Image>
				<Text style={{ color: colors.text }}>Username</Text>
			</View>

			<TouchableOpacity
				style={{
					alignItems: "center",
					padding: 15,
					marginBottom: 5,
					backgroundColor: colors.card,
				}}
				onPress={() => navigation.navigate("Settings")}
			>
				<Text
					style={{
						color: colors.text,
						fontSize: 18,
					}}
				>
					Settings
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		paddingHorizontal: 10,
	},
});
