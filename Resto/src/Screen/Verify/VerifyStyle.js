import {StyleSheet} from 'react-native';
import {wp, hp} from '../../reusable/Responsive/dimen';
import {RFPercentage} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verify: {
    fontWeight: 'bold',
    fontSize: RFPercentage(3),
    alignSelf: 'center',
    marginTop: hp(70),
  },
  text: {
    alignSelf: 'center',
    marginBottom: hp(50),
  },
  root: {padding: hp(20), minHeight: hp(300)},
  title: {textAlign: 'center', fontSize: RFPercentage(4)},
  codeFieldRoot: {
    marginTop: hp(20),
    width: wp(280),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: wp(60),
    height: hp(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: RFPercentage(5),
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  verifyBtn: {
    marginTop: hp(20),
  },
});

export default styles;
