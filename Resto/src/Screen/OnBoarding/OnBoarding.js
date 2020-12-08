import React from 'react';
import {View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './OnBoardingStyle';
import {RFPercentage} from 'react-native-responsive-fontsize';

const slides = [
  {
    key: '1',
    text: 'Quick Search',
    text2: 'Set your location to start exploring',
    text3: 'restaurants around you',
    image: require('../../assets/image/1.jpg'),
  },
  {
    key: '2',
    text: 'Variety of food',
    text2: 'Set your location to start exploring',
    text3: 'restaurants around you',
    image: require('../../assets/image/2.jpeg'),
  },
  {
    key: '3',
    text: 'Search for a place',
    text2: 'Set your location to start exploring',
    text3: 'restaurants around you',
    image: require('../../assets/image/3.jpeg'),
  },
  {
    key: '4',
    text: 'Fast shipping',
    text2: 'Set your location to start exploring',
    text3: 'restaurants around you',
    image: require('../../assets/image/4.jpeg'),
  },
];

export default function OnBoarding({navigation}) {
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image2} source={item.image} />
        <Text style={styles.search}>{item.text}</Text>
        <Text style={styles.text}>{item.text2}</Text>
        <Text style={styles.text}>{item.text3}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.replace('Login');
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="arrow-forward-circle-outline"
          color="black"
          size={RFPercentage(3)}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="checkmark-circle-outline"
          color="black"
          size={RFPercentage(3)}
        />
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="arrow-back-circle-outline"
          color="black"
          size={RFPercentage(3)}
        />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, .7)'}}
      showPrevButton={true}
      renderPrevButton={renderPrevButton}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
    />
  );
}
