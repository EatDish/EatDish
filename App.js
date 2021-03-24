import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { HomeStackScreen, CreateStackScreen, ExploreStackScreen } from "./src/navigation/index.js";
import themeSwitcher from "./src/theme.js";

const Tab = createBottomTabNavigator();

export default function App() {
  let theme = themeSwitcher("dark");

  return (
    <NavigationContainer style={styles.container} theme={theme}>
      <StatusBar
        color='white'
      />
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
              <MaterialCommunityIcons
                name="telescope"
                size={30}
                color={e.focused ? theme.colors.primary : theme.colors.text}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateStackScreen}
          options={{
            tabBarIcon: (e) => (
              <MaterialCommunityIcons
                name="chef-hat"
                size={30}
                color={e.focused ? theme.colors.primary : theme.colors.text}
              />
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
