import React from "react";
import BotNav from "./src/navigation/tabNav/BotNav";
import themeSwitcher from "./src/theme";

export default function App() {
	let AuthContext = React.createContext();
	let theme = themeSwitcher("dark");
	return (
		<AuthContext.Provider value={""}>
			<BotNav theme={theme} />
		</AuthContext.Provider>
	);
}
