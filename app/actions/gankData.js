/*
 * @Author: JUN 
 * @Date: 2017-08-01 09:32:41 
 */

import actionTypes from './actionsTypes';
import ajax from '../utils/ajax';

/**
 * 获取妹子数据
 * @param {*} image 
 */
export const receiveImage = (image) => (
  {
    type: actionTypes.GANK_RECEIVE_IMAGE,
    payload: image
  }
);

export const receiveNews = (news) => (
  {
    type: actionTypes.GANK_RECEIVE_NEWS,
    payload: news
  }
);

/**
 * 
 * @param {*} type 
 * @param {*} count 
 * @param {*} page 
 */
export const requestGetGankIamge = (type, count, page) => {
  return (dispatch) => {
    return new Promise((resolved, rejected) => {
      ajax.get(`/${type}/${count}/${page}`)
        .then((response) => {
          if(!response.data.error) {
            const data = response.data.results;
            dispatch(receiveImage(data));
            if(resolved) {
              resolved(data)
            } else rejected()
          }
        })
        .catch(error => console.log(error))
    });
  }
}

/**
 * 
 * @param {*} type 
 * @param {*} count 
 * @param {*} page 
 */
export const requestGetGankData = (type, count, page) => {
  return (dispatch) => {
    return new Promise((resolved, rejected) => {
      ajax.get(`/${type}/${count}/${page}`)
        .then((response) => {
          if(!response.data.error) {
            const data = response.data.results;
            dispatch(receiveNews(data));
            if(resolved) {
              resolved(data)
            } else rejected()
          }
        })
        .catch(error => console.log(error))
    });
  }
}