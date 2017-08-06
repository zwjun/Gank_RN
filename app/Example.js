/*
 * @Author: JUN 
 * @Date: 2017-07-27 17:41:34 
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import {connect} from 'react-redux';
import * as gankData from './actions/gankData';
import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  componentDidMount() {
    // this.props.dispatch(gankData.requestGetNews())
    //   .then((data) => {
    //     console.log('====================================');
    //     console.log('example', data);
    //     console.log('====================================');
    //   })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Icon name="ios-book" color="#4F8EF7" />
        <Image
          source={require('./images/weibo.png')}
          style={{}}
        />
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="SettingScreen"
        />
      </View>
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

const mapStateToProps = (state) => ({
   news: state.gankData.news,
   type: state.gankData.type
});

export default connect(mapStateToProps)(App);