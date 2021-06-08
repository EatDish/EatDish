import React from 'react';
import {CombinedDarkTheme, CombinedDefaultTheme} from './PaperNavigationMerge';


export const useThemeContext = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = () => {
    return setIsThemeDark(!isThemeDark);
  };

  const preferences = {toggleTheme, isThemeDark}
 
  return [theme, preferences];
};
