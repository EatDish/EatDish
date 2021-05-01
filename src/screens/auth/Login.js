import React, { useState, useEffect } from "react";
import { useRoute, useTheme } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";
import { graphqlOperation, API } from "aws-amplify";
import useUserQuery from "../../API/useUserQuery";
import { getUser, storeUser } from "../../utils/asyncStorage";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../reducers/userInfoSlice";

const initialUserState = {
	username: "",
	password: "",
};

export default function Login({ navigation }) {
	const dispatch = useDispatch();
	const { colors } = useTheme();
	const [formState, setFormState] = useState(initialUserState);

	useEffect(() => {
		getUser().then((user) => {
			if (user !== null) {
				dispatch(fetchUser(user.id));
				navigation.navigate("Home");
			}
		});
	}, []);

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
				dispatch(fetchUser(responseUser.id));
				storeUser(responseUser);
			})
			.catch((err) => console.log("err:", err));
		setFormState(initialUserState);
	}

	function handleInput(key, value) {
		setFormState({ ...formState, [key]: value });
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
						let user = getUser();
						if (user !== null) {
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
