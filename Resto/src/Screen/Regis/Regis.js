import React from 'react';
import {View, Text} from 'react-native';
import styles from './RegisStyle';
import Buttons from '../../reusable/Buttons/Buttons';
import TextBar from '../../reusable/TextBar/TextBar';
import TouchableText from '../../reusable/TouchableText/TouchableText';

export default function Regis({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome To</Text>
      <Text style={styles.text}>Resto</Text>
      <Text style={styles.text2}>Create your account</Text>
      <TextBar ph={'Username'} />
      <TextBar ph={'Email'} type={'email-address'} />
      <TextBar ph={'Password'} secure={true} />
      <View style={styles.regisBtn}>
        <Buttons color={'#fff'} text={'Sign up'} bgColor={'#FFD243'} />
      </View>
      <View style={styles.login}>
        <TouchableText
          press={() => navigation.navigate('Login')}
          text={'Log in your account'}
        />
      </View>
    </View>
  );
}
