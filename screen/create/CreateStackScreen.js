import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateScreen from "./CreateScreen";

const CreateStack = createStackNavigator();

export default function CreateStackScreen({ navigation }) {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
  );
}
