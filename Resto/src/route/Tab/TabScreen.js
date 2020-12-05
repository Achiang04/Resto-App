import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screen/Home/Home';
import Favourite from '../../Screen/Favourite/Favourite';
import Location from '../../Screen/Location/Location';
import Profile from '../../Screen/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'home-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Maps',
          selectedTextColor: '#FFFFFF',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'location-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Location"
        component={Location}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'heart-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Favourite"
        component={Favourite}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Ionicons
              name={'person-outline'}
              color={color}
              size={RFPercentage(3)}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
