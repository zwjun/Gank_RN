/*
 * @Author: JUN 
 * @Date: 2017-08-05 15:00:12 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  FlatList,
}from 'react-native';
// const moment = require('moment');
import moment from 'moment';

class ListView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  onPress(item, index) {
    //console.warn(item.url)
    this.props.navigation.navigate('HtmlScreen',{url: index});
    alert(JSON.stringify(item))
  }

  renderItem({item, index}) {
    //console.warn(JSON.stringify(item));
    if(item.type === '福利') {
      return (
        <View key={item._id}>
          <Image 
            style={styles.image}
            source={{uri: item.url}}
          /> 
        </View>
      )
    } else {
      return (
        <TouchableNativeFeedback key={item._id} onPress={() => this.props.onPress(item, index)}>
          <View style={styles.listItem}>
            <Text numberOfLines={2} style={styles.desc}>{item.desc}</Text>
            <View style={styles.preview}>
              {item.images ? item.images.map((url, index) => {
                return (
                  <Image 
                    key={index}
                    style={styles.previewImage}
                    source={{uri: url}}
                  /> 
                )
              }) : null}
            </View>
            <Text style={styles.listItemFooter}>{item.who}    {moment(item.createdAt).fromNow()}</Text>
          </View>
        </TouchableNativeFeedback>
      )
    }
  }

  renderSeparator() {
    return (
      <View style={styles.separator} />
    )
  }

  render() {
    return (
      <FlatList 
        style={styles.flatListStyle}
          data={this.props.data}
          renderItem={(item, index) => this.renderItem(item, index)}
          keyExtractor={(item) => item._id}
          refreshing={true}
          onEndReachedThreshold={0.01}
          ItemSeparatorComponent={() => this.renderSeparator()}
          onEndReached={this.props.onEndReached}
          ListFooterComponent={this.props.listFooter}
      />
    );
  }
}

var {height, width} = Dimensions.get('window');
var previewWidth = (width - 10 - 4*3) / 3;
const styles = StyleSheet.create({
  flatListStyle: {
    backgroundColor: '#fff'
  },
  image: {
    width: width - 10,
    height: 200,
    marginHorizontal: 5,
    marginBottom: 5
  },
  loading: {
    paddingVertical: 10
  },
  listItem: {
    padding: 10,
  },
  desc: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333'
  },
  separator: {
    height: StyleSheet.hairlineWidth * 10,
    backgroundColor: '#eee'
  },
  listItemFooter: {
    marginTop: 10,
  },
  preview: {
    flexDirection: 'row'
  },
  previewImage: {
    width: previewWidth,
    height: previewWidth,
    marginHorizontal: 2
  }
});

ListView.propTypes = {
  data: PropTypes.array.isRequired,
  onEndReached: PropTypes.func,
  listFooter: PropTypes.func,
  onPress: PropTypes.func
}

ListView.defaultProps = {
  //isLoading: true
}

export default ListView;

