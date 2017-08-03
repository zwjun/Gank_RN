/*
 * @Author: JUN 
 * @Date: 2017-08-01 09:32:41 
 */

import actionTypes from './actionsTypes';
import ajax from '../utils/ajax';

/**
 * 获取数据
 * @param {*} news 
 */
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
export const requestGetNews = (type='福利', count=10, page=1) => {
  return (dispatch) => {
    return new Promise((resolved, rejected) => {
      ajax.get(`/${type}/${count}/${page}`)
        .then((response) => {
          if(!response.error) {
            dispatch(receiveNews(response));
            if(resolved) resolved(response.data.results);
          }
        })
        .catch(error => console.log(error))
    });
  }
}