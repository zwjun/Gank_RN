/*
 * @Author: JUN 
 * @Date: 2017-08-02 14:12:44 
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
import Icon from 'react-native-vector-icons/Ionicons';

class LoginScreen extends Component {

  static navigationOptions = {
    title: 'Login',
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Setting')}
          title="LoginScreen"
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
  icon: {
    width: 26,
    height: 26,
  },
});

export default LoginScreen;