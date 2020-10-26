import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import splashViewModel from './SplashViewModel';

const {width, height} = Dimensions.get('window');

export default function SplashScreen() {
  const {_checkLogin} = splashViewModel();

  useEffect(() => {
    _checkLogin().catch((error) => console.log('_checkLoginError = ', error));
  }, [_checkLogin]);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
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
});
