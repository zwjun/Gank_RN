/*
 * @Author: JUN 
 * @Date: 2017-08-01 22:42:26 
 */
import React from 'react';
import {
  Dimensions,
  ScrollView,
  View
} from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Example from './Example';
var {height, width} = Dimensions.get('window');

const HomeNav = TabNavigator({
  MeiZi: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: '妹子',
    },
  },
  Android: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: 'Android',
    },
  },
  IOS: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: 'iOS',
    },
  },
  Front_End: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: '前端',
    },
  },
  Expand: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: '拓展资源',
    },
  },
  Video: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: '休息视频',
    },
  },
  All: {
    screen: Example,
    navigationOptions: {
      tabBarLabel: 'all',
    },
  },
}, {
  tabBarComponent:TabBarTop,  
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: true,
  lazy: true,   // 是否懒加载界面，默认一次加载所有的界面，我们最好设置为true
  initialRouteName: 'MeiZi',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    upperCaseLabel: false,
    labelStyle: { fontSize: 15 },
    tabStyle: { height: 40, paddingRight: 0, width: width / 4 },
    indicatorStyle: { backgroundColor: '#e91e63' },     // line at the bottom of the tab
    scrollEnabled: true,
  },
});

// const Home = () => (
//   <View style={{flex: 1, backgroundColor: '#fcf'}}>
//     <HomeNav />
//   </View>
// )

export default HomeNav;