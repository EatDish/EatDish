import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import HomeStackScreen from "./screen/home/HomeStackScreen";
import CreateScreen from './screen/create/CreateScreen';
import ExploreStackScreen from "./screen/explore/ExploreStackScreen";
import themeSwitcher from "./theme.js";

const Tab = createBottomTabNavigator();

export default function App() {
  let theme = themeSwitcher("dark");

  return (
    <NavigationContainer style={styles.container} theme={theme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: (e) => (
              <FontAwesome
                name="home"
                size={30}
                color={e.focused ? theme.colors.primary : theme.colors.text}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStackScreen}
          options={{
            tabBarIcon: (e) => (
              <Entypo
                name="magnifying-glass"
                size={30}
                color={e.focused ? theme.colors.primary : theme.colors.text}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{
            tabBarIcon: (e) => (
              <Entypo name="magnifying-glass" size={30} color={e.focused ? theme.colors.primary : theme.colors.text} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
