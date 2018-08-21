import { Navigation } from 'react-native-navigation';

import Splacescreen from './Splacescreen/index';
import Login from './Login/index';
import Home from './Home/index';
import Register from './Register/index';
import LeftSlider from './LeftSlider/index';
import RightSlider from './RightSlider/index';
import ModelScreen from './ModelScreen/index';
import LightboxScreen from './LightboxScreen/index';
import Notification from './Notification/index';
import Screen1 from './Screen1/index';
import Screen2 from './Screen2/index';

export function registerScreens() {
  Navigation.registerComponent('reactnativenavigationdemo.Splacescreen', () => Splacescreen);
  Navigation.registerComponent('reactnativenavigationdemo.Login', () => Login);
  Navigation.registerComponent('reactnativenavigationdemo.Home', () => Home);
  Navigation.registerComponent('reactnativenavigationdemo.Register', () => Register);
  Navigation.registerComponent('reactnativenavigationdemo.LeftSlider', () => LeftSlider);
  Navigation.registerComponent('reactnativenavigationdemo.RightSlider', () => RightSlider);
  Navigation.registerComponent('reactnativenavigationdemo.ModelScreen', () => ModelScreen);
  Navigation.registerComponent('reactnativenavigationdemo.LightboxScreen', () => LightboxScreen);
  Navigation.registerComponent('reactnativenavigationdemo.Notification', () => Notification);
  Navigation.registerComponent('reactnativenavigationdemo.Screen1', () => Screen1);
  Navigation.registerComponent('reactnativenavigationdemo.Screen2', () => Screen2);
}