import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import loginViewModel from './LoginViewModel';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import CommonStyles from '../../utils/CommonStyles';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

const {width, height} = Dimensions.get('window');

export default function LoginScreen(props) {
  const {_onPressLogin, _onPressLoginFB} = loginViewModel(props);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={_onPressLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={_onPressLoginFB}>
        <Text>Login with fb</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: moderateScale(40),
    marginTop: verticalScale(20),
    backgroundColor: '#6cadde',
    ...CommonStyles.center,
    borderRadius: moderateScale(4),
  },
});
