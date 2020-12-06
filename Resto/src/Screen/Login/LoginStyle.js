import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loginText: {
    alignSelf: 'center',
    marginTop: hp(70),
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
    marginBottom: hp(20),
  },
  forgot: {
    marginRight: wp(20),
    marginTop: hp(10),
  },
});

export default styles;
