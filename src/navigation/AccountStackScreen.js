import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/account/Account';
import Settings from '../screens/account/Settings';
import Appearance from '../screens/account/Appearance';

const AccountStack = createStackNavigator();

export default function AccountStackScreen({ navigation }) {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="Settings" component={Settings} />
      <AccountStack.Screen name="Appearance" component={Appearance} />
    </AccountStack.Navigator>
  );
}
