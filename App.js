import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import HomeStackScreen from "./screen/home/HomeStackScreen";
import ExploreScreen from "./screen/explore/ExploreScreen";
import theme from './theme.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container} theme={theme}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: (e) => (
              <FontAwesome name="home" size={30} color={e.focused ? theme.colors.primary : theme.colors.text} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
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
