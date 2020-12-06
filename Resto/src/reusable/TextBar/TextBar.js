import React from 'react';
import {wp, hp} from '../Responsive/dimen';
import {View, Text, TextInput} from 'react-native';
import styles from './TextBarStyle';

export default function TextBar(props) {
  return (
    <View>
      <TextInput
        style={styles.inputan}
        placeholder={props.ph}
        onChangeText={props.change}
        secureTextEntry={props.secure}
        keyboardType={props.type}
        value={props.value}
      />
    </View>
  );
}
// const styles = StyleSheet.create({
//   inputan: {
//     borderBottomWidth: 1,
//     width: '90%',
//     marginTop: hp(20),
//     alignSelf: 'center',
//     padding: hp(5),
//   },
// });
