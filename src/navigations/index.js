import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigation';

const navigationRef = React.createRef();

export const RootNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <StackNavigator />
  </NavigationContainer>
);

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
