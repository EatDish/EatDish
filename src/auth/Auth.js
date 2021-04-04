import { AuthSession } from "expo";

export default function Auth({ setToken, navigation }) {
	const auth0Domain = "https://yourdomain.auth0.com 20";
	const auth0ClientId = "yourid";

	const _loginWithAuth0 = async () => {
		const redirectUrl = AuthSession.getRedirectUrl();
		let authUrl =
			`${auth0Domain}/authorize` +
			toQueryString({
				client_id: auth0ClientId,
				response_type: "token",
				scope: "openid profile email",
				redirect_uri: redirectUrl,
			});
		console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
		console.log(`AuthURL is:  ${authUrl}`);
		const result = await AuthSession.startAsync({
			authUrl: authUrl,
		});

		if (result.type === "success") {
			console.log(result);
			let token = result.params.access_token;
			setToken(token);
			navigation.navigate("Next Screen");
		}
	};

	return <Login navigation={navigation} onLogin={() => _loginWithAuth0()} />;
}
