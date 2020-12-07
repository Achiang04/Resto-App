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
    </View>
  );
}
