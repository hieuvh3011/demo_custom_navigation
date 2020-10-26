import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text>NotificationScreen</Text>
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
