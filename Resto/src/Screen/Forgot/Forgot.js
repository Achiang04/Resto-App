import React from 'react';
import {View, Text} from 'react-native';
import Buttons from '../../reusable/Buttons/Buttons';
import TextBar from '../../reusable/TextBar/TextBar';
import styles from './ForgotStyle';

export default function Forgot() {
  return (
    <View style={styles.container}>
      <Text style={styles.forgot}>Forgot Password ?</Text>
      <Text style={styles.text}>Please enter your email</Text>
      <TextBar ph={'Email'} />
      <View style={styles.submitBtn}>
        <Buttons text={'Submit'} bgColor={'#FFD243'} color={'#fff'} />
      </View>
    </View>
  );
}
