import React from 'react';
import {CombinedDarkTheme, CombinedDefaultTheme} from './PaperNavigationMerge';


export const useThemeContext = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = () => {
    return setIsThemeDark(!isThemeDark);
  };
 
  return [theme, toggleTheme];
};
