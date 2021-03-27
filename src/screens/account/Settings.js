import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export default function Settings({ navigation }) {
  const { colors } = useTheme();
  return (
    <View>
      <Text>Settings Screen</Text>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 15,
          marginBottom: 5,
          backgroundColor: colors.card,
        }}
        onPress={() => navigation.navigate("Appearance")}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: colors.text,
              fontSize: 18,
            }}
          >
            Appearance
          </Text>
          <AntDesign name="right" size={25} color={colors.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    // backgroundColor: theme.background
  },
  button: {
    alignItems: "center",
    // backgroundColor: colors.primary,
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  options: {},
});
