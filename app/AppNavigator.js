import React from 'react';
import { 
  Button, 
  ScrollView, 
  Image,
  StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

//import Setting from './pages/SettingPages';
import Home from './pages/HomePages';
import Example from './Example';

import SettingScreen from './pages/SettingPages/SettingScreen';
import LoginScreen from './pages/SettingPages/LoginScreen';
import HotScreen from './pages/HotPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './components/SampleText';
import HtmlScreen from './pages/HomePages/HtmlScreen';

const TabNav = TabNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      tabBarLabel: '主页',
      header: null,  //影藏header
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Hot: {
    screen: HotScreen,
    path: '/hot',
    navigationOptions: {
      tabBarLabel: '热门',
      header: null,
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-flame' : 'ios-flame-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Setting: {
    screen: SettingScreen,
    path: '/setting',
    navigationOptions: {
      tabBarLabel: '设置',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
}, {
  //tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  lazy: true,   // 是否懒加载界面，默认一次加载所有的界面，我们最好设置为true
  backBehavior: 'none',  //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转  
  initialRouteName: 'Hot',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    labelStyle: { fontSize: 12, marginTop: 0 },
    iconStyle: { width: 30, height: 30 },
    tabStyle: { height: 55, padding: 0, margin: 0 },
    indicatorStyle: { height: 0 },     // line at the bottom of the tab
  },
});

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
  },
  Login: {
    screen: LoginScreen 
  },
  HtmlScreen: {
    screen: HtmlScreen
  }
}, {
  navigationOptions: {
    gesturesEnabled: true,
  },
  mode: 'card',         // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
  headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
  transitionConfig: () => ({
    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
  })
});

export default StacksOverTabs;