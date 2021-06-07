import React from "react";
import BotNav from "./src/navigation/tabNav/BotNav";
import store from "./src/store";
import { Provider } from "react-redux";
import { Provider as PaperProvider,
} from 'react-native-paper';
import {CombinedDarkTheme} from './src/styles/PaperNavigationMerge';

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={CombinedDarkTheme}>
				<BotNav theme={CombinedDarkTheme} />
			</PaperProvider>
		</Provider>
	);
}
