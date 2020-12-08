// import React from 'react';
// import {View, Text, Alert} from 'react-native';
// import AppIntro from 'react-native-app-intro';

// export default function OnBoarding() {
//   const onSkipBtnHandle = (index) => {
//     Alert.alert('Skip');
//     console.log(index);
//   };
//   const doneBtnHandle = () => {
//     Alert.alert('Done');
//   };
//   const nextBtnHandle = (index) => {
//     Alert.alert('Next');
//     console.log(index);
//   };
//   const onSlideChangeHandle = (index, total) => {
//     console.log(index, total);
//   };
//   const pageArray = [
//     {
//       title: 'Page 1',
//       description: 'Description 1',
//       img: '../../assets/image/1.jpg',
//       imgStyle: {
//         height: 80 * 2.5,
//         width: 109 * 2.5,
//       },
//       backgroundColor: '#fa931d',
//       fontColor: '#fff',
//       level: 10,
//     },
//     {
//       title: 'Page 2',
//       description: 'Description 2',
//       img: require('../../assets/image/2.jpeg'),
//       imgStyle: {
//         height: 93 * 2.5,
//         width: 103 * 2.5,
//       },
//       backgroundColor: '#a4b602',
//       fontColor: '#fff',
//       level: 10,
//     },
//   ];
//   return (
//     <View>
//       <Text>intro</Text>
//       <AppIntro
//         onNextBtnClick={nextBtnHandle}
//         onDoneBtnClick={doneBtnHandle}
//         onSkipBtnClick={onSkipBtnHandle}
//         onSlideChange={onSlideChangeHandle}
//         pageArray={pageArray}
//       />
//     </View>
//   );
// }
