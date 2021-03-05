import { useColorScheme } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

const customTheme = {
  dark: DarkTheme,
  light: DefaultTheme,
  sampleTheme: {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  },
};

const themeSwitcher = (theme) => {
  if (theme) { return customTheme[theme] };
  if (!theme) { return DefaultTheme };
}

export default themeSwitcher;
