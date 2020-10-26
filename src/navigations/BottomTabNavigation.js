import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ACCOUNT_SCREEN, HOME_SCREEN, NOTIFICATION_SCREEN} from './RouteName';
import HomeScreen from '../components/home/HomeScreen';
import AccountScreen from '../components/account/AccountScreen';
import NotificationScreen from '../components/notification/NotificationScreen';
import I18n from '../i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={HOME_SCREEN}
      component={HomeScreen}
      options={{
        tabBarLabel: I18n.t('bottom_tab.home_screen'),
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={ACCOUNT_SCREEN}
      component={AccountScreen}
      options={{
        tabBarLabel: I18n.t('bottom_tab.account_screen'),
        tabBarIcon: ({color, size}) => (
          <Icon name="account-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={NOTIFICATION_SCREEN}
      component={NotificationScreen}
      options={{
        tabBarLabel: I18n.t('bottom_tab.notification_screen'),
        tabBarIcon: ({color, size}) => (
          <Icon name="bell" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTab;
