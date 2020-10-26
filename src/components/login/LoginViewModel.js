import {navigate} from '../../navigations';
import {BOTTOM_TAB_NAVIGATOR} from '../../navigations/RouteName';
import {LoginManager} from 'react-native-fbsdk';

const loginViewModel = (props) => {
  const _onPressLogin = () => _doLogin();

  const _doLogin = () => {
    navigate(BOTTOM_TAB_NAVIGATOR);
  };

  const _onPressLoginFb = () => {
    try {
      LoginManager.logInWithPermissions(['public_profile']).then((response) => {
        console.log('response = ', response);
        _doLogin();
      });
    } catch (error) {
      console.log('login fb error = ', error);
    }
  };

  return {_onPressLogin, _onPressLoginFb};
};

export default loginViewModel;
