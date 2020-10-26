import {Dimensions, StyleSheet} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width,
    height,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace(),
  },
});
