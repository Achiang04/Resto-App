import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabScreen from '../Tab/TabScreen';
import Login from '../../Screen/Login/Login';
import Regis from '../../Screen/Regis/Regis';
import Verify from '../../Screen/Verify/Verify';
import Forgot from '../../Screen/Forgot/Forgot';
import OnBoarding1 from '../../Screen/OnBoarding/OnBoarding1';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="Regis" component={Regis} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="TabScreen" component={TabScreen} />
    </Stack.Navigator>
  );
}
