import React, { useState, useEffect } from "react";
import { useRoute, useTheme } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { graphqlOperation, API } from "aws-amplify";
import useUserQuery from "../../API/useUserQuery";

const initialUserState = {
	username: "",
	password: "",
};

export default function Login({ navigation }) {
	const { colors } = useTheme();
	const [formState, setFormState] = useState(initialUserState);
	const [user, setUser] = useState();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			navigation.navigate("Home");
			const foundUser = JSON.parse(loggedInUser);
			setUser(foundUser);
		}
	}, []);

	function handleInput(key, value) {
		setFormState({ ...formState, [key]: value });
	}

	async function loginUser() {
		if (formState.password.length === 0 || formState.username.length === 0) {
			Alert.alert("username or pass is empty!", "", [
				{ text: "OK", onPress: () => console.log("ok pressed") },
			]);
			return;
		}
		const graphQuery = useUserQuery(formState.username, formState.password);
		const result = await API.graphql(graphqlOperation(graphQuery))
			.then(({ data }) => {
				let responseUser = data.listUsers.items[0];
				setUser(responseUser);
				localStorage.setItem("user", JSON.stringify(responseUser));
			})
			.catch((err) => console.log("err:", err));
		setFormState(initialUserState);
	}

	return (
		<View style={styles.container}>
			<TextInput
				onChangeText={(val) => handleInput("username", val)}
				value={formState.username}
				style={styles.input}
				placeholder="username"
			/>
			<TextInput
				onChangeText={(val) => handleInput("password", val)}
				value={formState.password}
				style={styles.input}
				placeholder="password"
			/>
			<Button
				title="Login"
				onPress={() =>
					loginUser().then(() => {
						let user = localStorage.getItem("user");
						if (user !== undefined) {
							navigation.navigate("Home");
						}
					})
				}
			/>
			<Button
				title="Register"
				onPress={() => navigation.navigate("Register")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20,
	},
	input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
});
