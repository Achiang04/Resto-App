import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  image1: {
    width: wp(300),
    height: hp(300),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: hp(150),
  },
  image2: {
    width: wp(350),
    height: hp(300),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: hp(150),
  },
  image4: {
    width: wp(350),
    height: hp(300),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: hp(120),
  },
  search: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
    marginBottom: hp(15),
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  container2: {
    marginTop: hp(50),
  },
});

export default styles;
