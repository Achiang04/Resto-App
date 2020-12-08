import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './OnBoardingStyle';

export default function OnBoarding3() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/3.jpeg')}
        style={styles.image2}
      />
      <Text style={styles.search}>Search for a place</Text>
      <Text style={styles.text}>Set your location to start exploring</Text>
      <Text style={styles.text}>restaurants around you</Text>
    </View>
  );
}
