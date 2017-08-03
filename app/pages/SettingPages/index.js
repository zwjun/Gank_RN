/*
 * @Author: JUN 
 * @Date: 2017-08-01 22:42:26 
 */

import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import SettingScreen from './SettingScreen';
import LoginScreen from './LoginScreen';

const SettingRouter = StackNavigator({
  Setting: { 
    screen: SettingScreen 
  }, 
  Login: {
    screen: LoginScreen 
  }
}, {
  navigationOptions: {
    gesturesEnabled: true,
    
  },
  mode: 'card',         // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  transitionConfig: () => ({
    screenInterpolator:CardStackStyleInterpolator.forHorizontal,
  })
});

export default SettingRouter;