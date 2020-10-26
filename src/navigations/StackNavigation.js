import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BOTTOM_TAB_NAVIGATOR,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  SPLASH_SCREEN,
} from './RouteName';
import SplashScreen from '../components/splash/SplashScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/register/RegisterScreen';
import BottomTab from './BottomTabNavigation';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode={'none'} initialRouteName={SPLASH_SCREEN}>
    <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
    <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
    <Stack.Screen name={BOTTOM_TAB_NAVIGATOR} component={BottomTab} />
  </Stack.Navigator>
);

export default StackNavigator;
