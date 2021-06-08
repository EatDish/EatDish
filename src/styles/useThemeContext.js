import React from 'react';
import {CombinedDarkTheme, CombinedDefaultTheme} from './PaperNavigationMerge';


export const useThemeContext = () => {
  const [isThemeDark, setIsThemeDark] = React.useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => setIsThemeDark(isThemeDark => !isThemeDark)
  ,[isThemeDark]);

  const preferences = React.useMemo(() => ({toggleTheme, isThemeDark}),
    [toggleTheme, isThemeDark]
  );
 
  return [theme, preferences];
};
