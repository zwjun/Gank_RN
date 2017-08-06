/*
 * @Author: JUN 
 * @Date: 2017-08-05 15:27:24 
 */

import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ActivityIndicator,
 } from 'react-native';
import {connect} from 'react-redux';

import * as gankData from '../../actions/gankData';
import ListView from '../../components/ListView';
//this.props.navigation.navigate('Mine',{info:'传值过去'});
class CommonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      type: '福利',
      count: 10,
      page: 1,
      listData: [],
    };
  }

  componentWillMount() {
    const state = this.props.navigation.state;
    let routeType = null;
    if(state.routeName === 'MeiZi') {
      routeType = '福利'
    }
    if(state.routeName === 'Android') {
      routeType = 'Android'
    }
    if(state.routeName === 'IOS') {
      routeType = 'iOS'
    }
    if(state.routeName === 'Front_End') {
      routeType = '前端'
    }
    if(state.routeName === 'Expand') {
      routeType = '拓展资源'
    }
    if(state.routeName === 'Video') {
      routeType = '休息视频'
    }
    if(state.routeName === 'All') {
      routeType = 'all'
    }
    this.setState({ type: routeType})
  }

  componentDidMount() {
    const { type, count, page} = this.state;
    //console.warn(type);
    this.props.dispatch(gankData.requestGetGankData(type, count, page))
      .then((data) => {
        //console.warn(JSON.stringify(data))
        this.setState({
          isLoading: false,
          listData: data
        })
      })
  }

  onPress(item, index) {
    //console.warn(JSON.stringify(item));
    this.props.navigation.navigate('HtmlScreen', {item: item});
  }

  onEndReached() {
    this.setState({ isLoading: true })
  }

  listFooter() {
    if(this.state.isLoading) {
      return (
        <ActivityIndicator 
          color="#e91e63" 
          size="large"
          style={styles.loading}
        />
      )
    } else return null
  }

   render() {
     return (
        <ListView 
          data={this.state.listData}
          onEndReached={() => this.onEndReached()}
          listFooter={() => this.listFooter()}
          onPress={(item, index) => this.onPress(item, index)}
          {...this.props}
        />
     );
   }
 }
 
 const styles = StyleSheet.create({
  loading: {
    paddingVertical: 10
  }
});

 const mapStateToProps = (state) => ({
   news: state.gankData.news,
   type: state.gankData.type
});

export default connect(mapStateToProps)(CommonScreen);