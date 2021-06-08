import React from "react";
import BotNav from "./src/navigation/tabNav/BotNav";
import store from "./src/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider,
} from 'react-native-paper';
import {useThemeContext} from './src/styles/useThemeContext';
import { PreferencesContext} from './src/styles/LightDarkThemeContext';
export default function App() {
	const [theme, toggleTheme] = useThemeContext();
	return (
		<Provider store={store}>
			<PreferencesContext.Provider value={() => {toggleTheme, theme}}>
				<PaperProvider theme={theme}>
					<BotNav theme={theme} />
				</PaperProvider>
			</PreferencesContext.Provider>
		</Provider>
	);
}
