import * as React from 'react';
import { useTheme, Appbar, Switch } from 'react-native-paper';
import { PreferencesContext } from '../styles/LightDarkThemeContext';

const Header = ({ scene, navigation, previous }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

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
