import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import * as RNLocalize from 'react-native-localize';
import {BASE_URL, showUrl} from '../../api/Api';

const {width, height} = Dimensions.get('window');

export default function HomeScreen() {
  console.log(RNLocalize.getLocales());
  console.log(showUrl());
  return (
    <View style={styles.container}>
      <Text>{'base url = ' + BASE_URL}</Text>
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
