import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image1: {
    width: wp(300),
    height: hp(300),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default styles;
