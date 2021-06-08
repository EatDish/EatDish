import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Appearance({ navigation }) {
  const { colors } = useTheme();
  return (
    <View>
      <Text
        style={{
          color: colors.text,
          fontSize: 18
        }}>
        Appearance Screen
      </Text>
    </View>
  );
}
