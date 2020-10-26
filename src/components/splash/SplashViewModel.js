import AsyncStorage from '@react-native-community/async-storage';
import {BOTTOM_TAB_NAVIGATOR, LOGIN_SCREEN} from '../../navigations/RouteName';
import {navigate} from '../../navigations';

const splashViewModel = () => {
  const _goToNextPage = (routeName) => navigate(routeName);

  const _checkLogin = async () => {
    const accessToken = (await AsyncStorage.getItem('access_token')) || null;
    if (accessToken === null) {
      setTimeout(() => _goToNextPage(LOGIN_SCREEN), 2000);
    } else {
      setTimeout(() => _goToNextPage(BOTTOM_TAB_NAVIGATOR), 2000);
    }
  };

  return {_checkLogin};
};

export default splashViewModel;
