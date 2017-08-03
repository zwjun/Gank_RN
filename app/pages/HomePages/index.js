/*
 * @Author: JUN 
 * @Date: 2017-08-01 22:42:26 
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

class Home extends Component {

  componentDidMount() {
      
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
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

const mapStateToProps = (state) => ({
   
});

export default connect(mapStateToProps)(Home);