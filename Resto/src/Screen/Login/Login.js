import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TextBar from '../../reusable/TextBar/TextBar';
import TouchableText from '../../reusable/TouchableText/TouchableText';
import styles from './LoginStyle';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Log In</Text>
      <TextBar ph={'Email'} type={'email-address'} />
      <TextBar ph={'Password'} secure={true} />
      <View style={styles.forgot}>
        <TouchableText align={'flex-end'} text={'Forgot Password'} />
      </View>
    </View>
  );
}
