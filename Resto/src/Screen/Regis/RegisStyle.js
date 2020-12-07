import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  WelcomeText: {
    alignSelf: 'center',
    marginTop: hp(70),
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
  },
  text2: {
    alignSelf: 'center',
    opacity: 0.7,
  },
  regisBtn: {
    marginTop: hp(20),
  },
  login: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: hp(20),
    alignSelf: 'center',
  },
});

export default styles;
