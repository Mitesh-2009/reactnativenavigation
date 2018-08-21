import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';
import { registerScreens } from './screens';
let windowWidth = Dimensions.get('window').width

registerScreens();

Navigation.startSingleScreenApp({
    screen: {
        screen: 'reactnativenavigationdemo.Splacescreen',
        title: 'Splace Screen',
    },
    drawer: {
        left: {
          screen: 'reactnativenavigationdemo.LeftSlider',
          disableOpenGesture: false,
          fixedWidth: 75
        },
        right: {
            screen: 'reactnativenavigationdemo.RightSlider', 
            disableOpenGesture: false, 
            fixedWidth: 75
          },
        disableOpenGesture: false
    },
    animationType: 'slide-down'
})