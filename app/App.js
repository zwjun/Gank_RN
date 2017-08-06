/*
 * @Author: JUN 
 * @Date: 2017-07-27 17:41:34 
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppNavigator from './AppNavigator';
import Test from './test';
import 'moment/locale/zh-cn'; //moment语言全局设置

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});