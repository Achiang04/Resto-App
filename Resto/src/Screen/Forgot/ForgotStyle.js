import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  forgot: {
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
    alignSelf: 'center',
    marginTop: hp(70),
    marginBottom: hp(7),
  },
  text: {
    alignSelf: 'center',
    marginBottom: hp(20),
  },
  submitBtn: {
    marginTop: hp(20),
  },
});

export default styles;
