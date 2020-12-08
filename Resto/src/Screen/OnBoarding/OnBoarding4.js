import React from 'react';
import {View, Text, Image} from 'react-native';
import Buttons from '../../reusable/Buttons/Buttons';
import styles from './OnBoardingStyle';

export default function OnBoarding4() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/4.jpeg')}
        style={styles.image4}
      />
      <Text style={styles.search}>Fast shipping</Text>
      <Text style={styles.text}>Set your location to start exploring</Text>
      <Text style={styles.text}>restaurants around you</Text>
      <View style={styles.container2}>
        <Buttons text={'Log in'} bgColor={'#FFD243'} color={'#fff'} />
      </View>
    </View>
  );
}
