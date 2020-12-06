import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from '../Tab/TabScreen';
import Login from '../../Screen/Login/Login';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabScreen" component={TabScreen} />
    </Stack.Navigator>
  );
}
