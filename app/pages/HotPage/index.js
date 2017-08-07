/*
 * @Author: JUN 
 * @Date: 2017-08-05 15:27:24 
 */

import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  ActivityIndicator
 } from 'react-native';
import {connect} from 'react-redux';

import * as gankData from '../../actions/gankData';
import ListView from '../../components/ListView';

 class Hot extends Component {
   constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      type: '福利',
      count: 10,
      page: 1,
    };
  }

  // componentDidMount() {
  //   const {type, count, page} = this.state;
  //   this.props.dispatch(gankData.requestGetGankIamge(type, count, page))
  //     .then(() => {
  //       this.setState({
  //         isLoading: false
  //       })
  //     })
  // }

  // onEndReached() {
  //   this.setState({ isLoading: true });
  // }

  onEndReached() {
    this.setState((prevState, props) => ({ 
      isLoading: true,
      page: ++prevState.page
    }));

    const { type, count, page} = this.state;
    this.props.dispatch(gankData.requestGetGankIamge(type, count, page))
      .then(() => {
        this.setState({ isLoading: false })
      })
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
          data={this.props.images}
          onEndReached={() => this.onEndReached()}
          listFooter={() => this.listFooter()}
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
   images: state.gankData.images,
   type: state.gankData.type
});

export default connect(mapStateToProps)(Hot);