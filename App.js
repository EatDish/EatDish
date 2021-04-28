import React from "react";
import BotNav from "./src/navigation/tabNav/BotNav";
import themeSwitcher from "./src/theme";
import store from "./src/store";
import { Provider } from "react-redux";

export default function App() {
	let theme = themeSwitcher("dark");
	return (
		<Provider store={store}>
			<BotNav theme={theme} />
		</Provider>
	);
}
