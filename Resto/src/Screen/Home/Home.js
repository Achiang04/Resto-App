import React, {useState} from 'react';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {View, Text, StyleSheet} from 'react-native';
import TextBar from '../../reusable/TextBar/TextBar';

export default function Home() {
  return (
    <View>
      <Text style={styles.loginText}>Log In</Text>
      <TextBar ph={'Email'} type={'email-address'} />
      <TextBar ph={'Password'} secure={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    alignSelf: 'center',
    marginTop: hp(70),
    fontWeight: 'bold',
  },
});
