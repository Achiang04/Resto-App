import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './OnBoardingStyle';

export default function OnBoarding1() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/1.jpg')}
        style={styles.image1}
      />
      <Text style={styles.search}>Quick Search</Text>
      <Text style={styles.text}>Set your location to start exploring</Text>
      <Text style={styles.text}>restaurants around you</Text>
    </View>
  );
}