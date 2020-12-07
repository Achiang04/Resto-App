import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Buttons from '../../reusable/Buttons/Buttons';
import TextBar from '../../reusable/TextBar/TextBar';
import TouchableText from '../../reusable/TouchableText/TouchableText';
import styles from './LoginStyle';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Log In</Text>
      <TextBar ph={'Email'} type={'email-address'} />
      <TextBar ph={'Password'} secure={true} />
      <View style={styles.forgot}>
        <TouchableText text={'Forgot Password'} />
      </View>
      <Buttons color={'#fff'} text={'Login'} bgColor={'#FFD243'} />
      <View style={styles.signUp}>
        <TouchableText
          press={() => navigation.navigate('Regis')}
          text={'Sign up an account'}
        />
      </View>
    </View>
  );
}
