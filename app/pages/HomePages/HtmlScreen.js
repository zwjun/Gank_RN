/*
 * @Author: JUN 
 * @Date: 2017-08-06 02:10:57 
 */
import React, { Component } from 'react';
import { 
  View,
  Text,
  WebView,
  StyleSheet,
  Dimensions 
} from 'react-native';

class HtmlScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: (
        <View style={styles.navHeader}>
          <Text numberOfLines={1}>{params.navUrl}</Text>
          <Text numberOfLines={1}>{params.navTitle}</Text>
        </View>
      )
    }
  };

  constructor(props){  
    super(props);  

    this.state = {  
      navTitle: '',  
      navUrl: '' 
    }  
  }  
  
  onNavigationStateChange(navState) {
    let navTitle = Math.abs(navState.title.indexOf('http')) ? navState.title : '';
    //console.warn(JSON.stringify(navState));

    this.props.navigation.setParams({
      navTitle,  
      navUrl: navState.url
    });
  }
  render() {
    const { params, key, routeName } = this.props.navigation.state;
    //console.warn(JSON.stringify(params.item.url))
    return ( 
      <WebView
        style={styles.container}
        source={{uri: params.item.url}}
        javaScriptEnabled={true}  
        domStorageEnabled={true}  
        startInLoadingState={true}  
        scalesPageToFit={false}
        onNavigationStateChange={(navState) => this.onNavigationStateChange(navState)} 
      />
    );
  }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width
  },
  navHeader: {
    marginLeft: 15,
    marginRight: 30, 
  }
});

export default HtmlScreen;