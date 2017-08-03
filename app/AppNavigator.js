import React from 'react';
import { 
  Button, 
  ScrollView, 
  Image,
  StyleSheet
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Setting from './pages/SettingPages';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SampleText from './components/SampleText';

const AppNavigator = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  Setting: {
    screen: Setting,
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
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  lazy: true,   // 是否懒加载界面，默认一次加载所有的界面，我们最好设置为true
  initialRouteName: 'Setting',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showIcon: true,
    labelStyle: { fontSize: 12, marginTop: 0 },
    iconStyle: { width: 30, height: 30 },
    tabStyle: { height: 55, padding: 0, margin: 0 },
    indicatorStyle: { height: 0 },     // line at the bottom of the tab
  },
});

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default AppNavigator;