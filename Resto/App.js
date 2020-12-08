import React from 'react';
import StackScreen from './src/route/Stack/StackScreen';
import {NavigationContainer} from '@react-navigation/native';
console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
