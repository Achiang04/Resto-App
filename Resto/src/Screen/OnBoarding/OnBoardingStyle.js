import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'pink',
    // justifyContent: 'center',
  },
  image2: {
    width: wp(350),
    height: hp(300),
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: hp(150),
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
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
