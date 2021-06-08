import React, { useRef } from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';
import { PreferencesContext } from '../styles/LightDarkThemeContext';

const Header = ({ scene, navigation, previous }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);
  const renders = React.useRef(0);
  console.log('Header.js -- renders.current:', renders.current++);

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme?.colors.surface
        }
      }}>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={scene.route?.name} />
      <Switch theme={theme} color="#EFD344" value={isThemeDark} onValueChange={toggleTheme} />
    </Appbar.Header>
  );
};

export default Header;
