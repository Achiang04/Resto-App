import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './OnBoardingStyle';

export default function OnBoarding2() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/2.jpeg')}
        style={styles.image2}
      />
      <Text style={styles.search}>Variety of food</Text>
      <Text style={styles.text}>Set your location to start exploring</Text>
      <Text style={styles.text}>restaurants around you</Text>
    </View>
  );
}
