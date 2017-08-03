/*
 * @Author: JUN 
 * @Date: 2017-08-01 09:25:57 
 */
import actionTypes from '../actions/actionsTypes';
const initialState = {
  news: [],
  type: ''
}

const gankNews = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case actionTypes.GANK_RECEIVE_NEWS:
      console.log('====================================');
      console.log('news', payload);
      console.log('====================================');
      return Object.assign({}, state, {
        news: payload.results
      });
    
    default:
      return state
  }
}

export default gankNews;