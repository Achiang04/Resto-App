import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ButtonsStyle';

export default function Buttons(props) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: props.bgColor, borderColor: props.bgColor},
      ]}>
      <TouchableOpacity onPress={props.press}>
        <Text style={[styles.text, {color: props.color}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
