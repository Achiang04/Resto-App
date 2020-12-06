import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TouchableTextStyle';

export default function TouchableText(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.press}>
        <Text style={[styles.text, {alignSelf: props.align}]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
